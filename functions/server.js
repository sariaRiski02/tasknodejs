
const url = require('url');

exports.handler = function(event, context, callback) {
  const queryObject = url.parse(event.path, true).query;
  const radius = queryObject.radius;

  if (radius === undefined) {
    callback(null, {
      statusCode: 400,
      body: 'Error: Please provide a radius parameter in your query string.'
    });
  } else {
    const area = Math.PI * radius ** 2;
    callback(null, {
      statusCode: 200,
      body: `The area of a circle with radius ${radius} is ${area}.`
    });
  }
};
