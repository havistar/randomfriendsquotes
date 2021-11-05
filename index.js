

let btn = document.getElementById('btn').addEventListener('click', () => {
    getQuote();
  });

  fetch('https://friends-quotes-api.herokuapp.com/quotes')
  .then(response => response.json())
  .then(data => {
    console.log(`${data.content} —${data.character}`)
  })