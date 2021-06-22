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

// '/admin/edit-product' => GET ['/admin' is prepended in app.ts in app.use() middleware]
const editRoute = routes.admin.editProduct.root + routes.admin.editProduct.id;
router.get(editRoute, adminController.getEditProduct);

// '/admin/edit-product' => POST ['/admin' is prepended in app.ts in app.use() middleware]
// for POST route, there's NO need to add query params, since the data comes through parameters in the form
router.post(routes.admin.editProduct.root, adminController.postEditProduct);

export default router;
