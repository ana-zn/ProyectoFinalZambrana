const subscriptionForm = document.getElementById('content-main'); 

//Contenedor del Formulario 
const form = document.createElement('section'); 
form.classList.add('form')

//Titulo y Subititulo 
const contenttext= document.createElement('div'); 
contenttext.classList.add('content-text'); 

//Tiulo
const title = document.createElement('h2'); 
title.textContent = "Where comfort meet flexibility"
//Subitulo
const subtitle = document.createElement('p'); 
subtitle.textContent = "Subscribe to our newsletter and get 30% off your first purchase."

contenttext.appendChild(title); 
contenttext.appendChild(subtitle); 
form.appendChild(contenttext); 

//Envio de Email 
const input = document.createElement('input'); 
input.classList.add('input-text')
input.setAttribute('type', 'email');
input.setAttribute('id', 'email');
input.setAttribute('name', 'email');
input.setAttribute('placeholder', 'Ingrese su Correo Electronico');



//Boton de envio 
const button = document.createElement('button'); 
button.classList.add('second-button'); 
button.textContent = "Enviar";
button.setAttribute('type', 'submit');

form.appendChild(input); 
form.appendChild(button); 
subscriptionForm.appendChild(form); 
