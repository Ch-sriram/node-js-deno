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
 * In the current project setup, the 'views' directory needs no changes. But there's NO directory for controllers and models and the 
 * controllers themselves. Right now, they're all mixed in the 'routes' directory. The way we route, doesn't change, 
 * i.e., we've the express().Router and the middleware functions like use, get, post, put, etc, but actually, the logic that's executed inside 
 * these middlewares (eg: L11 -> L17 in shop.ts), is the typical controller logic, i.e., in routes/shop.ts, from L12 -> L17, we're interacting 
 * with data (products[]) and we're rendering a view (res.render('shop', {...})) and this is exactly the "in-between" logic that makes up a 
 * controller.
 * 
 * Therefore, we could ofcourse say, we already have controllers, i.e., shop.ts, admin.ts, etc in the 'routes' directory.
 * BUT, this is NOT scalable, in the sense that, as our app grows larger, the more things need to go into something like the 'routes' 
 * directory, and each file inside the 'routes' controller can become really really big, and so, that would make managing the code really 
 * really hard. 
 * 
 * Therefore, separating the controller's core logic into separate files, is a good thing, that'll help us separate concerns.
 * Because we can then quickly see what kind of routes we've and we can directly see what kind of code exactly is executed for a single route, 
 * and then we navigate simply to the respective controller's file (where the core logic is present) and make changes we want to make.
 * Hence, creating a 'controllers' directory becomes inevitable, where the code for a lot of main logic will be present.
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
