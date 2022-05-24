import { useTranslation } from 'react-i18next';

const CartTableHeading = () => {
  const { t } = useTranslation('cart');

  return (
    <thead className="table-head w-full">
      <tr>
        <th></th>
        <th scope="col" className="font-thin">
          {t('seriesName')}
        </th>
        <th scope="col" className="font-thin">
          {t('productModel')}
        </th>
        <th scope="col" className="font-thin">
          {t('headDiameter')}
        </th>
        <th scope="col" className="font-thin">
          {t('stickLength')}
        </th>
        <th scope="col" className="font-thin">
          {t('weight')}
        </th>
        <th scope="col" className="font-thin">
          {t('quantity')}
        </th>
        <th scope="col" className="font-thin">
          {t('price')}
        </th>
        <th scope="col" className="font-thin">
          {t('totalPrice')}
        </th>
        <th></th>
      </tr>
    </thead>
  );
};
export default CartTableHeading;
