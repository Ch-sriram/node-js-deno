// Node Imports
import path from 'path';

// Express Imports
import express from 'express';

// route imports
import adminRoutes from './routes/admin';
import shopRoutes from './routes/shop';
import errorRoutes from './routes/error';

// route constants
import routes from './routes';

// app object: request handler and main express app
const app = express();
export const PORT = 3000; // use for localhost

/**
 * Since we're building an online shop, what we need are the following pages:
 * landing, products list, product creation (admin), edit products (admin), delete products (admin), cart, checkout,
 * payments, order summary, etc.
 * For all of this, we'll try and restructure the 'views' directory first where we'll add a bunch of views which can be incrementally modified.
 */

app.set('view engine', 'ejs'); // ejs is directly supported out of the box in express
app.set('views', path.join(__dirname, 'views')); // './views'

// to be able to access req.body property in all middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Grouped Routes
app.use(shopRoutes);
app.use(routes.admin.root, adminRoutes); // grouped on '/admin'
app.use(errorRoutes);

// run on localhost
app.listen(PORT);
