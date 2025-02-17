// Variables del catálogo y carrito
const catalogo = document.getElementById('content-main');
const container = document.createElement('section');
container.classList.add('container');

// Sección de productos
const containerProducts = document.createElement('div');
containerProducts.classList.add('containerProducts');

const productslist = document.createElement('ul');
productslist.classList.add('productslist');

// Sección de filtros
const filterContainer = document.createElement('div');
filterContainer.classList.add('filterContainer');

const listfilter = document.createElement('ul');

const categories = [
    { id: 'all', name: 'Todos' },
    { id:'tops', name: 'Tops'}, 
    { id: 'tshirts', name: 'Remera'}, 
    { id: 'camperas', name: 'Camperas'},
    { id: 'short', name:'Shorts'}, 
    { id: 'pants', name: 'Pantalones' },
    { id: 'legging', name:'Legging'}, 
    { id: 'bodysuits', name: 'BodySuites'},
    { id: 'calcetines', name: 'Calcetines'}
];

categories.forEach(category => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    
    link.setAttribute('href', `#${category.id}`);
    link.classList.add('filterLink');
    
    const arrowIcon = document.createElement('i');
    arrowIcon.classList.add('bx', 'bx-right-arrow-alt', 'arrow-icon');  

   
    link.appendChild(arrowIcon);
    link.appendChild(document.createTextNode(category.name));

    link.addEventListener('click', (event) => {
        event.preventDefault();  
        filterProducts(category.name); 
    });

    listItem.appendChild(link);
    listfilter.appendChild(listItem);
});

filterContainer.appendChild(listfilter);

