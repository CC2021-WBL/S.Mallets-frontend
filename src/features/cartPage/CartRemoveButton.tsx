import { useDispatch } from 'react-redux';

import { AppDispatch } from '../../app/store';
import { clear } from './cartSlice';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';

const CartRemoveButton = () => {
  const dispatch: AppDispatch = useDispatch();
  const { t } = useTranslation('cart');

  return (
    <button
      className=" h-16 rounded bg-zinc-400 py-2 px-2 font-bold text-white hover:bg-red-600"
      onClick={() => {
        toast.error(t('allProductsRemovedFromCart'));
        dispatch(clear());
      }}
    >
      {t('removeAll')}
    </button>
  );
};
export default CartRemoveButton;
