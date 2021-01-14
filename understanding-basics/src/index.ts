import { IncomingMessage, ServerResponse } from 'http';

// const http = require('http'); // legacy import style
// import http = require('http'); // another import style using typescript
import http from 'http';
import fs from 'fs';

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
  const URL = req.url;
  const METHOD = req.method;

  if (URL === '/') {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
      <head>
        <title>Enter Message</title>
      </head>
      <body>
        <form action="/message" method="POST">
          <input type="text" name="message"/>
          <button type="submit">Send</button>
        </form>
      </body>
      </html>
    `);
    return res.end();
  }

  // Handling the data sent to '/message' route
  if (URL === '/message' && METHOD === 'POST') {
    const body: any[] = []; // it is the request body and should be an array
    req.on('data', (chunk: any) => {
      // for every incoming chunk, we can process it here.
      console.log(chunk);
      body.push(chunk);
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString(); // `parsedBody` is now a buffer on which we can concatenate the buffered chunks and convert it to a string
      console.log(parsedBody);
      fs.writeFileSync('message.txt', parsedBody.split('=')[1]);
      // https://www.geeksforgeeks.org/node-js-response-writehead-method/
      // official doc: https://nodejs.org/api/http.html#http_response_writehead_statuscode_statusmessage_headers
      res.writeHead(302, 'redirecting from \'/\' to \'/\'', { 'Location': '/' }); // or, we can also write: res.statusCode = 302; res.setHeader('Location', '/');
      return res.end('OK');
    });
  }
  
  res.setHeader("Content-Type", "text/html"); // https://nodejs.org/api/http.html#http_response_setheader_name_value

  // https://nodejs.org/api/http.html#http_request_write_chunk_encoding_callback
  res.write('<html>');
  res.write('<head><title>Demo Response Page</title></head>');
  res.write('<body>')
  res.write('<h1>Hello from my Node.js Server</h1>');
  res.write('<h2>This is an &lt;h2> tag</h2>');
  res.write('</body>');
  res.write('</html>');
  res.end();
});

server.listen(3000);

/**
 * OUTPUT on '/' route
 * '''''''''''''''''''
 * <Buffer 6d 65 73 73 61 67 65 3d 48 65 6c 6c 6f 25 32 31>
 * message=Hello%21
 */
