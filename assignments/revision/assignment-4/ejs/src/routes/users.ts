import express from 'express';
import ROUTES from '.';
import { users } from '../data/users';

const router = express.Router();

router.get(ROUTES.USERS, (_, res, __) => res.render('users', { path: ROUTES.USERS, users, docTitle: 'Users' }));

router.post(ROUTES.USERS, (req, res, _) => {
  const { userName } = req.body;
  users.push(userName);
  return res.redirect(ROUTES.HOME);
});

export default router;
