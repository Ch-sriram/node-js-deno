import { Request, Response, NextFunction } from 'express';
import routes, { dynamicRouteConstants } from '../routes';
import Product from '../models/Product';
import { ProductsType } from '../types/product';

// GET: '/' route's controller: Renders a page to show all the added products
export const getIndex = (_: Request, res: Response, __: NextFunction) => {
  Product.fetchAllProducts((products: ProductsType) => {
    // console.log('shop.ts', products);
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
    // console.log('shop.ts', products);
    setTimeout(() => {
      res.render('shop/product-list', {
        products,
        docTitle: 'Shop | Products',
        path: routes.shop.products
      });
    });
  });
};

// GET: '/products/abc123', '/products/2331fd23', etc
export const getProduct = (req: Request, res: Response) => {
  const { id } = dynamicRouteConstants.shop.products; // id is the same as the dynamic portion of the name given in the dynamic route
  // i.e., id -> 'productId' since the route's dynamic segment is: '/products/:productId'
  const productId = req.params[id]; // params object from the `req` contains the dynamic segment of the dynamic route we defined in shop routes
  console.log('productId', productId);

  // for now, we'll just redirect to '/', but we actually will render a separate page on this route
  res.redirect(routes.shop.root);
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
  getProduct,
  getIndex,
  getCart,
  getOrders,
  getCheckout
};