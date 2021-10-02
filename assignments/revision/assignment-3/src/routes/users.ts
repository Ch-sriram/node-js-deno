import express from 'express';
import path from 'path';

import { routes } from './routes';
import { rootDir } from '../utils/constants';

const router = express.Router();

router.get(routes.USERS, (_, res, __) => res.sendFile(path.join(rootDir, 'views', 'users.html')));

router.post(routes.USERS, (req, res, __) => {
  const { userName } = req.body;
  console.log(userName);
  return res.redirect('/users');
});

export default router;
