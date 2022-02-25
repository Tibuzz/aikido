
/*
// Get the address of active tab 
const activeTab = window.location.pathname;

// Declare the link box to color
let link;

// Color the active tab name

if (activeTab.includes('aikido.html')) {
   link = document.getElementById('aikido-link');
} else if (activeTab.includes('club')) {
  link = document.getElementById('club-link');
} else if (activeTab.includes('photos')) {
  link = document.getElementById('photos-link');
} else if (activeTab.includes('infos')) {
  link = document.getElementById('infos-link');
  } 

  link.style.backgroundColor = 'white';
  link.style.color = 'black';

// Afficher/masquer les mentions légales

const cadre = document.getElementById('cadreMentionsLégales');
const mentionsLink = document.getElementById('mentions');
const main = document.querySelector('main');

const hide = () => {
  if (getComputedStyle(cadre).display != "none") {
    cadre.style.display = "none";
  } else cadre.style.display = "flex";
};

mentionsLink.addEventListener('click', hide);
main.addEventListener('click', () => {
  if (getComputedStyle(cadre).display != "none") {
    cadre.style.display = "none";
  }});*/


// Effacer div stages passés

const date = new Date();
const stages = document.getElementsByClassName("cadre-affiches");

for (let i = 1; i < stages.length; i++) {
  stages[i].dateStage = new Date(stages[i].getAttribute("date"));
  if (stages[i].dateStage < date) {
      stages[i].remove();
    }
  };

let sorted = stages.sort((a,b) => b.dateStage - a.dateStage);

  console.log(sorted);






