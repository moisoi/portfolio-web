-- Portfolio backend tables (applied to the `portfolio-web` project, ref bvamvnimijwjihjyffas).
-- Stores Connection Studio messages + abuse-protection events.
-- Access: RLS enabled, no public policies — only edge functions using the service role touch these.

create table if not exists public.portfolio_contact_messages (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  topic text not null,
  scope text,
  timeline text,
  links text,
  channel text,
  message text not null,
  ip_hash text,
  content_hash text,
  user_agent text
);

create table if not exists public.portfolio_rate_events (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  kind text not null,
  key text not null
);

create index if not exists portfolio_rate_events_lookup_idx
  on public.portfolio_rate_events (kind, key, created_at desc);
create index if not exists portfolio_contact_messages_created_idx
  on public.portfolio_contact_messages (created_at desc);

alter table public.portfolio_contact_messages enable row level security;
alter table public.portfolio_rate_events enable row level security;

revoke all on public.portfolio_contact_messages from anon, authenticated;
revoke all on public.portfolio_rate_events from anon, authenticated;
