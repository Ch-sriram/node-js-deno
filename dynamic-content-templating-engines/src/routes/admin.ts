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
import routes from '.';
import rootDir from '../utils/path';

// Create a router as follows
const router = express.Router();

// Variable to hold the products
export const products: { [x: string]: any } = [];

// '/admin/add-product' => GET ['/admin' part is NOT checked here as it is checked in app.use() in index.ts]
router.get(routes.admin.addProduct, (_req: Request, res: Response, _next: NextFunction) => {
  res.sendFile(path.join(rootDir, './views/add-product.html'));
});

// '/admin/add-product' => POST ['/admin' part is NOT checked here as it is checked in app.use() in index.ts]
router.post(routes.admin.addProduct, (req: Request, res: Response, _next: NextFunction) => {
  console.log(JSON.parse(JSON.stringify(req.body)));
  /**
   * Right now, the data being worked on is just being logged
   * to the console, it's NOT being stored anywhere by the
   * user/programmer, and hence, it's NOT being used to its
   * fullest potential.
   * 
   * Working with the data that is received is kind of hard 
   * right now because there's NO Database to permanently store
   * it somewhere.
   * 
   * But there's one thing that can be done and that's storing
   * the incoming data in JS Variables and see whether this
   * kind of data is being shared across incoming request(s)
   * from different users (which is often NOT supposed to be
   * shared).
   */
  
  /**
   * Create a new `products[]` list which will have the data
   * stored from '/admin/add-product' route and is exported,
   * so that it can be imported by other modules.
   */
  products.push({ title: req.body.title });

  /**
   * shop.ts will import the `products[]` and output it onto
   * the view/console.
   */
  
  res.redirect(routes.root as string);
});

export default router;
