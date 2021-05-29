// Package Imports
import express from 'express';
import path from 'path';

// Local Imports
import rootDir from './utils/path';
import homeRoute from './routes/home';
import usersRoute from './routes/users';
import errorRoute from './routes/error';

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');  // Set a view engine
app.set('views', path.join(rootDir, 'views'));  // Let express know where the views directory is
app.use(express.urlencoded({ extended: false }));  // To process request.body properly
app.use(express.static(path.join(rootDir, 'public')));  // To access CSS Styles from 'public' directory

app.use(homeRoute);
app.use(usersRoute);
app.use(errorRoute);

app.listen(PORT);
