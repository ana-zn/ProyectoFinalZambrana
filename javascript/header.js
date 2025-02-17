document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("content-header");

  const sectionheader = document.createElement('section');
  sectionheader.classList.add('sectionheader'); 

  // Logo
  const logoContainer = document.createElement("div");
  logoContainer.classList.add("logo-container");

  const logo = document.createElement("img");
  logo.src = "./media/logo.svg";
  logo.src = "media/logo.svg";
  logo.alt = "Logo de Pure Bliss";

  // Navegación
  const nav = document.createElement("nav");
  nav.classList.add('container-navbar');
  const ul = document.createElement("ul");
  ul.classList.add('container-list');

  // Lista de Enlaces
  const links = [
    { text: "Inicio", href: "../index.html" },
    { text: "Nosotros", href: "nosotros.html" },
    { text: "Catalogo", href: "./html/catalogo.html" },
    { text: "Contacto", href: "contacto.html" }
  ];

  links.forEach((link) => {
    const li = document.createElement("li");
    li.classList.add('list-items');
    const a = document.createElement("a");
    a.textContent = link.text;
    a.href = link.href;
    li.appendChild(a);
    ul.appendChild(li);
  });

  nav.appendChild(ul);

  // Contenedor de iconos de usuario
  const iconsContainer = document.createElement("div");
  iconsContainer.classList.add("iconsContainer");

  // Botón del carrito
  const cartButton = document.createElement("button");
  cartButton.classList.add("button");
  cartButton.id = 'shop-bag';
  cartButton.innerHTML = "<i class='bx bx-shopping-bag'></i>";
  const searchButton = document.createElement("button");
  searchButton.classList.add('button');
  searchButton.innerHTML = "<i class='bx bx-search-alt-2'></i>";
  iconsContainer.appendChild(searchButton); 
  iconsContainer.appendChild(cartButton);

  // Agregar elementos al header
  logoContainer.appendChild(logo);
  sectionheader.appendChild(logoContainer);
  sectionheader.appendChild(nav);
  sectionheader.appendChild(iconsContainer);
  header.appendChild(sectionheader); 

  // --- Efectos de Scroll ---
  let lastScrollTop = 0;
  window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY;

    if (scrollTop > 50) {
        header.classList.add("bgc");
    } else {
        header.classList.remove("bgc");
    }

    if (scrollTop > lastScrollTop) {
        header.style.opacity = "0"; 

    } else {
        header.style.opacity = "1"; 
        
    }

    lastScrollTop = scrollTop;
  });

  setTimeout(() => {
    nav.style.opacity = "1";
    nav.style.transform = "translateY(0)";
  }, 300); 

  
  document.querySelectorAll("nav a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      
      
      if (href.startsWith("#")) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 50, 
            behavior: "smooth",
          });
        }
      }
     
    });
  });
});
