import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import ProductCard from './ProductCard';
import carpet from '../../assets/carpet.png';
import { productObjectArrayMock } from '../../assets/mockData/mockPoductData';

export const initialStateMock = [
  {
    id: 0,
    productName: '',
    productDescription: {
      pl: '',
      en: '',
    },
    headDiameter: 0,
    stickLength: 0,
    weight: 0,
    price: 0,
    productImage: ``,
    altText: '',
    seriesId: '',
  },
];

const ProductsPage = () => {
  const { i18n } = useTranslation('navAndFooter');
  const [pending, setIsPending] = useState(true);
  const [productObjectArray, setProductObjectArray] =
    useState(initialStateMock);

  useEffect(() => {
    setTimeout(() => {
      const getProductObjectArray = async () => {
        try {
          // const response = await fetch();
          const response = productObjectArrayMock;
          console.log(response);
          if (!response) {
            throw new Error();
          } else {
            setProductObjectArray(productObjectArrayMock);
          }
        } catch (error) {
          console.log(error);
        }
        setIsPending(false);
      };
      getProductObjectArray();
    }, 1000);
  }, []);

  return (
    <>
      {pending && <h1>Loading...</h1>}
      <div className="py-4 px-12">
        <h1 className="py-2 font-bold">{productObjectArray[0].seriesId}</h1>
        <h2>
          {i18n.language === 'en'
            ? productObjectArray[0].productDescription.en
            : productObjectArray[0].productDescription.pl}
        </h2>
      </div>
      <img
        src={carpet}
        alt="logo carpet"
        className="top-50 absolute right-0 z-[1] hidden lg:block"
      />
      {!pending &&
        productObjectArray.map((object, index) => (
          <ProductCard
            productObject={object}
            key={index}
            language={i18n.language}
          />
        ))}
    </>
  );
};

export default ProductsPage;
