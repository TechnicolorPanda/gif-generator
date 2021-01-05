// displays image of bunny upon failure to connect

function errorImage() {
  const img = document.querySelector('img');
  img.src = 'bunny.jpg';
}

// retrieve another animal picture upon selecting 'More Animals' button

function refreshButton() {
  const refresh = document.getElementById('reset');
  refresh.addEventListener('click', getGif);
}

// retrieve defined gif

function searchForGif(searchTerm) {
  const img = document.querySelector('img');
  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=CEm2z9suJ31Eb7jB6G3ZBWDSND8HOECl&s=${searchTerm}`, {
    mode: 'cors',
  })
    .then((response) => response.json())
    .then((response) => {
      img.src = response.data.images.original.url;
    })
    .catch(() => {
      errorImage();
    });
}

// retrieve input of desired search

function defineSearch() {
  const searchTerm = document.getElementById('search').value;
  searchForGif(searchTerm);
}

// selects submit form

function selectSubmit() {
  const submitButton = document.getElementById('submit');
  submitButton.addEventListener('click', () => {
    defineSearch();
  });
}

// activate initial search and inputs

function getGif() {
  const searchTerm = 'animals';
  searchForGif(searchTerm);
  refreshButton();
  selectSubmit();
}

getGif();
