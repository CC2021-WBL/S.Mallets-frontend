import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import DeliveryData from '../summaryPage/DeliveryData';
import LogoCarpet from '../../tools/LogoCarpet';
import { RootState } from '../../app/store';
import { sectionStyles } from '../summaryPage/SummaryPage';
import { userWithOrdersActions } from '../../app/userWithOrdersSlice';

const UserPage = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation('summary');
  const deliveryData = useSelector((state: RootState) => state.deliveryData);

  const detailsModalHandler = () => {
    console.log('modal is opened');
    //modal takes data from orderSlice !
  };

  useEffect(() => {
    const getData = async () => {
      const headers = new Headers();
      const auth = localStorage.getItem('auth');
      if (auth) headers.append('auth', auth);
      const options = {
        method: 'GET',
        headers: headers,
      };
      const res = await fetch(
        'https://s-mallets-backend.vercel.app/users/complete',
        options,
      );
      if (res.status === 200) {
        const resJson = await res.json();
        console.log(resJson);
        const userWithOrdersArray = resJson.orders;
        console.log(userWithOrdersArray);
        dispatch(userWithOrdersActions.setOrdersData(userWithOrdersArray));
      }
    };
    getData();
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-7xl">
      <LogoCarpet className="absolute top-12 right-8 z-[1] hidden lg:block" />
      <main className="flex max-w-[47rem] flex-col p-6 sm:w-full sm:justify-between md:p-10">
        <section className={sectionStyles}>
          <h2 className="p-2 text-2xl font-semibold">{t('yourOrders')}</h2>
          <table className="table-auto">
            <tbody>
              <tr>
                <td className="py-2 px-2">28.05.2021</td>
                <td>Zamówienie nr 29302</td>
                <td>150 Euro</td>
                <td>
                  <button className="pl-4" onClick={detailsModalHandler}>
                    więcej Szczegółów
                  </button>
                </td>
              </tr>
              <tr>
                <td className="py-2 px-2">2.02.2021</td>
                <td>Zamówienie nr 2902</td>
                <td>120 Euro</td>
                <td>
                  <button className="pl-4">więcej Szczegółów</button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className={sectionStyles}>
          <h2 className="p-2 text-2xl font-semibold">{t('shippingData')}</h2>
          <DeliveryData deliveryData={deliveryData} />
          <NavLink to="/cart/delivery" className="p-2 font-bold">
            {t('edit')}
          </NavLink>
        </section>
      </main>
    </div>
  );
};

export default UserPage;
