import { Delivery } from '../deliveryPage/deliverySlice';
import { Product } from '../cartPage/cartSlice';

export function getDeliId(chosenDelivery: Delivery | undefined) {
  let deliveryId = 1;
  if (chosenDelivery && chosenDelivery.id) {
    deliveryId = chosenDelivery.id;
  }
  return deliveryId;
}

export function countFinalPrice(products: Product[], deliveryPrice = 0) {
  const sumProducts = products
    .map((product) => product.quantity * product.price)
    .reduce((a, b) => a + b, 0);

  return sumProducts + deliveryPrice;
}
