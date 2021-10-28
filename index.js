let btn = document.getElementById('btn').addEventListener('click', () => {
    getQuote();
  });
  
  const url = "https://parade.com/1213691/alexandra-hurtado/friends-tv-show-quotes/";
  function getQuote(){
     fetch(url)
    .then(function(data) {
           return data.json();
      })
      .then(function(data){    
      document.getElementById("quote").innerHTML = data.content; document.querySelector(".character").innerHTML = "- " + data.character;
     })
   .catch(function(err) {
      console.log(err); 
      });
   }