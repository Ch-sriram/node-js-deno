import express, {
  Request,
  Response,
  NextFunction
} from 'express';
import routes from '.';
import { products } from './admin';

const router = express.Router();

router.get(routes.root, (_req: Request, res: Response, _next: NextFunction) => {
  console.log('shop.ts', products);
  res.render('shop', {
    products,
    docTitle: 'Shop',
    path: routes.root
  });
});

export default router;
