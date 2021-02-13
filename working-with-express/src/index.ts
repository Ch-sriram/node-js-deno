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
 * Right now, the middleware that executes on '/product' route,
 * accepts all kinds of Incoming Requests i.e., requests on
 * '/product' route can either be GET/POST request, the 
 * middleware will be executed.
 * 
 * Therefore, instead of using app.use() --> app.get() can be
 * used to only accept Incoming GET Requests, and on the same
 * controller, there's post() also, i.e., app.post() can be
 * used to only accept Incoming POST Requests for that 
 * particular middleware.
 * 
 * Therefore,the middleware related to '/product' route should
 * only accept Incoming POST Requests, and so -- app.use()
 * needs to be changed to app.post() as shown below.
 */

// matches incoming requests w.r.t '/product' route only
app.post(routes[2], (req: Request, res: Response, _next: NextFunction) => {
  console.log(req.body); // req.body: get form values as JS object
  res.redirect(routes[0] as string);
});

/**
 * NOTE: app.use() works with all the HTTP methods, i.e.,
 * the middleware will execute all the Incoming Requests 
 * regardless of the type of the HTTP method (it can be GET,
 * POST, PUT, DELETE, PATCH, etc). The only differentiator
 * then becomes the route param passed to the middleware.
 */

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
 * Output on the node console will log nothing this time 
 * because '/product' route's middleware is NOT defined on an
 * Incoming GET Request.
 * 
 * But, on accessing any route that's NOT defined, the
 * middleware for route '/' will run, as in this case, it is
 * defined for all Incoming Requests of all kinds of methods.
 */
