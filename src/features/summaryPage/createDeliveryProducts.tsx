import { Product } from '../cartPage/cartSlice';

export interface CreateProductDTO {
  productId: number;
  quantity: number;
  headDiameter: number;
  stickLength: number;
  weight: number;
}

export const createDeliveryProducts = (products: Product[]) => {
  const readyProducts: CreateProductDTO[] = products.map((product) => {
    return {
      productId: product.id,
      quantity: product.quantity,
      headDiameter: product.headDiameter,
      stickLength: product.stickLength,
      weight: product.weight,
    };
  });
  return readyProducts;
};
