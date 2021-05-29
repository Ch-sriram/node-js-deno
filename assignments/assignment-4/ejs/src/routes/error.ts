import express, {
  Request,
  Response,
  NextFunction
} from 'express';

const router = express.Router();
const errorController = (_: Request, res: Response, __: NextFunction) =>
  res.status(404).render('error', { docTitle: '404: Page Not Found!', path: '/error' });

// on default route => '/', when no route matches, this route should match
router.use(errorController);

export default router;
