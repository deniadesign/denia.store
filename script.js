// ==============================
// DENIADESIGN PREMIUM SCRIPT
// ==============================

// Header Effect
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){
        header.style.background = "rgba(0,0,0,.95)";
    }else{
        header.style.background = "rgba(0,0,0,.75)";
    }

});

// ==============================
// DATA PRODUK
// ==============================

const products = {
    "DENIADESIGN":130000,
    "LOYALTY":120000
};

let cart = [];

// ==============================
// TAMBAH KE KERANJANG
// ==============================

document.querySelectorAll(".card").forEach(card=>{

    const nama = card.querySelector("h3").innerText;

    const btn = document.createElement("button");

    btn.className = "btn cartBtn";
    btn.innerText = "Tambah ke Keranjang";

    card.appendChild(btn);

    btn.onclick = function(){

        cart.push({
            nama:nama,
            harga:products[nama]
        });

        updateCart();

        alert(nama + " berhasil ditambahkan.");

    }

});

// ==============================
// UPDATE KERANJANG
// ==============================

function updateCart(){

    let total = 0;

    cart.forEach(item=>{
        total += item.harga;
    });

    document.getElementById("cartCount").innerText = cart.length;

    document.getElementById("cartTotal").innerText =
    "Rp " + total.toLocaleString("id-ID");

}

// ==============================
// KOSONGKAN KERANJANG
// ==============================

function clearCart(){

    cart = [];

    updateCart();

    alert("Keranjang dikosongkan.");

}

// ==============================
// CHECKOUT WHATSAPP
// ==============================

function checkout(){

    if(cart.length===0){

        alert("Keranjang masih kosong.");

        return;

    }

    let pesan =
`Halo DeniaDesign,

Saya ingin memesan:

`;

    let total = 0;

    cart.forEach((item,index)=>{

        pesan +=
`${index+1}. ${item.nama}
Rp ${item.harga.toLocaleString("id-ID")}

`;

        total += item.harga;

    });

    pesan +=
`Total:
Rp ${total.toLocaleString("id-ID")}`;

    window.open(
`https://wa.me/6283822941348?text=${encodeURIComponent(pesan)}`,
"_blank"
    );

}

// ==============================
// ANIMASI PRODUK
// ==============================

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-10px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0)";

    });

});