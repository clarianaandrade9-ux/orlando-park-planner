export const money=(v,c='USD')=>new Intl.NumberFormat('pt-BR',{style:'currency',currency:c}).format(Number(v)||0);
export const esc=v=>String(v??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
export const uid=(p='id')=>`${p}_${crypto.randomUUID()}`;
export const today=()=>new Date().toISOString().slice(0,10);
