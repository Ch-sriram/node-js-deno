import express from 'express';

import routes from '.';
import productsController from '../controllers/products';

const router = express.Router();

// '/admin/add-product' => GET ['/admin' part is NOT checked here as it is checked in app.use() in app.ts]
router.get(routes.admin.addProduct, productsController.getAddProduct);

// '/admin/add-product' => POST ['/admin' part is NOT checked here as it is checked in app.use() in app.ts]
router.post(routes.admin.addProduct, productsController.postAddProduct);

export default router;
