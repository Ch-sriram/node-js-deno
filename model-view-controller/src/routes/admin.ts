import express from 'express';

import routes from '.';
import adminController from '../controllers/admin';

const router = express.Router();

// '/admin/add-product' => GET ['/admin' part is NOT checked here as it is checked in app.use() in app.ts]
router.get(routes.admin.addProduct, adminController.getAddProduct);

// '/admin/products' => GET
router.get(routes.admin.products, adminController.getProducts);


// '/admin/add-product' => POST ['/admin' part is NOT checked here as it is checked in app.use() in app.ts]
router.post(routes.admin.addProduct, adminController.postAddProduct);

export default router;
