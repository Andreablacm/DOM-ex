// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

// - Crea un botón en tu página HTML y añade un evento de click que muestre en la consola el texto del botón al hacer click.

const buttonElement = document.getElementById('button');
const printClick = event => {
  console.log(buttonElement.textContent);
};
buttonElement.addEventListener('click', printClick);

// Crea un h1 con el texto "Soy un título ", al ponerte con el ratón encima del h1, deberá cambiar al texto a "Quita de encima!!!" y al quitarte, deberá volver a poner "Soy un título"

const h1Element = document.getElementById('title');

const changeTitle = event => {
  h1Element.textContent = 'Quita de encima!!!';
};

const changeTitle2 = event => {
  h1Element.textContent = 'Soy un título';
};

h1Element.addEventListener('mouseover', changeTitle);
h1Element.addEventListener('mouseout', changeTitle2);

// Agrega un evento de cambio de tamaño de ventana y te muestre por consola el tamaño de la ventana.

const windowSize = event => {
  console.log(event.target.innerHeight, event.target.innerWidth);
};

window.addEventListener('resize', windowSize);

// Crea un p con el texto "esperando entrada de teclado" al pulsar cualquier tecla deberá poner qué tecla has pulsado.

const pText = document.getElementById('text');

const key2 = event => {
  pText.textContent = event.key;
};

window.addEventListener('keydown', key2);

// Crea un array con 5 palabras. Añade un h2 a tu HTML y ponle un id. Añade dos botones con el texto previus y next respectívamente. Haz que los botones cambien el texto del h2 con las palabras del array, cuando llegues a la última volverás a la primera si pulsas next y cuando estés en la primera podrás volver a la última dandole a previous.

const words = ['keko', 'ñazo', 'jones', 'nguitos', 'locón'];

const h2element = document.getElementById('title2');

const buttonNextElement = document.getElementById('buttonNext');

const buttonNext = event => {
  h2element.textContent = words[2];
};

buttonNextElement.addEventListener('click', buttonNext);

// const buttonElement = document.getElementById('button');
// const printClick = event => {
//   console.log(buttonElement.textContent);
// };
// buttonElement.addEventListener('click', printClick);
