const sectionAboutUs = document.getElementById('content-main');

// Contenedor del titular 

const sectionmain = document.createElement('section');
sectionmain.classList.add('sectionmain');

const maintext = document.createElement('div');
maintext.classList.add('maintext');

const textContainer = document.createElement('div');
textContainer.classList.add('text-container');

const heading = document.createElement('h2');
heading.textContent = 'Sobre Nosotros';

const paragraph = document.createElement('p');
paragraph.textContent = 'En PureBliss, creemos que la ropa es más que una prenda: es una extensión de la comodidad, la libertad y el bienestar en cada movimiento. Nos especializamos en la creación de ropa para yoga y pilates, combinando diseño, funcionalidad y sostenibilidad. Cada pieza está pensada para brindar suavidad, elasticidad y soporte, acompañando a quienes buscan equilibrio entre cuerpo y mente. Nuestro compromiso va más allá de la moda; promovemos un estilo de vida consciente, donde la calidad y la responsabilidad ambiental son esenciales. Utilizamos materiales sostenibles y procesos éticos para ofrecer productos que respeten tanto a las personas como al planeta. En PureBliss, nos inspira la armonía del movimiento y la conexión con uno mismo. En PureBliss, creemos que la ropa es más que una prenda: es una extensión de la comodidad, la libertad y el bienestar en cada movimiento. Nos especializamos en la creación de ropa para yoga y pilates, combinando diseño, funcionalidad y sostenibilidad.';

textContainer.appendChild(heading);
textContainer.appendChild(paragraph);

const imageContainer = document.createElement('div');
imageContainer.classList.add('image-container');

const image1 = document.createElement('img');
image1.src = '../media/nosotros/1.jpg';


const image2 = document.createElement('img');
image2.src = '../media/nosotros/2.jpg';


imageContainer.appendChild(image1);
imageContainer.appendChild(image2);

maintext.appendChild(textContainer);
maintext.appendChild(imageContainer);
sectionmain.appendChild(maintext);

//Seccion de valores, mision y vision 
let sectionInfo = document.getElementById('sectionInfo');
if (!sectionInfo) {
    sectionInfo = document.createElement('section');
    sectionInfo.classList.add('sectionInfo'); 
}

const images = [
    '../media/nosotros/mision.jpg',
    '../media/nosotros/vision.jpg',
    '../media/nosotros/valores.jpg',
];

const texts = [
    { title: 'Misión', content: 'En PureBliss, nos dedicamos a ofrecer ropa cómoda y de alta calidad diseñada para yoga y pilates. Nuestra misión es brindar a nuestras clientas la confianza y el bienestar que necesitan para conectar con su cuerpo y mente durante cada sesión. Nos comprometemos a crear productos que apoyen un estilo de vida saludable y activo, con tejidos sostenibles y diseños funcionales. Queremos que cada prenda sea una extensión natural de cada movimiento.' },
    { title: 'Visión', content: 'Nuestra visión es ser una marca líder en ropa deportiva para yoga y pilates, conocida por nuestra dedicación al bienestar físico y emocional. Buscamos inspirar a mujeres de todo el mundo a llevar una vida plena, promoviendo comodidad, rendimiento y conexión con el presente. En PureBliss, creemos que cada postura puede ser una experiencia consciente y transformadora. Nos vemos como parte de un futuro más saludable y equilibrado.' },
    { title: 'Valores', content: 'Valoramos la comodidad, creando ropa que permita libertad de movimiento en cada práctica. La sostenibilidad es esencial para nosotros, utilizando materiales responsables con el medio ambiente. Promovemos el empoderamiento, buscando que nuestras clientas se sientan seguras y fuertes. Finalmente, fomentamos la conexión entre cuerpo, mente y espíritu, ofreciendo productos que acompañan esa armonía.' }
];

for (let i = 0; i < 3; i++) {
    const imageDiv = document.createElement('div');
    imageDiv.classList.add('content-image');
    imageDiv.id = `image-${i + 1}`;
    
    const image = document.createElement('img');
    image.src = images[i];
    image.alt = `Imagen ${i + 1}`;
    
    imageDiv.appendChild(image);
    sectionInfo.appendChild(imageDiv);

    const textDiv = document.createElement('div');
    textDiv.classList.add('content-text');
    textDiv.id = `text-${i + 1}`;

    const title = document.createElement('h3');
    title.textContent = texts[i].title;

    const paragraph = document.createElement('p');
    paragraph.textContent = texts[i].content;

    textDiv.appendChild(title);
    textDiv.appendChild(paragraph);
    sectionInfo.appendChild(textDiv);
}


sectionAboutUs.appendChild(sectionmain); 
sectionAboutUs.appendChild(sectionInfo);
