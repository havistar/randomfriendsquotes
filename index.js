
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
      return jsonResponse[Math.floor(Math.random() * jsonResponse.length)];

      document.getElementById('output').innerHTML = `
      "${quotes[randomNum].quote}" - ${quotes[randomNum].character} <br>
      ${quotes[randomNum].pic}
      `;
    })
  }
  
