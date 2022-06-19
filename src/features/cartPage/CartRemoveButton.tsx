//import toast from 'react-hot-toast';

import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { AppDispatch } from '../../app/store';
import { clear } from '../../app/slices/cartSlice';

interface CartRemoveButtonTypes {
  openModalHandler: () => void;
}

const CartRemoveButton = (prop: CartRemoveButtonTypes) => {
  const dispatch: AppDispatch = useDispatch();
  const { t } = useTranslation('cart');

  return (
    <button
      className=" h-16 rounded bg-zinc-400 py-2 px-2 font-bold text-white hover:bg-red-600"
      onClick={() => {
        //toast.error(t('allProductsRemovedFromCart'));
        prop.openModalHandler();
        dispatch(clear());
      }}
    >
      {t('removeAll')}
    </button>
  );
};
export default CartRemoveButton;
