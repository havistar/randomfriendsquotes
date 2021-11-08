

let btn = document.getElementById('btn').addEventListener('click', () => {
    getQuote();
  });
function getQuote(){
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

