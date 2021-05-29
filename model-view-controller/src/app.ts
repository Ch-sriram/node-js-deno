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
 * To add a layout in EJS, firstly, we don't have a layout feature (as in Pug/Hbs) in EJS. We've something known as Partials/Includes.
 * Both Pug and Handlebars also have this feature of Partials/Includes. The idea here is that we've some code blocks in EJS
 * templates which we reuse in some parts of other EJS templates, and so we share them across our templates. So it's a bit like the
 * opposite of a layout, where we've one master layout where we put our individual view templates as a block. Instead, we'll have a couple of shared view parts
 * which we can merge into the views/templates we're creating.
 * 
 * For this reason, we create a new sub-directory which we'll call as `includes` in which we'll have a couple of code blocks which are shared in almost every view.
 * Something like the beginning of every HTML file, the head tags along with the common body elements can be inside the `includes` sub-directory.
 * In this case, we also share the navigation part of the HTML code.
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
