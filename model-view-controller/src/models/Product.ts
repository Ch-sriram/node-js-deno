// Contains the data structures related to the 'product' model

// Singleton class
export class Product {
  private products: Array<object> = [];
  private static instance: Product;

  private constructor() {}
  
  static getInstance() {
    if (this.instance) return this.instance;
    this.instance = new Product();
    return this.instance;
  }

  private addNewProduct(title: object) {
    if (!this.products) throw new Error('No Products found');
    this.products.push(title);
  }

  get getProducts() {
    if (!this.products) throw new Error('No products found');
    return this.products;
  }

  set addProduct(title: object) {
    if (!title) throw new Error('Please pass in a valid title');
    this.addNewProduct(title);
  }
}

export default Product;
