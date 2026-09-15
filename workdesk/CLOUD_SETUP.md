# Sabuj Computers Smart Work Desk — Cloud Setup

The Supabase Cloud project is configured for the Work Desk.

- Frontend config: `supabase-config.js`
- Database table: `public.workdesk_items`
- Data isolation: Supabase Row Level Security (RLS), owner-based policies
- Project: `sabuj-computers-workdesk`

## Important

Use the Supabase publishable key only in browser code. Never put a secret/service-role key in this folder or frontend.

The next frontend integration should load `supabase-config.js` before the Supabase JS client and initialize the client with the URL and publishable key.
