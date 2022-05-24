import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

const CartSummaryRow = () => {
  const cart = useSelector((state: RootState) => state.cart);

  const sum = cart.products
    .map((product) => product.quantity * product.price)
    .reduce((a, b) => a + b, 0);

  return (
    <div className="my-10 flex justify-between border-y-2 border-black p-4">
      <div className="text-xl font-semibold">podsumowanie zamówienia</div>
      <div className="text-xl font-semibold">{sum} €</div>
    </div>
  );
};
export default CartSummaryRow;
