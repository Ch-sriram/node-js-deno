/**
 * All logic so far in this particular application, deals only with products (Specifically, the products[]), and so, we'll maintain a 
 * controller for the managing the 'views' and the 'models' for manipulating/using the 'products' in this file, which a.k.a 'products.ts' (which is inside the '/controllers' directory)
 * In the same logical way, if we've any logic that needs to deal with the 'users', we'll make and use the 'users.ts' controller.
 */

import { Request, Response, NextFunction } from 'express';
import routes from '../routes';
import Product from '../models/Product';
import { ProductsType } from '../types/product';

// GET: 'admin/add-product' route's controller: renders Add Product form
export const getAddProduct = (_: Request, res: Response, __: NextFunction) => (
  res.render('add-product', {
    docTitle: 'Add Product',
    path: routes.admin.root + routes.admin.addProduct
  })
);

// POST: 'admin/add-product' route's controller: Adds a Product
export const postAddProduct = (req: Request, res: Response, _: NextFunction) => {
  const productObj: { title: string } = { title: req.body.title };
  if (productObj.title !== '') {
    const product = new Product(productObj);
    product.save();
  }
  res.redirect(routes.root as string);
};

// GET: '/' route's controller: Renders a page to show all the added products
export const getProducts = (_: Request, res: Response, __: NextFunction) => {
  Product.fetchAllProducts((products: ProductsType) => {
    console.log('shop.ts', products);
    setTimeout(() => {
      res.render('shop', {
        products,
        docTitle: 'Shop',
        path: routes.root
      });
    });
  });
};

export default {
  getAddProduct,
  postAddProduct,
  getProducts
};
