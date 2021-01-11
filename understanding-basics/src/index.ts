import { IncomingMessage, ServerResponse } from 'http';

// const http = require('http'); // legacy import style
// import http = require('http'); // import style using typescript
import http from 'http';

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
   */

  const URL = req.url;
  if (URL === '/') {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
      <head>
        <title>Enter Message</title>
      </head>
      <body>
        <form action="/message" method="POST">
          <input type="text"/>
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
