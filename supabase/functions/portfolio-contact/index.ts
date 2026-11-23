// portfolio-contact — secure intake for the portfolio's "Connection Studio" composer.
// Server-side validation, honeypot, dual-window rate limiting, duplicate detection.
// Messages land in public.portfolio_contact_messages (RLS enabled, service-role only).
// Resend accepts mail for delivery; this does not guarantee inbox placement or that it was read.
// Requires RESEND_API_KEY and RESEND_FROM_EMAIL (a verified sender) in Supabase secrets.
//
// Deployed to the `portfolio-web` Supabase project (ref bvamvnimijwjihjyffas).
// Redeploy after edits:  supabase functions deploy portfolio-contact --project-ref bvamvnimijwjihjyffas

const SUPABASE_URL = Deno.env.get('SUPABASE_URL') || '';
const SERVICE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';
const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY') || '';
const RESEND_FROM_EMAIL = Deno.env.get('RESEND_FROM_EMAIL') || '';
const CONTACT_INBOX = 'messaymohammed@gmail.com';

const BURST_LIMIT = 2, BURST_WINDOW_MIN = 10;   // max 2 messages / 10 min
const DAY_LIMIT = 6, DAY_WINDOW_MIN = 60 * 24;  // max 6 messages / day
const DUP_WINDOW_MIN = 10;

const TOPICS = ['project', 'opportunity', 'question', 'other'];
const SCOPES = ['web-app', 'mobile-app', 'full-product', 'not-sure'];
const TIMELINES = ['asap', 'this-quarter', 'exploring', 'flexible'];

function cors(extra: Record<string, string> = {}) {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'content-type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    ...extra,
  };
}

function json(status: number, body: unknown) {
  return new Response(JSON.stringify(body), {
    status,
    headers: cors({ 'Content-Type': 'application/json' }),
  });
}

async function sha256(text: string): Promise<string> {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

async function rest(path: string, init: RequestInit = {}): Promise<Response> {
  return fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    ...init,
    headers: {
      apikey: SERVICE_KEY,
      Authorization: `Bearer ${SERVICE_KEY}`,
      'Content-Type': 'application/json',
      ...(init.headers || {}),
    },
  });
}

