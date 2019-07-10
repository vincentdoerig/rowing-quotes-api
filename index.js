const express = require('express')
const rateLimit = require("express-rate-limit")
const {
  randomQuote,
  quoteById,
  allQuotes,
  randomQuotes,
} = require('./handlers');
const app = express();

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 100,
  message: {
    error: 'Too many requests, please try again later.'
  }
});

app.enable("trust proxy");
app.set('json spaces', 4);
app.use(limiter);

app.use(express.static('views'))

app.get('/random', (req, res) => {
  res.json(randomQuote())
})

app.get('/random/:amount', (req, res) => {
  res.json(randomQuotes(req.params.amount))
})

app.get('/all', (req, res) => {
  res.json(allQuotes())
})

app.get('/quote/:id', (req, res) => {
  res.json(quoteById(req.params.id))
})

const port = process.env.PORT || 3333
app.listen(port, () => console.log(`Server listening on port ${port}!`))
