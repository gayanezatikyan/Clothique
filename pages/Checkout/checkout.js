var shipping_address = document.getElementById("shipping_address");
var next_time = document.getElementById("next_time");
shipping_address.checked = true;
next_time.checked = false;

shipping_address.onclick = function () {
    next_time.checked = false;
    shipping_address.checked = true;
};

next_time.onclick = function () {
    shipping_address.checked = false;
    next_time.checked = true;
};


var Credit_card = document.getElementById("Credit_card");
var Debit_card = document.getElementById("Debit_card");
var Pay_Pal = document.getElementById("Pay_Pal");
Credit_card.checked = true;
Debit_card.checked = false;
Pay_Pal.checked = false;

Credit_card.onclick = function () {
    Credit_card.checked = true;
    Debit_card.checked = false;
    Pay_Pal.checked = false;
};

Debit_card.onclick = function () {
    Debit_card.checked = true;
    Credit_card.checked = false;
    Pay_Pal.checked = false;
};

Pay_Pal.onclick = function () {
    Pay_Pal.checked = true;
    Credit_card.checked = false;
    Debit_card.checked = false;
};

var cart_products = JSON.parse(localStorage.getItem("cart_products"));
var cart_count = document.getElementById("cart_count");
cart_count.textContent = cart_products.length;


cart_products.map((item) => {
    const productitem = document.createElement("li");
    productitem.innerHTML = `
    <img src="${item.img}">
    <h2>${item.name}</h2>
    <span>$${item.price}</span>`;
    var Cart_payment = document.getElementById("Cart_payment");
    Cart_payment.append(productitem);
});

