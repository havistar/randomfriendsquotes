let btn = document.getElementById('btn').addEventListener('click', () => {
    getQuote();
  });
  
  const text=document.getElementById("quote");
  const author=document.getElementById("character");
  
  const getQuote = async () =>
  {
      //api for quotes
      var url="https://parade.com/1213691/alexandra-hurtado/friends-tv-show-quotes/";    
  
      // fetch the data from api
      const response=await fetch(url);
      console.log(typeof response);
      //convert response to json and store it in quotes array
      const allQuotes = await response.json();
  
      // Generates a random number between 0 and the length of the quotes array
      const indx = Math.floor(Math.random()*allQuotes.length);
  
      //Store the quote present at the randomly generated index
      const quote=allQuotes[indx].text;
      
      //Store the author of the respective quote
      const character=allQuotes[indx].character;
  
      if(auth==null)
      {
          author = "Anonymous";
      }
   
      //function to dynamically display the quote and the author
      text.innerHTML=quote;
      character.innerHTML="~ "+character;
  
  }
  
  getQuote();