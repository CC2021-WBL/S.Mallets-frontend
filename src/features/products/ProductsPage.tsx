import { useEffect, useState } from 'react';

import ProductCard from './ProductCard';
import { productObjectArrayMock } from '../../assets/mockData/mockPoductData';

export const initialStateMock = [
  {
    id: 0,
    productName: '',
    productDescription: '',
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
  const [pending, setIsPending] = useState(true);
  const [productObjectArray, setProductObjectArray] =
    useState(initialStateMock);

  useEffect(() => {
    setTimeout(() => {
      const getProductObjectArray = async () => {
        try {
          // const response = await fetch();
          const response = productObjectArrayMock;
          if (!response) {
            throw new Error();
          } else {
            setProductObjectArray(response);
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
      <div className="p-4 px-10">
        <h1 className="py-2 font-bold">{productObjectArray[0].seriesId}</h1>
        <h2>{productObjectArray[0].productDescription}</h2>
      </div>
      {pending ? (
        <h1>loading...</h1>
      ) : (
        productObjectArray.map((object, index) => (
          <ProductCard productObject={object} key={index} />
        ))
      )}
    </>
  );
};

export default ProductsPage;
