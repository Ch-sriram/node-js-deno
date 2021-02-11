// express imports
import express, {
  Request,
  Response,
  NextFunction
} from 'express';

import { PathParams } from 'express-serve-static-core';

// request handler
const app = express();
const PORT = 3000;


// app.use((_req: Request, res: Response, next: NextFunction) => {
//   console.log(`First middleware!`);
//   next();
// });

// app.use((_req: Request, res: Response, _next: NextFunction) => {
//   console.log(`Second middleware!`);
// });

/**
 * Output:
 * ''''''
 * 
 * First middleware!
 * Second middleware!
 */


// routing information
const routes: PathParams = ['/', '/users'];

// matches only '/' route
app.use(routes[1], (_req: Request, res: Response, _next: NextFunction) => {
  console.log(`In '${routes[1]}' middleware!`);
  res.send(`<h1>Users Page</h1>`);
});

// matches '/' => matches any route except '/users'
app.use(routes[0], (_req: Request, res: Response, _next: NextFunction) => {
  console.log(`In '${routes[0]}' middleware!`);
  res.send(`<h1>Home Page</h1>`);
});

/**
 * Output [http://localhost:3000/]:
 * '''''''''''''''''''''''''''''''
 * 
 * In '/' middleware!
 * 
 * =================================
 * Output [http://localhost:3000/users]:
 * ''''''''''''''''''''''''''''''''''''
 * 
 * In '/users' middleware!
 */

// same as http.createServer(app).listen(PORT)
app.listen(PORT);
