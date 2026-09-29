
const KEY='nesta-cart', SAVE='nesta-saved';
const get=(k)=>JSON.parse(localStorage.getItem(k)||'[]');
const put=(k,v)=>localStorage.setItem(k,JSON.stringify(v));
function addToCart(id){
 const cart=get(KEY); const found=cart.find(x=>x.id===id);
 if(found) found.qty++; else cart.push({id,qty:1});
 put(KEY,cart); updateCounts(); alert('Added to your family kit.');
}
function toggleSave(id){
 const saved=get(SAVE); const i=saved.indexOf(id);
 if(i>=0)saved.splice(i,1);else saved.push(id);
 put(SAVE,saved); updateCounts();
}
function updateCounts(){
 const cart=get(KEY); const saved=get(SAVE);
 document.querySelectorAll('[data-cart-count]').forEach(e=>e.textContent=cart.reduce((a,b)=>a+b.qty,0));
 document.querySelectorAll('[data-save-count]').forEach(e=>e.textContent=saved.length);
}
document.addEventListener('DOMContentLoaded',updateCounts);
