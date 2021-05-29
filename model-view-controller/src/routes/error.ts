import express, {
  NextFunction,
  Request,
  Response
} from 'express';

const router = express.Router();

// matches all valid/invalid routes -> iff, no other middlewares match a given route
// by default, the path/route passed is '/' i.e., routes.root is sent implicitly
router.use((_req: Request, res: Response, _next: NextFunction) =>
  res.status(404).render('error-404', { docTitle: '404 - Page Not Found', path: '/error'}));

export default router;
