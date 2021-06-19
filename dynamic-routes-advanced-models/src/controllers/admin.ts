/// <reference path="../types/product.d.ts" />
import { Request, Response, NextFunction } from 'express';
import routes from '../routes';
import Product from '../models/Product';

// GET: 'admin/add-product' route's controller: renders Add Product form
export const getAddProduct = (_: Request, res: Response, __: NextFunction) => (
  res.render('admin/add-product', {
    docTitle: 'Admin | Add Product',
    path: routes.admin.root + routes.admin.addProduct
  })
);

// POST: 'admin/add-product' route's controller: Adds a Product
export const postAddProduct = (req: Request, res: Response, _: NextFunction) => {
  const { title, imageUrl, price, description } = req.body;
  if (title !== '' && imageUrl !== '' && price !== '' && description !== '') {
    const product = new Product(title, imageUrl, price, description);
    product.save();
  }
  res.redirect(routes.shop.root);
};

// GET: 'admin/add-product' route's controller: renders Add Product form
export const getProducts = (_: Request, res: Response, __: NextFunction) => {
  Product.fetchAllProducts((products: AppTypes.ProductsType) => {
    console.log('admin.ts', products);
    setTimeout(() => {
      res.render('admin/product-list', {
        products,
        docTitle: 'Admin | Products',
        path: routes.admin.root + routes.admin.products
      });
    });
  });
};

export default {
  getAddProduct,
  postAddProduct,
  getProducts
};
