/**
 * Routes related to Admin of the Shopping Web Application 
 */

// express imports
import express, {
  Request,
  Response,
  NextFunction
} from 'express';

// local imports
import routes from './routes';

// Create a router as follows
const router = express.Router();

/**
 * For admin related routes, a logical grouping can be done in
 * '/admin' route and then any route under admin related route
 * should be appended with '/admin/<route-name>'.
 * 
 * Can be done by specifically appending '/admin' on the 
 * individual middlewares i.e., 
 *  router.get('/admin/add-product', () => {...});
 *  router.post('/admin/add-product', () => {...});
 * 
 * But, doing that is NOT feasible if there are many routes 
 * related admin. In that case, the router is supposed to be
 * added only the sub-routes related admin routes as shown
 * below, and that can be grouped as: 
 *  app.use('/admin', adminRoutes); // as in index.ts file
 */

// '/admin/add-product' => GET ['/admin' part is NOT checked here as it is checked in app.use() in index.ts]
router.get(routes.admin.addProduct, (_req: Request, res: Response, _next: NextFunction) => {
  res.send(`
    <form action="${routes.admin.root}${routes.admin.addProduct}" method="POST">
      <input type="text" name="title">
      <button type="submit">Add Product</button>
    </form>
  `);
});

// '/admin/add-product' => POST ['/admin' part is NOT checked here as it is checked in app.use() in index.ts]
router.post(routes.admin.addProduct, (req: Request, res: Response, _next: NextFunction) => {
  console.log(JSON.parse(JSON.stringify(req.body)));
  res.redirect(routes.root as string);
});

export default router;
