(()=>{
'use strict';
const money3=n=>'৳'+Number(n||0).toLocaleString('en-BD'),day3=()=>{const d=new Date(),z=n=>String(n).padStart(2,'0');return d.getFullYear()+'-'+z(d.getMonth()+1)+'-'+z(d.getDate())};
function dash3(){const body=document.getElementById('proDashBody');if(!body||typeof data==='undefined')return;const ym=day3().slice(0,7),col=(data.dues||[]).reduce((s,d)=>s+Number(d.paid||0),0);const old=body.querySelector('.pro-collection-stat');if(old)old.remove();const grid=body.querySelector('.progrid');if(!grid)return;const el=document.createElement('div');el.className='prostat pro-collection-stat';el.innerHTML='💳<b>'+money3(col)+'</b><small>মোট আদায়</small>';grid.insertBefore(el,grid.children[2]||null)}
window.addEventListener('DOMContentLoaded',()=>setTimeout(()=>{const old=window.render;if(typeof old==='function'&&!window.__pro3){window.render=function(){const r=old.apply(this,arguments);setTimeout(dash3,30);return r};window.__pro3=true}dash3()},450));
})();
