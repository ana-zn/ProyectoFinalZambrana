const mainCarrusel = document.getElementById("content-main");

const container = document.createElement('section');
container.classList.add('container');

const cardWrapper = document.createElement('div');
cardWrapper.classList.add('cardWrapper');

const cardItems = [
    {
        user: "Julieta Aguilera", 
        text: "¡Este conjunto es una maravilla! Se adapta perfectamente al cuerpo, es cómodo y el diseño es precioso. Sin duda, mi favorito para yoga.", 
        img: "media/opiniones/julieta.jpg", 
        start: 4, 
    },
    {
        user: "Candela d'Hiriart", 
        text: "Me encanta la calidad del tejido, es súper suave y elástico. Además, los colores son hermosos y combinan con todo.", 
        img: "media/opiniones/candela.jpg", 
        start: 5, 
    },   
    {
        user: "Sofía Alarcón", 
        text: "La ropa deportiva más elegante y funcional que he usado. Aunque a veces se enrolla durante el ejercicio, eso si el diseño es precioso.", 
        img: "media/opiniones/mariana.jpg", 
        start: 3, 
    },
    {
        user: "Noeli Condo", 
        text: "El ajuste es perfecto y el material transpirable lo hace ideal para mis sesiones de yoga. Se siente como una segunda piel.", 
        img: "media/opiniones/noeli.jpg", 
        start: 5, 
    },
    {
        user: "Victoria Esquivel", 
        text: "Es un conjunto increíblemente cómodo. Se mantiene en su sitio durante toda la práctica y la calidad es espectacular.", 
        img: "media/opiniones/victoria.jpg", 
        start: 4, 
    }, 
    {
        user: "Renata Valverde", 
        text: "Estoy encantada con este conjunto. La tela es súper suave y ligera, ideal para hacer yoga sin sentirme incómoda.", 
        img:"media/opiniones/renata.jpg", 
        start: 3, 
    },
    {
        user: "Luciana Castro", 
        text: "Es el conjunto más cómodo que he probado. La tela es ligera pero de buena calidad, y me permite moverme sin restricciones.", 
        img: "media/opiniones/luciana.jpg", 
        start: 4, 
    },
    {
        user: "Alejandra Navarro", 
        text: "Desde que compré este conjunto, se ha convertido en mi favorito. Es ligero, transpirable y además estiliza la figura.", 
        img: "media/opiniones/alejandra.jpg", 
        start: 5, 
    },
    {
        user: "Samantha Cirio", 
        text: "¡Este conjunto es espectacular! Se adapta perfectamente, la tela es de alta calidad y es ideal para practicar yoga con total comodidad.", 
        img: "media/opiniones/samantha.jpg", 
        start: 5, 
    },
    {
        user: "Amelia Solís", 
        text: "Me encanta la elasticidad y suavidad del tejido. No se marca ni aprieta demasiado, perfecto para cualquier tipo de ejercicio.", 
        img: "media/opiniones/amelia.jpg", 
        start: 4, 
    },
    {
        user: "Bessie Ferrer", 
        text: "Es mi conjunto favorito para yoga. La calidad es impresionante, es transpirable y el diseño es elegante y favorecedor.", 
        img: "media/opiniones/bessie.jpg", 
        start: 5, 
    },
    {
        user: "Clara Maldonado", 
        text: "Lo mejor que he comprado en ropa deportiva. Se mantiene en su sitio, no se desliza y la tela es muy cómoda y resistente.", 
        img: "media/opiniones/clara.jpg", 
        start: 4, 
    },
];


const slidesPerPage = 4;
let currentSlide = 0;

const createStars = (rating) => {
    const starsContainer = document.createElement("div");
    starsContainer.classList.add("stars");

    for (let i = 0; i < 5; i++) {
        const star = document.createElement("span");
        star.classList.add("star");

        
        if (i < rating) {
            star.innerHTML = "<i class='bx bxs-star'></i>"; 
        } else {
            star.innerHTML = "<i class='bx bx-star'></i>"; 
        }
        starsContainer.appendChild(star);
    }

    return starsContainer;
};

const createSlide = (startIndex) => {
    const slide = document.createElement("div");
    slide.classList.add("slide");
    const ul = document.createElement("ul");
    ul.classList.add("cardlist");

    cardItems.slice(startIndex, startIndex + slidesPerPage).forEach(item => {
        const li = document.createElement("li");
        li.classList.add("cardItem");

        const userName = document.createElement("p");
        userName.classList.add("userName");
        userName.textContent = item.user;

        if (item.img) {
            const img = document.createElement('img');
            img.src = item.img;
            img.alt = item.user;
            img.classList.add("userImg");
            li.appendChild(img);
        }

        const userText = document.createElement("p");
        userText.classList.add("userText");
        userText.textContent = item.text;

        // Crear estrellas
        const stars = createStars(item.start);
        li.appendChild(stars);

        li.appendChild(userName);
        li.appendChild(userText);
        ul.appendChild(li);
    });

    slide.appendChild(ul);
    return slide;
};

const createSlides = () => {
    const totalSlides = Math.ceil(cardItems.length / slidesPerPage);
    
    for (let i = 0; i < totalSlides; i++) {
        const slide = createSlide(i * slidesPerPage);
        cardWrapper.appendChild(slide);
    }
};

const nextSlide = () => {
    const slides = cardWrapper.querySelectorAll(".slide");
    
    if (currentSlide < slides.length - 1) {
        slides[currentSlide].classList.remove("active");
        currentSlide++;
    } else {
        slides[currentSlide].classList.remove("active");
        currentSlide = 0;
    }
    
    slides[currentSlide].classList.add("active");
    cardWrapper.style.transform = `translateX(-${100 * currentSlide}%)`;
};

const prevSlide = () => {
    const slides = cardWrapper.querySelectorAll(".slide");
    
    if (currentSlide > 0) {
        slides[currentSlide].classList.remove("active");
        currentSlide--;
    } else {
        slides[currentSlide].classList.remove("active");
        currentSlide = slides.length - 2; 
    }

    slides[currentSlide].classList.add("active");
    cardWrapper.style.transform = `translateX(-${100 * currentSlide}%)`;
};

const prevButton = document.createElement("button");
prevButton.classList.add("prev");
prevButton.innerHTML = "<i class='bx bx-chevron-left'></i>";
prevButton.addEventListener("click", () => {
    prevSlide();
    clearInterval(autoPlayInterval); 
});

const nextButton = document.createElement("button");
nextButton.classList.add("next");
nextButton.innerHTML = "<i class='bx bx-chevron-right'></i>";
nextButton.addEventListener("click", () => {
    nextSlide();
    clearInterval(autoPlayInterval); 
});

container.appendChild(prevButton);
container.appendChild(cardWrapper);
container.appendChild(nextButton);
mainCarrusel.appendChild(container);

createSlides();
cardWrapper.querySelector(".slide").classList.add("active");


const autoPlayInterval = setInterval(nextSlide, 2000);
