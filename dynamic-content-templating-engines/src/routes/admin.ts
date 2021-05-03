/**
 * Routes related to Admin of the Shopping Web Application 
 */

// NodeJS Core Imports
// import path from 'path';

// express imports
import express, {
  Request,
  Response,
  NextFunction
} from 'express';

// local imports
import routes from '.';
// import rootDir from '../utils/path';

// Create a router as follows
const router = express.Router();

// Variable to hold the products
export const products: { [x: string]: any } = [];

// '/admin/add-product' => GET ['/admin' part is NOT checked here as it is checked in app.use() in index.ts]
router.get(routes.admin.addProduct, (_req: Request, res: Response, _next: NextFunction) => {
  // res.sendFile(path.join(rootDir, './views/add-product.html'));
  // no need of L27 since we're trying to render pug templates
  
  res.render('add-product', { docTitle: 'Add Product' });
});

// '/admin/add-product' => POST ['/admin' part is NOT checked here as it is checked in app.use() in index.ts]
router.post(routes.admin.addProduct, (req: Request, res: Response, _next: NextFunction) => {
  console.log(JSON.parse(JSON.stringify(req.body)));
  products.push({ title: req.body.title });
  res.redirect(routes.root as string);
});

export default router;
