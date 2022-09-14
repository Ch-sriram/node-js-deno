/// <reference path="../types/product.d.ts" />
import { Request, Response, NextFunction, RequestHandler } from 'express';
import routes from '../routes';
import Product from '../models/Product';

/**
 * For adding and editing a product, we'll use the same view and so, we'll use the same view 'admin/add-product.ejs', which we'll
 * rename as 'admin/add-edit-product.ejs' and delete 'admin/edit-product.ejs' view template.
 */

// GET: 'admin/add-product' route's controller: renders Add Product form
export const getAddProduct = (_: Request, res: Response) => (
  res.render('admin/add-edit-product', {
    docTitle: 'Admin | Add Product',
    path: routes.admin.root + routes.admin.addProduct,
    editing: false
  })
);

// POST: 'admin/add-product' route's controller: Adds a Product
export const postAddProduct: RequestHandler = (req, res, next) => {
  const { title, imageUrl, price, description } = req.body;
  if (title !== '' && imageUrl !== '' && price !== '' && description !== '') {
    const product = new Product(null, title, imageUrl, price, description);
    product.save()
      .then(() => res.redirect(routes.shop.root))
      .catch(err => {
        console.log(err);
        next(err);
      });
  } else {
    const err = new Error('Provided product has empty fields!');
    next(err);
  }
};

// GET: 'admin/edit-product' route's controller: Edits a Product
export const getEditProduct = (req: Request, res: Response) => {
  /**
   * What we want is to be able to extract the product ID of the existing product we want to edit, and for that, we've to somehow
   * send the productId details on the route. The best way to convey this kind of information is to use the query parameters.
   * This particular controller is specifically on the 'admin/edit-product' GET route, and so, in the admin routes, this particular controller 
   * is connected.
   */
  /**
   * When we're editing, we can send in additional information to the template like {editing: true} since we're using the same template
   * for both adding/editing the products we have. Now, this particular controller is hooked up to the dynamic `editRoute` route
   * in admin routes [routes/admin.ts]. In the `editRoute`, we can add query parameters from the template, but we can always check
   * for the query params in the controller, i.e., in here, using the `request.params.<query_param_name>` as shown below
   */
  // Eg: if the GET request on the `editRoute` is as follows:
  // `/admin/edit-product/<product_id>?edit=true&someValue=1234
  
  // This is how we'll access those query params, and the values we get here, are always string values
  // const { edit } = req.query; // edit = "true"
  // const { someValue } = req.query; // someValue = "1234"
  // const { notPresent } = req.query; // notPresent = undefined
  
  // for now, we're only sending in the value for 'edit' as a query param
  const { edit } = req.query;
  console.log('edit', edit, typeof edit); // edit true string
  const editMode = edit === 'true';
  
  if (!editMode) {
    return res.redirect(routes.shop.root);
  }

  /**
   * In order to pre-populate the data that's already present in the product.json file, we need to fetch the product using the productId
   * which is sent as the dynamic segment to the `edit-product/:productId` route
   */

  // const { productId } = req.params;

  // Product.findProductById(productId, products => {
  //   if (products) {
  //     const product = products[0];
  //     if (!product) {
  //       // we should actually show an error, but for now, we're redirecting to '/' route, which is the `shop.root` route
  //       return res.redirect(routes.shop.root);
  //     }
  //     return res.render('admin/add-edit-product', {
  //       docTitle: 'Admin | Edit Product',
  //       path: routes.admin.root + routes.admin.editProduct.root,
  //       editing: editMode,
  //       product
  //     });
  //   }
  // });
};

export const postEditProduct = (req: Request, res: Response) => {
  const { productId, title, imageUrl, price, description } = req.body;
  const updatedProduct = new Product(productId, title, imageUrl, Number(price), description);
  updatedProduct.save();
  res.redirect(routes.admin.root + routes.admin.products);
};

export const postDeleteProduct = (req: Request, res: Response) => {
  const { productId } = req.body;
  // It's always better to add a callback to deleteById method
  // to redirect exactly after the deletion completes.
  Product.deleteById(productId);
  return res.redirect(routes.admin.root + routes.admin.products);

  // L95 will be called immediately after the L94 is called,
  // And inside L94's call, there's asynchronous code running,
  // therefore, the comments from L92 to L93 now might make 
  // sense to us.
};

// GET: 'admin/add-product' route's controller: renders Add Product form
export const getProducts = (_: Request, res: Response, __: NextFunction) => {
  // Product.fetchAllProducts(products => {
  //   if (products) {
  //     console.log('admin.ts', products);
  //     setTimeout(() => {
  //       res.render('admin/product-list', {
  //         products,
  //         docTitle: 'Admin | Products',
  //         path: routes.admin.root + routes.admin.products
  //       });
  //     });
  //   }
  // });
};

export default {
  getAddProduct,
  postAddProduct,
  getEditProduct,
  postEditProduct,
  postDeleteProduct,
  getProducts
};
