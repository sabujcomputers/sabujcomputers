# Sabuj Computers — Smart Work Desk

A lightweight shop work-management app for daily tasks, reusable AI prompts, notes, customers, customer dues and work templates.

## First release
- Dashboard with daily workload and total outstanding dues
- Daily tasks with priority, customer, date/time and completion
- Prompt Library with categories, favorites and one-click copy
- Quick notes with pin/priority
- Customer directory with optional phone/address
- Due ledger: customer name, amount, optional phone/address, due date, paid status
- Work Templates / checklists with one-click copy
- JSON backup/restore
- Offline-first local storage
- Supabase-ready cloud sync
- Responsive desktop/mobile UI

## Supabase setup
1. Create/select a Supabase project.
2. Open `workdesk/supabase/schema.sql` in SQL Editor and run it.
3. Open `workdesk/index.html`.
4. In Settings, enter the project URL and publishable/anon key.
5. Click **Connect & Sync**.

For a private shop tool, configure Supabase Auth and an authenticated-user RLS policy before putting the app on a public URL. Do not put a service-role key in the browser.

## Planned upgrades
- Auth + per-user data isolation
- Due payment history and partial payments
- Customer work history / job tickets
- Income & expense ledger
- Printable due receipts
- PWA install + offline queue
- Search across every module
- CSV/Excel export
- Activity log and automated backups
