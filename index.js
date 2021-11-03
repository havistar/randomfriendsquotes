var audio = new Audio('https://www.soundboard.com/handler/DownLoadTrack.ashx?cliptitle=I%27ll+be+there+for+you&filename=mt/MTgyODQzMjIxODI5MDI_2PVZSjTrosA.mp3');
audio.play();

let btn = document.getElementById('btn').addEventListener('click', () => {
    getQuote();
  });

  const url = "https://friends-quotes-api.herokuapp.com/quotes";
function getQuote(){
   fetch(url)
  .then(function(data) {
         return data.json();
    })
    .then(function(data){    
    document.getElementById("quote").innerHTML = data.content; 
    document.querySelector(".character").innerHTML = "- " + data.character;
   })
 .catch(function(err) {
    console.log(err); 
    });
 }
