import express from 'express';
import path from 'path';

import CONSTANTS from './utils/constants';

import homeRoutes from './routes/home';
import usersRoutes from './routes/users';
import errorsRoutes from './routes/errors';

// Express App
const app = express();

// Middlewares
app.set('view engine', 'ejs');
app.set('views', path.join(CONSTANTS.ROOT_DIR, 'views'));
app.use(express.static(path.join(CONSTANTS.ROOT_DIR, 'public')));
app.use(express.urlencoded({ extended: false }));

// Routes
app.use(usersRoutes);
app.use(homeRoutes);
app.use(errorsRoutes);

// Listener
app.listen(CONSTANTS.PORTS.localhost);
