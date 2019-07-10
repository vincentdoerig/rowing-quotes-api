# Rowing Quotes API

> An API for quotes related to rowing created with Node.js.

## Install

```console
$ yarn install
```

## Usage

### Get a random quote

Returns a single random quote from the database

#### Request
```http
https://rowing-quotes-api.herokuapp.com/random
```
#### Response
```ts
{
    "id": number,
    "quote": string,
    "author": string,
    "additionalInfo": string
}
```

### Get x amount of quotes
```http
https://rowing-quotes-api.herokuapp.com/random/:amount
```

### Get the quote with the id of x
```http
https://rowing-quotes-api.herokuapp.com/quote/:id
```

### Get all the available quotes
```http
https://rowing-quotes-api.herokuapp.com/all
```


## Examples

**Get a random quote using fetch**

```js
fetch('https://rowing-quotes-api.herokuapp.com/random')
  .then(response => response.json())
  .then(data => {
    console.log(`${data.quote} —${data.author}`)
  })
```

**Get a random quote unsing async/await**

```js
async function randomQuote() {
  const response = await fetch('https://rowing-quotes-api.herokuapp.com/random')
  const data = await response.json()
  console.log(`${data.quote} —${data.author}`)
}
```

## Deployment

```console
$ yarn start
```

## Development

```console
$ yarn dev
```

## Contributing

Pull requests and feedback are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://github.com/vincentdoerig/rowing-quotes-api/blob/master/LICENSE)
