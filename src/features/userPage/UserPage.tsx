import toast from 'react-hot-toast';
import { AiOutlineClose } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import DeliveryData from '../summaryPage/DeliveryData';
import LogoCarpet from '../../tools/LogoCarpet';
import logosm from '../../assets/logosmall.png';
import { RootState } from '../../app/store';
import { sectionStyles } from '../summaryPage/SummaryPage';
import { userWithOrdersActions } from '../../app/userWithOrdersSlice';

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
  const orders = useSelector((state: RootState) => state.userWithOrders.orders);
  const dispatch = useDispatch();
  const { t } = useTranslation('summary');

  const [showModal, setShowModal] = useState<boolean>(false);
  const closeModal = () => {
    setShowModal(false);
  };

  const detailsModalHandler = () => {
    console.log('modal is opened');
    setShowModal(true);
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
          const userAddress = resJson.address;
          console.log(userAddress);
          dispatch(
            userWithOrdersActions.setOrdersData({
              orders: userWithOrdersArray,
            }),
          );
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
          <table className="user-table table-auto">
            <tbody className="user-table">
              {orders &&
                Array.from(orders).map((index: any) => (
                  <tr key={index.id} className="user-table mb-6 md:mb-0">
                    <td className="user-table py-2 px-2">
                      {index.modifiedAt.slice(0, 10)}
                    </td>
                    <td className="user-table px-2 font-semibold md:px-0">
                      Zamówienie nr: {index.id.slice(0, 5)}
                    </td>
                    <td className="user-table px-2 md:px-0">
                      {index.finalCostEuro} €
                    </td>
                    <td className="user-table">
                      <button
                        className="px-2 font-semibold md:px-0 md:pl-4 "
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
      {showModal ? (
        <div
          onClick={closeModal}
          onKeyDown={closeModal}
          role="button"
          tabIndex={0}
        >
          <div className="fixed top-0 left-0  z-20 h-full w-full bg-black opacity-20" />
          <div
            className="bg- fixed top-1/2 left-1/2  z-30 flex h-40 w-10/12 -translate-y-1/2 -translate-x-1/2 items-center justify-center rounded-lg bg-stone-200 p-6 text-center shadow-xl hover:cursor-default sm:h-60 sm:p-8 sm:text-lg md:text-xl lg:text-2xl lg2:w-1/2 "
            onClick={(e: any) => e.stopPropagation()}
            onKeyDown={(e: any) => e.stopPropagation()}
            role="button"
            tabIndex={0}
            style={{ backgroundImage: `url(${logosm})` }}
          >
            {t('modal')}
            <button
              onClick={closeModal}
              onKeyDown={closeModal}
              aria-label="close handler"
              className="absolute top-4 right-4 text-xl sm:top-10 sm:right-10"
            >
              <AiOutlineClose />
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default UserPage;
