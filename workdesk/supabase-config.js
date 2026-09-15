// Sabuj Computers Smart Work Desk — Supabase Cloud configuration
// Browser-safe publishable key. Keep database RLS enabled.
window.SABUJ_SUPABASE_URL='https://usbfqolkrkjugwscvulu.supabase.co';
window.SABUJ_SUPABASE_PUBLISHABLE_KEY='sb_publishable_UfkOQ5ygV_AEtNdC3Txmng_PTvk-N84';
// Load enhancement modules BEFORE window load so their boot hooks cannot be missed.
['./enhancements.js?v=4','./pro.js?v=4','./pro2.js?v=4','./pro3.js?v=4'].forEach(src=>{
  const s=document.createElement('script');
  s.src=src;
  s.async=false;
  document.head.appendChild(s);
});