// portfolio-chat — proxies visitor chat to OpenRouter with grounding on Messay's real CV.
// Secrets stay server-side: OPENROUTER_API_KEY is a Supabase secret, never shipped to the browser.
// Abuse protection: hashed-IP rate limiting via public.portfolio_rate_events.
//
// Deployed to the `portfolio-web` Supabase project (ref bvamvnimijwjihjyffas).
// Set the key:  supabase secrets set OPENROUTER_API_KEY=sk-or-... --project-ref bvamvnimijwjihjyffas
// Optional model override: OPENROUTER_MODEL (default below).
// Redeploy:     supabase functions deploy portfolio-chat --project-ref bvamvnimijwjihjyffas

const OPENROUTER_URL = 'https://openrouter.ai/api/v1/chat/completions';
const MODEL = Deno.env.get('OPENROUTER_MODEL') || 'meta-llama/llama-3.3-70b-instruct:free';
const SUPABASE_URL = Deno.env.get('SUPABASE_URL') || '';
const SERVICE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';

const RATE_LIMIT = 30;          // chat messages
const RATE_WINDOW_MIN = 60;     // per hour
const MAX_HISTORY = 10;         // max turns forwarded
const MAX_CHARS_PER_MSG = 1500;
const MAX_TOTAL_CHARS = 7000;

const SYSTEM_PROMPT = `You are the assistant embedded in Messay Mohammed's personal portfolio (a friendly, slightly witty two-personality: helpful host + full-stack engineer).

GROUND TRUTH about Messay (never contradict or invent beyond this):
- Name: Messay Mohammed. Role: Full-stack & mobile developer, currently expanding into AI engineering (learning phase — do not present it as established expertise).
- Location: Addis Ababa, Ethiopia. Languages: Amharic (native), English (professional).
- Availability: open to full-time roles and contract work. Contact: messaymohammed@gmail.com, phone +251 900 651 948, booking link cal.com/messay-mohammed-w47ggg, GitHub github.com/moisoi, LinkedIn linkedin.com/in/messay-seid-398000252.
- Skills: React.js / Next.js, TypeScript, Tailwind CSS, HTML5/CSS3; React Native, Expo, Telegram Mini Apps; Node.js / NestJS, Express.js, FastAPI, RESTful API design, WebSockets; PostgreSQL / MySQL, Supabase / Firebase, Redis; JWT / OAuth 2.0, RBAC, Docker, Git / GitHub / GitLab CI; UI/UX design awareness, Claude Code / AI-assisted workflows, design-motion principles, shadcn/ui.
- Projects:
  1) Student Sports Hub (P.01, Mobile / Education): React Native + Expo + Supabase mobile app for Dewel Marketing and Consultancy for grades 1-12 students and parents across Addis Ababa: live stories, match schedules, team rosters, sports updates; designed for multiple schools with a scalable database structure. Built Sep 2025 - Dec 2025.
  2) Business Forms Mini App (P.02, Web / Operations): Telegram Mini App for Meteku Teshome General Work PLC built with React + Vite, Node.js, NestJS; automates petty cash requests, purchase orders, employee attendance, with exportable business reports. Delivered Feb 2026. Replaced manual paperwork across three workflows.
  3) HerCycle (P.03, personal project, in active development since Sep 2026): premium period-tracking & wellness web app (React, TypeScript, Supabase) with a phase-aware UI, interactive Sanctuary Garden, Luna mascot companion, cycle logging, insights, bilingual Amharic/English support, gamification. Live at hercycle.pages.dev; repo github.com/moisoi/hercycle. Authentication, data persistence, and cycle predictions are still in development — say so honestly if asked.
- Experience: Operations Intern at MMCY, Addis Ababa (Jun 22 - Jul 23, 2026): technology-first operations support, workflow tracking, process documentation. Before that: contract full-stack roles at Meteku Teshome General Work PLC (Feb 2026) and Dewel Marketing and Consultancy (Sep-Dec 2025).
- Education: Bachelor of Computer Science, HILCOE School of Computer Science and Technology, Addis Ababa (Sep 2020 - Jul 2025).
- Community: YWCA Lead Unit Coordinator & Teacher (led teachers, fundraising for 100+ students); Red Cross Ethiopia blood-donation organizer.

BEHAVIOR RULES:
- Portfolio questions: answer warmly, concisely (2-5 sentences), and point to the relevant section when useful.
- Unrelated or general questions (science, code help, definitions, small talk): answer briefly and helpfully like a good general assistant, then optionally offer to return to Messay's work. This is allowed and expected — the site owner wants the assistant to be genuinely useful.
- Never invent employment, metrics, live system status, GitHub activity, or capabilities. If unsure about Messay-specific facts, say you don't have that detail and suggest emailing him.
- No medical advice for HerCycle questions; describe app features only.
- Keep responses under ~120 words unless the user asks for detail. Plain sentences, no markdown tables. Links may be written bare.`;

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

