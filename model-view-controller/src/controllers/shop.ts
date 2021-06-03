/**
 * Now the app has been logically divided into admin related routes and the shop related routes, so having a single controller
 * for both admin and shop as products.ts doesn't make any sense anymore. We logically have to separate code for admin routes
 * using the admin controller and the same goes for shop routes (i.e., we'd need a shop controller)
 */

import { Request, Response, NextFunction } from 'express';
import routes from '../routes';
import Product from '../models/Product';
import { ProductsType } from '../types/product';

// GET: '/' route's controller: Renders a page to show all the added products
export const getIndex = (_: Request, res: Response, __: NextFunction) => {
  Product.fetchAllProducts((products: ProductsType) => {
    console.log('shop.ts', products);
    setTimeout(() => {
      res.render('shop/index', {
        products,
        docTitle: 'Shop',
        path: routes.shop.root
      });
    });
  });
};

// GET: '/products'
export const getProducts = (_: Request, res: Response, __: NextFunction) => {
  Product.fetchAllProducts((products: ProductsType) => {
    console.log('shop.ts', products);
    setTimeout(() => {
      res.render('shop/product-list', {
        products,
        docTitle: 'Shop | Products',
        path: routes.shop.products
      });
    });
  });
};

export const getCart = (_: Request, res: Response, __: NextFunction) => {
  res.render('shop/cart', {
    docTitle: 'Shop | Cart',
    path: routes.shop.cart
  });
};

export const getCheckout = (_: Request, res: Response, __: NextFunction) => {
  res.render('shop/checkout', {
    docTitle: 'Shop | Checkout',
    path: routes.shop.checkout
  });
};

export default {
  getProducts,
  getIndex,
  getCart,
  getCheckout
};
