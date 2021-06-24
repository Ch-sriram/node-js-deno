import fs from 'fs';
import path from 'path';
import rootDir from '../utils/path';

export class Cart {
  private static readonly path: string = path.join(rootDir, 'data', 'cart.json');
  /**
   * Cart is an object which we won't recreate for every new product we add to the Cart. And so, using Cart as a traditional
   * class would be a problem, i.e., making a Cart class with properties like `products` and `totalPrice` wouldn't be right.
   */
  /**
   * Therefore, it would be better to addProduct and store it in a JSON file.
   */
  static addProduct(id: string, productPrice: string | number) {
    // Fetch the previous cart products
    fs.readFile(this.path, (err: NodeJS.ErrnoException | null, fileContent: Buffer) => {
      // Add a new cart which has empty products and nil totalPrice
      let cart: AppTypes.CartObjectType = { products: [], totalPrice: 0 };
      if (!err) {
        cart = JSON.parse(fileContent.toString());
      }
      // Analyze the cart => Find the existing product(s)
      const existingProductIndex = cart.products.findIndex((product) => product.id === id);
      const existingProduct = cart.products[existingProductIndex];
      let updatedProduct: AppTypes.CartProductType;
      if (existingProduct) { // when the product is already an existing product, update its quantity
        updatedProduct = { ...existingProduct };
        updatedProduct.quantity = updatedProduct.quantity + 1;
        cart.products = [...cart.products];
        cart.products[existingProductIndex] = updatedProduct;
      } else { // when it's a new product altogether
        updatedProduct = { id, quantity: 1 };
        cart.products = [...cart.products, updatedProduct];
      }
      cart.totalPrice = cart.totalPrice + +productPrice;
      fs.writeFile(this.path, JSON.stringify(cart, null, 2), (err: NodeJS.ErrnoException | null) => console.log(err));
    })
  }

  static deleteProduct(id: string | number, productPrice: number) {
    fs.readFile(this.path, (err: NodeJS.ErrnoException | null, fileContent: Buffer) => {
      if (err) {
        return;
      }
      let updatedCart = { ...JSON.parse(fileContent.toString()) } as AppTypes.CartObjectType;
      const product = updatedCart.products.find(product => product.id === id);
      if (product) {
        const totalPrice = updatedCart.totalPrice - (productPrice * product.quantity);
        const products = updatedCart.products.filter(product => product.id !== id);
        updatedCart = { ...updatedCart, products, totalPrice };
      }
      fs.writeFile(this.path, JSON.stringify(updatedCart, null, 2), (err: NodeJS.ErrnoException | null) => (console.log(err)));
    });
  }
}

export default Cart;
