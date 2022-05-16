// import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';

import Slider from 'react-slick';

export const SliderModal = () => {
  return (
    <div className="flex w-full flex-row">
      <Slider
        className="flex flex-row"
        slidesToShow={1}
        slidesToScroll={1}
        dots={true}
        infinite={false}
      >
        <div className=" block w-full">1</div>
        <div className="block w-full">2</div>
        <div className="block w-full">3</div>
        <div className="block w-full">4</div>
        <div className="block w-full">5</div>
      </Slider>
    </div>
  );
};
