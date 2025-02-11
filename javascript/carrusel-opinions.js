const contentMain = document.getElementById('content-main');

const sectionOpinions = document.createElement('section');
sectionOpinions.classList.add('opinions-section');

const carouselContainer = document.createElement('div');
carouselContainer.classList.add('carousel-container');

const carousel = document.createElement('div');
carousel.classList.add('carousel-opinions');
carouselContainer.appendChild(carousel);
sectionOpinions.appendChild(carouselContainer);

const opinions = [
    { user: "Bessie Cooper", text: "I absolutely love these products! The foundation feels so lightweight and gives me flawless coverage all day long. Highly recommend!", img: "https://via.placeholder.com/100", stars: 5 },
    { user: "John Doe", text: "The lipstick shades are amazing! Long-lasting and smooth application. I'm really impressed.", img: "https://via.placeholder.com/100", stars: 4 },
    { user: "Alice Smith", text: "Great skincare products! My skin feels refreshed and glowing. Will definitely purchase again.", img: "https://via.placeholder.com/100", stars: 5 },
    { user: "Michael Brown", text: "Fantastic products! The quality is top-notch and worth every penny.", img: "https://via.placeholder.com/100", stars: 4 },
    { user: "Emily Davis", text: "I've been using these for weeks and my skin has never felt better!", img: "https://via.placeholder.com/100", stars: 5 },
    { user: "Chris Wilson", text: "Love how smooth and hydrating the lipsticks are. Will buy again!", img: "https://via.placeholder.com/100", stars: 4 },
    { user: "Sophia Martinez", text: "The best beauty products I’ve ever tried!", img: "https://via.placeholder.com/100", stars: 5 },
    { user: "James Taylor", text: "High-quality and long-lasting. I'm very happy with my purchase.", img: "https://via.placeholder.com/100", stars: 4 }
];

opinions.forEach(opinion => {
    const slide = document.createElement('div');
    slide.classList.add('slide');

    const img = document.createElement('img');
    img.src = opinion.img;
    img.alt = opinion.user;

    const title = document.createElement('h3');
    title.textContent = opinion.user;

    const text = document.createElement('p');
    text.textContent = opinion.text;

    const starContainer = document.createElement('div');
    starContainer.classList.add('stars');
    starContainer.textContent = '★'.repeat(opinion.stars) + '☆'.repeat(5 - opinion.stars);

    slide.appendChild(img);
    slide.appendChild(title);
    slide.appendChild(text);
    slide.appendChild(starContainer);
    carousel.appendChild(slide);
});

contentMain.appendChild(sectionOpinions);

let index = 0;
const opinionsPerPage = 4;
const totalSlides = Math.ceil(opinions.length / opinionsPerPage);

function moveCarousel() {
    index++;
    if (index >= totalSlides) {
        index = 0;
    }
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(moveCarousel, 3000);

// CSS Styles
document.head.insertAdjacentHTML('beforeend', `
    <style>

        .carousel-container {
            width: 100%;
            overflow: hidden;
        }
        .carousel-opinions {
            display: flex;
            padding: 0 80px;
            transition: transform 0.5s ease-in-out;
            width: calc(100% * ${totalSlides});
        }
        .slide {
            flex: 1 0 calc(100% / ${opinionsPerPage});
            box-sizing: border-box;
            padding: 10px;
            text-align: center;
            max-width:25%; 
        }
        .slide img {
            border-radius: 50%;
            width: 80px;
            height: 80px;
        }
        .stars {
            font-size: 20px;
            color: gold;
        }
    </style>
`);
