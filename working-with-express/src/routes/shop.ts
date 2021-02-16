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
import routes from './routes';

// create a router from express object
const router = express.Router();

router.get(routes.root, (_req: Request, res: Response, _next: NextFunction) => {
  // res.send('<h1>Hello from Express!</h1>');
  
  //===========================================================

  // Instead of sending an html tag with some text using send()
  // Sending an HTML file using sendFile() is more practical.
  
  // res.sendFile('../views/shop.html'); // Leads to error:TypeError: path must be absolute or specify root to res.sendFile.
  // https://stackoverflow.com/questions/26079611/node-js-typeerror-path-must-be-absolute-or-specify-root-to-res-sendfile-failed

  //===========================================================

  // In order to NOT get the absolute path not specified error,
  // the `path` module can be used to join path w.r.t to 
  // different OS' using path.join().

  // With the `path` core module (core => inbuilt with NodeJS)
  // a global variable available for use in every nodejs file
  // called `__dirname` can be used to catenate a valid 
  // absolute path which shows where the file is located at.

  res.sendFile(path.join(__dirname, '../views', 'shop.html')); // this works
  // res.sendFile(path.join(__dirname, '../views/shop.html')); // this also works
});

export default router;
