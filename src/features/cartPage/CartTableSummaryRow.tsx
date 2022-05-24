import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { useTranslation } from 'react-i18next';

const CartSummaryRow = () => {
  const { t } = useTranslation('cart');
  const cart = useSelector((state: RootState) => state.cart);
  const delivery = useSelector((state: RootState) => state.deliveries);

  const sumProducts = cart.products
    .map((product) => product.quantity * product.price)
    .reduce((a, b) => a + b, 0);

  const deliveryPrice = Number(delivery.chosenDelivery.deliveryPriceEuro) || 0;

  const sum = sumProducts + deliveryPrice;

  return (
    <div className="my-3 flex justify-between border-y-2 border-black p-4">
      <div className="text-xl font-semibold">{t('orderSummary')}</div>
      <div className="text-xl font-semibold">{sum} €</div>
    </div>
  );
};
export default CartSummaryRow;
