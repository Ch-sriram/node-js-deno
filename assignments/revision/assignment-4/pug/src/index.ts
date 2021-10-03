import express from 'express';
import path from 'path';

import homeRoutes from './routes/home';
import usersRoutes from './routes/users';
import errorRoutes from './routes/error';
import { PORTS, rootDir } from './utils/constants';

const app = express();

// Middlewares
app.set('view engine', 'pug'); // templating engine
app.set('views', path.join(rootDir, 'views')); // sets the default path for template views that can be found in project
app.use(express.static(path.join(rootDir, 'public'))); // for serving static files from './public' directory
app.use(express.urlencoded({ extended: false })); // to be able to parse incoming request data

// Routes
app.use(usersRoutes);
app.use(homeRoutes);
app.use(errorRoutes);

app.listen(PORTS.localhost);
