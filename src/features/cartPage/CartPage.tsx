import { useDispatch, useSelector } from 'react-redux';
import Cart from './Cart';
import { RootState } from '../../app/store';

import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { fetchDeliveryId, fetchOrderDetails } from '../order/orderSlice';

const CartPage = () => {
  const { t } = useTranslation('cart');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector(
    (state: RootState) => state.authentication.isAuthenticated,
  );

  const cart = useSelector((state: RootState) => state.cart);
  const orderDetails = cart.products.map((product) => {
    return {
      productId: product.id,
      quantity: product.quantity,
      headDiameter: product.headDiameter,
      stickLength: product.stickLength,
      weight: product.weight,
    };
  });

  const { chosenDelivery } = useSelector(
    (state: RootState) => state.deliveries,
  );

  const nextHandler = async () => {
    dispatch(fetchOrderDetails(orderDetails));
    dispatch(fetchDeliveryId(chosenDelivery.id));

    if (isAuth && Object.keys(chosenDelivery).length > 0) {
      navigate('/cart/delivery/summary');
    } else if (Object.keys(chosenDelivery).length > 0) {
      navigate('/cart/delivery');
    }
  };

  return (
    <div className="mx-auto w-full max-w-7xl sm:px-3 md:px-6 lg:px-8">
      {cart.counter !== 0 ? (
        <>
          {t('cartOpenerText')}
          <Cart />
          {Object.keys(chosenDelivery).length > 0 && (
            <button
              className="btn-primary w-full font-semibold tracking-widest"
              onClick={nextHandler}
            >
              {t('next')}
            </button>
          )}
        </>
      ) : (
        <div>{t('emptyCart')}</div>
      )}
    </div>
  );
};
export default CartPage;
