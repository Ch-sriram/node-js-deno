import fs from 'fs';
import path from 'path';
import rootDir from '../utils/path';
import Cart from './Cart';

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
        callBack(undefined);
      } else {
        callBack(fileContent ? JSON.parse(fileContent.toString()) : []);
      }
    });
  }

  private static isProductAndCartTotalPriceInSync(cartItems: AppTypes.CartObjectType, products: AppTypes.ProductsType) {
    const { totalPrice: totalCartPrice, products: cartProducts } = cartItems;
    let actualTotalPrice = 0;
    for (const { id, quantity } of cartProducts) {
      const matchedProduct = products.find(product => product.id === id);
      if (matchedProduct) {
        actualTotalPrice += (matchedProduct.price) * quantity;
      }
    }
    return (actualTotalPrice === totalCartPrice ? [true, actualTotalPrice] : [false, actualTotalPrice]) as [boolean, number];
  }
  
  save() {
    Product.getProductsFromFile(products => {
      if (products) {
        const { id, title, imageUrl, price, description } = this;
        if (id) { // product exists, therefore, update and save
          const existingProductIndex = products.findIndex(product => product.id === id);
          const existingProduct = products.find(product => product.id === id);
          const updatedProducts = [...products];
          updatedProducts[existingProductIndex] = {
            ...this, id, title, imageUrl, price, description
          };
          if (existingProduct && existingProduct.price !== price) {
            Cart.updateCartPrice(updatedCartDetails => {
              if (updatedCartDetails) {
                fs.writeFile(Cart.getCartJSONPath(), JSON.stringify(updatedCartDetails, null, 2), (err: NodeJS.ErrnoException | null) => {
                  if (err) {
                    console.error(err);
                    throw err;
                  }
                  const [isTotalPriceInSync, totalCartPrice] = Product.isProductAndCartTotalPriceInSync(updatedCartDetails, updatedProducts);
                  if (!isTotalPriceInSync) {
                    const mutatedCardDetails: AppTypes.CartObjectType = {
                      ...updatedCartDetails,
                      totalPrice: totalCartPrice
                    };
                    console.log(Cart.getCartJSONPath());
                    fs.writeFile(Cart.getCartJSONPath(), JSON.stringify(mutatedCardDetails, null, 2), (err: NodeJS.ErrnoException | null) => {
                      if (err) {
                        console.error(err);
                        throw err;
                      }
                    });
                  }
                })
              }
            }, { id, newPrice: price, oldPrice: existingProduct.price });
          }
          fs.writeFile(Product.path, JSON.stringify(updatedProducts, null, 2), (err: any) => console.log(err));
        } else { // this is a brand new product
          this.id = Math.random().toString();
          const product: AppTypes.ProductType = {
            id: this.id, title, imageUrl, price, description
          };
          products.push(product);
          fs.writeFile(Product.path, JSON.stringify(products, null, 2), (err: any) => console.log(err));
        }
      }
    });
  }

  static deleteById(id: string | number) {
    Product.getProductsFromFile(products => {
      if (products) {
        const product = products.find(product => product.id === id);
        const updatedProducts = products.filter(product => product.id !== id);
        fs.writeFile(this.path, JSON.stringify(updatedProducts, null, 2), (err: NodeJS.ErrnoException | null) => {
          if (!err) {
            if (product) {
              Cart.deleteProduct(id, product.price);
            }
          }
        });
      }
    });
  }
  
  static fetchAllProducts(callBack: AppTypes.ProductCallback) {
    Product.getProductsFromFile(callBack);
  }

  static findProductById(id: string, callback: AppTypes.ProductCallback) {
    // since we don't have a database, we'll have to fetch all the contents of the file and then find the required
    Product.fetchAllProducts(products => {
      if (products) {
        const product = products.find((product: AppTypes.ProductType) => product.id === id);
        if (!product) {
          callback(undefined);
        } else {
          callback([product]);
        }
      }
    })
  }
}

export default Product;
