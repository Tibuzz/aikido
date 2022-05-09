// Galleries photo

let photos = document.getElementsByClassName('photos');
let portraits = document.getElementsByClassName('portraits');
let bigPhoto = document.getElementById("bigPhoto");

for (let photo of photos) {
  photo.onclick = () => {
    bigPhoto.src = photo.src;
  }
}

for (let photo of portraits) {
  photo.onclick = () => {
    bigPhoto.src = photo.src;
  }
}


