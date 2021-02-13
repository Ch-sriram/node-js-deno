// Handles requests to unknown/invalid routes

// Express Imports
import express, { NextFunction, Request, Response } from 'express';

const router = express.Router();

/**
 * Return a 'Page Not Found: 404 Request' page when an invalid
 * route is being accessed.
 */

// matches all valid/invalid routes -> iff, no other middlewares match a given route
// by default, the path/route passed is '/' i.e., routes.root is sent implicitly
router.use((_req: Request, res: Response, _next: NextFunction) => res.status(404).send(`
  <h1
    style="
      height: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: Lucida Console, Courier, monospace;
    "
  >
    Page Not Found: 404 Error
  </h1>
`));

/**
 * Know that the response object `res` inside a callback can
 * be chained with status(), setHeader(), etc, but the last one
 * should always be the send() method... i.e., 
 *    res.status(...).send(...);
 *    res.setHeader(...).send(...);
 */

export default router;