// Array de productos
const productsItems = [
    /*Tops*/
    { 
        id: 1, 
        img: '../media/productos/top/top7.jpg',
        title: 'Top Negro con Detalles Blancos', 
        description: 'Deportivo y elegante, con costuras en contraste que estilizan la figura.', 
        price: 16000, 
        category: 'Tops'
    },
    { 
        id: 2, 
        img: '../media/productos/top/top2.webp', 
        title: 'Top Azul Marino', 
        description: 'Cómodo y versátil, y un diseño elegante. Perfecto para yoga, pilates o uso diario', 
        price: 15000, 
        category: 'Tops'
    },
    { 
        id: 3, 
        img: '../media/productos/top/top3.webp',
        title: 'Top Beige Ceñido ', 
        description: 'Tela suave y transpirable. Ideal para entrenamientos o looks deportivos casuales.', 
        price: 13000, 
        category:'Tops'
    },
    { 
        id: 4, 
        img: '../media/productos/top/top4.webp',
        title: 'Top Marrón Oscuro con Tirantes', 
        description: 'Corte clásico con gran soporte y comodidad. Perfecto para moverte con libertad. ', 
        price: 14500, 
        category:'Tops'
    },
    { 
        id: 5, 
        img: '../media/productos/top/top5.jpg',
        title: ' Top Bordó Asimétrico ', 
        description: 'Diseño vanguardista con recortes para un look moderno y atrevido. Brinda sujeción y estilo.', 
        price: 20000, 
        category: 'Tops'
    },
    { 
        id: 6, 
        img: '../media/productos/top/top6.jpg',
        title: ' Top Celeste con Detalles Negros', 
        description: 'Diseño sofisticado con tirantes finos y detalles en contraste. Comodidad y estilo.', 
        price: 19000, 
        category: 'Tops'
    },
    { 
        id: 7, 
        img: '../media/productos/top/top1.webp',
        title: ' Top Deportivo Café ', 
        description: 'Diseño minimalista con tirantes delgados. Ideal para entrenamientos de intensidad', 
        price: 19500, 
        category: 'Tops'
    },
    // Remeras
    { 
        id: 8, 
        img: '../media/productos/remeras/remeras2.jpg', 
        title: 'Celeste manga Larga - Cuello cuadrado', 
        description: 'Remera manga largo, cuello cuadrado. Tela transpirable ideal para entrenamiento largos', 
        price: 19500, 
        category: 'Remera' 
    },
    
    { 
        id: 9, 
        img: '../media/productos/remeras/remeras.webp', 
        title: 'Remera manga corta - Terracota', 
        description: 'Remera manga corta cuello redondo, color terracota; tela transpirable', 
        price: 18000, 
        category: 'Remera' 
    },
    { 
        id: 10, 
        img: '../media/productos/remeras/remeras5.webp', 
        title: 'Remera manga larga - cuello bote ', 
        description: 'Remera manga larga, cuello bote. Con tela transpirable y mangas fruncidas', 
        price: 22000, 
        category: 'Remera' 
    },
    { 
        id: 11, 
        img: '../media/productos/remeras/remeras1.webp', 
        title: 'Remera manga larga - Rosa', 
        description: 'Remera manga larga, con abertura en los pulgares. Ideal para pilates y yoga', 
        price: 17000, 
        category: 'Remera' 
    },
    { 
        id: 12, 
        img: '../media/productos/remeras/remeras6.jpg', 
        title: 'Remera traslucida Celeste', 
        description: 'Remera manga larga traslucida, diseño moderno ideal para usar con top debajo', 
        price: 19000, 
        category: 'Remera' 
    },

    //camperas
    { 
        id: 13, 
        img: '../media/productos/camperas/camperas.jpg', 
        title: 'Campera Rompeviento Violeta', 
        description: 'Diseño ligero y transpirable con secado rápido, con bolsillos y regulador ', 
        price: 88000, 
        category: 'Camperas' 
    },
    { 
        id: 14, 
        img: '../media/productos/camperas/camperas2.jpg', 
        title: 'Campera cuello alto - Verde Pastel', 
        description: 'Camper cuello alto, ideal para cualquier clima. Diseño moderno y elegante', 
        price: 96000, 
        category: 'Camperas' 
    },
    { 
        id: 15, 
       img: '../media/productos/camperas/camperas3.jpg', 
        title: ' Campera tonos pasteles', 
        description: 'Diseño dinámico con recortes y colores. Incorpora cordones regulables.', 
        price: 85000, 
        category: 'Camperas' 
    },
    { 
        id: 16, 
        img: '../media/productos/camperas/camperas4.jpg', 
        title: 'Campera Rompeviento en Violeta, Naranja y Verde', 
        description: 'Combinación armoniosa de tonos pastel, ligera y cómoda. Ideal para quienes buscan estilo.', 
        price: 100000, 
        category: 'Camperas' 
    },
    //Pantalones
    { 
        id: 18, 
        img: '../media/productos/pantalones/pantalones2.jpg',  
        title: 'Pantalón Verde con Rayas', 
        description: 'Ligero y transpirable, perfecto para entrenamientos o uso diario. ', 
        price: 35000, 
        category: 'Pantalones' 
    }, 
    { 
        id: 17, 
        img: '../media/productos/pantalones/pantalones1.jpg',  
        title: 'Pantalón Cargo con Bolsillos Chocolate', 
        description: 'Cómodo y resistente, con un diseño funcional que incluye bolsillos laterales.', 
        price: 38000, 
        category: 'Pantalones' 
    },
    { 
        id: 19, 
        img: '../media/productos/pantalones/pantalones3.jpg',  
        title: 'Pantalón Azul con Rayas', 
        description: 'Diseño moderno con detalles a rayas diseño vanguardista. Tela de secado rápido.', 
        price: 37000, 
        category: 'Pantalones' 
    },
    { 
        id: 20, 
        img: '../media/productos/pantalones/pantalones4.jpg',  
        title: 'Pantalón con Reguladores ', 
        description: 'Versátil y funcional, con tiras ajustables para un calce personalizado.', 
        price: 42000, 
        category: 'Pantalones' 
    },
    //Shorts
    { 
        id: 21, 
        img: '../media/productos/short/short.jpg', 
        title: 'Short Avionero - Verde', 
        description: 'Ligero, resistente y de secado rápido. Su diseño suelto permite máxima movilidad y confort. ', 
        price: 16000, 
        category: 'Shorts' 
    },
    { 
        id: 22, 
        img: '../media/productos/short/short2.webp', 
        title: 'Short Calza Pantalón', 
        description: 'Calza de tejido elástico y transpirable brinda sujeción sin limitar el movimiento.', 
        price: 18000, 
        category:'Shorts' 
    },
    { 
        id: 23, 
        img: '../media/productos/short/short3.jpg', 
        title: ' Short Burdeos', 
        description: 'Cintura alta y compresión media para mayor soporte. Su tela suave y flexible es ideal.', 
        price: 18000, 
        category: 'Shorts' 
    },
    { 
        id: 24, 
        img: '../media/productos/short/short4.jpg',   
        title: ' Short Calza Seamless', 
        description: 'Ajuste perfecto, se adapta al cuerpo como una segunda piel. Comodidad total y máxima libertad. ', 
        price: 19000, 
        category: 'Shorts' 
    },
    //legging
    { 
        id: 25, 
        img: '../media/productos/legging/leggings.webp', 
        title: 'Leggings Rojos Rendimiento', 
        description: 'Aporta energía al entrenamiento, leggings de compresión que brindan sujeción y flexibilidad', 
        price:28000, 
        category: 'Legging' 
    },
    { 
        id: 26, 
        img: '../media/productos/legging/leggings2.jpg', 
        title: 'Leggings Negros con Transparencias', 
        description: 'Diseño elegante y moderno con paneles de malla para mayor ventilación, ajuste perfecto.', 
        price: 32000, 
        category: 'Legging' 
    },
    { 
        id: 27, 
        img: '../media/productos/legging/leggings3.jpg', 
        title: 'Leggings Beige Seamless', 
        description: 'Diseño sin costuras que se adapta como una segunda piel. Ultra cómodos y perfectos.', 
        price: 38000, 
        category: 'Legging' 
    },
    { 
        id: 28, 
        img: '../media/productos/legging/leggings4.jpg', 
        title: 'Leggings Marrones Soft Touch', 
        description: 'Suaves y cómodos, con cintura alta para mejor sujeción. Ideales para yoga o pilates.', 
        price: 37000, 
        category: 'Legging' 
    },
    // BodysSuites
    { 
        id: 29, 
        img: '../media/productos/bodysuit/bodysuit1.jpg',
        title:  'Bodysuit Manga Larga con Frunce ',
        description: 'Con ajuste perfecto que realza la postura. Ideal para ejercicios de elongación y equilibrio', 
        price: 50000, 
        category: 'BodySuites' 
    },
    { 
        id: 30, 
        img: '../media/productos/bodysuit/bodysuit2.jpg',
        title: 'Bodysuit Negro de Tirantes ', 
        description: 'Estilizado y ajuste ceñido para máxima flexibilidad. Ideal para entrenamientos de bajo impacto', 
        price: 48000, 
        category: 'BodySuites' 
    },
    { 
        id: 31, 
        img: '../media/productos/bodysuit/bodysuit3.jpg',
        title: 'BodySuit Manga Larga + Short', 
        description: 'Suave, ligero y transpirable, perfecto para moverte con libertad', 
        price: 42000, 
        category: 'BodySuites' 
    },
    { 
        id: 32, 
        img: '../media/productos/bodysuit/bodysuit4.jpg',
        title: 'Bodysuit sin Costuras', 
        description: 'Confeccionado en tela de secado rápido y con ajuste perfecto que realza la postura.', 
        price: 45000, 
        category: 'BodySuites' 
    },
    //Medias
    { 
        id: 33, 
        img: '../media/productos/calcetines/calcetines1.webp', 
        title: 'Calcetines de agarre - Burdeos', 
        description: 'Elegantes, suaves, acolchados y con suela antideslizante para mayor estabilidad', 
        price: 9000, 
        category: 'Calcetines' 
    },
    { 
        id: 34, 
        img: '../media/productos/calcetines/calcetines2.webp', 
        title: 'Calcetines de pilates - Terracota', 
        description: 'Calcetines antideslizantes color naranja. Cómodos, transpirables y con excelente agarre', 
        price: 8000, 
        category: 'Calcetines' 
    },
    { 
        id: 35, 
        img:  '../media/productos/calcetines/calcetines3.webp', 
        title: 'Calcetines de Pilates - Beige', 
        description: 'Discreción y confort en un solo diseño. Elaborados con tejido transpirable y refuerzos.', 
        price: 7500, 
        category: 'Calcetines' 
    },
    { 
        id: 36, 
        img:  '../media/productos/calcetines/calcetines4.webp', 
        title: 'Calcetines de Pilates - Blanco',  
        description: 'Clásicos y modernos a la vez. Su diseño y su suela antideslizante te garantizan seguridad y estilo', 
        price: 9500, 
        category: 'Calcetines' 
    },
];

// Array para carrito de compras
let cart = [];

// Renderizar productos
function renderProducts(products) {
    productslist.innerHTML = '';
    products.forEach(item => {
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
}

// Función filtrar 
function filterProducts(category) {
    if (category === 'Todos') {
        renderProducts(productsItems);
    } else {
        const filteredProducts = productsItems.filter(product => product.category === category);
        renderProducts(filteredProducts);
    }
}

// Agregar productos al carrito
function addToCart(product) {
    cart.push(product);
    console.log("Carrito:", cart);
    alert(`${product.title} agregado al carrito.`);
}

// Renderizar productos inicialmente
renderProducts(productsItems);

containerProducts.appendChild(productslist);
container.appendChild(filterContainer);
container.appendChild(containerProducts);
catalogo.appendChild(container);
