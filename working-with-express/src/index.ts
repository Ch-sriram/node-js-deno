// Node Imports
import path from 'path';

// Express Imports
import express from 'express';

// route imports
import adminRoutes from './routes/admin';
import shopRoutes from './routes/shop';
import errorRoutes from './routes/error';

// route constants
import routes from './routes/routes';

// app object: request handler and main express app
const app = express();
export const PORT = 3000; // use for localhost

// to be able to access req.body property in all middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Grouped Routes
app.use(shopRoutes);
app.use(routes.admin.root, adminRoutes); // grouped on '/admin'
app.use(errorRoutes);

// run on localhost
app.listen(PORT);

/**
 * See the program in action:
 * '''''''''''''''''''''''''
 * Go to `localhost:3000/admin/add-product` and in the input 
 * box, type in say 'Book' and submit, form will redirect onto 
 * the '/product' route.
 * 
 * Output on the node console will be: { title: 'Book' }
 * 
 * The JS object returned has `title` field because `title` is
 * the name given to the <input> element in L35 in this file.
 * 
 * -----------------------------------------------------------
 * 
 * For all other routes, an error page will be shown which 
 * says: "Page Not Found: 404 Error".
 */
