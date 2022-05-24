import toast from 'react-hot-toast';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import DeliveryData from '../summaryPage/DeliveryData';
import LogoCarpet from '../../tools/LogoCarpet';
import { sectionStyles } from '../summaryPage/SummaryPage';

export interface UserWithOrdersArray {
  orders: userWithOrder[];
}
export interface userWithOrder {
  city: string;
  country: string;
  createdAt: string;
  email: string;
  finalCostEuro: string;
  id: string;
  lastname: string;
  messageFromUser: string;
  modifiedAt: string;
  name: string;
  orderStatus: string;
  phoneNumber: string;
  streetAndNumber: string;
  zipCode: string;
}

const UserPage = () => {
  // const orders = useSelector((state: RootState) => state.userWithOrders);
  const [orders, setOrders] = useState(null);
  // const dispatch = useDispatch();
  const { t } = useTranslation('summary');
  // const deliveryData = useSelector((state: RootState) => state.deliveryData);

  const detailsModalHandler = () => {
    console.log('modal is opened');
    //modal takes data from orderSlice ?? or state
  };

  useEffect(() => {
    const getData = async () => {
      try {
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
          setOrders(userWithOrdersArray);
          // dispatch(userWithOrdersActions.setOrdersData(userWithOrdersArray));
        } else {
          toast.error(t('toastBad'));
        }
      } catch (error) {
        toast.error(t('toastBad'));
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
              {orders &&
                Array.from(orders).map((index: any) => (
                  <tr key={index.id}>
                    <td className="py-2 px-2">
                      {index.modifiedAt.slice(0, 10)}
                    </td>
                    <td className="font-semibold">
                      Zamówienie nr {index.id.slice(0, 5)}
                    </td>
                    <td>{index.finalCostEuro} €</td>
                    <td>
                      <button
                        className="pl-4 font-semibold"
                        onClick={detailsModalHandler}
                      >
                        więcej szczegółów {'>'}
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </section>
        <section className={sectionStyles}>
          <h2 className="p-2 text-2xl font-semibold">{t('yourData')}</h2>
          {orders && <DeliveryData deliveryData={orders[0]} />}
          <NavLink to="/cart/delivery" className="p-2 font-bold">
            {t('edit')}
          </NavLink>
        </section>
      </main>
    </div>
  );
};

export default UserPage;
