'use strict';
console.log('veamos si funciona');

const button1 = document.querySelector('.js-button1');
const button2 = document.querySelector('.js-button2');
const button3 = document.querySelector('.js-button3');
const button4 = document.querySelector('.js-button4');



var context = new AudioContext();

function jsNota(frecuencia){
  var o = context.createOscillator();
 const g = context.createGain();
  o.connect(g);
  o.type = "sawtooth";
  o.frequency.value = frecuencia;
  g.connect(context.destination);
  o.start(0);
  g.gain.exponentialRampToValueAtTime(0.00001,context.currentTime +1);
}

const jsNota1 = function(){
  jsNota(174.614);
} 
const jsNota2 = function(){
  jsNota(195.998);
} 
const jsNota3 = function(){
  jsNota(220.000);
} 
const jsNota4 = function(){
  jsNota(246.942);
} 


button1.addEventListener('click', jsNota1);
button2.addEventListener('click', jsNota2);
button3.addEventListener('click', jsNota3);
button4.addEventListener('click', jsNota4);
