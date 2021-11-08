

let btn = document.getElementById('btn').addEventListener('click', () => {
    getQuote();
  });
function getQuote(){
    if (this.status === 200) {
        let quotes = JSON.parse(this.responseText);
  
        for (i in quotes) {
          outputQuote = quotes[i].quote;
          outputCharacter = quotes[i].character;
  
          queryNum = 40;
          randomNum = Math.floor(Math.random() * queryNum + 1);
          
    let quotes = Math.floor(Math.random()*quotes.length);

    document.getElementById('output').innerHTML = `
    "${quotes[randomNum].quote}" - ${quotes[randomNum].character} <br>
    ${quotes[randomNum].pic}
    `;
}

fetch ('quotes.json')
.then (function(response){
    return response.json();
})
.then function(data){
    console.log(data)
});

