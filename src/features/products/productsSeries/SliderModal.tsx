import Slider from 'react-slick';
import { useEffect } from 'react';
import { useState } from 'react';

import { Loader } from './../../Loader';

// const mockPics = [
//   'https://www.fillmurray.com/1201/675',
//   'https://www.fillmurray.com/1200/675',
//   'https://www.fillmurray.com/1202/675',
//   'https://www.fillmurray.com/1203/675',
//   'https://www.fillmurray.com/1204/675',
// ];

export interface ProductTypes {
  id: number;
  productImages: string;
  seriesAltText: { pl: string; en: string };
  seriesName: string;
}

export const SliderModal = () => {
  const [productPics, setProductPics] = useState<null | ProductTypes[]>(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const getProductPics = async () => {
        try {
          const products = await fetch(
            'https://s-mallets-backend.vercel.app/products',
            { method: 'GET', redirect: 'follow' },
          );
          const resJson = await products.json();
          if (products.status === 200) {
            console.log('status 200');
            setProductPics(resJson);
            console.log('setProductPics');
            setIsPending(false);
          } else {
            throw new Error();
          }
        } catch (error) {
          console.log(error);
        }
      };
      getProductPics();
      console.log(productPics);
    }, 1000);
  }, []);

  return (
    <div
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={0}
      role="img"
      className="lg2:9/12 fixed top-1/2 left-1/2 z-50 w-full -translate-x-1/2 -translate-y-1/2 p-4 md:w-11/12 lg:w-10/12 xl:w-8/12 2xl:w-6/12"
    >
      {isPending && <Loader />}
      {!isPending && (
        <Slider
          slidesToShow={1}
          slidesToScroll={1}
          dots={true}
          infinite={true}
          autoplay={false}
          autoplaySpeed={3000}
          accessibility={true}
        >
          {productPics &&
            // Array.from(productPics).map((item: ProductTypes) => (
            productPics.map((item: ProductTypes) => (
              <div key={item.id}>
                <img
                  src={'data:image/png;base64,' + item.productImages}
                  alt={`img${item.id}`}
                />
              </div>
            ))}
        </Slider>
      )}
    </div>
  );
};
