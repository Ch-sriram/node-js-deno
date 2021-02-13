/**
 * Contains routes related to what the users/customers see on the FE -> the shop of the shopping web application.
 */

// Express Imports
import express, {
  Request,
  Response,
  NextFunction
} from 'express';

// Local Imports
import routes from './routes';

// create a router from express object
const router = express.Router();

router.get(routes.root, (_req: Request, res: Response, _next: NextFunction) => {
  res.send('<h1>Hello from Express!</h1>');
});

export default router;
