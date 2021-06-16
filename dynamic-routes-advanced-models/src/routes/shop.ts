import express from 'express';

import routes from '.';
import shopController from '../controllers/shop';

const router = express.Router();

// GET: '/' leads to shop root route
router.get(routes.shop.root, shopController.getIndex);

// GET: /products
router.get(routes.shop.products.root, shopController.getProducts);

// GET: accepts requests from routes like: '/products/12345', '/products/salkdnas', '/products/abc123'
// And so, the ordering of such routes is important, i.e. because if there's a route as follows:
// '/products/delete', that route should be before this particular dynamic route, since this route i.e., 
// '/products/:productId' will match even '/products/delete' route, and so, we need to be careful about how we order the routes in this routing middleware for shop routes
const productIdRoute = routes.shop.products.root + routes.shop.products.id; // '/products/:productId'
router.get(productIdRoute, shopController.getProduct);

// GET: '/cart'
router.get(routes.shop.cart, shopController.getCart);

// GET: '/orders'
router.get(routes.shop.orders, shopController.getOrders);

// GET: '/checkout'
router.get(routes.shop.checkout, shopController.getCheckout);

export default router;
