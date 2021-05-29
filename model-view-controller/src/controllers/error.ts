import { Request, Response, NextFunction } from 'express';

export const handle404Error = (_: Request, res: Response, __: NextFunction) =>
  res.status(404).render('error-404', { docTitle: '404 - Page Not Found', path: '/error' });

export default {
  handle404Error
};
