import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import ProductCard from './ProductCard';
import carpet from '../../assets/carpet.png';
import { Loader } from '../Loader';
import { seriesMock } from '../../assets/mockData/mockPoductData';

// import { useParams } from 'react-router-dom';

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
    altText: {
      en: '',
      pl: '',
    },
    seriesId: 0,
  },
];

const ProductsPage = () => {
  const { i18n } = useTranslation();
  const [pending, setIsPending] = useState(true);
  const [productObjectArray, setProductObjectArray] =
    useState(initialStateMock);
  // const params = useParams();
  useEffect(() => {
    // setTimeout(() => {
    const getSeriesObject = async () => {
      // try {
      // // const response = await fetch();
      // const response = seriesMock;
      // if (!response) {
      //   throw new Error();
      // } else {
      //   setProductObjectArray(seriesMock.products);
      // }

      // const toastId = toast.loading('Loading...');
      const headers = new Headers();
      // headers.append('Content-Type', 'application/json');
      headers.append('credentials', 'include');
      const options = {
        method: 'GET',
        // body: JSON.stringify(data),
        headers: headers,
      };

      try {
        const res = await fetch(
          'https://s-mallets-backend-git-c-f-v-devsonthewaves.vercel.app/products',
          options,
        );
        if (res.status !== 200) {
          // toast.error(t('toastBad'), {
          //   id: toastId,
          // });
        }

        if (res.status === 200) {
          const resJson = await res.json();
          // const token = resJson.token;
          console.log(resJson);
          // if (token) {
          //   document.cookie = token;
        }
        // }
      } catch (error) {
        console.log(error);
      }
      setIsPending(false);
      setProductObjectArray(seriesMock.products);
    };
    getSeriesObject();
    // }, 1000);
  }, []);

  const seriesLang = seriesMock.seriesDescription;

  return (
    <div className="relative mx-auto w-full max-w-7xl">
      {pending && <Loader />}
      <div className="py-4 px-12">
        <h1 className="py-2 text-2xl font-bold">{seriesMock.seriesName}</h1>
        <h2 className="max-w-3xl py-2 text-xl">
          {i18n.language === 'en' ? seriesLang.en : seriesLang.pl}
        </h2>
      </div>
      {/* {params.seriesName} */}
      {!pending && (
        <img
          src={carpet}
          alt="logo carpet"
          className="top-50 absolute right-8 z-[1] hidden lg:block"
        />
      )}
      {!pending &&
        productObjectArray.map((object, index) => (
          <ProductCard productObject={object} key={index} />
        ))}
    </div>
  );
};

export default ProductsPage;
