// Transition accueil.html
let p1 = document.getElementById('1');
let p2 = document.getElementById('2');
let button = document.getElementById('button');

function transition() {
  p1.style.transitionDelay = '300ms';
  p2.style.transitionDelay = '4s';
  p1.style.transitionDuration = '5s';
  p2.style.transitionDuration = '5s';
  p1.style.opacity = 1;
  p2.style.opacity = 1;
}

window.onload = transition;


