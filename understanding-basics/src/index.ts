import { IncomingMessage, ServerResponse } from 'http';

// const http = require('http'); // legacy import style
// import http = require('http'); // import style using typescript
import http from 'http';
import fs from 'fs';

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
  /**
   * Instead of logging the `request` object, we can use it
   * to create a webserver that does different things when 
   * the user goes on different routes, i.e., /test, /message,
   * /, /some-route, etc.
   */

  /**
   * Let's say, for '/' route, we want use a form where user
   * can enter some data and send it to some other route, say
   * the route is '/message'.
   * 
   * The data sent to the '/message' route can be used to 
   * redirect the user back to '/' route and we will create a
   * new file and store the message the user entered, in that
   * particular file. We can work with a file using the 'fs'
   * module. Before writing to the file and sending the 
   * response, we'll want to get the request data.
   */

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
    
    /**
     * NOTE: GET request is automatically sent when we click
     * a link or enter a URL. A POST request has to be setup 
     * by us by creating a form (there are other ways too) as
     * seen above, which will send a POST request to '/message'
     * route. The good thing about a form is that whenever we
     * have an input with a `name` attribute, it will also put
     * the content of the input into the http request header
     * while sending the POST request.
     */

    // since we only want to execute the block in L22 once we 
    // are on '/' route, we should return res.end(), so that 
    // nothing gets executed after this if statement.
    return res.end();
  }

  // Handling the data sent to '/message' route
  if (URL === '/message' && METHOD === 'POST') {
    /**
     * Before writing the file and sending back the response,
     * we generally parse the request using an event listener.
     * For http.createServer(), Node implicitly creates an 
     * event listener for us, but now, we'll create an event
     * listener using the request.on() method. 
     * 
     * Using `on()` method, we've 7 events we can listen on and
     * they're: close, data, end, error, pause, readable and
     * resume. For now, we'll only use the 'data' and 'end'
     * events.
     * 
     * 'data' event signifies the trigger of an event when some
     * kind of data is coming in the form of a request.
     */
    const body: any[] = []; // it is the request body and should be an array
    req.on('data', (chunk: any) => {
      // for every incoming chunk, we can process it here.
      console.log(chunk); // <Buffer 6d 65 73 73 61 67 65 3d 48 65 6c 6c 6f 25 32 31>
      body.push(chunk);
    });

    /**
     * 'end' event listener is triggered when the end() is 
     * called on the response, which means that the server is
     * done parsing the incoming request.
     */
    req.on('end', () => {
      /**
       * In here, we can now interact with the `body` const 
       * where the chunks are gathered from the request.
       * 
       * To interact with the `body`, which contains a stream
       * of chunks (data) that we received from the requesting
       * client/server, we now need to Buffer them using the
       * 
       */
      const parsedBody = Buffer.concat(body).toString(); // `parsedBody` is now a buffer on which we can concatenate the buffered chunks and convert it to a string
      console.log(parsedBody); // "message=Hello%21" will be the string if we typed in 'Hello!' in the <input/> inside the form above in '/' route. And we see 'message=' because we gave the <input/> element, name as 'message' above, in L42.

      // Note that 'Hello!' is encoded as 'Hello%21' because that's how '!' is encoded in UTF-8 (or ASCII)
      fs.writeFileSync('message.txt', parsedBody.split('=')[1]);
      // https://www.geeksforgeeks.org/node-js-response-writehead-method/
      // official doc: https://nodejs.org/api/http.html#http_response_writehead_statuscode_statusmessage_headers
      res.writeHead(302, 'redirecting from \'/\' to \'/\'', { 'Location': '/' });
  
      // We can also expand and write the following code instead of using writeHead method as follows:
      // res.statusCode = 302;
      // res.setHeader('Location', '/');
  
      // since we don't want to execute anything after this if block, we'll just write the foll. LOC.
      return res.end('OK');
    });
  }
  
  // https://nodejs.org/api/http.html#http_response_setheader_name_value
  res.setHeader("Content-Type", "text/html");

  // https://nodejs.org/api/http.html#http_request_write_chunk_encoding_callback
  // response.write() allows us to write some data as the response to the client, in chunks.
  // Chunks => we use response.write() in multiple lines as a response
  res.write('<html>');
  res.write('<head><title>Demo Response Page</title></head>');
  res.write('<body>')
  res.write('<h1>Hello from my Node.js Server</h1>');
  res.write('<h2>This is an &lt;h2> tag</h2>');
  res.write('</body>');
  res.write('</html>');
  // All of the above code will be executed line-by-line.

  // We now need to tell Node (once we are done creating a
  // response) that there's no more data that's going to be
  // written into the response, and so, we call the end() 
  // method of response as follows:
  res.end(); // this is saying: 'send the response to the client.

  // Now if we try to call a write() method after invoking the end() method, we would get an error.
});

server.listen(3000);

/**
 * OUTPUT
 * ''''''
 * <Buffer 6d 65 73 73 61 67 65 3d 48 65 6c 6c 6f 25 32 31>
 * message=Hello%21
 * Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
 *    at ServerResponse.setHeader (_http_outgoing.js:518:11)
 *    at ServerResponse.writeHead (_http_server.js:273:21)
 *    at IncomingMessage.<anonymous> (C:\Users\srira\Desktop\repos\node-js-deno\understanding-basics\src\index.ts:111:11)
 *    at IncomingMessage.emit (events.js:327:22)
 *    at endReadableNT (_stream_readable.js:1220:12)
 *    at processTicksAndRejections (internal/process/task_queues.js:84:21)
 * [ERROR] 14:16:40 Error: Cannot set headers after they are sent to the client
 */
