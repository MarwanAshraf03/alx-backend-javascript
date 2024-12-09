const http = require('http');

const app = http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello ALX!');
  })
  .listen(1245);

module.exports = app;
