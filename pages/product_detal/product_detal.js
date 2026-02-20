
window.addEventListener("load", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
var detal_container = document.createElement("div");
detal_container.classList.add("detal_container");
document.querySelector("#Detal_Parent").append(detal_container);

var Product = JSON.parse(localStorage.getItem("Product")) || JSON.parse(localStorage.getItem("Shop_Product"));
console.log(Product);

const DetalImgBox = document.createElement("div");
DetalImgBox.classList.add("DetalImgBox");
const DetalImg = document.createElement("img");
DetalImg.src = `${Product.img}`;
DetalImgBox.append(DetalImg);


const Gallery_Box = document.createElement("ul");
Gallery_Box.classList.add("Gallery_Box");
Product.gallery.map((img) => {
    const GalleryImg = document.createElement("li");
    GalleryImg.innerHTML = `
<img src="${img}" loading="lazy"/>`;
    GalleryImg.onmouseover = function () {
        DetalImg.src = img
    };
    Gallery_Box.append(GalleryImg);
});

const DetalImgContainer = document.createElement("div");
DetalImgContainer.classList.add("DetalImgContainer");
DetalImgContainer.append(Gallery_Box, DetalImgBox);
detal_container.append(DetalImgContainer);

const DetalInfoBox = document.createElement("div");
DetalInfoBox.classList.add("DetalInfoBox");
detal_container.append(DetalInfoBox);
var productcount = 1;
DetalInfoBox.innerHTML = `
<h1>${Product.name}</h1>
<ul class="reiting"></ul>
<div class="ProductPrice">
<span>$${Product.productnewprice}</span>
<span><del>$${Product.productoldprice}</del></span>
</div>
<p>${Product.description}</p>
<h3>Color</h3>
<ul class="colors"></ul>
<h3>Size</h3>
<ul class="SizeBox"></ul>
<div class="ButtonBox">
<button id="MinusBtn"><i class="fa-solid fa-minus"></i></button>
<span id="ProductCount">${productcount}</span>
<button id="PlusBtn"><i class="fa-solid fa-plus"></i></button>
</div>
<div class="ButtonBox">
<button id="BuyNowBtn">BUY NOW</button>
<button class="Add_to_cart">ADD TO CART</button>
</div>
<h3>SKU: <span>${Product.sku}</span></h3>
<h3>Category: <span>${Product.category}</span></h3>
<div class="TagsContainer">
<h3>Tags:</h3>
<ul id="TagsBox"></ul>
</div>`

DetalInfoBox.querySelector(".Add_to_cart").onclick = function () {
    // Get current quantity from DOM
    const quantityElement = DetalInfoBox.querySelector("#ProductCount");
    if (!quantityElement) {
        alert("Error: Could not find quantity element");
        return;
    }
    const currentQuantity = parseInt(quantityElement.textContent);
    
    // Get existing cart or create new
    var existingCart = localStorage.getItem("cart_products");
    var cart_products = existingCart ? JSON.parse(existingCart) : [];
    
    // Create product object with quantity
    var newProduct = {
        img: Product.img,
        name: Product.name,
        price: Product.productnewprice,
        quantity: currentQuantity,
        sku: Product.sku
    };
    
    // Check if product already exists in cart
    var existingProductIndex = cart_products.findIndex(item => item.sku === Product.sku);
    
    if (existingProductIndex !== -1) {
        // If exists, add to quantity
        cart_products[existingProductIndex].quantity += currentQuantity;
    } else {
        // If new, push to cart
        cart_products.push(newProduct);
    }
    
    localStorage.setItem("cart_products", JSON.stringify(cart_products));
    alert("Added to cart!");
    location.href = "../Cart/index.html";
};

Product.tags.map((item) => {
    const tagsItem = document.createElement("li");
    tagsItem.innerHTML = item;
    DetalInfoBox.querySelector("#TagsBox").append(tagsItem);
});

Product.raiting.map((item) => {
    const reitingItem = document.createElement("li");
    reitingItem.innerHTML = item;
    DetalInfoBox.querySelector(".reiting").append(reitingItem);
});

Product.colors.map((item) => {
    const colorItem = document.createElement("li");
    colorItem.innerHTML = item;
    DetalInfoBox.querySelector(".colors").append(colorItem);
});

var colorsItems = DetalInfoBox.querySelectorAll(".colors li");
colorsItems[0].classList.add("active");

colorsItems.forEach((item) => {
    item.onclick = function () {
        colorsItems.forEach((el) => el.classList.remove("active"));
        item.classList.add("active");
    };
});

Product.sizes.map((item) => {
    const sizeItem = document.createElement("li");
    sizeItem.innerHTML = item;
    DetalInfoBox.querySelector(".SizeBox").append(sizeItem);
});

var sizesItems = DetalInfoBox.querySelectorAll(".SizeBox li");
sizesItems[0].classList.add("active");

sizesItems.forEach((item) => {
    item.onclick = function () {
        sizesItems.forEach((el) => el.classList.remove("active"));
        item.classList.add("active");
    };
});

DetalInfoBox.querySelector("#PlusBtn").addEventListener("click", () => {
    productcount++;
    DetalInfoBox.querySelector("#ProductCount").textContent =
        productcount;
});

DetalInfoBox.querySelector("#MinusBtn").addEventListener("click", () => {
    if (productcount > 1) {
        productcount--;
        DetalInfoBox.querySelector("#ProductCount").textContent =
            productcount;
    }
});

var Product_Description_Buttons = document.querySelectorAll(".Product_Description_Buttons button");
Product_Description_Buttons[0].classList.add("active");

Product_Description_Buttons.forEach((button) => {
    button.onclick = function () {
        Product_Description_Buttons.forEach((button) => button.classList.remove("active"));
        button.classList.add("active");
    }
});

const DescriptionBtn = document.getElementById("Description");
const Additional_InformationBtn = document.getElementById("Additional_Information");
const Customer_ReviewsBtn = document.getElementById("Customer_Reviews");

Additional_InformationBtn.addEventListener("click", () => {
    document.querySelector(".Product_Description_Box").style.display = "none";
    document.querySelector(".Additional_Information").style.display = "flex";
    document.querySelector(".Reviews_Canteiner").style.display = "none";
    document.querySelector(".Add_a_review").style.display = "none";
});

DescriptionBtn.addEventListener("click", () => {
    document.querySelector(".Additional_Information").style.display = "none";
    document.querySelector(".Product_Description_Box").style.display = "flex";
    document.querySelector(".Reviews_Canteiner").style.display = "none";
    document.querySelector(".Add_a_review").style.display = "none";
});

Customer_ReviewsBtn.addEventListener("click", () => {
    document.querySelector(".Reviews_Canteiner").style.display = "flex";
    document.querySelector(".Add_a_review").style.display = "flex";
    document.querySelector(".Product_Description_Box").style.display = "none";
    document.querySelector(".Additional_Information").style.display = "none";
});


class Popular_product {
    constructor(img, name, productoldprice, productnewprice, sale, raiting,
        description, colors, sizes, sku, category, tags, fulldescription, gallery) {
        this.img = img;
        this.name = name;
        this.productoldprice = productoldprice;
        this.productnewprice = productnewprice;
        this.sale = sale;
        this.raiting = raiting;
        this.description = description;
        this.colors = colors;
        this.sizes = sizes;
        this.sku = sku;
        this.category = category;
        this.tags = tags;
        this.fulldescription = fulldescription;
        this.gallery = gallery;
    }
    render = () => {
        const popular_product = document.createElement("article");
        popular_product.setAttribute("class", "Popular_product");
        popular_product.innerHTML = `
        <img src="${this.img}">
        <h4>${this.name}</h4>
        <div>
        <span><del>$${this.productoldprice}</del></span>
        <span>$${this.productnewprice}</span>
        <span>${this.sale}% OFF</span>
        </div>
        <div id="Buttons">
        <button class="Add_to_cart"><i class="fa-solid fa-cart-shopping"></i>
        Add to card</button>
        <button id="Like_Btn"><i class="fa-solid fa-heart"></i></button>
        </div>`;
        document.querySelector(".Popular_box").append(popular_product);
        
        popular_product.querySelector(".Add_to_cart").onclick = (e) => {
            e.stopPropagation();
            
            // Get existing cart or create new
            var existingCart = localStorage.getItem("cart_products");
            var cart_products = existingCart ? JSON.parse(existingCart) : [];
            
            // Create product object with quantity
            var newProduct = {
                img: this.img,
                name: this.name,
                price: this.productnewprice,
                quantity: 1,
                sku: this.sku
            };
            
            // Check if product already exists in cart
            var existingProductIndex = cart_products.findIndex(item => item.sku === this.sku);
            
            if (existingProductIndex !== -1) {
                // If exists, add to quantity
                cart_products[existingProductIndex].quantity += 1;
            } else {
                // If new, push to cart
                cart_products.push(newProduct);
            }
            
            localStorage.setItem("cart_products", JSON.stringify(cart_products));
            alert("Added to cart!");
        }
    };
};


var Popular_products = [
    new Popular_product("https://demo.templatesjungle.com/clothique/images/product-thumb-15.jpg",
        "Product Item Name",
        240.00,
        180.00,
        10,
        [
            `<i class="fa-solid fa-star"></i>`,
            `<i class="fa-solid fa-star"></i>`,
            `<i class="fa-solid fa-star"></i>`,
            `<i class="fa-solid fa-star"></i>`,
            `<i class="fa-solid fa-star-half-stroke"></i>`
        ],
        `Justo, cum feugiat imperdiet nulla molestie ac
        vulputate scelerisque amet. Bibendum adipiscing 
        platea blandit sit sed quam semper rhoncus. Diam
        ultrices maecenas consequat eu tortor orci, cras
        lectus mauris, cras egestas quam venenatis neque.`,
        [
            "Green", "Orange", "Red", "Black"
        ],

        [
            "XL", "L", "M", "S"
        ],
        1223,
        "women",
        [
            "women",
            "women dress"
        ],
        `Lorem ipsum dolor sit amet, consectetuer adipiscing 
        elit. Donec odio. Quisque volutpat mattis eros. Nullam
        malesuada erat ut turpis. Suspendisse urna viverra non,
        semper suscipit, posuere a, pede. Donec nec justo eget
        felis facilisis fermentum. Aliquam porttitor mauris sit
        amet orci. Aenean dignissim pellentesque felis. Phasellus 
        ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer
        ligula vulputate sem tristique cursus.`,
        [
            "https://demo.templatesjungle.com/clothique/images/product-large-1.jpg",
            "https://demo.templatesjungle.com/clothique/images/product-large-2.jpg",
            "https://demo.templatesjungle.com/clothique/images/product-large-3.jpg",
            "https://demo.templatesjungle.com/clothique/images/product-large-4.jpg",
            "https://demo.templatesjungle.com/clothique/images/product-large-5.jpg",
        ]
    ),
    new Popular_product("https://demo.templatesjungle.com/clothique/images/product-thumb-16.jpg",
        "Product Item Name",
        240.00,
        180.00,
        10,
        [
            `<i class="fa-solid fa-star"></i>`,
            `<i class="fa-solid fa-star"></i>`,
            `<i class="fa-solid fa-star"></i>`,
            `<i class="fa-solid fa-star"></i>`,
            `<i class="fa-solid fa-star-half-stroke"></i>`
        ],
        `Justo, cum feugiat imperdiet nulla molestie ac
        vulputate scelerisque amet. Bibendum adipiscing 
        platea blandit sit sed quam semper rhoncus. Diam
        ultrices maecenas consequat eu tortor orci, cras
        lectus mauris, cras egestas quam venenatis neque.`,
        [
            "Green", "Orange", "Red", "Black"
        ],

        [
            "XL", "L", "M", "S"
        ],
        1223,
        "women",
        [
            "women",
            "women dress"
        ],
        `Lorem ipsum dolor sit amet, consectetuer adipiscing 
        elit. Donec odio. Quisque volutpat mattis eros. Nullam
        malesuada erat ut turpis. Suspendisse urna viverra non,
        semper suscipit, posuere a, pede. Donec nec justo eget
        felis facilisis fermentum. Aliquam porttitor mauris sit
        amet orci. Aenean dignissim pellentesque felis. Phasellus 
        ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer
        ligula vulputate sem tristique cursus.`,
        [
            "https://demo.templatesjungle.com/clothique/images/product-large-1.jpg",
            "https://demo.templatesjungle.com/clothique/images/product-large-2.jpg",
            "https://demo.templatesjungle.com/clothique/images/product-large-3.jpg",
            "https://demo.templatesjungle.com/clothique/images/product-large-4.jpg",
            "https://demo.templatesjungle.com/clothique/images/product-large-5.jpg",
        ]
    ),
    new Popular_product("https://demo.templatesjungle.com/clothique/images/product-thumb-17.jpg",
        "Product Item Name",
        240.00,
        180.00,
        10,
        [
            `<i class="fa-solid fa-star"></i>`,
            `<i class="fa-solid fa-star"></i>`,
            `<i class="fa-solid fa-star"></i>`,
            `<i class="fa-solid fa-star"></i>`,
            `<i class="fa-solid fa-star-half-stroke"></i>`
        ],
        `Justo, cum feugiat imperdiet nulla molestie ac
        vulputate scelerisque amet. Bibendum adipiscing 
        platea blandit sit sed quam semper rhoncus. Diam
        ultrices maecenas consequat eu tortor orci, cras
        lectus mauris, cras egestas quam venenatis neque.`,
        [
            "Green", "Orange", "Red", "Black"
        ],

        [
            "XL", "L", "M", "S"
        ],
        1223,
        "women",
        [
            "women",
            "women dress"
        ],
        `Lorem ipsum dolor sit amet, consectetuer adipiscing 
        elit. Donec odio. Quisque volutpat mattis eros. Nullam
        malesuada erat ut turpis. Suspendisse urna viverra non,
        semper suscipit, posuere a, pede. Donec nec justo eget
        felis facilisis fermentum. Aliquam porttitor mauris sit
        amet orci. Aenean dignissim pellentesque felis. Phasellus 
        ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer
        ligula vulputate sem tristique cursus.`,
        [
            "https://demo.templatesjungle.com/clothique/images/product-large-1.jpg",
            "https://demo.templatesjungle.com/clothique/images/product-large-2.jpg",
            "https://demo.templatesjungle.com/clothique/images/product-large-3.jpg",
            "https://demo.templatesjungle.com/clothique/images/product-large-4.jpg",
            "https://demo.templatesjungle.com/clothique/images/product-large-5.jpg",
        ]
    ),
    new Popular_product("https://demo.templatesjungle.com/clothique/images/product-thumb-18.jpg",
        "Product Item Name",
        240.00,
        180.00,
        10,
        [
            `<i class="fa-solid fa-star"></i>`,
            `<i class="fa-solid fa-star"></i>`,
            `<i class="fa-solid fa-star"></i>`,
            `<i class="fa-solid fa-star"></i>`,
            `<i class="fa-solid fa-star-half-stroke"></i>`
        ],
        `Justo, cum feugiat imperdiet nulla molestie ac
        vulputate scelerisque amet. Bibendum adipiscing 
        platea blandit sit sed quam semper rhoncus. Diam
        ultrices maecenas consequat eu tortor orci, cras
        lectus mauris, cras egestas quam venenatis neque.`,
        [
            "Green", "Orange", "Red", "Black"
        ],

        [
            "XL", "L", "M", "S"
        ],
        1223,
        "women",
        [
            "women",
            "women dress"
        ],
        `Lorem ipsum dolor sit amet, consectetuer adipiscing 
        elit. Donec odio. Quisque volutpat mattis eros. Nullam
        malesuada erat ut turpis. Suspendisse urna viverra non,
        semper suscipit, posuere a, pede. Donec nec justo eget
        felis facilisis fermentum. Aliquam porttitor mauris sit
        amet orci. Aenean dignissim pellentesque felis. Phasellus 
        ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer
        ligula vulputate sem tristique cursus.`,
        [
            "https://demo.templatesjungle.com/clothique/images/product-large-1.jpg",
            "https://demo.templatesjungle.com/clothique/images/product-large-2.jpg",
            "https://demo.templatesjungle.com/clothique/images/product-large-3.jpg",
            "https://demo.templatesjungle.com/clothique/images/product-large-4.jpg",
            "https://demo.templatesjungle.com/clothique/images/product-large-5.jpg",
        ]
    ),
    new Popular_product("https://demo.templatesjungle.com/clothique/images/product-thumb-19.jpg",
        "Product Item Name",
        240.00,
        180.00,
        10,
        [
            `<i class="fa-solid fa-star"></i>`,
            `<i class="fa-solid fa-star"></i>`,
            `<i class="fa-solid fa-star"></i>`,
            `<i class="fa-solid fa-star"></i>`,
            `<i class="fa-solid fa-star-half-stroke"></i>`
        ],
        `Justo, cum feugiat imperdiet nulla molestie ac
        vulputate scelerisque amet. Bibendum adipiscing 
        platea blandit sit sed quam semper rhoncus. Diam
        ultrices maecenas consequat eu tortor orci, cras
        lectus mauris, cras egestas quam venenatis neque.`,
        [
            "Green", "Orange", "Red", "Black"
        ],

        [
            "XL", "L", "M", "S"
        ],
        1223,
        "women",
        [
            "women",
            "women dress"
        ],
        `Lorem ipsum dolor sit amet, consectetuer adipiscing 
        elit. Donec odio. Quisque volutpat mattis eros. Nullam
        malesuada erat ut turpis. Suspendisse urna viverra non,
        semper suscipit, posuere a, pede. Donec nec justo eget
        felis facilisis fermentum. Aliquam porttitor mauris sit
        amet orci. Aenean dignissim pellentesque felis. Phasellus 
        ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer
        ligula vulputate sem tristique cursus.`,
        [
            "https://demo.templatesjungle.com/clothique/images/product-large-1.jpg",
            "https://demo.templatesjungle.com/clothique/images/product-large-2.jpg",
            "https://demo.templatesjungle.com/clothique/images/product-large-3.jpg",
            "https://demo.templatesjungle.com/clothique/images/product-large-4.jpg",
            "https://demo.templatesjungle.com/clothique/images/product-large-5.jpg",
        ]
    ),
];
Popular_products.map((e) => {
    e.render()
});

const Popular_box = document.querySelector(".Popular_box");
const scrollamount = 500;

const LeftBtn = document.getElementById("LeftBtn");
LeftBtn.addEventListener("click", () => {
    Popular_box.scrollBy({
        left: -scrollamount,
        behavior: "smooth"
    });
});

const RightBtn = document.getElementById("RightBtn");
RightBtn.addEventListener("click", () => {
    Popular_box.scrollBy({
        left: scrollamount,
        behavior: "smooth"
    });
});

const productElements = document.querySelectorAll(".Popular_box .Popular_product");

productElements.forEach((productElement, index) => {
    productElement.addEventListener("click", function () {
        const selectedProduct = Popular_products[index]; // վերցնում ենք ըստ ինդեքսի
        localStorage.setItem("Product", JSON.stringify(selectedProduct));
        location.href = "./product_detal.html";
    });
});


