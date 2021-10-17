let btn = document.getElementById('btn').addEventListener('click', () => {
    getQuote();
  });

  fetch('https://parade.com/1213691/alexandra-hurtado/friends-tv-show-quotes/')
  .then(response => response.json())
  .then(data => {
    console.log(`${data.content} —${data.author}`)
  })
  
// index.js
module.exports = () => {
    const data = { users: [] }
    // Create 1000 users
    for (let i = 0; i < 1000; i++) {
      data.users.push({ id: i, name: `user${i}` })
    }
    return data
  }