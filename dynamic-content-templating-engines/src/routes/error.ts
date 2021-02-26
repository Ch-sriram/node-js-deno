// Handles requests to unknown/invalid routes

// Core NodeJS Imports
import path from 'path';

// Express Imports
import express, { NextFunction, Request, Response } from 'express';

const router = express.Router();

/**
 * Return a 'Page Not Found: 404 Request' page when an invalid
 * route is being accessed.
 */

// matches all valid/invalid routes -> iff, no other middlewares match a given route
// by default, the path/route passed is '/' i.e., routes.root is sent implicitly
router.use((_req: Request, res: Response, _next: NextFunction) => res.status(404).sendFile(path.join(__dirname, '../views/error-404.html')));

export default router;
