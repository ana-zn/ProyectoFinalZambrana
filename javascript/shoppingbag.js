function openModal() {
	const cartModal = document.createElement("div");
	cartModal.id = "cartModal";
	cartModal.classList.add("cartModal");

	const cartContent = document.createElement("div");
	cartContent.classList.add("cartModal-content");

	const contentCard = document.createElement("div");
	contentCard.classList.add("content-card");

	const closee = document.createElement("div")
	contentCard.classList.add("closeModal"); 
	closee.innerHTML=` <button onclick="closeModal()"><i class='bx bx-x'></i></button>`

	const title = document.createElement("h2");
	title.classList.add("titleModal");
	title.textContent = "Carrito de Compras";

	const cartItems = document.createElement("div");
	cartItems.id = "cartItems";

	const totalContainer = document.createElement("div");
	totalContainer.classList.add("totalPriceContainer");
	totalContainer.innerHTML = `
        <p>Total: $<span id="totalPrice">0</span></p>
        <button onclick="closeModal()">Cerrar</button>
    `;
	
	contentCard.appendChild(closee)
	contentCard.appendChild(title);
	contentCard.appendChild(cartItems);
	cartContent.appendChild(contentCard);
	cartContent.appendChild(totalContainer);
	cartModal.appendChild(cartContent);
	document.body.appendChild(cartModal);

	setTimeout(() => {
		cartModal.classList.add("active");
	}, 10);

	renderCart();
}

function closeModal() {
	const cartModal = document.getElementById("cartModal");
	if (cartModal) {
		cartModal.classList.remove("active");
		setTimeout(() => {
			cartModal.remove();
		}, 300);
	}
}

function renderCart() {
	let cartContainer = document.getElementById("cartItems");
	cartContainer.innerHTML = "";
	let total = 0;

	cart.forEach((item, index) => {
		total += item.price * (item.quantity || 1);

		let productDiv = document.createElement("div");
		productDiv.classList.add("product");

		productDiv.innerHTML = `
		<span>${item.title} - $${item.price} </span>
		<button onclick="addProduct(${index})">+</button>
		<span>${item.quantity || 1}</span>
		<button onclick="removeProduct(${index})">-</button>
		<span> = $${(item.price * (item.quantity || 1)).toFixed(2)}</span>
	`;
	cartContainer.appendChild(productDiv);
	

	});

	document.getElementById("totalPrice").textContent = total.toFixed(2);
}

function addProduct(index) {
	if (cart[index]) {
		cart[index].quantity = (cart[index].quantity || 1) + 1;
		renderCart();
	}
}

function removeProduct(index) {
	if (cart[index]) {
		if (cart[index].quantity > 1) {
			cart[index].quantity--;
		} else {
			cart.splice(index, 1);
		}
		renderCart();
	}
}
