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
 * 'router' object can be used to define the middleware related
 * to a particular route and then that can be exported.
 * 
 * Router creates a mini-express app which is pluggable into
 * the main express app.
 */

// 'router' object can be used to define a use(), get(), post()
// etc middleware(s) and so whatever can be done using
// express() (i.e., express().use(), etc), can be done using
// the router() object as shown below.

// '/add-product' & '/product' route should certainly go into 
// routes related to admin, which is in this file

// matches incoming requests w.r.t '/add-product' route only
router.use(routes.addProduct, (_req: Request, res: Response, _next: NextFunction) => {
  res.send(`
    <form action="/product" method="POST">
      <input type="text" name="title">
      <button type="submit">Add Product</button>
    </form>
  `);
});

// matches Incoming POST Requests w.r.t '/product' route only
router.post(routes.product, (req: Request, res: Response, _next: NextFunction) => {
  // console.log(req.body); // [Object: null prototype] { title: '<typed-in-text>' }

  /**
   * To get rid of the [Object: null prototype], follow this 
   * stack-overflow solution: https://stackoverflow.com/questions/56298481/how-to-fix-object-null-prototype-title-product
   * 
   * Conversely, the middleware added for url encoding using
   *  app.use(express.urlencoded({ extended: false })); // src/index.ts
   * can be changed to the following:
   *  app.use(express.urlencoded({ extended: true }));
   * to NOT get the additional [Object: null prototype]
   * 
   * Read More on extended option here: 
   * https://stackoverflow.com/questions/29960764/what-does-extended-mean-in-express-4-0
   */
  res.redirect(routes.root as string);
});

export default router;
