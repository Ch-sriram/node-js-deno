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

  // res.render('shop'); // No dynamic content generation possible
  /**
   * Although, the template for `shop`'s view is being rendered
   * but there's NO dynamic content being generated from the
   * 'shop.pug' template.
   * 
   * We can send in data to the 'shop' template from the 
   * res.render() method, i.e., 
   *    res.render(<template_name>, options)
   * where, 'options' is a JS object which can take in any kind
   * of data and that data can be accessed inside the template.
   */
  res.render('shop', {
    products, // can also send `products` with a diff. name - prods: products
    docTitle: 'Shop',
    path: routes.root,
    hasNoProducts: !(products.length > 0) // conditionals not allowed in handlebars, and so, calculation done here directly
  });
});

export default router;
