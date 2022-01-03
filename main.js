// Transition accueil.html
let p1 = document.getElementById('1');
let p2 = document.getElementById('2');
let button = document.getElementById('button');

main.onmouseover = (e) => {
  p1.style.transitionDelay = '300ms';
  p2.style.transitionDelay = '2s';
  button.style.transitionDelay ='3500ms';
  p1.style.transitionDuration = '3s';
  p2.style.transitionDuration = '3s';
  button.style.transitionDuration = '3s';
  p1.style.opacity = 1;
  p2.style.opacity = 1;
  button.style.opacity = 1;
  p2.style.marginBottom = '8rem';
}

console.log(enter);

// Get the address of active tab 
let activeTab = window.location.pathname;

// Declare the link box to color
let link;

// Color the active tab name

if (activeTab.includes('index')) {
   link = document.getElementById('index-link');
} else if (activeTab.includes('club')) {
  link = document.getElementById('club-link');
} else if (activeTab.includes('photos')) {
  link = document.getElementById('photos-link');
} else if (activeTab.includes('infos')) {
  link = document.getElementById('infos-link');
  } 

  link.style.backgroundColor = 'white';
  link.style.color = 'black';

  // Uncolor it on :hover
  let navBar = document.getElementById('navbar');
  navBar.onmouseover = function(e) {
    link.style.backgroundColor = 'black';
    link.style.color = 'white';
  }
  navBar.onmouseleave = function(e) {
    link.style.backgroundColor = 'white';
    link.style.color = 'black';
  }
  



