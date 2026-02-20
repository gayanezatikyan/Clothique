class Shop_Product {
    constructor(
        img,
        name,
        Productoldprice,
        Productnewprice,
        sale,
        raiting,
        description,
        colors,
        sizes,
        sku,
        category,
        tags,
        fulldescription,
        gallery
    ) {
        this.img = img;
        this.name = name;
        this.Productoldprice = Productoldprice;
        this.Productnewprice = Productnewprice;
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

    render() {
        const article = document.createElement("article");
        article.className = "Shop_Product";

        article.innerHTML = `
            <img src="${this.img}">
            <h4>${this.name}</h4>

            <div class="price">
                <span><del>$${this.Productoldprice}</del></span>
                <span>$${this.Productnewprice}</span>
                <span>${this.sale}% OFF</span>
            </div>

            <div class="rating">
                ${this.raiting.join("")}
            </div>

            <div class="buttons">
                <button class="Add_To_Cart">
                    <i class="fa-solid fa-cart-shopping"></i> Add to Cart
                </button>
                <button class="like_button">
                    <i class="fa-regular fa-heart"></i>
                </button>
            </div>
        `;

        return article;
    }
}

/* ================= PRODUCTS (12 հատ) ================= */

const Shop_Products = [];

for (let i = 1; i <= 12; i++) {
    Shop_Products.push(
        new Shop_Product(
            `https://demo.templatesjungle.com/clothique/images/product-thumb-${i}.jpg`,
            `Product ${i}`,
            500 + i * 10,
            300 + i * 5,
            20,
            [
                `<i class="fa-solid fa-star"></i>`,
                `<i class="fa-solid fa-star"></i>`,
                `<i class="fa-solid fa-star"></i>`,
                `<i class="fa-solid fa-star"></i>`,
                `<i class="fa-solid fa-star-half-stroke"></i>`
            ],
            "Short description",
            ["Green", "Orange", "Red", "Black"],
            ["S", "M", "L", "XL"],
            1000 + i,
            "women",
            ["fashion", "dress"],
            "Full description text",
            [
                "https://demo.templatesjungle.com/clothique/images/product-large-1.jpg",
                "https://demo.templatesjungle.com/clothique/images/product-large-2.jpg"
            ]
        )
    );
}

/* ================= PAGINATION ================= */

const perPage = 4; // ✅ 4 ապրանք մեկ էջում
let currentPage = 1;

const container = document.querySelector(".shop_Product_box");
const Pagination = document.getElementById("Pagination");

function renderPage(page) {
    container.innerHTML = "";

    const start = (page - 1) * perPage;
    const end = start + perPage;
    const pageProducts = Shop_Products.slice(start, end);

    pageProducts.forEach((product) => {
        const element = product.render();

        // Product detail - don't navigate if clicking add to cart
        element.addEventListener("click", (e) => {
            if (!e.target.closest(".Add_To_Cart")) {
                localStorage.setItem("Shop_Product", JSON.stringify(product));
                location.href = "../../pages/product_detal/product_detal.html";
            }
        });

        // Add to cart
        element.querySelector(".Add_To_Cart").addEventListener("click", (e) => {
            e.stopPropagation();

            // Get existing cart or create new
            var existingCart = localStorage.getItem("cart_products");
            var cart_products = existingCart ? JSON.parse(existingCart) : [];

            // Create product object with quantity
            var newProduct = {
                img: product.img,
                name: product.name,
                price: product.Productnewprice,
                quantity: 1,
                sku: product.sku
            };

            // Check if product already exists in cart
            var existingProductIndex = cart_products.findIndex(item => item.sku === product.sku);

            if (existingProductIndex !== -1) {
                // If exists, add to quantity
                cart_products[existingProductIndex].quantity += 1;
            } else {
                // If new, push to cart
                cart_products.push(newProduct);
            }

            localStorage.setItem("cart_products", JSON.stringify(cart_products));
            alert("Added to cart!");
        });

        container.appendChild(element);
    });

    renderControls();
}

function renderControls() {
    Pagination.innerHTML = "";

    const totalPages = Math.ceil(Shop_Products.length / perPage);

    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement("button");
        btn.innerText = i;

        if (i === currentPage) {
            btn.classList.add("active");
        }

        btn.addEventListener("click", () => {
            currentPage = i;
            renderPage(currentPage);
        });

        Pagination.appendChild(btn);
    }
}

/* ================= INIT ================= */

renderPage(currentPage);


const filtr_mobile_button = document.getElementById("filtr_mobile_button");

filtr_mobile_button.onclick = function () {
    document.querySelector(".shop_categories_mobile").style.display = "flex";
}

const close_category_mobile = document.getElementById("close_category_mobile");

close_category_mobile.onclick = function () {
    document.querySelector(".shop_categories_mobile").style.display = "none";
}