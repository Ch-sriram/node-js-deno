import { IncomingMessage, ServerResponse } from 'http';
import { writeFile } from 'fs';

const requestHandler = (req: IncomingMessage, res: ServerResponse) => {
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
  
      // Synchronous Code (Blocking)
      // fs.writeFileSync('message.txt', parsedBody.split('=')[1]
      
      // Asynchronous Code (Non Blocking)
      writeFile('message.txt', parsedBody.split('=')[1] + '\n', (_err: any) => {
        // https://www.geeksforgeeks.org/node-js-response-writehead-method/
        // official doc: https://nodejs.org/api/http.html#http_response_writehead_statuscode_statusmessage_headers
        res.writeHead(302, 'redirecting from \'/\' to \'/\'', { 'Location': '/' }); // or, we can also write: res.statusCode = 302; res.setHeader('Location', '/');
        return res.end('OK');
      });
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
}

// We have many ways of exporting in NodeJS

// LEGACY EXPORT STYLE
// Default Export
// module.exports = requestHandler;
/** Can be imported in the following ways:
 * const requestHandler = require('./routes'); 
 * // requestHandler stores the callback's reference that can be used in the imported file.
 *    
 * // ES6+
 * import requestHandler = require('./routes'); // only one way
 */

/**
 * The exported files are cached by NodeJS, and so, we cannot
 * edit the exported entity's contents.
 */

// Named Exports - We can export entities as object.
// module.exports = {
//   handler: requestHandler,
//   someText: 'Some Hard Coded Text'
// };

/**Besides the aforementioned way L83-L87, we've another way */
// module.exports.handler = requestHandler;
// module.exports.someText = 'Some Hard Coded Text';

// We can now omit `module` and export the foll. way (depends on the NodeJS version)
// exports.handler = requestHandler;
// exports.someText = 'Some Hard Coded Text';

// ES6 exports
export default requestHandler; // default export

// Named Exports
// const someText = 'Some Hard Coded Text'; // defined const
// export someText; // exporting the const

// Instead of 2 lines, we can do that in a single line below
export const someText = 'Some Hard Coded Text';
