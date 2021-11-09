
let btn = document.getElementById('btn').addEventListener('click', () => {
    getQuote();
  });
  
  function getQuote() {
    return fetch('quotes.json').then(response => {
      return response.json()
    }).then(jsonResponse => {
      if (!jsonResponse.length) {
        return []
      }
      return jsonResponse[Math.floor(Math.random() * jsonResponse.length)]
    })
  }
  
  getQuote().then(quote => {
    const text = quote.text;
    const character = quote.character;
    console.log(text, character)
  })

  function getQuote() {
    if (this.status === 200) {
      let quotes = JSON.parse(this.responseText);

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

 window.addEventListener("load", getQuote);
 btn.addEventListener("click", getQuote)