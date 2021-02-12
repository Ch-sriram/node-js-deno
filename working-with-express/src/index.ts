// Express Imports
import express, {
  NextFunction,
  Request,
  Response,
} from 'express';
import { PathParams } from 'express-serve-static-core';

const app = express();

// app.use(bodyParser.urlencoded()); // body-parser is deprecated post express v4.17 release.

// Instead of body-parser, express.urlencoded() can be passed into the use() middleware as follows:
app.use(express.urlencoded({ extended: false })); // more about the 'extended' option: https://github.com/expressjs/body-parser#extended

const routes: PathParams = [
  '/',
  '/add-product',
  '/product'
];

/**
 * Let's understand how to parse incoming requests and extract
 * data from incoming requests.
 * 
 * For that, knowledge to handle a POST request is necessary!
 * Let's say, on the route '/add-product', an HTML page with
 * a form is returned as shown below.
 */

// matches incoming requests w.r.t '/add-product' route only
app.use(routes[1], (_req: Request, res: Response, _next: NextFunction) => {
  res.send(`
    <form action="/product" method="POST">
      <input type="text" name="title">
      <button type="submit">Add Product</button>
    </form>
  `);
});

/**
 * From the middleware for '/add-product', it is evident that
 * the form will redirect the form submit onto '/product' route
 * and so, middleware for '/product' has to be defined as shown
 * below ('/product' route's middleware can be placed before 
 * or after '/add-product' route's middleware, but it cannot 
 * be placed after '/' route's middleware)
 */

// matches incoming requests w.r.t '/product' route only
// also, this middleware executes for both GET & POST requests
app.use(routes[2], (req: Request, res: Response, next: NextFunction) => {
  // express.js has a convenience feature where the 'body' of
  // the incoming request data is parsed as a JS object as a 
  // key-value pair.
  
  // console.log(req.body); // undefined
  
  // Although req object does give the convenience feature of
  // using the req.body property, but by default, the request
  // object (req) doesn't try to parse the Incoming Request 
  // Body. For the request object (req) to automatically parse
  // the Incoming Request's Body, another middleware is to be 
  // added, which is known as 'body-parser', which is to be
  // added as a top-level middleware (meaning, middleware that
  // should be executed before all other middlewares -- and so
  // it should be added at the top of the respective file)
  // because any incoming request body can contain data that
  // can be needed, and so, 'body-parser' (3rd party package)
  // helps in automatically parsing the req.body property.

  // To use 'body-parser', it has to be installed using npm as:
  //   npm i 'body-parser' [NOTE: --save is implied]
  // And then pass the 'body-parser' package's urlencoded() 
  // method's execution inside a top-level middleware as shown
  // after `const app = express();`'s definition somewhere in 
  // this file (above).

  // NOTE: 'body-parser' package is deprecated and so, instead
  // of installing 'body-parser' package and passing 
  // bodyParser.urlencoded() to use() middleware, simply, 
  // express.urlencoded() can be passed (into use() middleware)

  console.log(req.body);

  // ---------------------------------------------------------
  // In vanilla node.js, there's a need to manually set the
  // status code and setting the location header. But with 
  // express, res.redirect(<route>) can be used to redirect to
  // the specified <route>. The <route> used will be '/' here.
  res.redirect(routes[0] as string);
});

// matches '/' => matches any route other than '/add-product' & '/product'
app.use(routes[0], (_req: Request, res: Response, _next: NextFunction) => {
  res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);


/**
 * See the program in action:
 * '''''''''''''''''''''''''
 * Go to `localhost:3000/add-product` and in the input box,
 * type in say 'Book' and submit, form will redirect onto the
 * '/product' route.
 * 
 * Output on the node console will be: { title: 'Book' }
 * 
 * The JS object returned has `title` field because `title` is
 * the name given to the <input> element in L35 in this file.
 * 
 * -----------------------------------------------------------
 * 
 * If `localhost:3000/product` is directly accessed from the 
 * browser, then:
 * 
 * Output on the node console will be: {}
 */
