// Express Imports
import express from 'express';

// router object imports for admin and shop related routes
import adminRoutes from './routes/admin';
import shopRoutes from './routes/shop';
import errorRoutes from './routes/error';

// app object: request handler and main express app
const app = express();

// to be able to access req.body property in all middlewares
app.use(express.urlencoded({ extended: false }));

app.use(shopRoutes);
app.use(adminRoutes);

// Error related middleware should be the last one because
// this particular middleware acts on all methods related to
// route '/' and so, any route that starts with '/' and NOT
// recognized in the middlewares added above, will be 
// caught by errorRoutes middleware.
app.use(errorRoutes);

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
 * Therefore, for all other routes, an error page will be 
 * shown which says: "Page Not Found: 404 Error".
 */
