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
  



