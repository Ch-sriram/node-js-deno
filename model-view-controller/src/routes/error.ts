import express from 'express';
import errorController from '../controllers/error';

const router = express.Router();

// matches all valid/invalid routes -> iff, no other middlewares match the routes in the middleware(s)
// by default, the path/route passed is '/' i.e., '/' is sent implicitly
router.use(errorController.handle404Error);

export default router;
