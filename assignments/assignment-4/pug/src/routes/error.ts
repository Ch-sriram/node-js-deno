import express, {
  Request,
  Response,
  NextFunction
} from 'express';

const router = express.Router();

router.use((_: Request, res: Response, __: NextFunction) => res.status(404).render('error', { docTitle: '404: Page Not Found!', path: '/error' }));

export default router;
