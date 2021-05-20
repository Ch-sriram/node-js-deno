// Node Imports
import path from 'path';

// Express Imports
import express from 'express';

// View Engine
import expressHbs from 'express-handlebars'; // the name is upto the user to choose

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
 * Now we need to change our 'view engine' from pug to handlebars. Handlebars is NOT auto-installed by Express, so
 * instead we manually have to import a handlebars instance and so we manually have to let the express app know, that
 * there is such an express handlebars engine available.
 * 
 * And so, we import from the `express-handlebars` as shown above as `expressHbs`. Now we've to tell express that we'll
 * use handlebars as the new engine which can be used. We do this by calling app.engine() method. The app.engine() method
 * has the following signature: app.engine(engine_ext: string, engine_object: any), where engine_ext can be any name
 * which would later define the extension of the template by which express would find the templates in the specified views,
 * but the engine_object should be what we imported from the engine that we want to use, i.e., `expressHbs`, which has to 
 * be initialized and called there itself, as shown below.
 * 
 * We didn't use the app.engine() method for Pug templates because pug templates are built-in for express apps.
 * To `expressHbs` object, we can explicitly send properties such as `extname` which specifies the extension name of the
 * template file, and we also have to specify the location to the `defaultLayout`, which for now is `error-404`'s template.
 * Note that the `extname` only applies to the extension of the main layout that's being used, not all the files.
 */

app.engine(
  'handlebars', // applies to all the templates except the default layout
  expressHbs({
    extname: 'hbs', // applies only for default layout template
    // defaultLayout: '../error-404' // this is only for this particular tutorial -- since `pug` is/was still used as the default templating engine
    // defaultLayout by default looks for `views/layout/main.hbs` (since extname in L43 is 'hbs', otherwise, it would 
    // look for `views/layout/main.handlebars`, iff the extname was 'handlebars')
  })
); // all templates should now be named as: 'home.handlebars'

/**
 * Now, to set the view engine to handlebars, we've to use the same name as we used to set the engine using app.engine, as shown below:
 */
// name 'handlebars' is same as that of the `engine_ext` mentioned as the first param in L37
app.set('view engine', 'handlebars'); 

/**
 * Now, if the name of the `engine_ext` in `app.engine(engine_ext, engine_obj)` is 'xyz', then we set the 'view engine' as 
 * `app.set('view engine', 'xyz')`. And so, this makes the template extensions also to be `.xyz`, i.e., a new handlebars
 * template would be named as 'home.xyz', 'main.xyz', etc.
 */

/**
 * Now we can make a template for 'error-404.html' using handlebars by creating a template named 'error-404.handlebars' 
 * since the extension is named as 'handlebars' in L37.
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
