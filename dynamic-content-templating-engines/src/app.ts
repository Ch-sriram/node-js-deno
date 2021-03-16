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
 * How does NodeJS know that a templating engine is being used?
 * Using express.js, a global configuration value using 
 * express().set() (or in this case app.set()).
 * 
 * app.set() allows the user to set any values globally on the
 * express application and this can just be some key-value
 * pair or some other config item that express doesn't
 * understand.
 * 
 * Eg: app.set('title', 'My Site');
 *     app.get('title'); // "My Site"
 * 
 * Read more about app.set here: https://expressjs.com/en/api.html#app.set
 * 
 * There are some properties (keys) which are pre-defined and
 * can only be used to define certain configuration(s) using
 * app.set() method. One of them is 'view engine' key, on which
 * one can use that key and the corresponding value must be 
 * a templating engine. Anything else would result in an error.
 * 
 * Pug templating engine ships with built-in express support, 
 * so whenever `app.set('view engine', 'pug')` is called, it
 * auto-registers itself with express. Simply using 
 * `app.set('view engine', 'pug') would work for the Pug 
 * templating engine, but might NOT work for other engines.
 */
app.set('view engine', 'pug');

/**
 * Using express, we can also let express know where our 
 * 'views' directory is by mentioning the name of the directory
 * in `app.set('views', '<directory-name>');`
 * 
 * If the name of the directory of our views is stored in 
 * 'templates' directory, then we let express know that our
 * 'views' are in the 'templates' directory, i.e.,
 *    `app.set('views', 'templates');`
 * 
 *  'templates': considered from wherever const app = express()
 * is called.
 * 
 * By default, 'views' are set to './views' which is wherever
 * the top-level express() app resides.
 */
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
