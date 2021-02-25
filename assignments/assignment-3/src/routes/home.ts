// Node Imports
import path from 'path';

// Express Imports
import {
  Router,
  Request,
  Response,
  NextFunction
} from 'express';

// Local Imports
import rootDir from '../utils/path';
import routes from '../routes/routes'; // All Route Constants

// Init Router
const router = Router();

// Use 'router' to only accept GET requests on '/'
router.get(routes.root, (_req: Request, res: Response, _next: NextFunction) => {
  res.sendFile(path.join(rootDir, 'views', 'home.html'));
});

export default router;
