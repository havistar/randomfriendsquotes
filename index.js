
  
 let quote = document.getElementById("quote");
 let character = document.getElementById("character");
 let btn = document.getElementById("btn");

 const url = "quotes.json";

 let getQuote = () => {
     fetch(url)
     .then((data) => data.json())
     .then((item) => {
         quote.innerText = item.content;
         character.innerText = item.character;
         
         document.getElementById('output').innerHTML = `
         "${quotes[randomNum].quote}" - ${quotes[randomNum].character} <br>
         ${quotes[randomNum].pic}
         `;
     });
 };

 window.addEventListener("load", getQuote);
 btn.addEventListener("click", getQuote);