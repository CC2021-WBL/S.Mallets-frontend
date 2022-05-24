import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

const CartSummaryRow = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const delivery = useSelector((state: RootState) => state.deliveries);

  const sumProducts = cart.products
    .map((product) => product.quantity * product.price)
    .reduce((a, b) => a + b, 0);

  const deliveryPrice = Number(delivery.chosenDelivery.deliveryPriceEuro);

  const sum = sumProducts + deliveryPrice;

  return (
    <div className="my-10 flex justify-between border-y-2 border-black p-4">
      <div className="text-xl font-semibold">podsumowanie zamówienia</div>
      <div className="text-xl font-semibold">{sum} €</div>
    </div>
  );
};
export default CartSummaryRow;
