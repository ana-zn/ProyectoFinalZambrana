// Variables del catálogo y carrito
const catalogo = document.getElementById('content-catalogo');
const container = document.createElement('section'); 
container.classList.add('container'); 

// Sección de productos
const containerProducts = document.createElement('div');
containerProducts.classList.add('containerProducts');

const productslist = document.createElement('ul');
productslist.classList.add('productslist');

// Array del carrito
const cart = [];

// Crear el modal del carrito
const cartModal = document.createElement('div');
cartModal.classList.add('cartModal');
cartModal.innerHTML = `
    <div class="cartModal-content">
        <span class="closeModal">&times;</span>
        <h2>Carrito de Compras</h2>
        <ul class="cartList"></ul>
        <div class="totalPriceContainer">Total: $0</div>
        <button class="completePurchaseButton">Completar Compra</button>
    </div>
`;

// Obtener elementos del modal
const cartList = cartModal.querySelector('.cartList');
const totalPriceContainer = cartModal.querySelector('.totalPriceContainer');
const closeModal = cartModal.querySelector('.closeModal');
const completePurchaseButton = cartModal.querySelector('.completePurchaseButton');

// Agregar el modal al body
document.body.appendChild(cartModal);

// Función para actualizar el carrito en el modal
function updateCart() {
    cartList.innerHTML = '';

    cart.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('cartItem');

        li.innerHTML = `
            <h4>${item.title}</h4>
            <span>Cantidad: ${item.quantity}</span>
            <span>Precio: $${item.price * item.quantity}</span>
            <button class="removeButton" data-id="${item.id}">Eliminar</button>
        `;

        cartList.appendChild(li);
    });

    // Actualizar el total
    const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    totalPriceContainer.textContent = `Total: $${totalPrice}`;

    // Agregar funcionalidad a los botones de eliminar
    document.querySelectorAll('.removeButton').forEach(button => {
        button.addEventListener('click', () => {
            removeFromCart(Number(button.dataset.id));
        });
    });
}

// Función para agregar productos al carrito
function addToCart(product) {
    const productIndex = cart.findIndex(item => item.id === product.id);

    if (productIndex > -1) {
        cart[productIndex].quantity += 1;
    } else {
        cart.push({...product, quantity: 1});
    }

    updateCart();
}

// Función para eliminar productos del carrito
function removeFromCart(productId) {
    const productIndex = cart.findIndex(item => item.id === productId);
    if (productIndex > -1) {
        cart.splice(productIndex, 1);
    }

    updateCart();
}

// Función para completar la compra
function completePurchase() {
    if (cart.length > 0) {
        alert("Compra completada con éxito.");
        cart.length = 0; // Vaciar carrito
        updateCart();
        cartModal.style.display = 'none';
    } else {
        alert("El carrito está vacío.");
    }
}

// Array de productos
const productsItems = [
    { id: 1, img: '../media/opiniones/Bessie.jpg', title: 'Producto 1', description: 'Descripción 1', price: 400 },
    { id: 2, img: '../media/opiniones/Bessie.jpg', title: 'Producto 2', description: 'Descripción 2', price: 500 },
    { id: 3, img: '../media/opiniones/Bessie.jpg', title: 'Producto 3', description: 'Descripción 3', price: 300 },
];

// Renderizar productos
productsItems.forEach(item => {
    const li = document.createElement('li');
    li.classList.add('productItem');

    li.innerHTML = `
        <img src="${item.img}" alt="${item.title}" class="productImg">
        <h3 class="titleProduct">${item.title}</h3>
        <p class="description">${item.description}</p>
        <p class="price">$${item.price}</p>
        <button class="buttonAddtocard">Agregar al Carrito</button>
    `;

    const addButton = li.querySelector('.buttonAddtocard');
    addButton.addEventListener("click", () => addToCart(item));

    productslist.appendChild(li);
});

containerProducts.appendChild(productslist);
container.appendChild(containerProducts);
catalogo.appendChild(container);

// **INTEGRACIÓN CON EL BOTÓN SHOP-BAG**
document.addEventListener("DOMContentLoaded", () => {
    const cartButton = document.getElementById('shop-bag');
    
    if (cartButton) {
        cartButton.addEventListener('click', () => {
            cartModal.style.display = 'block';
        });
    }

    // Cerrar modal al hacer clic en el botón de cerrar
    closeModal.addEventListener('click', () => {
        cartModal.style.display = 'none';
    });

    // Completar compra
    completePurchaseButton.addEventListener('click', completePurchase);

    // Cerrar modal si se hace clic fuera de él
    window.addEventListener('click', (event) => {
        if (event.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });
});


console.log(document.getElementById('shop-bag'))
