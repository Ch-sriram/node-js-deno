export interface ProductType {
  readonly title: string;
  readonly imageUrl: string;
  readonly price: number;
  readonly description: string;
}
export type ProductsType = Array<ProductType>;
export type ProductCallback = (products: ProductsType) => void;
