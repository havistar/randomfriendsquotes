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
 // Repeat generateQuote() every 10 seconds
setInterval(generateQuote() ,10000);
//Note - 10000 milliseconds = 10