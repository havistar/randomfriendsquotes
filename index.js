
document.addEventListener('DOMContentLoaded', () => {
let btn = document.getElementById('btn').addEventListener('click', () => {
    getQuote();
  });
});

document.addEventListener("click", myFunction);

function myFunction() {
  alert ("I'll be there for you!");
}

  
function getQuote() {
  const xhr = new XMLHttpRequest();
  const url = 'quotes.json';

  xhr.open('GET', url, true);

  xhr.onload = function() {
    if (this.status === 200) {
      let quotes = JSON.parse(this.responseText);
      let quote = response.results;

      for (i in quotes) {
        outputQuote = quotes[i].quote;
        outputCharacter = quotes[i].character;

        queryNum = 40;
        randomNum = Math.floor(Math.random() * queryNum + 1);

        document.getElementById('output').innerHTML = `
        "${quotes[randomNum].quote}" - ${quotes[randomNum].character} <br>
        ${quotes[randomNum].pic}
        `;
      }
    }
  };
  xhr.send();
}