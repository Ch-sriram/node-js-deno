/**
 * Contains routes related to what the users/customers see on the FE -> the shop of the shopping web application.
 */

// NodeJS Core Imports
// import path from 'path';

// Express Imports
import express, {
  Request,
  Response,
  NextFunction
} from 'express';

// Local Imports
import routes from '.';
// import rootDir from '../utils/path';
import { products } from './admin';

// create a router from express object
const router = express.Router();

router.get(routes.root, (_req: Request, res: Response, _next: NextFunction) => {
  // Log the products that have been added on 'admin/add-product' route
  console.log('shop.ts', products);
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));

  /**
   * To render a pug template, we've to use the render() method
   * inside the `res` object. The render() method uses the the
   * default 'view engine' which is defined inside the
   * app.set() wherever the top-level express() app is defined.
   */
  res.render('shop');
  // no need to mention the path to the pug template since the 
  // path to 'views' is already mentioned at the top - level 
  // express app and also, no need to mention the .pug 
  // extension as the express already knows what the 'view 
  // engine' is.
});

export default router;
