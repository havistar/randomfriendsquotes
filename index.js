var audio = new Audio('https://www.soundboard.com/handler/DownLoadTrack.ashx?cliptitle=I%27ll+be+there+for+you&filename=mt/MTgyODQzMjIxODI5MDI_2PVZSjTrosA.mp3');
audio.play();

let btn = document.getElementById('btn').addEventListener('click', () => {
    getQuote();
  });

  fetch('https://friends-quotes-api.herokuapp.com/quotes')
  .then(response => response.json())
  .then(data => {
    console.log(`${data.content} —${data.character}`)
  })