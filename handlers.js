const quotes = require('./quotes/quotes.json')

function randomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)]
}

function quoteById(n) {
  let quote = Number(n)
  if (quote > quotes.length) {
    return {
      "error": "Specified number exceeds number of quotes. Total number of quotes right now are " + String(quotes.length) + "."
    }
  } else if (!Number.isInteger(quote)) {
    return {
      "error": "That's not a number"
    }
  } else if (quote < 1) {
    return {
      "error": "array starts at 1"
    }
  } else {
    return quotes[n - 1]
  }
}

function randomQuotes(n) {
  let data = []
  let quotesCopy = quotes.slice()
  let amount = Number(n)
  if (amount > quotes.length) {
    return {
      "error": "Specified number exceeds number of quotes. Total number of quotes right now are " + String(quotes.length) + "."
    }
  } else if (!Number.isInteger(amount)) {
    return {
      "error": "That's not a number"
    }
  } else if (amount < 1) {
    return {
      "error": "array starts at 1"
    }
  } else {
    while (data.length < amount) {
      let index = Math.floor(Math.random() * quotesCopy.length)
      data.push(quotesCopy[index])
      quotesCopy.splice(index, 1)
    }
    return data
  }
}

function allQuotes() {
  return quotes
}

module.exports = {
  randomQuote,
  quoteById,
  allQuotes,
  randomQuotes,
}
