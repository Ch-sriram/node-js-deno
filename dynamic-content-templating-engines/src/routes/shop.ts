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

// create a router from express object
const router = express.Router();

router.get(routes.root, (_req: Request, res: Response, _next: NextFunction) => {
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

export default router;
