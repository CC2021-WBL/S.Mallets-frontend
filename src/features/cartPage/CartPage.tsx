import { useDispatch, useSelector } from 'react-redux';
import Cart from './Cart';
import { RootState } from '../../app/store';

import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import {
  fetchDeliveryId,
  fetchOrderDetails,
} from '../../app/slices/orderSlice';

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
    <div className="mx-auto mt-8 mb-16 flex w-full max-w-7xl flex-col px-3 md:px-6 lg:px-8">
      {cart.counter !== 0 ? (
        <>
          <p className=" max-w-[33.3rem] px-3 text-left text-xl md:px-6 lg:px-8">
            {t('cartOpenerText')}
          </p>

          <Cart />
          {Object.keys(chosenDelivery).length > 0 && (
            <div className="flex justify-end">
              <button
                className="btn-primary w-50 font-semibold tracking-widest"
                onClick={nextHandler}
              >
                {t('next')}
              </button>
            </div>
          )}
        </>
      ) : (
        <div>{t('emptyCart')}</div>
      )}
    </div>
  );
};
export default CartPage;
