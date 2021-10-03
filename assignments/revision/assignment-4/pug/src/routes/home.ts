import express from 'express';
import ROUTES from './routes';
import users from '../data/users';

const router = express.Router();

router.get(ROUTES.HOME, (_, res, __) => res.render('home', { docTitle: 'Home', path: ROUTES.HOME, users }));

export default router;
