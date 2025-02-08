
const header = document.getElementById('content-header');

//Contenedor del logo 
const logoContainer = document.createElement('div'); 
logoContainer.classList.add('logo-container'); 

//Logo
const logo = document.createElement('img');
logo.src = '../media/logo.svg'
logo.alt = 'Logo de Pure Bliss '

//Navegación
const nav = document.createElement('nav');
const ul = document.createElement('ul');

//Lista de Enlaces
const links = ['Inicio', 'Nosotros', 'Catalogo', 'Contacto'];
links.forEach(text => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.textContent = text;
  a.href = `#${text.toLowerCase()}`;
  li.appendChild(a);
  ul.appendChild(li);
});

nav.appendChild(ul);

//Contenedor iconos usuario
const iconsContainer = document.createElement('div'); 
iconsContainer.classList.add('iconsContainer'); 


//Elementos 
logoContainer.appendChild(logo); 
header.appendChild(logoContainer);
header.appendChild(nav);
