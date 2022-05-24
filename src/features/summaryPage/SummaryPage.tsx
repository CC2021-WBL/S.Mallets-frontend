import toast from 'react-hot-toast';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import DeliveryData from './DeliveryData';
import LogoCarpet from '../../tools/LogoCarpet';
import { Product } from '../cartPage/cartSlice';
import { RootState } from '../../app/store';

export const sectionStyles =
  'border-1 mb-6 flex flex-col justify-center rounded border border-black p-6';

const SummaryPage = () => {
  const deliveryData = useSelector((state: RootState) => state.deliveryData);
  const { t } = useTranslation('summary');
  const navigate = useNavigate();
  const cart = useSelector((state: RootState) => state.cart);
  const delivery = useSelector((state: RootState) => state.deliveries);

  const sumProducts = cart.products
    .map((product) => product.quantity * product.price)
    .reduce((a, b) => a + b, 0);

  const deliveryPrice = Number(delivery.chosenDelivery.deliveryPriceEuro) || 0;

  const sum = sumProducts + deliveryPrice;

  //TODO: unmock this fetch
  const confirmHandler = async () => {
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify({ deliveryData }),
      headers: { 'Content-Type': 'application/json' },
    };
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        requestOptions,
      );
      if (response.status !== 201) {
        toast.error(t('toastBad'));
      }
      const resJson = await response.json();
      if (response.status === 201) {
        console.log(resJson);
        toast.success(t('toastOk'));
        navigate('/confirmation');
      }
    } catch (error) {
      toast.error(t('toastBad'));
    }
    return;
  };

  return (
    <div className="relative mx-auto w-full max-w-7xl">
      <LogoCarpet className="absolute top-12 right-8 z-[1] hidden lg:block" />
      <main className="flex max-w-2xl flex-col p-6 sm:w-full sm:justify-between md:p-10">
        <section className={sectionStyles}>
          <h2 className="p-2 text-2xl font-semibold">{t('yourOrder')}</h2>
          {cart &&
            cart.products.map((product: Product, index: number) => {
              return (
                <div className="flex gap-2" key={index}>
                  <p>{index + 1}</p>
                  <p>{product.seriesName}</p>
                  <p>{product.productModel}</p>
                  <p>{product.headDiameter} mm</p>
                  <p>{product.weight} g</p>
                  <p>{product.quantity} pcs.</p>
                </div>
              );
            })}
          <div>suma {sum} €</div>
          <NavLink to="/cart" className="p-2 font-bold">
            {t('edit')}
          </NavLink>
        </section>
        <section className={sectionStyles}>
          <h2 className="p-2 text-2xl font-semibold">{t('shippingData')}</h2>
          <DeliveryData deliveryData={deliveryData} />
          <NavLink to="/cart/delivery" className="p-2 font-bold">
            {t('edit')}
          </NavLink>
        </section>
        <button
          className="btn-primary w-full font-semibold tracking-widest"
          onClick={confirmHandler}
        >
          {t('confirmation')}
        </button>
      </main>
    </div>
  );
};

export default SummaryPage;
