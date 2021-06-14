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

export const getOrders = (_: Request, res: Response, __: NextFunction) => {
  res.render('shop/orders', {
    docTitle: 'Shop | Orders',
    path: routes.shop.orders
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
  getOrders,
  getCheckout
};
