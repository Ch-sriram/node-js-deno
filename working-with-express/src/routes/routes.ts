/**
 * Contains route constants as objects
 */

import { PathParams } from 'express-serve-static-core';

interface RouteInterface {
  [route: string]: PathParams;
}

const routes: RouteInterface = {
  root: '/',
  addProduct: '/add-product',
  product: '/product'
};

export default routes;
