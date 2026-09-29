const products = window.NESTA_PRODUCTS || [];
const grid = document.getElementById('productGrid');
const filters = document.getElementById('filters');
const bagCount = document.getElementById('bagCount');
const bagItems = document.getElementById('bagItems');
const bagTotal = document.getElementById('bagTotal');
let activeFilter='All'; let bag=[];
function money(v){return Number(v.replace('$','')).toFixed(2)}
function renderProducts(){
 const list=activeFilter==='All'?products:products.filter(p=>p.category===activeFilter);
 grid.innerHTML=list.map(p=>`<article class="product-card"><div class="product-image"><img src="${p.image}" alt="${p.name}" loading="lazy"></div><div class="product-content"><div class="product-cat">${p.category}</div><h3 class="product-title">${p.name}</h3><p class="product-desc">${p.description}</p><div class="price">${p.price}</div><div class="product-actions"><button class="add-btn" data-add="${products.indexOf(p)}">Add to bag</button><button class="save-btn">♡ Save</button></div></div></article>`).join('');
 grid.querySelectorAll('[data-add]').forEach(b=>b.addEventListener('click',()=>addToBag(Number(b.dataset.add))));
 grid.querySelectorAll('.save-btn').forEach(b=>b.addEventListener('click',()=>{b.textContent=b.textContent.includes('Saved')?'♡ Save':'♥ Saved'}));
}
function addToBag(i){bag.push(products[i]);renderBag();openBag()}
function renderBag(){bagCount.textContent=bag.length;if(!bag.length){bagItems.innerHTML='<p class="empty">Your bag is empty.</p>';bagTotal.textContent='$0.00';return}bagItems.innerHTML=bag.map((p,i)=>`<div class="bag-row"><img src="${p.image}" alt=""><div><strong>${p.name}</strong><span>${p.price}</span></div><button class="remove" data-remove="${i}">Remove</button></div>`).join('');bagItems.querySelectorAll('[data-remove]').forEach(b=>b.addEventListener('click',()=>{bag.splice(Number(b.dataset.remove),1);renderBag()}));bagTotal.textContent='$'+bag.reduce((s,p)=>s+Number(money(p.price)),0).toFixed(2)}
filters.addEventListener('click',e=>{const b=e.target.closest('.filter');if(!b)return;activeFilter=b.dataset.filter;document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderProducts()});
const categoryMap={'Parent Bags':'PARENT BAGS','Feeding':'FEEDING','Toys & Activity':'TOYS & ACTIVITY','Bath & Care':'BATH & CARE','Home Organization':'HOME ORGANIZATION','Gifts & Sets':'GIFTS & SETS'};
document.querySelectorAll('.category-card').forEach(c=>c.addEventListener('click',()=>{const f=categoryMap[c.dataset.filter]||'All';activeFilter=f;document.querySelectorAll('.filter').forEach(x=>x.classList.toggle('active',x.dataset.filter===f));setTimeout(renderProducts,0)}));
const drawer=document.getElementById('bagDrawer'),backdrop=document.getElementById('backdrop');function openBag(){drawer.classList.add('open');backdrop.classList.add('open')}function closeBag(){drawer.classList.remove('open');backdrop.classList.remove('open')}
document.getElementById('bagBtn').addEventListener('click',openBag);document.getElementById('drawerClose').addEventListener('click',closeBag);backdrop.addEventListener('click',closeBag);document.getElementById('checkoutBtn').addEventListener('click',()=>alert('Demo storefront: contact support@nesta-family.com to continue your request.'));
const searchPanel=document.getElementById('searchPanel'),searchInput=document.getElementById('searchInput'),searchResults=document.getElementById('searchResults');document.getElementById('searchBtn').addEventListener('click',()=>{searchPanel.classList.add('open');searchInput.focus()});document.getElementById('searchClose').addEventListener('click',()=>searchPanel.classList.remove('open'));searchInput.addEventListener('input',()=>{const q=searchInput.value.toLowerCase().trim();const r=!q?[]:products.filter(p=>(p.name+' '+p.category+' '+p.description).toLowerCase().includes(q)).slice(0,8);searchResults.innerHTML=r.map(p=>`<div class="search-item"><img src="${p.image}" alt=""><div><strong>${p.name}</strong><small>${p.category} · ${p.price}</small></div></div>`).join('')||(q?'<p class="empty">No matching essentials yet.</p>':'')});
document.getElementById('newsletterForm').addEventListener('submit',e=>{e.preventDefault();alert('Thank you for joining Nesta.');e.target.reset()});renderProducts();renderBag();
