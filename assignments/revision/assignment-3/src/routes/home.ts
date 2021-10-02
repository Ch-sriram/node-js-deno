import express from 'express';
import path from 'path';

import { routes } from './routes';
import { rootDir } from '../utils/constants';

const router = express.Router();

router.get(routes.HOME, (_, res, __) => res.sendFile(path.join(rootDir, 'views', 'home.html')));

export default router;
