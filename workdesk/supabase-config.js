// Sabuj Computers — Smart Work Desk
// Browser-safe publishable key only. Database RLS must remain enabled.
window.SABUJ_SUPABASE_URL='https://usbfqolkrkjugwscvulu.supabase.co';
window.SABUJ_SUPABASE_PUBLISHABLE_KEY='sb_publishable_UfkOQ5ygV_AEtNdC3Txmng_PTvk-N84';
// Load exactly one Pro integration after the page is ready. This avoids duplicate hooks/modules.
window.addEventListener('load',()=>{
  const s=document.createElement('script');
  s.src='./pro.js?v=20260915-4';
  s.onload=()=>console.info('Sabuj Work Desk Pro loaded');
  s.onerror=()=>console.error('Sabuj Work Desk Pro failed to load');
  document.body.appendChild(s);
});