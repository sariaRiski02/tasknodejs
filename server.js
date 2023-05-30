const express = require('express');
const url = require('url');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const queryObject = url.parse(req.url, true).query;
  const radius = queryObject.radius;

  if (radius === undefined) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Error: Please provide a radius parameter in your query string.\n');
  } else {
    const area = Math.PI * radius ** 2;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`The area of a circle with radius ${radius} is ${area}.\n`);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
