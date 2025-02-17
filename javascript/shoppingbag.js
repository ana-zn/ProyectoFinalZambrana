function openModal() {
    let cartModal = document.getElementById("cartModal");
    let cartContent = document.querySelector(".cartModal-content");

    cartModal.classList.add("active");
    setTimeout(() => {
        cartContent.style.transform = "translateX(0)"; 
    }, 10); 

    renderCart();
}

function closeModal() {
    let cartModal = document.getElementById("cartModal");
    let cartContent = document.querySelector(".cartModal-content");

  

    setTimeout(() => {
        cartModal.classList.remove("active"); 
    }, 300);
}



function renderCart() {
    let cartContainer = document.getElementById("cartItems");
    cartContainer.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => { // Usa cart aquí
        total += item.price * item.quantity;

        let productDiv = document.createElement("div");
        productDiv.classList.add("product");

        productDiv.innerHTML = `
            <span>${item.title} - $${item.price} x ${item.quantity}</span>
            <button onclick="addProduct(${index})">+</button>
            <button onclick="removeProduct(${index})">-</button>
        `;
        cartContainer.appendChild(productDiv);
    });

    document.getElementById("totalPrice").textContent = total;
}


function addProduct(index) {
    productsItems[index].quantity++;
    renderCart();
}

function removeProduct(index) {
    if (productsItems[index].quantity > 1) {
        productsItems[index].quantity--;
    } else {
        productsItems.splice(index, 1);
    }
    renderCart();
}

