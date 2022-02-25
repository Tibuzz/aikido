

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
  }});


// Effacer div stages passés

const date = new Date();
let stages = document.getElementsByClassName("cadre-affiches");


for (let i = 1; i < stages.length; i++) {
    stages[i].dateStage = new Date(stages[i].getAttribute("date"));
    if (stages[i].dateStage < date) {
      stages[i].style.display = "none";
    }
  }


// Classer stages par dates

//let sorted = stages.sort((a,b) => b.dateStage - a.dateStage);
const container = document.getElementById("container");
let sorted = Array.from(stages).sort((a, b) => a.dateStage - b.dateStage);
let sorted1 = "";

for (let i = 0; i < sorted.length; i++) {
  sorted1 += sorted[i].outerHTML;
} 
container.innerHTML = sorted1;
console.log(sorted1);






