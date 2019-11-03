const quote = document.getElementById('quote');
const author = document.getElementById('author');
const refresh = document.getElementById('refresh');

async function getRandomQuote() {
  try {
    const response = await fetch(
      'https://rowing-quotes-api.herokuapp.com/random',
    );
    const data = await response.json();
    quote.innerText = data.quote || data.error;
    author.innerText = '—' + (data.author || 'the server');
  } catch (e) {
    quote.innerText = `${e.message}`;
    author.innerText = '';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  getRandomQuote();
});

refresh.addEventListener('click', () => {
  getRandomQuote();
});
