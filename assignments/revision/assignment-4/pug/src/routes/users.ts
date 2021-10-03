import express from 'express';
import ROUTES from './routes';
import users from '../data/users';

const router = express.Router();

router.get(ROUTES.USERS, (_, res, __) => res.render('users', { docTitle: 'Users', path: ROUTES.USERS, users }));

router.post(ROUTES.USERS, (req, res, _) => {
  const { userName } = req.body;
  console.log(userName);
  users.push(userName);
  return res.redirect(ROUTES.HOME);
});

export default router;
