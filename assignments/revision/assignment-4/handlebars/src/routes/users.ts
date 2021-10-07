import express from 'express';
import ROUTES from '.';
import users from '../data/users';

const router = express.Router();

router.get(ROUTES.USERS, (_, res, __) =>
  res.render('users', { docTitle: 'Users', users, areUsersAdded: users.length > 0, activeUsers: true, usersCSS: true }));

router.post(ROUTES.USERS, (req, res, _) => {
  const { userName } = req.body;
  users.push(userName);
  return res.redirect(ROUTES.HOME);
});

export default router;
