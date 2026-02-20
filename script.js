class Category {
    constructor(img, name) {
        this.img = img;
        this.name = name;
    }
    render = function () {
        const categoryDiv = document.createElement("div");
        categoryDiv.setAttribute("class", "categoryDiv")
        categoryDiv.innerHTML = `
        <img src="${this.img}"/>
        <h4>${this.name}</h4>
        `
        document.querySelector(".category_box").append(categoryDiv);
    };
};

var Categorys = [
    new Category("https://demo.templatesjungle.com/clothique/images/category-thumb-1.jpg", "Hoodies"),
    new Category("https://demo.templatesjungle.com/clothique/images/category-thumb-2.jpg", "Sweaters"),
    new Category("https://demo.templatesjungle.com/clothique/images/category-thumb-3.jpg", "Kids"),
    new Category("https://demo.templatesjungle.com/clothique/images/category-thumb-4.jpg", "Denim"),
    new Category("https://demo.templatesjungle.com/clothique/images/category-thumb-5.jpg", "T-shirts")
];
Categorys.map((e) => {
    e.render()
});

const category_box = document.querySelector(".category_box");
const scrollamount = 500;

const leftBtn = document.getElementById("leftBtn");
leftBtn.addEventListener("click", () => {
    category_box.scrollBy({
        left: -scrollamount,
        behavior: "smooth"
    });
});

const rightBtn = document.getElementById("rightBtn");
rightBtn.addEventListener("click", () => {
    category_box.scrollBy({
        left: scrollamount,
        behavior: "smooth"
    });
});


class Product {
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
        const Product = document.createElement("article");
        Product.setAttribute("class", "Product");
        Product.innerHTML = `
        <img src="${this.img}">
        <h4>${this.name}</h4>
        <div>
        <span><del>$${this.productoldprice}</del></span>
        <span>$${this.productnewprice}</span>
        <span>${this.sale}% OFF</span>
        </div>
        <div id="buttons">
        <button class="Add_to_card"><i class="fa-solid fa-cart-shopping"></i>Add to card</button>
        <button id="Like_btn"><i class="fa-solid fa-heart"></i></button>
        </div>`;
        document.querySelector(".product_box").append(Product);

    }
}

var Products = [
    new Product(
        "https://demo.templatesjungle.com/clothique/images/product-thumb-1.jpg",
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
            "https://demo.templatesjungle.com/clothique/images/product-large-5.jpg"
        ]
    ),

    new Product(
        "https://demo.templatesjungle.com/clothique/images/product-thumb-2.jpg",
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
            "https://demo.templatesjungle.com/clothique/images/product-large-5.jpg"
        ]
    ),

    new Product(
        "https://demo.templatesjungle.com/clothique/images/product-thumb-3.jpg",
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
        "man",
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
            "https://demo.templatesjungle.com/clothique/images/product-large-5.jpg"
        ]
    ),

    new Product(
        "https://demo.templatesjungle.com/clothique/images/product-thumb-4.jpg",
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
            "https://demo.templatesjungle.com/clothique/images/product-large-5.jpg"
        ]
    ),

    new Product(
        "https://demo.templatesjungle.com/clothique/images/product-thumb-5.jpg",
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
        "man",
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
            "https://demo.templatesjungle.com/clothique/images/product-large-5.jpg"
        ]
    ),

    new Product(
        "https://demo.templatesjungle.com/clothique/images/product-thumb-6.jpg",
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
            "https://demo.templatesjungle.com/clothique/images/product-large-5.jpg"
        ]
    ),

    new Product(
        "https://demo.templatesjungle.com/clothique/images/product-thumb-7.jpg",
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
            "https://demo.templatesjungle.com/clothique/images/product-large-5.jpg"
        ]
    ),

    new Product(
        "https://demo.templatesjungle.com/clothique/images/product-thumb-8.jpg",
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
            "https://demo.templatesjungle.com/clothique/images/product-large-5.jpg"
        ]
    ),
];
Products.map((e) => {
    e.render();
});




const productElements = document.querySelectorAll(".product_box .Product");

