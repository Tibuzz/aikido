

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
  } else cadre.style.display = "block";
};

mentionsLink.addEventListener('click', hide);
main.addEventListener('click', () => {
  if (getComputedStyle(cadre).display != "none") {
    cadre.style.display = "none";
  }});


// Supprimer titre et agrandir image dans page infos, stages
 /*
let affiche = document.getElementsByClassName('affiches');
let containerAffiche = document.getElementsByClassName("cadre-affiches");

const bigAffiche = () => {
  affiche.forEach(affiche => {
    affiche.style.display = "none";
  })
}

containerAffiche.forEach(container => {
  container.addEventListener('mouseover', bigAffiche);
});*/



