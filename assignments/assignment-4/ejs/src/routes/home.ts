// Package Imports
import express, {
  Request,
  Response,
  NextFunction
} from 'express';

// Local Imports
import routes from '.';

const router = express.Router();
export let usersList: any[] = [];

// On GET: '/', render home template where we can add users
router.get(routes.root, (_req: Request, res: Response, _next: NextFunction) => (
  res.render('home', { docTitle: 'Home | Add Users', path: routes.root, usersList })
));

// On POST: '/users' as routes.users.root
router.post(routes.users.root, (req: Request, res: Response, _next: NextFunction) => {
  console.log(JSON.parse(JSON.stringify(req.body)));
  if (req.body.user !== '') {
    usersList.push({ name: req.body.user });
  }
  res.redirect(routes.users.root);
});

export default router;
