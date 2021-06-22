declare namespace AppTypes {
  // Common Interfaces
  export interface CartProductType {
    id: string;
    quantity: number;
  };
  export interface CartObjectType {
    products: CartProductsType;
    totalPrice: number;
  };
  export interface ProductType {
    readonly id: string | null;
    readonly title: string;
    readonly imageUrl: string;
    readonly price: number;
    readonly description: string;
  }
  
  // Array Types
  export type ProductsType = Array<ProductType>;
  export type CartProductsType = Array<CartProductType> | [];
  
  // Function Signature Types
  export type ProductCallback = (products: ProductsType) => void;
}
