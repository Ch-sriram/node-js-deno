import express from 'express';
import path from 'path';

import { PORTS, rootDir } from './utils/constants';

import homeRoutes from './routes/home';
import usersRoutes from './routes/users';

const app = express();

// Helpful Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
console.log(path.join(__dirname), '\\----------\\', rootDir);

app.use(usersRoutes);
app.use(homeRoutes);
app.use((_, res, __) => res.status(404).sendFile(path.join(rootDir, 'views', 'error.html')));

app.listen(PORTS.localhost);
