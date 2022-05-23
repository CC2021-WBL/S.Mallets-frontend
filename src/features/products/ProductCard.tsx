import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Backdrop from '../layout/nav/Backdrop';
import { SliderModal } from './productsSeries/SliderModal';
import { productDataType } from './productTypes';

const ProductCard = (prop: { productObject: productDataType }) => {
  const { t, i18n } = useTranslation('productCard');

  const [detailsModal, setDetailsModal] = useState(false);
  const handleDetailsModal = () => {
    setDetailsModal(!detailsModal);
    if (document.body.style.overflow !== 'hidden') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  };

  const product = prop.productObject;

  return (
    <>
      <div className="relative z-10 mx-4 max-w-7xl">
        <div
          className="mb-8 flex max-w-[810px] grow
     flex-col gap-8 p-8 hover:shadow-xl sm:h-fit sm:w-full sm:flex-row sm:justify-between sm:p-10 md:flex-row md:p-12"
        >
          <div className="flex justify-center sm:h-64 sm:justify-between md:h-fit md:w-64">
            <img
              src={product.productImage}
              alt={
                i18n.language === 'en' ? product.altText.en : product.altText.pl
              }
              className="h-36 w-36 max-w-[192px] cursor-pointer rounded-full shadow-none transition-shadow duration-300 ease-in-out hover:shadow-xl 
          sm:h-48 sm:w-48 md:mb-0 md:h-full md:w-full"
              onClick={handleDetailsModal}
              aria-hidden="true"
            />
          </div>
          <div className="card-data flex flex-col items-center gap-5 sm:items-end md:w-full md:items-stretch md:justify-between md:pl-4">
            <div className="flex h-10 items-center justify-between gap-20 text-xl font-bold leading-6 sm:flex-col sm:items-end sm:justify-center sm:gap-2 md:flex-row md:items-center md:justify-between">
              <h3 className="model sm:pt-8 md:pt-0">{product.productName}</h3>
              <div className="price h-full rounded-md border border-black p-2 text-center">
                {product.price} € / {t('pair')}
              </div>
            </div>
            <p className="text-center text-lg sm:pt-8 sm:text-right sm:text-xl md:pt-0">
              {i18n.language === 'en'
                ? product.productDescription.en
                : product.productDescription.pl}
            </p>
            <div className="flex h-fit flex-col items-center sm:items-stretch sm:justify-between md:h-12 md:flex-row">
              <div className="text-center text-sm sm:text-right sm:text-base md:text-left">
                <p className="py-1 sm:py-0">
                  {t('headDiameter')}: {product.headDiameter} mm Ø
                </p>
                <p className="sm:pb-8 md:py-0">
                  {t('stickLength')}: {product.stickLength} cm
                </p>
              </div>
              <button
                className="bottom-0 mt-10 h-12 w-56 rounded-md bg-[#232323] px-6 font-bold uppercase text-white shadow-none transition-shadow 
          duration-300 ease-in-out hover:shadow-xl  sm:mt-0 md:static"
              >
                {t('addToCart')}
              </button>
            </div>
          </div>
        </div>
      </div>
      {detailsModal && (
        <>
          <Backdrop handleClose={handleDetailsModal} />
          <SliderModal />
        </>
      )}
    </>
  );
};

export default ProductCard;
