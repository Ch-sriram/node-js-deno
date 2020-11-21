const http = require('http');

http.createServer((req, res) => {
  console.log(req); // logs a really long `request` object and its contents
  process.exit(); // after console.logging, the server will stop listening to port 300 as mentioned below and the server will shutdown.
});

server.listen(3000);
