const main = document.getElementById("content-main");

const containerImages = document.createElement('section');
containerImages.classList.add('containerImages');

const imageslist = document.createElement('ul');
imageslist.classList.add('imageslist');

const images = [
    { img: "../media/bannerImagenes/1.jpg", span1Text: "Top de manga larga Beige $55.999", span2Text: "Leggings de tiro alto Beige $62.999" },
    { img: "../media/bannerImagenes/2.jpg", span1Text: "Top Marron $45.999", span2Text: "Leggings de tiro alto Marron $88.999 " },
    { img: "../media/bannerImagenes/3.jpg", span1Text: "Leggings transparencias en laterales $95.999", span2Text: "Top Deportivo Negro $55.999" },
    { img: "../media/bannerImagenes/4.jpg", span1Text: "Top Terracota, tirantes anchos $55.999", span2Text: "Leggings de tiro alto Terracota $55.999" },
];

images.forEach((item, index) => {
    const li = document.createElement("li");
    li.classList.add("imageItem");

    if (item.img) {
        const img = document.createElement('img');
        img.src = item.img;
        img.alt = `Imagen ${index + 1}`;  
        img.classList.add("userImg");
        li.appendChild(img);

        
        const div1 = document.createElement("button");
        div1.classList.add("div1", "myButton");
        div1.id = `div1-${index}`;
        div1.setAttribute("data-tippy-content", item.span1Text);
        
        const span1 = document.createElement("span");
        span1.classList.add("span1");
        span1.textContent = item.span1Text;
        
        div1.appendChild(span1);

      
        const div2 = document.createElement("button");
        div2.classList.add("div2", "myButton");
        div2.id = `div2-${index}`;
        div2.setAttribute("data-tippy-content", item.span2Text);

        const span2 = document.createElement("span");
        span2.classList.add("span2");
        span2.textContent = item.span2Text;

        div2.appendChild(span2);
        li.appendChild(div1);
        li.appendChild(div2);
    }

    imageslist.appendChild(li);
});

containerImages.appendChild(imageslist);
main.appendChild(containerImages);


document.addEventListener("DOMContentLoaded", () => {
    tippy('.myButton');
});
