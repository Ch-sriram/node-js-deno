import { IncomingMessage, ServerResponse } from 'http';

// const http = require('http'); // legacy import style
// import http = require('http'); // import style using typescript
import http from 'http';

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
  console.log(req.url, req.method, req.headers);
  /**
   * We can log the response object (in this case, `res`) onto
   * the console, but it actually doesn't contain any
   * interesting data.
   */
  console.log(res); // ServerResponse object which contains many fields

  /**
   * Instead, we can use the response object to fill it with
   * data we want to send back to the client.
   *
   * There are a couple of methods that are inbuilt in the
   * response object which are response.setHeader(),
   * response.write() & response.end(), etc.
   */

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
