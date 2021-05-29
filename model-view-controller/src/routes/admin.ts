import express, {
  Request,
  Response,
  NextFunction
} from 'express';
import routes from '.';

const router = express.Router();

// Variable to hold the products
export const products: { [x: string]: any } = [];

// '/admin/add-product' => GET ['/admin' part is NOT checked here as it is checked in app.use() in index.ts]
router.get(routes.admin.addProduct, (_req: Request, res: Response, _next: NextFunction) => {
  res.render('add-product', {
    docTitle: 'Add Product',
    path: routes.admin.root + routes.admin.addProduct
  });
});

// '/admin/add-product' => POST ['/admin' part is NOT checked here as it is checked in app.use() in index.ts]
router.post(routes.admin.addProduct, (req: Request, res: Response, _next: NextFunction) => {
  console.log(JSON.parse(JSON.stringify(req.body)));
  products.push({ title: req.body.title });
  res.redirect(routes.root as string);
});

export default router;
