import express from 'express';

import { ROUTES } from '.';
import { users } from '../data/users';

const router = express.Router();

router.get(ROUTES.HOME, (_, res, __) => {
  const lastAddedUser = users.length > 0 && users[users.length - 1];
  return res.render('home', { docTitle: 'Home', lastAddedUser, activeHome: true, homeCSS: true });
});

export default router;
