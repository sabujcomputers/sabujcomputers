// Sabuj Computers Smart Work Desk — Supabase Cloud configuration
// Browser-safe publishable key. Keep database RLS enabled.
window.SABUJ_SUPABASE_URL='https://usbfqolkrkjugwscvulu.supabase.co';
window.SABUJ_SUPABASE_PUBLISHABLE_KEY='sb_publishable_UfkOQ5ygV_AEtNdC3Txmng_PTvk-N84';
// These modules load before the main inline app script, so their DOM-ready hooks are reliable.
['./enhancements.js?v=3','./pro.js?v=2','./pro2.js?v=2','./pro3.js?v=2'].forEach(src=>{
  const s=document.createElement('script'); s.src=src; s.async=false; document.head.appendChild(s);
});