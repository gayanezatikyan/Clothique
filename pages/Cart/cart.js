var product_list = document.getElementById("product_list");
var cart_productData = JSON.parse(localStorage.getItem("cart_products"));

if (!cart_productData || cart_productData.length === 0) {
    product_list.innerHTML = "<tr><td colspan='3' style='text-align:center; padding: 20px;'>Cart is empty</td></tr>";
} else {
    var products = Array.isArray(cart_productData) ? cart_productData : [cart_productData];
    var totalPrice = 0;

    products.forEach((product, index) => {
        var cart_product = document.createElement("tr");
        var price = product.price || product.productnewprice || 0;
        var quantity = product.quantity || 1;
        var itemTotal = price * quantity;
        totalPrice += itemTotal;
        
        cart_product.innerHTML = `
        <td>
        <img src="${product.img}">
        <h3>${product.name}</h3>
        </td>
        <td>
        <div class="product_list_button">
        <button class="minusbutton" data-index="${index}"><i class="fa-solid fa-minus"></i></button>
        <span class="productcount" data-index="${index}">${quantity}</span>
        <button class="plusbutton" data-index="${index}"><i class="fa-solid fa-plus"></i></button>
        </div>
        </td>
        <td>
        <div class="product_list_price">
        <span class="cart_product_price" data-index="${index}">$${itemTotal.toFixed(2)}</span>
        <button class="cart_product_button" data-index="${index}"><i class="fa-solid fa-trash"></i></button>
        </div>
        </td>
        `;
        product_list.append(cart_product);
    });

    // Add event listeners for all buttons
    product_list.querySelectorAll(".plusbutton").forEach((btn) => {
        btn.addEventListener("click", function () {
            const index = this.getAttribute("data-index");
            const countSpan = product_list.querySelector(`.productcount[data-index="${index}"]`);
            let count = parseInt(countSpan.textContent);
            count++;
            countSpan.textContent = count;
            products[index].quantity = count;
            updateDisplay();
            saveCart();
        });
    });

    product_list.querySelectorAll(".minusbutton").forEach((btn) => {
        btn.addEventListener("click", function () {
            const index = this.getAttribute("data-index");
            const countSpan = product_list.querySelector(`.productcount[data-index="${index}"]`);
            let count = parseInt(countSpan.textContent);
            if (count > 1) {
                count--;
                countSpan.textContent = count;
                products[index].quantity = count;
                updateDisplay();
                saveCart();
            }
        });
    });

    product_list.querySelectorAll(".cart_product_button").forEach((btn) => {
        btn.addEventListener("click", function () {
            const index = this.getAttribute("data-index");
            products.splice(index, 1);
            localStorage.setItem("cart_products", JSON.stringify(products));
            location.reload();
        });
    });

    function updateDisplay() {
        let newTotal = 0;
        products.forEach((product, index) => {
            const price = product.price || product.productnewprice || 0;
            const count = parseInt(product_list.querySelector(`.productcount[data-index="${index}"]`).textContent);
            const itemTotal = price * count;
            newTotal += itemTotal;
            product_list.querySelector(`.cart_product_price[data-index="${index}"]`).textContent = `$${itemTotal.toFixed(2)}`;
        });
        document.getElementById("total_price").innerText = `$${newTotal.toFixed(2)}`;
    }

    function saveCart() {
        localStorage.setItem("cart_products", JSON.stringify(products));
    }

    document.getElementById("total_price").innerText = `$${totalPrice.toFixed(2)}`;
}