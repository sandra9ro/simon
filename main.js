'use strict';
console.log('Vamos a simonear :D');

const board = document.querySelector('.js-board');
// const button = document.querySelector('.js-button');
const startButton = document.querySelector('.js-start-button');

// https://www.youtube.com/watch?v=nWCRCwB3kfg => video para poner audio




// const showEvent = function(ev){
//   console.log('click en: ', ev.target.attributes.color.value);
   
// }

// board.addEventListener('click', showEvent);

//Comparar botón tocado con otro número


// const compare = function(ev){
//   if(parseInt( ev.target.attributes.color.value) === 3){
//     console.log('es amarillo!!!');
    
//   }else if(parseInt(ev.target.attributes.color.value) === 2){
//     console.log('Es rojo!!!!');
    
//   }
// }

// board.addEventListener('click', compare);


// comparar los botones tocados con un array
let secuence = [];
let playerSecuence = [];
function checkSecuence(ev){
  let color = parseInt(ev.target.attributes.color.value);
  let turn = playerSecuence.length;
  playerSecuence.push(color);
  console.log('secuencia del jugador: ', playerSecuence, 'turno: ', turn);
  if(secuence.length > playerSecuence.length && color === secuence[turn]){
    console.log('Síiiiiiiiiiiiii');    
  }else if(secuence.length === playerSecuence.length && color === secuence[turn]){
    console.log('Sí. Añadir otro color a la secuencia');    
  }else{
    console.log('Fin de la partida');
  }  
}

// Generación del número aleatorio y de la secuencia del juego

const addNewColor = function(){
  let randomNumber = Math.ceil(Math.random()*4);
  secuence.push(randomNumber);
  console.log('secuence: ', secuence); 
  playerSecuence = [];
}


// Inicio del juego

const beginTheGame = function(){
  playerSecuence = [];
  // secuence = [];
  // console.log('número aleatorio: ', randomNumber);
  
  board.addEventListener('click', checkSecuence);
  addNewColor();
}


// Función para que se ilumine el botón al presionarlo

const lightUpButton = function(ev){
  console.log('evento: ', ev.target);
  
  ev.target.classList.add('touched');
  const finishLightUp = ()=>{
    ev.target.classList.remove('touched');
    console.log('quitado');
    
  }
  setTimeout(finishLightUp, 300);
}

board.addEventListener('click', lightUpButton);


startButton.addEventListener('click', beginTheGame);