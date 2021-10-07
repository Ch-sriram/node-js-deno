import path from 'path';
import express, { urlencoded, static as Static } from 'express';
import expressHandlebars from 'express-handlebars';

import { PORTS, rootDir } from './utils/constants';

import homeRoutes from './routes/home';
import usersRoutes from './routes/users';
import errorRoutes from './routes/error';

const app = express();

// Middlewares
app.engine('handlebars', expressHandlebars({ extname: 'hbs' })); // Setting 'handlebars' as a templating engine
app.set('view engine', 'handlebars'); // Using the registered templating engine as the 'view engine'
app.set('views', path.join(rootDir, 'views')); // default path to where handlebars templates reside
app.use(urlencoded({ extended: false }));
app.use(Static(path.join(rootDir, 'public')));

// Routing Information
app.use(usersRoutes);
app.use(homeRoutes);
app.use(errorRoutes);

app.listen(PORTS.localhost);
