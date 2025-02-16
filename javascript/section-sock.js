const sectionsock = document.getElementById('content-main');

const contentsock = document.createElement('section'); 
contentsock.classList.add('contentsock'); 

const contentImage = document.createElement('div'); 
contentImage.classList.add('content-images'); 

const mainImage = document.createElement('img');
mainImage.src = ' media/sectionSock/whitesock.webp'; 
mainImage.alt = 'Medias Antideslizantes Beige';
contentImage.appendChild(mainImage);

const overlayMain = document.createElement('div');
overlayMain.classList.add('overlay-main');

const titleMain = document.createElement('h2');
titleMain.textContent = 'Medias de Pilates Marrones';  
overlayMain.appendChild(titleMain);

const priceMain = document.createElement('p');
priceMain.textContent = '$10.000';  
overlayMain.appendChild(priceMain);

contentImage.appendChild(overlayMain); 

const contentwrapper = document.createElement('div'); 
contentwrapper.classList.add('contentwrapper');

const imageSources = [
    'media/sectionSock/orangesock.webp',
    'media/sectionSock/brownsock.webp'
];

const titles = [
    'Medias Orange Pilates',
    'Medias Chocolate de agarre',
    
];

const prices = [
    '$12.000',
    '$15.000'
];

const texts = [
    'Las medias de pilates están diseñadas para brindar comodidad y estabilidad en cada sesión de entrenamiento. Gracias a su tejido transpirable y elástico, se ajustan perfectamente al pie sin apretar, permitiendo una total libertad de movimiento. Su principal característica es la suela antideslizante, con puntos de silicona estratégicamente distribuidos para proporcionar un excelente agarre.',
    'Fabricadas con materiales de alta calidad las medias de pilates ofrecen suavidad, durabilidad y una óptima transpiración. Su diseño ergonómico se adapta a la anatomía del pie, evitando pliegues o deslizamientos incómodos.'
];

// Creamos los 4 divs: 2 con imágenes y 2 con texto
for (let i = 0; i < 4; i++) {
    const box = document.createElement('div');
    box.setAttribute('id', `box-${i + 1}`);

    if (i < 2) {
        // Divs de imagen
        box.classList.add('image-box');
        const img = document.createElement('img');
        img.src = imageSources[i]; 
        img.alt = 'Imagen ' + (i + 1);

        // Contenedor para el texto de la imagen
        const textOverlay = document.createElement('div');
        textOverlay.classList.add('text-overlay');
        
        const title = document.createElement('h2');
        title.textContent = titles[i];  
        textOverlay.appendChild(title);
        
        const price = document.createElement('p');
        price.textContent = prices[i];  
        textOverlay.appendChild(price);

        box.appendChild(img);
        box.appendChild(textOverlay);
    } else {
        // Divs de texto
        box.classList.add('text-box');
        
        const textDiv = document.createElement('div');
        textDiv.classList.add('text-content');
        textDiv.textContent = texts[i - 2]; // Los textos se asignan a partir de index 2

        box.appendChild(textDiv);
    }

    contentwrapper.appendChild(box);
}

contentsock.appendChild(contentImage);
contentsock.appendChild(contentwrapper);
sectionsock.appendChild(contentsock);
