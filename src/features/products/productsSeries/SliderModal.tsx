import Slider from 'react-slick';
import { useSelector } from 'react-redux';

import { RootState } from '../../../app/store';

export const SliderModal = (prop: { id: number }) => {
  const products = useSelector((state: RootState) => state.products.list);
  const chosenProduct: any =
    products.find((product) => product['id'] == prop.id) || {};
  const picsArr: string[] = chosenProduct['productImages'];
  return (
    <div
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={0}
      role="img"
      className="lg2:9/12 fixed top-1/2 left-1/2 z-50 w-full -translate-x-1/2 -translate-y-1/2 p-4 md:w-8/12 lg:w-10/12 xl:w-6/12 2xl:w-4/12"
    >
      <Slider
        slidesToShow={1}
        slidesToScroll={1}
        dots={true}
        infinite={true}
        autoplay={false}
        autoplaySpeed={3000}
        accessibility={true}
      >
        {picsArr.map((image: string, index: number) => (
          <div key={index}>
            <img src={'data:image/png;base64,' + image} alt={`img${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
