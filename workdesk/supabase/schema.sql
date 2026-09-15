-- Sabuj Computers Smart Work Desk
-- Run this in Supabase SQL Editor after creating/selecting the project.
create extension if not exists pgcrypto;

create table if not exists public.workdesk_items (
  id uuid primary key default gen_random_uuid(),
  item_type text not null check (item_type in ('task','prompt','note','customer','due','template')),
  data jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists workdesk_items_type_idx on public.workdesk_items(item_type);
create index if not exists workdesk_items_updated_idx on public.workdesk_items(updated_at desc);

alter table public.workdesk_items enable row level security;

-- This first version is designed for a private single-owner work desk.
-- Keep the table inaccessible anonymously unless you intentionally add authentication.
-- The browser app should be used with a Supabase publishable/anon key only after
-- you add an authenticated-user policy appropriate for your account.
-- Example policy pattern (enable only when Supabase Auth is configured):
-- create policy "authenticated workdesk access" on public.workdesk_items
--   for all to authenticated using (true) with check (true);

create or replace function public.set_workdesk_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end; $$;

drop trigger if exists trg_workdesk_updated_at on public.workdesk_items;
create trigger trg_workdesk_updated_at
before update on public.workdesk_items
for each row execute function public.set_workdesk_updated_at();

comment on table public.workdesk_items is 'Sabuj Computers Smart Work Desk: tasks, prompts, notes, customers, dues and templates';
