import { DeliDataInterface } from '../features/deliveryPage/deliveryDataSlice';
import { Product } from '../features/cartPage/cartSlice';

export type SingleOrderedProduct = Pick<
  Product,
  'id' | 'quantity' | 'headDiameter' | 'stickLength' | 'weight'
>;

export const getFullOrderData = (
  orderedProducts: SingleOrderedProduct[],
  address: DeliDataInterface,
  deliveryId: number,
  userId?: string,
) => {
  if (userId) {
    const body = { ...address, deliveryId, userId, orderedProducts };
    return body;
  }

  const body = {
    ...address,
    deliveryId,
    orderedProducts,
  };
  return body;
};
