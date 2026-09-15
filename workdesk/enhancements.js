/* Sabuj Computers — Smart Work Desk enhancements */
(()=>{
 const money=n=>'৳'+Number(n||0).toLocaleString('en-BD');
 const cleanPhone=p=>String(p||'').replace(/[^0-9+]/g,'');
 const waPhone=p=>{let s=cleanPhone(p);if(s.startsWith('+'))s=s.slice(1);if(s.startsWith('01'))s='88'+s;return s};
 const dueInfo=d=>{const total=Number(d.amount||0),paid=Number(d.paid||0),left=Math.max(0,total-paid);return {total,paid,left}};
 function refresh(){
   if(typeof data==='undefined')return;
   const dues=(data.dues||[]).map(x=>({...x,...dueInfo(x)})).filter(x=>x.left>0);
   const total=dues.reduce((s,x)=>s+x.left,0);
   const customers=data.customers||[];
   const today=new Date();today.setHours(0,0,0,0);
   const expired=dues.filter(x=>x.payDate && new Date(x.payDate+'T23:59:59')<today).length;
   const stat=$('e');if(stat)stat.textContent=money(total);
   const old=document.getElementById('dueExtraStats');if(old)old.remove();
   const host=document.querySelector('#dues .card');
   if(host){const box=document.createElement('div');box.id='dueExtraStats';box.className='stats';box.style.margin='0 0 10px';box.innerHTML=`<div class="stat"><b>${money(total)}</b><small>মোট বাকি</small></div><div class="stat"><b>${expired}</b><small>মেয়াদ শেষ</small></div><div class="stat"><b>${customers.length}</b><small>মোট কাস্টমার</small></div>`;host.prepend(box)}
   const list=$('ul');if(list){[...list.children].forEach(row=>{const buttons=row.querySelector('.ra');if(!buttons)return;const txt=row.textContent;const d=dues.find(x=>txt.includes(String(x.customer||'')));if(!d||!d.phone)return;const p=waPhone(d.phone),msg=encodeURIComponent(`আসসালামু আলাইকুম ${d.customer||''}, আপনার বাকি টাকা ${money(d.left)}। অনুগ্রহ করে সুবিধামতো পরিশোধ করবেন। ধন্যবাদ — সবুজ কম্পিউটার্স`);if(!buttons.querySelector('.wa')){const c=document.createElement('button');c.className='btn l wa';c.textContent='💬 WhatsApp';c.onclick=()=>window.open('https://wa.me/'+p+'?text='+msg,'_blank');buttons.appendChild(c)}if(!buttons.querySelector('.call')){const c=document.createElement('button');c.className='btn l call';c.textContent='📞 কল করুন';c.onclick=()=>location.href='tel:'+cleanPhone(d.phone);buttons.appendChild(c)}})}
 }
 function hook(){
   if(typeof window.render==='function'&&!window.__enhancedRender){const r=window.render;window.render=function(){const z=r.apply(this,arguments);setTimeout(refresh,0);return z};window.__enhancedRender=true;}
   refresh();
 }
 window.addEventListener('DOMContentLoaded',()=>setTimeout(hook,50));
 setInterval(refresh,1500);
})();
