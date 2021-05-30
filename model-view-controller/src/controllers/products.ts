/**
 * All logic so far in this particular application, deals only with products (Specifically, the products[]), and so, we'll maintain a 
 * controller for the managing the 'views' and the 'models' for manipulating/using the 'products' in this file, which a.k.a 'products.ts' (which is inside the '/controllers' directory)
 * In the same logical way, if we've any logic that needs to deal with the 'users', we'll make and use the 'users.ts' controller.
 */

import { Request, Response, NextFunction } from 'express';
import routes from '../routes';
import Product from '../models/Product';

const products = Product.getInstance();

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
  const productObj: { title: string } = { title: req.body.title };
  if (productObj.title !== '') {
    products.addProduct = productObj;
  }
  res.redirect(routes.root as string);
};

// GET: '/' route's controller: Renders a page to show all the added products
export const getProducts = (_: Request, res: Response, __: NextFunction) => {
  console.log('shop.ts', products.getProducts);
  res.render('shop', {
    products: products.getProducts,
    docTitle: 'Shop',
    path: routes.root
  });
};

export default {
  getAddProduct,
  postAddProduct,
  getProducts
};
