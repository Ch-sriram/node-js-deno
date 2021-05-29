import express from 'express';

import routes from '.';
import productsController from '../controllers/products';

const router = express.Router();

router.get(routes.root, productsController.getProducts);

export default router;
