import { CreateProductDTO } from '../features/summaryPage/createDeliveryProducts';
import { DeliDataInterface } from '../features/deliveryPage/deliveryDataSlice';
import { Product } from '../features/cartPage/cartSlice';

export type SingleOrderedProduct = Pick<
  Product,
  'id' | 'quantity' | 'headDiameter' | 'stickLength' | 'weight'
>;

export const getFullOrderData = (
  orderedProducts: CreateProductDTO[],
  userData: DeliDataInterface,
  deliveryId: number,
  userId?: string,
) => {
  if (userId) {
    const body = {
      name: userData.name,
      lastname: userData.lastname,
      email: userData.email,
      streetAndNumber: userData.streetAndNumber,
      zipCode: userData.zipCode,
      city: userData.city,
      country: userData.country,
      phoneNumber: userData.phoneNumber,
      messageFromUser: userData.messageFromUser,
      deliveryId,
      userId,
      orderedProducts,
    };
    return body;
  }

  const body = {
    name: userData.name,
    lastname: userData.lastname,
    email: userData.email,
    streetAndNumber: userData.streetAndNumber,
    zipCode: userData.zipCode,
    city: userData.city,
    country: userData.country,
    phoneNumber: userData.phoneNumber,
    messageFromUser: userData.messageFromUser,
    deliveryId,
    orderedProducts,
  };
  return body;
};
