import express, {
  NextFunction,
  Request,
  Response,
} from 'express';

import { PathParams } from 'express-serve-static-core';

const app = express();
const routes: PathParams = ['/', '/add-product'];

/**
 * app.use() method has 6 other overloads as of express v4.17.1
 * which means that there are 7 different ways to call it, as 
 * seen here: https://expressjs.com/en/4x/api.html#app.use and
 * signature is: app.use([path,] callback [, callback...])
 * 
 * In app.use() method, we've an optional parameter which is 
 * `path` as we can see above in L13. If we don't give the 
 * `path` parameter, by default express takes it as '/' route.
 * 
 * Now, if '/' is used for the app.use() below, then even on 
 * going to the route '/some-route', the '/' route's middleware
 * will match. Because '/' doesn't mean that the full path can
 * only be '/', but it can be any route that starts with '/' -
 * and because of that, even '/some-route', '/xxxcccdd', etc 
 * will match the middleware with the path defined as '/'.
 */

// app.use(routes[0], (req: Request, res: Response, next: NextFunction) => {
//   console.log('In another middleware!');
//   res.send('<h1>Hello from Express!</h1>');
// });

/**
 * So, middleware (app.use()) with the route '/' will match 
 * every route in this case. And so, what we can do is, we can
 * add another middleware before the middleware with '/' route
 * as shown below. 
 * 
 * This works because the JS Engine compiles the JS code from 
 * top to bottom, and so, whenever a specific route like say 
 * '/add-product' is matched at the beginning, then there will
 * be no need to match more middlewares (that can be below 
 * the currently matched middleware) unless the next() method 
 * is called in the matched middleware.
 */

// matches '/add-product' route only
app.use(routes[1], (_req: Request, res: Response, _next: NextFunction) => {
  console.log('In \'/add-product\' middleware!');
  res.send('<h1>The Add Product Page!</h1>');
});

// matches '/' => matches any route other than '/add-product'
app.use(routes[0], (_req: Request, res: Response, _next: NextFunction) => {
  console.log('In \'/\' middleware!');
  res.send('<h1>Hello from Express!</h1>');
  // by convention, if a response is being sent as in L58, then
  // that's also an indication that next() is not supposed to
  // be called after it.
});

/**
 * And so, the order of the middlewares and whether next() is 
 * being called or not, matters a lot.
 */

app.listen(3000);

/**
 * Output: [Open http://localhost:3000/<any route except 'add-product'>]
 * '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
 * In '/' middleware!
 * 
 * Output: [Open http://localhost:3000/add-product]
 * ''''''''''''''''''''''''''''''''''''''''''''''''
 * In '/add-product' middleware!
 */
