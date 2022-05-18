// import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';

import Slider from 'react-slick';

export const SliderModal = () => {
  const scrollPosition = window.pageYOffset;
  console.log(scrollPosition);

  return (
    <>
      <div className=" fixed top-1/2 left-1/2 z-50 w-1/3 -translate-x-1/2 -translate-y-1/2 ">
        <Slider
          className="z-30"
          slidesToShow={1}
          slidesToScroll={1}
          dots={true}
          infinite={true}
          autoplay={false}
          autoplaySpeed={3000}
        >
          <div>
            <img src="https://www.fillmurray.com/800/400" alt="" />
          </div>
          <div>
            <img src="https://www.fillmurray.com/800/401" alt="" />
          </div>
          <div>
            <img src="https://www.fillmurray.com/800/402" alt="" />
          </div>
          <div>
            <img src="https://www.fillmurray.com/801/402" alt="" />
          </div>
          <div>
            <img src="https://www.fillmurray.com/802/402" alt="" />
          </div>
          <div>
            <img
              src="https://source.unsplash.com/WLUHO9A_xik/1600x900"
              alt=""
            />
          </div>
        </Slider>
      </div>
    </>
  );
};
