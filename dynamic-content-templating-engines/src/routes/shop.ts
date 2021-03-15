/**
 * Contains routes related to what the users/customers see on the FE -> the shop of the shopping web application.
 */

// NodeJS Core Imports
import path from 'path';

// Express Imports
import express, {
  Request,
  Response,
  NextFunction
} from 'express';

// Local Imports
import routes from '.';
import rootDir from '../utils/path';
import { products } from './admin';

// create a router from express object
const router = express.Router();

router.get(routes.root, (_req: Request, res: Response, _next: NextFunction) => {
  // Log the products that have been added on 'admin/add-product' route
  console.log('shop.ts', products);
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

export default router;

/**
 * The behaviour of this storage mechanism is as follows:
 * - If the code is changed, since the code is refactored, 
 *   entire data stored in the variable is gone.
 * - If the browser is reloaded (w/o changing the code), the
 *   data remains. Does NOT apply on closing & re-opening the
 *   browser.
 * - Different browsers hold different instances of the data.
 *   Example: If a product is added in Firefox, that same data
 *            is reflected on Chrome or any other browsers
 *            that have opened that particular domain.
 *   It's kind of like a brand new request, as if it was made
 *   from a different machine, but still the data persists, 
 *   because the data is from the Node Server, NOT from the 
 *   specific browsers.
 * 
 * Storing data in a variable is useful in a scenario where 
 * the data is needed to be stored temporarily, otherwise, the
 * data is always fetched using an API Request, since this way
 * of storing data is sharing the data across requests and 
 * users, this is NOT Recommended and potentially is a 
 * security risk. Moving forward, data stores should be created
 * keeping in mind, data per user and request.
 */
