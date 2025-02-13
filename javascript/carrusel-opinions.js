
const mainCarrusel = document.getElementById("content-main");

// Seccion 
const container = document.createElement('section');
container.classList.add('container')

// Contenedor de tarjetas
const cardWrapper = document.createElement('div');
cardWrapper.classList.add('cardWrapper')

//Lista de tarjetas
const cardlist = document.createElement('ul');
cardlist.classList.add('cardlist')

// Array 
const cardItems = [
    {
        user: "Besie Cooper", 
        text: "I absolutely love these products! The foundation feels so lightweight and gives me flawless coverage all day long. Highly recommend!", 
        img: "../media/opiniones/Bessie.jpg", 
        start: 3, 
    },
    {
        user: "Besie Cooper", 
        text: "I absolutely love these products! The foundation feels so lightweight and gives me flawless coverage all day long. Highly recommend!", 
        img: "../media/opiniones/sarah.jpg", 
        start: 3, 
    }, 
    {
        user: "Besie Cooper", 
        text: "I absolutely love these products! The foundation feels so lightweight and gives me flawless coverage all day long. Highly recommend!", 
        img:"../media/opiniones/Bessie.jpg", 
        start: 3, 
    },
    {
        user: "Besie Cooper", 
        text: "I absolutely love these products! The foundation feels so lightweight and gives me flawless coverage all day long. Highly recommend!", 
        img: "../media/opiniones/Jennie.jpg", 
        start: 3, 
    }
]; 


// Se itera el array 
cardItems.forEach(item => {
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

    li.appendChild(userName);
    li.appendChild(userText);
    cardlist.appendChild(li);
});


cardWrapper.appendChild(cardlist);

container.appendChild(cardWrapper);

main.appendChild(container);