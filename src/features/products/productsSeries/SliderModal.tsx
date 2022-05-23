import Slider from 'react-slick';
import { useEffect } from 'react';
import { useState } from 'react';

import { Loader } from './../../Loader';

const mockPics = [
  'https://www.fillmurray.com/1201/675',
  'https://www.fillmurray.com/1200/675',
  'https://www.fillmurray.com/1202/675',
  'https://www.fillmurray.com/1203/675',
  'https://www.fillmurray.com/1204/675',
];
export const SliderModal = () => {
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const getProductPics = async () => {
        try {
          // const response = await fetch();
          const response = mockPics;
          if (!response) {
            throw new Error();
          } else {
            null;
          }
        } catch (error) {
          console.log(error);
        }
        setIsPending(false);
      };
      getProductPics();
    }, 1000);
  }, []);

  return (
    <div
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={0}
      role="img"
      className=" first-letter: lg2:9/12 fixed top-1/2 left-1/2 z-50 w-full -translate-x-1/2 -translate-y-1/2 p-4 md:w-11/12 lg:w-10/12 xl:w-8/12 2xl:w-6/12"
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
          {mockPics.map((item, i) => (
            <div key={i}>
              <img src={item} alt="img" />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};
