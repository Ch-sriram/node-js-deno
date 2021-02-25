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

// Init Router
const router = Router();

// Use `router` to define unknown routes: by default, the foll. middleware matches everything that's NOT specifically
// defined for '/' route related RegEx
router.use((_req: Request, res: Response, _next: NextFunction) => {
  res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});

export default router;
