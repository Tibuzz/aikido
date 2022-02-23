

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

let date = new Date();
let stages = document.getElementsByClassName("cadre-affiches");
let dateArrStr = [];
let cacher;


for (let i = 0; i < stages.length; i++) {
  let dateStage = stages[i].getAttribute("date");
    if (typeof dateStage == "string") {
      dateArrStr = dateStage.split("/");
      let dateArrNum = [];
      for (let element of dateArrStr) {
        dateArrNum.push(parseInt(element, 10));
      }
      if (dateArrNum[0] < date.getDate() && dateArrNum[1] - 1 == date.getMonth() && dateArrNum[2] == date.getFullYear()) {
        stages[i].remove();
      }
      if (dateArrNum[1] - 1 < date.getMonth() || dateArrNum[2] < date.getFullYear()) {
        stages[i].remove()
      }
    }
  }; 






