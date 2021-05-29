// Package Imports
import express, {
  Request,
  Response,
  NextFunction
} from 'express';

// Local Imports
import routes from '.';
import { usersList } from './home';

const router = express.Router();


// On GET: '/users' render the users pug template where users list is shown 
router.get(routes.users.root, (_req: Request, res: Response, _next: NextFunction) => {
  res.render('users', {
    docTitle: 'Users List',
    path: routes.users.root,
    usersList,
  });
});

export default router;
