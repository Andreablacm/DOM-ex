// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

// - Crea un botón en tu página HTML y añade un evento de click que muestre en la consola el texto del botón al hacer click.

const buttonElement = document.getElementById('button');
const printClick = () => {
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

const h2element = document.getElementById('title2');

const buttonNextElement = document.getElementById('buttonNext');

const buttonPreviusElement = document.getElementById('buttonPrevius');

const words = ['keko', 'ñazo', 'jones', 'nguitos', 'locón'];

let wordCounter = 0;

const previusWord = () => {
  if (wordCounter <= 0) {
    wordCounter = words.length - 1;
  } else {
    wordCounter--;
  }

  h2element.textContent = words[wordCounter];
  SubtitleDisabled();
};

const nextWord = () => {
  if (wordCounter >= words.length - 1) {
    wordCounter = 0;
  } else {
    wordCounter++;
  }
  h2element.textContent = words[wordCounter];
  SubtitleDisabled();
};

buttonNextElement.addEventListener('click', nextWord);
buttonPreviusElement.addEventListener('click', previusWord);

// - Repite el mismo ejercicio pero esta vez desactiva el botón previous si estás en el primer elemento y el botón next si estás en el último

const SubtitleDisabled = () => {
  h2element.textContent = words[wordCounter];
  buttonPreviusElement.disabled = wordCounter === 0;
  buttonNextElement.disabled = wordCounter === words.length - 1;
};

// - Crea un input range con un label, al mover el input range deberá escribir en el label el valor del input range.

const rangeElement = document.getElementById('range');
const labelElement = document.getElementById('label');

const showRangeChange = () => {
  labelElement.textContent = rangeElement.value;
};
rangeElement.addEventListener('input', showRangeChange);
