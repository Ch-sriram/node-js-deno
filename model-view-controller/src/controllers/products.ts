/**
 * All logic so far in this particular application, deals only with products (Specifically, the products[]), and so, we'll maintain a 
 * controller for the managing the 'views' and the 'models' for manipulating/using the 'products' in this file, which a.k.a 'products.ts' (which is inside the '/controllers' directory)
 * In the same logical way, if we've any logic that needs to deal with the 'users', we'll make and use the 'users.ts' controller.
 */

import { Request, Response, NextFunction } from 'express';
import routes from '../routes';

// Ideally, we need to put any data stores/structures inside models, but for now 'products' can be defined and used in here
export const products: Array<object> = [];

// GET: 'admin/add-product' route's controller: renders Add Product form
export const getAddProduct = (_: Request, res: Response, __: NextFunction) => (
  res.render('add-product', {
    docTitle: 'Add Product',
    path: routes.admin.root + routes.admin.addProduct
  })
);

// POST: 'admin/add-product' route's controller: Adds a Product
export const postAddProduct = (req: Request, res: Response, _: NextFunction) => {
  console.log(JSON.parse(JSON.stringify(req.body)));
  products.push({ title: req.body.title });
  res.redirect(routes.root as string);
};

// GET: '/' route's controller: Renders a page to show all the added products
export const getProducts = (_: Request, res: Response, __: NextFunction) => {
  console.log('shop.ts', products);
  res.render('shop', {
    products,
    docTitle: 'Shop',
    path: routes.root
  });
};

export default {
  getAddProduct,
  postAddProduct,
  getProducts
};
