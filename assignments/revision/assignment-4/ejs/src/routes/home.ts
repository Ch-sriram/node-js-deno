import express from 'express';
import { ROUTES } from '.';
import { users } from '../data/users';

export default express.Router()
  .get(ROUTES.HOME, (_, res, __) => res.render('home', { path: ROUTES.HOME, users, docTitle: 'Home' }));
