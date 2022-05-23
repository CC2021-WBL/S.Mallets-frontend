import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import DeliveryData from './DeliveryData';
import LogoCarpet from '../../tools/LogoCarpet';
import { RootState } from '../../app/store';

const SummaryPage = () => {
  const deliveryData = useSelector((state: RootState) => state.deliveryData);

  return (
    <div className="relative mx-auto w-full max-w-7xl">
      <LogoCarpet className="absolute top-12 right-8 z-[1] hidden lg:block" />
      <main className="flex max-w-2xl flex-col p-6 sm:w-full sm:justify-between md:p-10">
        <section className="order-field border-1 mb-6 flex flex-col justify-center rounded border border-black p-6">
          <h2 className="p-2 text-2xl font-semibold">Twoje zamówienie</h2>

          <NavLink to="/cart" className="p-2 font-bold">
            edytuj
          </NavLink>
        </section>
        <section className="address-field border-1 mb-6 flex flex-col justify-center rounded border border-black p-6">
          <h2 className="p-2 text-2xl font-semibold">Dane do wysyłki</h2>
          <DeliveryData deliveryData={deliveryData} />
          <NavLink to="/cart/delivery" className="p-2 font-bold">
            edytuj
          </NavLink>
        </section>
        <button className="btn-primary w-full font-semibold tracking-widest">
          Potwierdź zamówienie
        </button>
      </main>
    </div>
  );
};

export default SummaryPage;