async function countWhere(table: string, query: string): Promise<number> {
  const r = await rest(`${table}?${query}&select=id`, { headers: { Prefer: 'count=exact' } });
  const cr = r.headers.get('content-range');
  if (!r.ok || !cr) throw new Error('rate_check_failed');
  return parseInt((cr.split('/')[1] || '0'), 10) || 0;
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors() });
  if (req.method !== 'POST') return json(405, { error: 'method_not_allowed' });

  let b: any;
  try { b = await req.json(); } catch { return json(400, { error: 'bad_json' }); }

  // Honeypot: real humans never see the field; bots fill it. Pretend success, store nothing.
  if (typeof b?.website === 'string' && b.website.trim().length > 0) {
    return json(200, { ok: true });
  }

  // --- validation (server-side, mirrors the client) ---
  const name = String(b?.name || '').trim();
  const email = String(b?.email || '').trim();
  const topic = String(b?.topic || '').trim();
  const scope = String(b?.scope || '').trim();
  const timeline = String(b?.timeline || '').trim();
  const links = String(b?.links || '').trim();
  const channel = String(b?.channel || 'composer').trim();
  const message = String(b?.message || '').trim();

  const fields: Record<string, string> = {};
  if (name.length < 2 || name.length > 80) fields.name = 'Please enter your name (2–80 characters).';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || email.length > 254) fields.email = 'Please enter a valid reply email address.';
  if (!TOPICS.includes(topic)) fields.topic = 'Please choose a conversation type.';
  if (topic === 'project') {
    if (scope && !SCOPES.includes(scope)) fields.scope = 'Unknown project scope.';
    if (timeline && !TIMELINES.includes(timeline)) fields.timeline = 'Unknown timeline.';
  }
  if (links.length > 300) fields.links = 'Links must stay under 300 characters.';
  if (message.length < 10 || message.length > 4000) fields.message = 'Message should be 10–4000 characters.';
  if (Object.keys(fields).length) return json(422, { error: 'validation', fields });

  // Never claim success or store a message that cannot be emailed.
  if (!RESEND_API_KEY || !RESEND_FROM_EMAIL) return json(503, { error: 'delivery_not_configured' });

  // --- rate limiting (hashed IP) ---
  const ip = (req.headers.get('x-forwarded-for') || 'unknown').split(',')[0].trim();
  const key = await sha256(`contact|${ip}|portfolio-v1`);
  const burstSince = new Date(Date.now() - BURST_WINDOW_MIN * 60_000).toISOString();
  const daySince = new Date(Date.now() - DAY_WINDOW_MIN * 60_000).toISOString();
  try {
  const burst = await countWhere('portfolio_rate_events',
    `kind=eq.contact&key=eq.${encodeURIComponent(key)}&created_at=gte.${encodeURIComponent(burstSince)}`);
  if (burst >= BURST_LIMIT) return json(429, { error: 'rate_limited', hint: 'Too many messages in a short window. Please wait a few minutes and retry.' });
  const dayCount = await countWhere('portfolio_rate_events',
    `kind=eq.contact&key=eq.${encodeURIComponent(key)}&created_at=gte.${encodeURIComponent(daySince)}`);
  if (dayCount >= DAY_LIMIT) return json(429, { error: 'rate_limited', hint: 'Daily message limit reached. Email works too: messaymohammed@gmail.com.' });

  // --- duplicate-submission handling ---
  const contentHash = await sha256(`${email.toLowerCase()}|${message.replace(/\s+/g, ' ')}`);
  const dupSince = new Date(Date.now() - DUP_WINDOW_MIN * 60_000).toISOString();
  const dupes = await countWhere('portfolio_contact_messages',
    `content_hash=eq.${encodeURIComponent(contentHash)}&created_at=gte.${encodeURIComponent(dupSince)}`);
  if (dupes > 0) return json(409, { error: 'duplicate' });

  // --- store ---
  const ua = (req.headers.get('user-agent') || '').slice(0, 300);
  const insert = await rest('portfolio_contact_messages', {
    method: 'POST',
    headers: { Prefer: 'return=representation' },
    body: JSON.stringify({
      name, email, topic,
      scope: topic === 'project' ? (scope || null) : null,
      timeline: topic === 'project' ? (timeline || null) : null,
      links: links || null,
      channel, message,
      ip_hash: key, content_hash: contentHash, user_agent: ua,
    }),
  });
  if (!insert.ok) return json(500, { error: 'store_failed' });
  const rows = await insert.json().catch(() => [] as any[]);
  const id = Array.isArray(rows) && rows[0]?.id ? rows[0].id : null;

  if (!id) return json(500, { error: 'store_failed' });
  const logged = await rest('portfolio_rate_events', { method: 'POST', body: JSON.stringify({ kind: 'contact', key }) }).catch(() => null);
  if (!logged || !logged.ok) {
    await rest(`portfolio_contact_messages?id=eq.${encodeURIComponent(id)}`, { method: 'DELETE' }).catch(() => undefined);
    return json(503, { error: 'contact_service_unavailable' });
  }

  // Plain text avoids HTML injection; the visitor's email is reply-to, never the sender.
  const text = [
    `From: ${name} <${email}>`, `Topic: ${topic}`,
    ...(topic === 'project' ? [`Scope: ${scope || 'not provided'}`, `Timeline: ${timeline || 'not provided'}`] : []),
    ...(links ? [`Links: ${links}`] : []), '', message,
  ].join('\n');
  let delivery: Response;
  try {
    delivery = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json', 'Idempotency-Key': `portfolio-contact/${id}` },
      body: JSON.stringify({ from: RESEND_FROM_EMAIL, to: [CONTACT_INBOX], reply_to: email, subject: `Portfolio message: ${topic}`, text }),
      signal: AbortSignal.timeout(15_000),
    });
  } catch (_) {
    // A timeout could occur after the provider accepted the message. Keep the record
    // so a retry doesn't silently send a second copy, and report the uncertainty.
    return json(504, { error: 'delivery_unconfirmed' });
  }
  if (delivery.status >= 500) return json(504, { error: 'delivery_unconfirmed' });
  if (!delivery.ok) {
    // Provider rejection: remove the reservation so a corrected retry is possible.
    await rest(`portfolio_contact_messages?id=eq.${encodeURIComponent(id)}`, { method: 'DELETE' }).catch(() => undefined);
    return json(502, { error: 'delivery_rejected' });
  }
  return json(201, { ok: true, delivery: 'accepted' });
  } catch (_) {
    return json(503, { error: 'contact_service_unavailable' });
  }
});
