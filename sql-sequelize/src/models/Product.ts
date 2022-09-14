import db from '../utils/database';
// import Cart from './Cart';


export type ProductType = {
  id?: string | number;
  title: string;
  imageUrl: string;
  price: number;
  description: string;
};

export class Product {

  constructor(
    private id: string | null,
    private readonly title: string,
    private readonly imageUrl: string,
    private readonly price: number,
    private readonly description: string
  ) {}


  private static isProductAndCartTotalPriceInSync(cartItems: AppTypes.CartObjectType, products: AppTypes.ProductsType) {
    const { totalPrice: totalCartPrice, products: cartProducts } = cartItems;
    const actualTotalPrice = cartProducts.reduce<number>((previousActualTotal, { id, quantity }) => {
      const matchedProduct = products.find(product => product.id === id);
      if (matchedProduct) {
        return previousActualTotal + ((matchedProduct.price) * quantity);
      }
      return previousActualTotal;
    }, 0);
    return [actualTotalPrice === totalCartPrice, actualTotalPrice] as [boolean, number];
  }
  
  save() {
    return db.execute(
      'INSERT INTO products(title, price, imageUrl, description) VALUES (?, ?, ?, ?)',
      [this.title, this.price, this.imageUrl, this.description]
    );
  }

  public static deleteById(id: string | number) {}
  
  public static fetchAll() {
    return db.execute('SELECT * from products');
  }

  public static findById(id: string | number) {
    return db.execute('SELECT * FROM products WHERE products.id = ?', [id]);
  }
}

export default Product;
