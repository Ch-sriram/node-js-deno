import fs from 'fs';
import path from 'path';
import rootDir from '../utils/path';
import { ProductCallback, ProductsType, ProductType } from '../types/product';

export class Product {
  private static path: string = path.join(rootDir, 'data', 'products.json');
  private id!: string;

  constructor(
    private readonly title: string,
    private readonly imageUrl: string,
    private readonly price: number,
    private readonly description: string
  ) {}

  private static getProductsFromFile(callBack: ProductCallback) {
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
    this.id = Math.random().toString();
    Product.getProductsFromFile((products: ProductsType) => {
      const product: ProductType = {
        id: this.id,
        title: this.title,
        imageUrl: this.imageUrl,
        price: this.price,
        description: this.description
      };
      products.push(product);
      console.log('Product.ts', products);
      fs.writeFile(Product.path, JSON.stringify(products, null, 2), (err: any) => console.log(err));
    });
  }
  
  static fetchAllProducts(callBack: ProductCallback) {
    Product.getProductsFromFile(callBack);
  }

  static findProductById(id: string, callback: ProductCallback) {
    // since we don't have a database, we'll have to fetch all the contents of the file and then find the required
    Product.fetchAllProducts((products: ProductsType) => {
      const product = products.find((product: ProductType) => product.id === id);
      if (!product) {
        callback([]);
      } else {
        callback([product]);
      }
    })
  }
}

export default Product;
