// Node Imports
import path from 'path';

// Express Imports
import express from 'express';

// Route Imports
import homeRoute from './routes/home';
import usersRoute from './routes/users';
import error404Route from './routes/404';

// Initialize express
const app = express();
const PORT = 3000;

// Common Middle1ware
app.use(express.urlencoded({ extended: false })); // using instead of bodyParser
app.use(express.static(path.join(__dirname, 'public')));  // to accept 'public' directory's static files directly

// Routes
app.use(usersRoute);
app.use(homeRoute);
app.use(error404Route);

// Listener
app.listen(PORT);