async function recentCount(kind: string, key: string, windowMin: number): Promise<number> {
  const since = new Date(Date.now() - windowMin * 60_000).toISOString();
  const r = await rest(
    `portfolio_rate_events?kind=eq.${encodeURIComponent(kind)}&key=eq.${encodeURIComponent(key)}&created_at=gte.${encodeURIComponent(since)}&select=id`,
    { headers: { Prefer: 'count=exact' } },
  );
  const cr = r.headers.get('content-range'); // e.g. "0-4/12"
  if (!r.ok || !cr) return 0;
  return parseInt((cr.split('/')[1] || '0'), 10) || 0;
}

async function logEvent(kind: string, key: string) {
  try {
    await rest('portfolio_rate_events', { method: 'POST', body: JSON.stringify({ kind, key }) });
  } catch (_) { /* logging must never break the user flow */ }
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors() });
  if (req.method !== 'POST') return json(405, { error: 'method_not_allowed' });

  let payload: { messages?: unknown };
  try { payload = await req.json(); } catch { return json(400, { error: 'bad_json' }); }

  // Sanitize + bound the conversation we forward upstream.
  const raw = Array.isArray(payload?.messages) ? payload.messages : [];
  const messages = raw
    .filter((m: any) => m && typeof m.content === 'string' && (m.role === 'user' || m.role === 'assistant'))
    .slice(-MAX_HISTORY)
    .map((m: any) => ({ role: m.role, content: m.content.slice(0, MAX_CHARS_PER_MSG) }))
    .filter((m) => m.content.trim().length > 0);
  const totalChars = messages.reduce((n, m) => n + m.content.length, 0);
  if (messages.length === 0 || messages[messages.length - 1].role !== 'user' || totalChars > MAX_TOTAL_CHARS) {
    return json(422, { error: 'validation' });
  }

  const ip = (req.headers.get('x-forwarded-for') || 'unknown').split(',')[0].trim();
  const key = await sha256(`chat|${ip}|portfolio-v1`);
  const recent = await recentCount('chat', key, RATE_WINDOW_MIN);
  if (recent >= RATE_LIMIT) return json(429, { error: 'rate_limited', retryAfterSec: RATE_WINDOW_MIN * 60 });
  await logEvent('chat', key);

  const apiKey = Deno.env.get('OPENROUTER_API_KEY');
  if (!apiKey) return json(503, { error: 'assistant_unavailable' });

  try {
    const res = await fetch(OPENROUTER_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://portfolio-web-gold-xi.vercel.app',
        'X-Title': 'Messay Mohammed Portfolio Assistant',
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...messages],
        max_tokens: 420,
        temperature: 0.6,
      }),
      signal: AbortSignal.timeout(20_000),
    });
    if (!res.ok) return json(502, { error: 'upstream', status: res.status });
    const data = await res.json();
    const reply = (data?.choices?.[0]?.message?.content || '').trim();
    if (!reply) return json(502, { error: 'empty_upstream' });
    return json(200, { reply });
  } catch (_) {
    return json(502, { error: 'upstream_unreachable' });
  }
});
