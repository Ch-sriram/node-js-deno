/**
 * Routes related to Admin of the Shopping Web Application 
 */

// NodeJS Core Imports
import path from 'path';

// express imports
import express, {
  Request,
  Response,
  NextFunction
} from 'express';

// local imports
import routes from './routes';
import rootDir from '../utils/path';

// Create a router as follows
const router = express.Router();

// '/admin/add-product' => GET ['/admin' part is NOT checked here as it is checked in app.use() in index.ts]
router.get(routes.admin.addProduct, (_req: Request, res: Response, _next: NextFunction) => {
  // Here too, instead of sending direct HTML string, an HTML
  // file can be sent as follows (go through shop.ts to 
  // understand the code below):
  res.sendFile(path.join(rootDir, './views/add-product.html'));
  console.log(rootDir);
});

// '/admin/add-product' => POST ['/admin' part is NOT checked here as it is checked in app.use() in index.ts]
router.post(routes.admin.addProduct, (req: Request, res: Response, _next: NextFunction) => {
  console.log(JSON.parse(JSON.stringify(req.body)));
  res.redirect(routes.root as string);
});

export default router;
