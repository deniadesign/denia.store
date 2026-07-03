const sample=[
{name:'DENIA Black',price:'120000'},
];
const cart=[];
const el=document.getElementById('products');
sample.forEach(p=>{
el.innerHTML+=`<div class=card>
<img src=product-placeholder.jpg>
<h3>${p.name}</h3>
<p>Rp ${p.price}</p>
<button onclick="add('${p.name}','${p.price}')">Tambah Keranjang</button>
</div>`;
});
function add(n,p){cart.push({n,p});render();}
function render(){
document.getElementById('cart').innerHTML=
cart.map(i=>`<li>${i.n} - Rp ${i.p}</li>`).join('');
}
function checkout(){
let msg='Halo DeniaDesign, saya ingin pesan:%0A';
cart.forEach(i=>msg+=`- ${i.n} Rp ${i.p}%0A`);
window.open('https://wa.me/6283822941348?text='+msg);
}
function toggleTheme(){document.body.classList.toggle('light')}