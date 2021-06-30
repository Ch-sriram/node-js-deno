declare namespace AppTypes {
  // Common Interfaces
  interface CartProductType {
    id: string;
    quantity: number;
  };
  interface CartObjectType {
    products: CartProductsType;
    totalPrice: number;
  };
  interface ProductType {
    readonly id: string | null;
    readonly title: string;
    readonly imageUrl: string;
    readonly price: number;
    readonly description: string;
  }
  
  // Array Types
  type ProductsType = Array<ProductType>;
  type CartProductsType = Array<CartProductType>;
  
  // Function Signature Types
  type ProductCallback = (products?: ProductsType) => void;
  type CartObjectCallback = (cartDetails?: AppTypes.CartObjectType) => void;

  // Cart Item
  type CartItemDetails = {
    id: number | string;
    newPrice: number;
    oldPrice: number;
  };
}
