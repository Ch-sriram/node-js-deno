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

// middleware related to general route i.e., '/' should go into
// this file because that'll be accessed by the users

// matches '/' => matches all routes valid/invalid
// router.use(routes.root, (_req: Request, res: Response, _next: NextFunction) => {
//   res.send('<h1>Hello from Express!</h1>');
// });

/**
 * If on '/' route, only GET requests are to be accepted, then
 * using the specific GET related middleware is always 
 * recommended, as shown below.
 */

router.get(routes.root, (_req: Request, res: Response, _next: NextFunction) => {
  res.send('<h1>Hello from Express!</h1>');
});

export default router;
