const catalogo = document.getElementById('content-catalogo');


const container = document.createElement('section'); 
container.classList.add('container'); 

// Sección de Filtros
const containerfilter = document.createElement('div');
containerfilter.classList.add('containerFilter');

// Listado de productos
const containerProducts = document.createElement('div');
containerProducts.classList.add('containerProducts');

const productslist = document.createElement('ul');
productslist.classList.add('productslist');

// Array Productos
const productsItems = [
    {
        img: '../media/opiniones/Bessie.jpg',
        title: 'Nombre del Producto',
        description: 'Breve descripción del producto como, talle o colores',
        price: 400,
    },
    {
        img: '../media/opiniones/Bessie.jpg',
        title: 'Nombre del Producto',
        description: 'Breve descripción del producto como, talle o colores',
        price: 400,
    },
    {
        img: '../media/opiniones/Bessie.jpg',
        title: 'Nombre del Producto',
        description: 'Breve descripción del producto como, talle o colores',
        price: 400,
    },
    {
        img: '../media/opiniones/Bessie.jpg',
        title: 'Nombre del Producto',
        description: 'Breve descripción del producto como, talle o colores',
        price: 400,
    },
    {
        img: '../media/opiniones/Bessie.jpg',
        title: 'Nombre del Producto',
        description: 'Breve descripción del producto como, talle o colores',
        price: 400,
    },
    {
        img: '../media/opiniones/Bessie.jpg',
        title: 'Nombre del Producto',
        description: 'Breve descripción del producto como, talle o colores',
        price: 400,
    },
];

productsItems.forEach(item => {
    const li = document.createElement('li');
    li.classList.add('productItem');

    const title = document.createElement('h3');
    title.classList.add('titleProduct');
    title.textContent = item.title;

    if (item.img) {
        const img = document.createElement('img');
        img.src = item.img;
        img.alt = item.title; 
        img.classList.add('productImg');
        li.appendChild(img);
    }

    const description = document.createElement('p');
    description.classList.add('description');
    description.textContent = item.description;

    const price = document.createElement('p');
    price.classList.add('price');
    price.textContent = `$${item.price}`;

    li.appendChild(title);
    li.appendChild(description);
    li.appendChild(price);
    productslist.appendChild(li);
});

containerProducts.appendChild(productslist);
container.appendChild(containerProducts);
container.appendChild(containerfilter);
catalogo.appendChild(container);

