const url = require('url');

const address = 'https://www.google.com/search?q=marie+antoinett';
const parsedUrl = url.parse(address, true);

console.log('Host:', parsedUrl.host);
console.log('Pathname:', parsedUrl.pathname);
console.log('Query Parameters:', parsedUrl.query);