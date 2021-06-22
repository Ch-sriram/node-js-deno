import fs from 'fs';
import path from 'path';
import rootDir from '../utils/path';

export class Product {
  private static path: string = path.join(rootDir, 'data', 'products.json');

  constructor(
    private id: string | null,
    private readonly title: string,
    private readonly imageUrl: string,
    private readonly price: number,
    private readonly description: string
  ) {}

  private static getProductsFromFile(callBack: AppTypes.ProductCallback) {
    fs.readFile(Product.path, (err: any, fileContent: Buffer) => {
      if (err) {
        console.error('products.json file not found');
        callBack([]);
      } else {
        callBack(fileContent ? JSON.parse(fileContent.toString()) : []);
      }
    });
  }
  
  save() {
    Product.getProductsFromFile((products: AppTypes.ProductsType) => {
      const { id, title, imageUrl, price, description } = this;
      if (id) { // product exists, therefore, update and save
        const existingProductIndex = products.findIndex(product => product.id === this.id);
        const updatedProducts = [...products];
        updatedProducts[existingProductIndex] = {
          ...this, id, title, imageUrl, price, description
        };
        fs.writeFile(Product.path, JSON.stringify(updatedProducts, null, 2), (err: any) => console.log(err));
      } else { // this is a brand new product
        this.id = Math.random().toString();
        const product: AppTypes.ProductType = {
          id: this.id, title, imageUrl, price, description
        };
        products.push(product);
        fs.writeFile(Product.path, JSON.stringify(products, null, 2), (err: any) => console.log(err));
      }
    });
  }
  
  static fetchAllProducts(callBack: AppTypes.ProductCallback) {
    Product.getProductsFromFile(callBack);
  }

  static findProductById(id: string, callback: AppTypes.ProductCallback) {
    // since we don't have a database, we'll have to fetch all the contents of the file and then find the required
    Product.fetchAllProducts((products: AppTypes.ProductsType) => {
      const product = products.find((product: AppTypes.ProductType) => product.id === id);
      if (!product) {
        callback([]);
      } else {
        callback([product]);
      }
    })
  }
}

export default Product;
