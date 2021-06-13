const routes = {
  admin: {
    root: '/admin',
    addProduct: '/add-product',
    products: '/products'
  },
  shop: {
    root: '/',
    cart: '/cart',
    orders: '/orders',
    products: '/products',
    checkout: '/checkout'
  }
} as const;

export default routes;
