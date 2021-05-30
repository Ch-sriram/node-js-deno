// Contains the data structures related to the 'product' model

/**
 * Instead of using an array to save the data, we should use a file to save the data, something like products.json file.
 * That way, we can always fetch the data we stored whenever we run/deploy the backend. For that, we'll use the `fs` module.
 */

import fs from 'fs';
import path from 'path'; // to use `path.join()` method
import rootDir from '../utils/path'; // to create a file in a specific path
import { ProductCallback, ProductsType } from '../types/product';

export class Product {
  private static path: string = path.join(rootDir, 'data', 'products.json');

  constructor(private readonly product: object) {}

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
    Product.getProductsFromFile((products: ProductsType) => {
      products.push(this.product);
      console.log('Product.ts', products);
      fs.writeFile(Product.path, JSON.stringify(products, null, 2), (err: any) => console.log(err));
    });
  }
  
  static fetchAllProducts(callBack: ProductCallback) {
    Product.getProductsFromFile(callBack);
  }
}

export default Product;
