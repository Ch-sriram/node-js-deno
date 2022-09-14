// Node Imports
import path from 'path';

// Express Imports
import express from 'express';

// route imports
import adminRoutes from './routes/admin';
import shopRoutes from './routes/shop';
import errorRoutes from './routes/error';

// DB
import db from './utils/database';

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

// Right now, we don't have anything inside `node-complete` database.
db.execute('SELECT * FROM products') // not working with `ts-node-dev`, but working with `ts-node`
  .then(result => {
    // result[0] contains all the rows information as objects.
    // result[1] contains all the column information as objects.
    console.log(result);
  })
  .catch(err => console.log(err));

// to be able to access req.body property in all middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Grouped Routes
app.use(shopRoutes);
app.use(routes.admin.root, adminRoutes); // grouped on '/admin'
app.use(errorRoutes);

// run on localhost
app.listen(PORT);
