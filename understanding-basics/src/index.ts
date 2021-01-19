import { IncomingMessage, ServerResponse } from 'http';

// const http = require('http'); // legacy import style
// import http = require('http'); // another import style using typescript
import http from 'http';
import fs, { writeFile } from 'fs';

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
      // Buffer is a globally available NodeJS object
      const parsedBody = Buffer.concat(body).toString(); // `parsedBody` is now a buffer on which we can concatenate the buffered chunks and convert it to a string
      console.log(parsedBody);
      // fs.writeFileSync('message.txt', parsedBody.split('=')[1]);
      /**
       * Is there anything wrong with the writeFileSync() 
       * method in L42 ? -> Yes, there is something wrong with
       * that method and it is the word 'Sync', which means
       * 'Synchronous', and so, writeFileSync() is a method
       * which runs synchronously, which means that it will 
       * BLOCK the execution of the code below, and so, that's
       * a piece of BLOCKING Code which should not be used when
       * writing code to run a server that has to handle 
       * multiple requests at once.
       * 
       * Especially when we are writing to a file, we don't 
       * know how much data we are going to receive in the 
       * request body. And so, we don't know how long it will
       * take to write the data to the file, so this particular
       * operation should be NON-BLOCKING (i.e., asynchronous).
       * 
       * And so, we make use of another method called 
       * writeFile(), which is NON-BLOCKING and also takes in 
       * a callback in which we can write code that runs post
       * the writeFile() method's execution.
       */
      writeFile('message.txt', parsedBody.split('=')[1] + '\n', (_err: any) => {
        // the 'err' object will be null if there are no errors
        // If there's any error, then we can handle it by 
        // sending a different kind of response, otherwise we 
        // return a normal response.

        // For now, we won't do error handling and move the 
        // the normal response (which was outside before) into
        // this callback as seen below:
        
        // https://www.geeksforgeeks.org/node-js-response-writehead-method/
        // official doc: https://nodejs.org/api/http.html#http_response_writehead_statuscode_statusmessage_headers
        res.writeHead(302, 'redirecting from \'/\' to \'/\'', { 'Location': '/' }); // or, we can also write: res.statusCode = 302; res.setHeader('Location', '/');
        return res.end('OK');
      });

      /**
       * This response should only be sent when the file is
       * completely written to where it should've been written
       * to. In NodeJS, Event-Driven Architecture is a standard
       * practice where we basically define event listeners for
       * different events. 
       * 
       * So whenever an event occurs, NodeJS goes through its 
       * registry to find the appropriate event listener and 
       * then offload that process to the OS which does use 
       * multi-threading internally. And then NodeJS continues 
       * with its event loop to listen for more event callback
       * and it always just dispatches the actions (event 
       * listeners delegated to the OS using multi-threading)
       * to never block the code execution (NON-BLOCKING) and
       * then always just free up the resource (threads) once 
       * the operation is done by the OS.
       * 
       * And so this is the reason why NodeJS as a backend 
       * service is such high performant, as it is Executes
       * in a NON-BLOCKING way, Runs in an Event-Driven 
       * Fashion and delegates the tasks to the OS using the 
       * event loop.
       */
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
