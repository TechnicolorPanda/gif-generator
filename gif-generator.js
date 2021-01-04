function getGif() {
  const img = document.querySelector('img');
  fetch('https://api.giphy.com/v1/gifs/translate?api_key=CEm2z9suJ31Eb7jB6G3ZBWDSND8HOECl&s=animals', {
    mode: 'cors',
  })
    .then((response) => response.json())
    .then((response) => {
      img.src = response.data.images.original.url;
    })
    .catch((response) => {
      console.log('error');
    });
  refreshButton();
}

function refreshButton() {
  const refresh = document.getElementById('reset');
  refresh.addEventListener('click', refreshPage);
}

function refreshPage() {
  getGif();
}

getGif();
