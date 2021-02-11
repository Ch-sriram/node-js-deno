// Node Imports
import http from 'http';

// Third Party Imports
import express, { NextFunction, Request, Response } from 'express';

// Local Imports


const app = express();

app.use((_req: Request, _res: Response, next: NextFunction) => {
  console.log('In the middleware!');
  next(); // allows the request to execute the next middleware in line.
});

// Once we call the next() method inside the middleware in
// L59, we will be able to execute the next middleware below.

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log('In another middleware!'); // this will be printed in the console -- because next() was called in the previous middleware
  // Sending response is easier because of express js.
  // Instead of setting a header and writing to some buffer,
  // we can use a utility function called `send()` on the 
  // `response` object.
  // res.send(): allows the server to send a response, i.e.,
  res.send('<h1>Hello from Express!</h1>'); // by default, 'Content-Type': text/html
  // We can manually set the 'Content-Type' header using the res.setHeader() method.

  /**
   * Therefore, the request to localhost://3000 will NOT die 
   * now, because we are actually sending a response, which is
   * an HTML response.
   * 
   * This is how we use middleware along with next() or simply
   * send response using res.send() as shown above.
   */
});

/**
 * Output: [Open localhost://3000]
 * '''''''''''''''''''''''''''''''
 * In the middleware!
 * In another middleware!
 */

/**
 * The idea of using a middleware is a crucial concept when
 * making use of express. Also, we can pass any function that 
 * has the aforementioned syntax ((request, response, next) => {}).
 */

http.createServer(app).listen(3000);

/**
 * Now if we run `npm start`, we'll have a running server which doesn't handle any requests for now.
 * The key characteristic of express.js is that it sets up an easy way to handle requests and send responses.
 */
