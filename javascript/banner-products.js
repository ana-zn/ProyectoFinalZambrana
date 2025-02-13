const main = document.getElementById("content-main");

const containerImages = document.createElement('section');
containerImages.classList.add('containerImages');

const imageslist = document.createElement('ul');
imageslist.classList.add('imageslist');

const images = [
    { img: "../media/bannerImagenes/1.jpg" },
    { img: "../media/bannerImagenes/2.jpg" },
    { img: "../media/bannerImagenes/2.jpg" },
    { img: "../media/bannerImagenes/4.jpg" },
];

images.forEach(item => {
    const li = document.createElement("li");
    li.classList.add("imageItem");

    if (item.img) {
        const img = document.createElement('img');
        img.src = item.img;
        img.alt = item.img;  // Mejor poner el nombre de la imagen como alt
        img.classList.add("userImg");
        li.appendChild(img);
    }

    imageslist.appendChild(li);
});

containerImages.appendChild(imageslist);
main.appendChild(containerImages);
