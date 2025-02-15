function openModal() {
    let cartModal = document.getElementById("cartModal");
    let cartContent = document.querySelector(".cartModal-content");

    cartModal.classList.add("active");
    setTimeout(() => {
        cartContent.style.transform = "translateX(0)"; // Aparece desde la derecha
    }, 10); // Pequeño delay para que la transición funcione

    renderCart();
}

function closeModal() {
    let cartModal = document.getElementById("cartModal");
    let cartContent = document.querySelector(".cartModal-content");

    // cartContent.style.transform = "translateX(100%)"; // Deslizar hacia afuera

    setTimeout(() => {
        cartModal.classList.remove("active"); // Ocultar modal después de la animación
    }, 300); // Coincide con la duración de la animación
}



function renderCart() {
    let cartContainer = document.getElementById("cartItems");
    cartContainer.innerHTML = "";
    let total = 0;

    productsItems.forEach((item, index) => {
        total += item.price * item.quantity;

        let productDiv = document.createElement("div");
        productDiv.classList.add("product");

        productDiv.innerHTML = `
            <span>${item.name} - $${item.price} x ${item.quantity}</span>
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

