// Node Imports
import http from 'http';

// Third Party Imports
// import * as express from 'express';
import express, { NextFunction, Request, Response } from 'express';


// Local Imports


const app = express(); // 'app' is our gateway to express code. Also, 'app' is a valid request handler.

/**
 * We can use the core concept of express js, which is utility
 * or utilization of express as a middleware in our code, 
 * after we created the 'app' object in L10 and before we pass
 * the 'app' object to http.createServer.
 * 
 * The method we call (defined by the express framework) is
 * called `use()` as shown below. `use()` is the middleware
 * provided by express js.
 */

// use() allows us to add a new middleware function.
// https://expressjs.com/en/guide/using-middleware.html
// https://expressjs.com/en/4x/api.html#app.use
// use(...handlers: RequestHandler<ParamsDictionary, any, any, QueryString.ParsedQs, Record<string, any>>[]): Express

/**
 * use() method accepts an array of request handlers 
 * (i.e., callbacks) and it also has some other use-cases too.
 * 
 * Simplest way to use the app.use() method is to simply pass
 * a function to it, which will be executed on every incoming 
 * request. The function signature contains 3 arguments which
 * are `request`, `response` & `next`.
 * 
 */
// app.use((req: Request, res: Response, next: NextFunction) => {
//   console.log('In the middleware!');
// });

// // without calling the next() method inside the middleware in
// // L40, we won't be able to execute the next middleware below.

// app.use((req: Request, res: Response, next: NextFunction) => {
//   console.log('In another middleware!'); // this won't be printed in the console.
// });

/**
 * Output: [Open localhost://3000]
 * '''''''''''''''''''''''''''''''
 * In the middleware!
 */

app.use((_req: Request, _res: Response, next: NextFunction) => {
  console.log('In the middleware!');
  next(); // allows the request to execute the next middleware in the same flow.
  /**
   * And so, the execution goes from top to bottom in the file
   * and wherever NodeJS sees a middleware function (i.e., app.
   * use() or any other function), it executes that and 
   * doesn't get out of the flow of that function to the next 
   * middleware until the next() method is called in here.
   */
});

// Once we call the next() method inside the middleware in
// L59, we will be able to execute the next middleware below.

app.use((_req: Request, _res: Response, _next: NextFunction) => {
  console.log('In another middleware!'); // this will be printed in the console.
  // send a response here....
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
