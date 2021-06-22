// Contains only the constants of the dynamic routes in the 'routes' object
export const dynamicSegment = {
  products: {
    id: 'productId'
  }
} as const;

// Contains all the routes, static + dynamic
export const routes = {
  admin: {
    root: '/admin',
    addProduct: '/add-product',
    editProduct: {
      root: '/edit-product',
      id: `/:${dynamicSegment.products.id}` // '/:productId'
    },
    products: '/products'
  },
  shop: {
    root: '/',
    cart: '/cart',
    orders: '/orders',
    products: {
      root: '/products',
      id: `/:${dynamicSegment.products.id}` // '/:productId'
    },
    checkout: '/checkout'
  }
} as const;

export default routes;
