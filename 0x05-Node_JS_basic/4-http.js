const http = require('http');

const app = http
  .createServer((req, res) => {
    if (req.url === '/') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello ALX!');
    } else if (req.url === '/test') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Test route!');
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
    }
  })
  .listen(1245);

module.exports = app;
