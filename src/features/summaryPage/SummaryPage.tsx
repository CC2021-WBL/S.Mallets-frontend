import toast from 'react-hot-toast';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import DeliveryData from './DeliveryData';
import LogoCarpet from '../../tools/LogoCarpet';
import { DeliDataInterface } from '../../app/slices/deliveryDataSlice';
import { Product } from '../../app/slices/cartSlice';
import { RootState } from '../../app/store';
import { countFinalPrice, getDeliId } from './helperTools';
import { createDeliveryData, options } from './createDeliveryData';
import { createDeliveryProducts } from './createDeliveryProducts';
import { getFullOrderData } from '../../tools/getFullOrderData';

export const sectionStyles =
  'border-1 mb-6 flex flex-col justify-center rounded border border-black p-6';

const SummaryPage = () => {
  const { t } = useTranslation('summary');
  const navigate = useNavigate();
  const cart = useSelector((state: RootState) => state.cart);
  const delivery = useSelector((state: RootState) => state.deliveries);
  const deliveryData = useSelector((state: RootState) => state.deliveryData);
  const userAddressData = useSelector((state: RootState) => state.user);
  const { chosenDelivery } = useSelector(
    (state: RootState) => state.deliveries,
  );

  const updatedUserAddress: DeliDataInterface = {
    messageFromUser: '',
    ...userAddressData.address,
    name: userAddressData.name,
    lastname: userAddressData.lastname,
    email: userAddressData.email,
    phoneNumber: userAddressData.phoneNumber,
  };

  const finalPrice = countFinalPrice(
    cart.products,
    Number(delivery.chosenDelivery.deliveryPriceEuro),
  );

  const confirmHandler = async () => {
    let options: options = { deliveryData: deliveryData };
    if (userAddressData) {
      options = {
        deliveryData: deliveryData,
        userAddressData: updatedUserAddress,
      };
    }
    const deliveryId = getDeliId(chosenDelivery);
    const finalDeliveryData = createDeliveryData(options);
    const readyProducts = createDeliveryProducts(cart.products);
    let body;
    if (userAddressData) {
      body = getFullOrderData(
        readyProducts,
        finalDeliveryData,
        deliveryId,
        userAddressData.id,
      );
    } else {
      body = getFullOrderData(readyProducts, finalDeliveryData, deliveryId);
    }
    const jsonBody = JSON.stringify(body);
    console.log(body);
    const requestOptions = {
      method: 'POST',
      body: jsonBody,
      headers: { 'Content-Type': 'application/json' },
    };
    try {
      const response = await fetch(
        'https://s-mallets-backend.vercel.app/orders',
        requestOptions,
      );
      if (response.status !== 201) {
        toast.error(t('toastBad'));
      }
      const resJson = await response.json();
      if (response.status === 201) {
        console.log(resJson);
        toast.success(t('toastOk'));
        navigate('/confirmation', {
          state: {
            id: resJson.id,
          },
        });
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
                <div className="flex flex-wrap gap-4 p-2" key={index}>
                  <p>{index + 1}</p>
                  <p className="font-semibold">{product.seriesName}</p>
                  <p className="font-semibold">{product.productModel}</p>
                  <p>{product.headDiameter} mm</p>
                  <p>{product.weight} g</p>
                  <p>{product.quantity} pcs.</p>
                </div>
              );
            })}
          <div className="self-end p-4 font-bold">suma {finalPrice} €</div>
          <NavLink to="/cart" className="p-2 font-bold">
            {t('edit')}
          </NavLink>
        </section>
        <section className={sectionStyles}>
          <h2 className="p-2 text-2xl font-semibold">{t('shippingData')}</h2>
          {deliveryData.name.length !== 0 ? (
            <DeliveryData deliveryData={deliveryData} />
          ) : userAddressData.id.length !== 0 ? (
            <DeliveryData deliveryData={updatedUserAddress} />
          ) : (
            <DeliveryData deliveryData={deliveryData} />
          )}
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
