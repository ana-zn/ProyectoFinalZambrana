const sectionhero = document.getElementById('content-main'); 

// Sección del banner principal 
const bannerhero = document.createElement('section'); 
bannerhero.classList.add('bannerhero'); 

const content = document.createElement('div'); 
content.classList.add('content'); 

const titlebanner = document.createElement('h1'); 
titlebanner.classList.add('titlebanner'); 
titlebanner.innerHTML = ('Comodidad y flexibilidad en uno');

const buttonhero = document.createElement('button'); 
buttonhero.classList.add('buttonhero'); 
buttonhero.innerHTML = ('Comprar Ahora'); 

content.appendChild(titlebanner); 
content.appendChild(buttonhero); 
bannerhero.appendChild(content); 

// Agregar banner al contenedor principal sectionhero
sectionhero.appendChild(bannerhero);
