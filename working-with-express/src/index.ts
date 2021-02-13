// Express Imports
import express from 'express';

// router object imports for admin and shop related routes
import adminRoutes from './routes/admin';
import shopRoutes from './routes/shop';

// app object: request handler and main express app
const app = express();

// to be able to access req.body property in all middlewares
app.use(express.urlencoded({ extended: false }));

/**
 * This is one of the most important concept(s) in express.js
 * as rest of the concepts in express.js will build up on this
 * knowledge of how express.Router() works.
 * 
 * Putting all of the code - routing related, encoding related,
 * etc, in a single file (index.ts) is NOT a good practice as
 * a single file should NOT hold different logical components.
 * 
 * And so, the routing code is supposed to be split over
 * multiple files. We can possibly export the callback function
 * i.e., (req, res, next) => {} function into different files
 * and pass them as callback in respective middleware(s) in 
 * this file (index.ts).
 * 
 * But, express.js gives a convenience for that too, i.e.,
 * there's no need to export only the function that are going
 * to be passed as callback in the middleware(s), and that 
 * convenience method is known as Router() method which is 
 * invoked as express.Router()
 */

/**
 * Now, adminRoutes and shopRoutes can be passed on to 
 * app.use() middleware as seen below.
 * 
 * NOTE: the ordering of the middlewares matter. For specific 
 * routes, the ordering doesn't matter, but for middleware that
 * is defined on route '/', it should always be placed at the
 * end (iff, the middleware related to '/' route is defined 
 * using the use() method -> since it is defined for all the
 * HTTP methods). 
 * 
 * If the '/' route is defined only for specific methods like 
 * GET/POST (i.e., using router.get('/', callback), then the
 * order of defining the middleware(s) doesn't matter.
 */

// app.use(adminRoutes);
// app.use(shopRoutes); // this should be at the end because '/' route is defined on router.use() middleware.

/**
 * If the '/' route middleware inside shopRoutes is changed
 * from router.use() to router.get(), then, the order of 
 * defining the middleware in this file won't matter.
 */

app.use(shopRoutes);
app.use(adminRoutes);

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
 * middleware for route '/' will NOT run, as in this case, it 
 * is only defined for GET method, which means that only on an 
 * Incoming Request on route '/' with GET method the middleware
 * related to '/' on GET method will be executed.
 * 
 * Therefore, for all other routes, an error page is to be
 * added along with returning the status code of 404.
 */
