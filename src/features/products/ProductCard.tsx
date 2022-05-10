import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Backdrop from '../layout/nav/Backdrop';

interface productDataType {
  id: number;
  productName: string;
  productDescription: string;
  headDiameter: number;
  stickLength: number;
  weight: number;
  price: number;
  productImage: string;
  altText: string;
  seriesId: string;
}

const ProductCard = (prop: { productObject: productDataType }) => {
  const { t } = useTranslation('productCard');

  const [detailsModal, setDetailsModal] = useState(false);
  const handleDetailsModal = () => {
    setDetailsModal(!detailsModal);
  };
  return (
    <>
      <div className="relative z-10 max-w-7xl">
        <div
          className="flex w-full max-w-[810px] grow
     flex-col gap-5 p-6 sm:h-fit sm:w-full sm:flex-row sm:justify-between md:flex-row md:p-12"
        >
          <div className="flex justify-center sm:h-64 sm:justify-between md:h-fit md:w-64">
            <img
              src={prop.productObject.productImage}
              alt={prop.productObject.altText}
              className="h-36 w-36 max-w-[192px] cursor-pointer rounded-full shadow-none transition-shadow duration-300 ease-in-out hover:shadow-xl 
          sm:h-48 sm:w-48 md:mb-0 md:h-full md:w-full"
              onClick={handleDetailsModal}
              aria-hidden="true"
            />
          </div>
          <div className="card-data flex flex-col items-center gap-5 sm:items-end md:w-full md:items-stretch md:justify-between md:pl-4">
            <div className="flex h-10 items-center justify-between gap-20 text-xl font-bold leading-6 sm:flex-col sm:items-end sm:justify-center sm:gap-2 md:flex-row md:items-center md:justify-between">
              <h3 className="model sm:pt-8 md:pt-0">
                {prop.productObject.productName}
              </h3>
              <div className="price h-full rounded-md border border-black p-2 text-center">
                {prop.productObject.price} € / {t('pair')}
              </div>
            </div>
            <p className="text-center text-lg sm:pt-8 sm:text-right sm:text-xl md:pt-0">
              {prop.productObject.productDescription}
            </p>
            <div className="flex h-fit flex-col items-center sm:items-stretch sm:justify-between md:h-12 md:flex-row">
              <div className="text-center text-sm sm:text-right sm:text-base md:text-left">
                <p className="py-1 sm:py-0">
                  {t('headDiameter')}: {prop.productObject.headDiameter} mm Ø
                </p>
                <p className="sm:pb-8 md:py-0">
                  {t('stickLength')}: {prop.productObject.stickLength} cm
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
          <h1 className="absolute top-1/2 left-1/2 z-30 -translate-x-1/2 -translate-y-1/2 bg-white text-6xl">
            PRODUCT DETAILS
          </h1>
          <Backdrop handleClose={handleDetailsModal} />
        </>
      )}
    </>
  );
};

export default ProductCard;