productElements.forEach((productElement, index) => {
    // Handle product click to go to detail page
    productElement.addEventListener("click", function (e) {
        // Don't navigate if clicking the add to cart button
        if (!e.target.closest(".Add_to_card")) {
            const selectedProduct = Products[index];
            localStorage.setItem("Product", JSON.stringify(selectedProduct));
            location.href = "./pages/product_detal/product_detal.html";
        }
    });
    
    // Handle add to cart button click
    const addBtn = productElement.querySelector(".Add_to_card");
    if (addBtn) {
        addBtn.addEventListener("click", function (e) {
            e.stopPropagation();
            const selectedProduct = Products[index];
            
            // Get existing cart or create new
            var existingCart = localStorage.getItem("cart_products");
            var cart_products = existingCart ? JSON.parse(existingCart) : [];
            
            // Create product object with quantity
            var newProduct = {
                img: selectedProduct.img,
                name: selectedProduct.name,
                price: selectedProduct.productnewprice,
                quantity: 1,
                sku: selectedProduct.sku
            };
            
            // Check if product already exists in cart
            var existingProductIndex = cart_products.findIndex(item => item.sku === selectedProduct.sku);
            
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
    }
});



const Featured_Products_box = document.querySelector(".Featured_Products_box");
const LeftButn = document.getElementById("LeftButn");
LeftButn.addEventListener("click", () => {
    Featured_Products_box.scrollBy({
        left: -scrollamount,
        behavior: "smooth",
    });
});

const RightButn = document.getElementById("RightButn");
RightButn.addEventListener("click", () => {
    Featured_Products_box.scrollBy({
        left: scrollamount,
        behavior: "smooth"
    });
});


class Featured_Product {
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
        const Featured_Product = document.createElement("article");
        Featured_Product.setAttribute("class", "Featured_Product");
        Featured_Product.innerHTML = `
        <img src="${this.img}">
        <h4>${this.name}</h4>
        <div>
        <span><del>$${this.productoldprice}</del></span>
        <span>$${this.productnewprice}</span>
        <span>${this.sale}% OFF</span>
        </div>
        <div id="Buttons">
        <button id="Add_to_cart"><i class="fa-solid fa-cart-shopping"></i>
        Add to Card</button>
        <button id="Like_Btn"><i class="fa-solid fa-heart"></i></button>
        </div>`;
        document.querySelector(".Featured_Products_box").append(Featured_Product);
    };
};

var Featured_Products = [
    new Featured_Product("https://demo.templatesjungle.com/clothique/images/product-thumb-9.jpg",
        "Product Item Name",
        270.000,
        150.000,
        30,
        [
            `<i class="fa-solid fa-star"></i>`,
            `<i class="fa-solid fa-star"></i>`,
            `<i class="fa-solid fa-star"></i>`,
            `<i class="fa-solid fa-star"></i>`,
            `<i class="fa-solid fa-star-half-stroke"></i>`
        ],
        `Lightning repaves the road shoddily in a rush to leave,
         and Doc challenges him to a race for his freedom, on the
          condition that he starts over from scratch if he loses.
           The overconfident Lightning, having never raced on a 
           dirt road before, spins out on a turn and crashes into 
           a cactus patch, with Doc having set up the race to dampen his ego.`,
        [
            "Green", "Orange", "Red", "Black"
        ],
        [
            "XL", "L", "M", "S"
        ],
        1234,
        "women",
        [
            "women",
            "women dress"
        ],
        `By 1920, the "new woman" was a trend that saw lighter fabrics and
         dresses that were easier to put on. Younger women were also setting
         the trends that older women started to follow. The dresses of the 
         1920s could be pulled over the head and were short and straight.
         It was acceptable to wear sleeveless dresses during the day. 
         Flapper dresses were popular until end of the decade.`,
        [
            "https://demo.templatesjungle.com/clothique/images/product-thumb-9.jpg",
            "https://demo.templatesjungle.com/clothique/images/product-thumb-10.jpg",
            "https://demo.templatesjungle.com/clothique/images/product-thumb-11.jpg",
            "https://demo.templatesjungle.com/clothique/images/product-thumb-12.jpg",
            "https://demo.templatesjungle.com/clothique/images/product-thumb-13.jpg",
            "https://demo.templatesjungle.com/clothique/images/product-thumb-14.jpg",
        ],
    ),

    new Featured_Product("https://demo.templatesjungle.com/clothique/images/product-thumb-10.jpg",
        "Product Item Name",
        270.000,
        150.000,
        30,
        [
            `<i class="fa-solid fa-star"></i>`,
            `<i class="fa-solid fa-star"></i>`,
            `<i class="fa-solid fa-star"></i>`,
            `<i class="fa-solid fa-star"></i>`,
            `<i class="fa-solid fa-star-half-stroke"></i>`
        ],
        `Lightning repaves the road shoddily in a rush to leave,
         and Doc challenges him to a race for his freedom, on the
          condition that he starts over from scratch if he loses.
           The overconfident Lightning, having never raced on a 
           dirt road before, spins out on a turn and crashes into 
           a cactus patch, with Doc having set up the race to dampen his ego.`,
        [
            "Green", "Orange", "Red", "Black"
        ],
        [
            "XL", "L", "M", "S"
        ],
        1234,
        "women",
        [
            "women",
            "women dress"
        ],
        `By 1920, the "new woman" was a trend that saw lighter fabrics and
         dresses that were easier to put on. Younger women were also setting
         the trends that older women started to follow. The dresses of the 
         1920s could be pulled over the head and were short and straight.
         It was acceptable to wear sleeveless dresses during the day. 
         Flapper dresses were popular until end of the decade.`,
        [
            "https://demo.templatesjungle.com/clothique/images/product-thumb-9.jpg",
            "https://demo.templatesjungle.com/clothique/images/product-thumb-10.jpg",
            "https://demo.templatesjungle.com/clothique/images/product-thumb-11.jpg",
            "https://demo.templatesjungle.com/clothique/images/product-thumb-12.jpg",
            "https://demo.templatesjungle.com/clothique/images/product-thumb-13.jpg",
            "https://demo.templatesjungle.com/clothique/images/product-thumb-14.jpg",
        ],
    ),

    new Featured_Product("https://demo.templatesjungle.com/clothique/images/product-thumb-11.jpg",
        "Product Item Name",
        270.000,
        150.000,
        30,
        [
            `<i class="fa-solid fa-star"></i>`,
            `<i class="fa-solid fa-star"></i>`,
            `<i class="fa-solid fa-star"></i>`,
            `<i class="fa-solid fa-star"></i>`,
            `<i class="fa-solid fa-star-half-stroke"></i>`
        ],
        `Lightning repaves the road shoddily in a rush to leave,
         and Doc challenges him to a race for his freedom, on the
          condition that he starts over from scratch if he loses.
           The overconfident Lightning, having never raced on a 
           dirt road before, spins out on a turn and crashes into 
           a cactus patch, with Doc having set up the race to dampen his ego.`,
        [
            "Green", "Orange", "Red", "Black"
        ],
        [
            "XL", "L", "M", "S"
        ],
        1234,
        "women",
        [
            "women",
            "women dress"
        ],
        `By 1920, the "new woman" was a trend that saw lighter fabrics and
         dresses that were easier to put on. Younger women were also setting
         the trends that older women started to follow. The dresses of the 
         1920s could be pulled over the head and were short and straight.
         It was acceptable to wear sleeveless dresses during the day. 
         Flapper dresses were popular until end of the decade.`,
        [
            "https://demo.templatesjungle.com/clothique/images/product-thumb-9.jpg",
            "https://demo.templatesjungle.com/clothique/images/product-thumb-10.jpg",
            "https://demo.templatesjungle.com/clothique/images/product-thumb-11.jpg",
            "https://demo.templatesjungle.com/clothique/images/product-thumb-12.jpg",
            "https://demo.templatesjungle.com/clothique/images/product-thumb-13.jpg",
            "https://demo.templatesjungle.com/clothique/images/product-thumb-14.jpg",
        ],
    ),


    new Featured_Product("https://demo.templatesjungle.com/clothique/images/product-thumb-12.jpg",
        "Product Item Name",
        270.000,
        150.000,
        30,
        [
            `<i class="fa-solid fa-star"></i>`,
            `<i class="fa-solid fa-star"></i>`,
            `<i class="fa-solid fa-star"></i>`,
            `<i class="fa-solid fa-star"></i>`,
            `<i class="fa-solid fa-star-half-stroke"></i>`
        ],
        `Lightning repaves the road shoddily in a rush to leave,
         and Doc challenges him to a race for his freedom, on the
          condition that he starts over from scratch if he loses.
           The overconfident Lightning, having never raced on a 
           dirt road before, spins out on a turn and crashes into 
           a cactus patch, with Doc having set up the race to dampen his ego.`,
        [
            "Green", "Orange", "Red", "Black"
        ],
        [
            "XL", "L", "M", "S"
        ],
        1234,
        "women",
        [
            "women",
            "women dress"
        ],
        `By 1920, the "new woman" was a trend that saw lighter fabrics and
         dresses that were easier to put on. Younger women were also setting
         the trends that older women started to follow. The dresses of the 
         1920s could be pulled over the head and were short and straight.
         It was acceptable to wear sleeveless dresses during the day. 
         Flapper dresses were popular until end of the decade.`,
        [
            "https://demo.templatesjungle.com/clothique/images/product-thumb-9.jpg",
            "https://demo.templatesjungle.com/clothique/images/product-thumb-10.jpg",
            "https://demo.templatesjungle.com/clothique/images/product-thumb-11.jpg",
            "https://demo.templatesjungle.com/clothique/images/product-thumb-12.jpg",
            "https://demo.templatesjungle.com/clothique/images/product-thumb-13.jpg",
            "https://demo.templatesjungle.com/clothique/images/product-thumb-14.jpg",
        ],
    ),

    new Featured_Product("https://demo.templatesjungle.com/clothique/images/product-thumb-13.jpg",
        "Product Item Name",
        270.000,
        150.000,
        30,
        [
            `<i class="fa-solid fa-star"></i>`,
            `<i class="fa-solid fa-star"></i>`,
            `<i class="fa-solid fa-star"></i>`,
            `<i class="fa-solid fa-star"></i>`,
            `<i class="fa-solid fa-star-half-stroke"></i>`
        ],
        `Lightning repaves the road shoddily in a rush to leave,
         and Doc challenges him to a race for his freedom, on the
          condition that he starts over from scratch if he loses.
           The overconfident Lightning, having never raced on a 
           dirt road before, spins out on a turn and crashes into 
           a cactus patch, with Doc having set up the race to dampen his ego.`,
        [
            "Green", "Orange", "Red", "Black"
        ],
        [
            "XL", "L", "M", "S"
        ],
        1234,
        "women",
        [
            "women",
            "women dress"
        ],
        `By 1920, the "new woman" was a trend that saw lighter fabrics and
         dresses that were easier to put on. Younger women were also setting
         the trends that older women started to follow. The dresses of the 
         1920s could be pulled over the head and were short and straight.
         It was acceptable to wear sleeveless dresses during the day. 
         Flapper dresses were popular until end of the decade.`,
        [
            "https://demo.templatesjungle.com/clothique/images/product-thumb-9.jpg",
            "https://demo.templatesjungle.com/clothique/images/product-thumb-10.jpg",
            "https://demo.templatesjungle.com/clothique/images/product-thumb-11.jpg",
            "https://demo.templatesjungle.com/clothique/images/product-thumb-12.jpg",
            "https://demo.templatesjungle.com/clothique/images/product-thumb-13.jpg",
            "https://demo.templatesjungle.com/clothique/images/product-thumb-14.jpg",
        ],
    ),

    new Featured_Product("https://demo.templatesjungle.com/clothique/images/product-thumb-14.jpg",
        "Product Item Name",
        270.000,
        150.000,
        30,
        [
            `<i class="fa-solid fa-star"></i>`,
            `<i class="fa-solid fa-star"></i>`,
            `<i class="fa-solid fa-star"></i>`,
            `<i class="fa-solid fa-star"></i>`,
            `<i class="fa-solid fa-star-half-stroke"></i>`
        ],
        `Lightning repaves the road shoddily in a rush to leave,
         and Doc challenges him to a race for his freedom, on the
          condition that he starts over from scratch if he loses.
           The overconfident Lightning, having never raced on a 
           dirt road before, spins out on a turn and crashes into 
           a cactus patch, with Doc having set up the race to dampen his ego.`,
        [
            "Green", "Orange", "Red", "Black"
        ],
        [
            "XL", "L", "M", "S"
        ],
        1234,
        "women",
        [
            "women",
            "women dress"
        ],
        `By 1920, the "new woman" was a trend that saw lighter fabrics and
         dresses that were easier to put on. Younger women were also setting
         the trends that older women started to follow. The dresses of the 
         1920s could be pulled over the head and were short and straight.
         It was acceptable to wear sleeveless dresses during the day. 
         Flapper dresses were popular until end of the decade.`,
        [
            "https://demo.templatesjungle.com/clothique/images/product-thumb-9.jpg",
            "https://demo.templatesjungle.com/clothique/images/product-thumb-10.jpg",
            "https://demo.templatesjungle.com/clothique/images/product-thumb-11.jpg",
            "https://demo.templatesjungle.com/clothique/images/product-thumb-12.jpg",
            "https://demo.templatesjungle.com/clothique/images/product-thumb-13.jpg",
            "https://demo.templatesjungle.com/clothique/images/product-thumb-14.jpg",
        ],
    ),
];

Featured_Products.map((e) => {
    e.render()
});


const featured_ProductElements = document.querySelectorAll(".Featured_Products_box .Featured_Product");

featured_ProductElements.forEach((featured_ProductElement, index) => {
    featured_ProductElement.addEventListener("click", function () {
        const selectedFeatured_Product = Featured_Products[index]; // վերցնում ենք ըստ ինդեքսի
        localStorage.setItem("Product", JSON.stringify(selectedFeatured_Product));
        location.href = "./pages/product_detal/product_detal.html";
    });
});





const Parent_box = document.querySelector(".Parent_box");
const leftbutton = document.getElementById("leftbutton");
leftbutton.addEventListener("click", () => {
    Parent_box.scrollBy({
        left: -scrollamount,
        behavior: "smooth"
    });
});

const rightbutton = document.getElementById("rightbutton");
rightbutton.addEventListener("click", () => {
    Parent_box.scrollBy({
        left: scrollamount,
        behavior: "smooth"
    });
});


class Parent_product {
    constructor(
        img, name, productoldprice, productnewprice, sale, raiting, description,
        colors, sizes, sku, category, tags, fulldescription, gallery) {
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
        const Parent_product = document.createElement("article");
        Parent_product.setAttribute("class", "Parent_product");
        Parent_product.innerHTML = `
        <img src="${this.img}">
        <h4>${this.name}</h4>
        <div>
        <span><del>$${this.productoldprice}</del></span>
        <span>$${this.productnewprice}</span>
        <span>${this.sale}% OFF</span>
        </div>
        <div id="Buttons">
        <button id="Add_to_cart"><i class="fa-solid fa-cart-shopping"></i>Add to card</button>
        <button id="Like_Btn"><i class="fa-solid fa-heart"></i></button>
        </div>`;
        document.querySelector(".Parent_box").append(Parent_product);
    };
};

var Parent_products = [
    new Parent_product("https://demo.templatesjungle.com/clothique/images/product-thumb-15.jpg",
        "Product Item Name",
        350.00,
        300.00,
        35,
        [
            `<i class="fa-solid fa-star"></i>`,
            `<i class="fa-solid fa-star"></i>`,
            `<i class="fa-solid fa-star"></i>`,
            `<i class="fa-solid fa-star"></i>`,
            `<i class="fa-solid fa-star-half-stroke"></i>`
        ],
        `Some colleges will ask you to create a SRAR account
         and input your high school courses and grades exactly
         as they appear on your transcript. This means you’ll 
         need to be accurate and thorough when entering your 
         GPA and any 12th-grade courses you’ve completed or are 
         currently taking. You can use an unofficial transcript or 
         online report card to help fill in the details.`,
        [
            "Gray", "Red", "Yellow", "Green"
        ],
        [
            "LLX", "S", "XXL", "LX"
        ],
        5678,
        "women",
        [
            "man",
            "women dress"
        ],
        `There is no difference between the Self-Reported Academic 
         Record (SRAR) and the Self-Reported Student Academic Record 
         (SSAR). Before 2022, the SRAR and SSAR were different forms, 
         the SSAR was used by Florida colleges and universities. The 
         two accounts are the same now and the terms are used interchangeably.`,
        [
            "https://demo.templatesjungle.com/clothique/images/product-thumb-15.jpg",
            "https://demo.templatesjungle.com/clothique/images/product-thumb-16.jpg",
            "https://demo.templatesjungle.com/clothique/images/product-thumb-17.jpg",
            "https://demo.templatesjungle.com/clothique/images/product-thumb-18.jpg",
            "https://demo.templatesjungle.com/clothique/images/product-thumb-19.jpg"
        ],
    ),

    new Parent_product("https://demo.templatesjungle.com/clothique/images/product-thumb-16.jpg",
        "Product Item Name",
        350.00,
        300.00,
        35,
        [
            `<i class="fa-solid fa-star"></i>`,
            `<i class="fa-solid fa-star"></i>`,
            `<i class="fa-solid fa-star"></i>`,
            `<i class="fa-solid fa-star"></i>`,
            `<i class="fa-solid fa-star-half-stroke"></i>`
        ],
        `Some colleges will ask you to create a SRAR account
         and input your high school courses and grades exactly
         as they appear on your transcript. This means you’ll 
         need to be accurate and thorough when entering your 
         GPA and any 12th-grade courses you’ve completed or are 
         currently taking. You can use an unofficial transcript or 
         online report card to help fill in the details.`,
        [
            "Gray", "Red", "Yellow", "Green"
        ],
        [
            "LLX", "S", "XXL", "LX"
        ],
        5678,
        "women",
        [
            "man",
            "women dress"
        ],
        `There is no difference between the Self-Reported Academic 
         Record (SRAR) and the Self-Reported Student Academic Record 
         (SSAR). Before 2022, the SRAR and SSAR were different forms, 
         the SSAR was used by Florida colleges and universities. The 
         two accounts are the same now and the terms are used interchangeably.`,
        [
            "https://demo.templatesjungle.com/clothique/images/product-thumb-15.jpg",
            "https://demo.templatesjungle.com/clothique/images/product-thumb-16.jpg",
            "https://demo.templatesjungle.com/clothique/images/product-thumb-17.jpg",
            "https://demo.templatesjungle.com/clothique/images/product-thumb-18.jpg",
            "https://demo.templatesjungle.com/clothique/images/product-thumb-19.jpg"
        ],
    ),

    new Parent_product("https://demo.templatesjungle.com/clothique/images/product-thumb-17.jpg",
        "Product Item Name",
        350.00,
        300.00,
        35,
        [
            `<i class="fa-solid fa-star"></i>`,
            `<i class="fa-solid fa-star"></i>`,
            `<i class="fa-solid fa-star"></i>`,
            `<i class="fa-solid fa-star"></i>`,
            `<i class="fa-solid fa-star-half-stroke"></i>`
        ],
        `Some colleges will ask you to create a SRAR account
         and input your high school courses and grades exactly
         as they appear on your transcript. This means you’ll 
         need to be accurate and thorough when entering your 
         GPA and any 12th-grade courses you’ve completed or are 
         currently taking. You can use an unofficial transcript or 
         online report card to help fill in the details.`,
        [
            "Gray", "Red", "Yellow", "Green"
        ],
        [
            "LLX", "S", "XXL", "LX"
        ],
        5678,
        "women",
        [
            "man",
            "women dress"
        ],
        `There is no difference between the Self-Reported Academic 
         Record (SRAR) and the Self-Reported Student Academic Record 
         (SSAR). Before 2022, the SRAR and SSAR were different forms, 
         the SSAR was used by Florida colleges and universities. The 
         two accounts are the same now and the terms are used interchangeably.`,
        [
            "https://demo.templatesjungle.com/clothique/images/product-thumb-15.jpg",
            "https://demo.templatesjungle.com/clothique/images/product-thumb-16.jpg",
            "https://demo.templatesjungle.com/clothique/images/product-thumb-17.jpg",
            "https://demo.templatesjungle.com/clothique/images/product-thumb-18.jpg",
            "https://demo.templatesjungle.com/clothique/images/product-thumb-19.jpg"
        ],
    ),

    new Parent_product("https://demo.templatesjungle.com/clothique/images/product-thumb-18.jpg",
        "Product Item Name",
        350.00,
        300.00,
        35,
        [
            `<i class="fa-solid fa-star"></i>`,
            `<i class="fa-solid fa-star"></i>`,
            `<i class="fa-solid fa-star"></i>`,
            `<i class="fa-solid fa-star"></i>`,
            `<i class="fa-solid fa-star-half-stroke"></i>`
        ],
        `Some colleges will ask you to create a SRAR account
         and input your high school courses and grades exactly
         as they appear on your transcript. This means you’ll 
         need to be accurate and thorough when entering your 
         GPA and any 12th-grade courses you’ve completed or are 
         currently taking. You can use an unofficial transcript or 
         online report card to help fill in the details.`,
        [
            "Gray", "Red", "Yellow", "Green"
        ],
        [
            "LLX", "S", "XXL", "LX"
        ],
        5678,
        "women",
        [
            "man",
            "women dress"
        ],
        `There is no difference between the Self-Reported Academic 
         Record (SRAR) and the Self-Reported Student Academic Record 
         (SSAR). Before 2022, the SRAR and SSAR were different forms, 
         the SSAR was used by Florida colleges and universities. The 
         two accounts are the same now and the terms are used interchangeably.`,
        [
            "https://demo.templatesjungle.com/clothique/images/product-thumb-15.jpg",
            "https://demo.templatesjungle.com/clothique/images/product-thumb-16.jpg",
            "https://demo.templatesjungle.com/clothique/images/product-thumb-17.jpg",
            "https://demo.templatesjungle.com/clothique/images/product-thumb-18.jpg",
            "https://demo.templatesjungle.com/clothique/images/product-thumb-19.jpg"
        ],
    ),

    new Parent_product("https://demo.templatesjungle.com/clothique/images/product-thumb-19.jpg",
        "Product Item Name",
        350.00,
        300.00,
        35,
        [
            `<i class="fa-solid fa-star"></i>`,
            `<i class="fa-solid fa-star"></i>`,
            `<i class="fa-solid fa-star"></i>`,
            `<i class="fa-solid fa-star"></i>`,
            `<i class="fa-solid fa-star-half-stroke"></i>`
        ],
        `Some colleges will ask you to create a SRAR account
         and input your high school courses and grades exactly
         as they appear on your transcript. This means you’ll 
         need to be accurate and thorough when entering your 
         GPA and any 12th-grade courses you’ve completed or are 
         currently taking. You can use an unofficial transcript or 
         online report card to help fill in the details.`,
        [
            "Gray", "Red", "Yellow", "Green"
        ],
        [
            "LLX", "S", "XXL", "LX"
        ],
        5678,
        "women",
        [
            "man",
            "women dress"
        ],
        `There is no difference between the Self-Reported Academic 
         Record (SRAR) and the Self-Reported Student Academic Record 
         (SSAR). Before 2022, the SRAR and SSAR were different forms, 
         the SSAR was used by Florida colleges and universities. The 
         two accounts are the same now and the terms are used interchangeably.`,
        [
            "https://demo.templatesjungle.com/clothique/images/product-thumb-15.jpg",
            "https://demo.templatesjungle.com/clothique/images/product-thumb-16.jpg",
            "https://demo.templatesjungle.com/clothique/images/product-thumb-17.jpg",
            "https://demo.templatesjungle.com/clothique/images/product-thumb-18.jpg",
            "https://demo.templatesjungle.com/clothique/images/product-thumb-19.jpg"
        ],
    ),
];
Parent_products.map((e) => {
    e.render()
})



const Parent_productElements = document.querySelectorAll(".Parent_box .Parent_product");

Parent_productElements.forEach((Parent_productElement, index) => {
    Parent_productElement.addEventListener("click", function () {
        const selectedParent_product = Parent_products[index]; // վերցնում ենք ըստ ինդեքսի
        localStorage.setItem("Product", JSON.stringify(selectedParent_product));
        location.href = "./pages/product_detal/product_detal.html";
    });
});




