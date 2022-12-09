// Transition accueil.html
const p1 = document.getElementById('1');
const p2 = document.getElementById('2');
const button = document.getElementById('button');

function transition() {
  p1.style.transitionDelay = '300ms';
  p2.style.transitionDelay = '4s';
  p1.style.transitionDuration = '5s';
  p2.style.transitionDuration = '5s';
  p1.style.transitionProperty = 'opacity';
  p2.style.transitionProperty = 'opacity';
  p1.style.opacity = 1;
  p2.style.opacity = 1;
  button.style.transitionDelay = '2s';
  button.style.transitionDuration = '3s';
  button.style.transitionProperty = 'opacity';
  button.style.opacity = 1;
}

window.onload(transition());


