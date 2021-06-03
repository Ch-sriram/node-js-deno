import express from 'express';

import routes from '.';
import shopController from '../controllers/shop';

const router = express.Router();

// GET: '/' leads to shop root route
router.get(routes.shop.root, shopController.getIndex);

// GET: /products
router.get(routes.shop.products, shopController.getProducts);

// GET: '/cart'
router.get(routes.shop.cart, shopController.getCart);

// GET: '/checkout'
router.get(routes.shop.checkout, shopController.getCheckout);

export default router;
