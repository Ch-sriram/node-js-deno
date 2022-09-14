import { Request, Response, NextFunction, RequestHandler } from 'express';
import { RowDataPacket } from 'mysql2';
import routes, { dynamicSegment } from '../routes';
import Product, { ProductType } from '../models/Product';
import Cart from '../models/Cart';

// GET: '/' route's controller: Renders a page to show all the added products
export const getIndex: RequestHandler = (_, res, next) =>
  Product.fetchAll()
    .then(([products]) => res.render('shop/index', {
      products,
      docTitle: 'Shop',
      path: routes.shop.root
    }))
    .catch(err => {
      console.log(err);
      return next(err);
    });

// GET: '/products'
export const getProducts: RequestHandler = (_, res, next) => {
  Product.fetchAll()
    .then(([products]) => res.render('shop/product-list', {
      products,
      docTitle: 'Shop | Products',
      path: routes.shop.products
    }))
    .catch(err => {
      console.log(err);
      next(err);
    });
};

// GET: '/products/abc123', '/products/2331fd23', etc
export const getProduct: RequestHandler = (req, res, next) => {
  const { id } = dynamicSegment.products; // id is the same as the dynamic portion of the name given in the dynamic route
  // i.e., id -> 'productId' since the route's dynamic segment is: '/products/:productId'
  const productId = req.params[id]; // params object from the `req` contains the dynamic segment of the dynamic route we defined in shop routes
  // console.log('productId', productId);
  // Instead of logging the 'productId' we'll use the 'productId' to fetch a product from the available products
  Product.findById(productId)
    .then(([productArr]) => {
      console.log(productArr);
      const product: ProductType = (productArr as RowDataPacket)[0];
      return res.render('shop/product-detail', {
        product,
        docTitle: product.title,
        path: routes.shop.products.root
      });
    })
    .catch(err => {
      console.log(err);
      next(err);
    });
};

export const getCart = (_: Request, res: Response) => {
  res.render('shop/cart', {
    docTitle: 'Shop | Cart',
    path: routes.shop.cart
  });
};

export const postCart = (req: Request, res: Response) => {
  // const { productId } = req.body;
  // Product.findProductById(productId, products => {
  //   if (products) {
  //     const product = products[0];
  //     Cart.addProduct(productId, product.price);
  //   }
  // });
  res.redirect(routes.shop.cart);
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
  postCart,
  getOrders,
  getCheckout
};
