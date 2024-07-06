import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { CarouselItem } from './CarouselItem';
import { topMeels } from './topMeels';

export const MultipleItemCau = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="px-4"> {/* Add padding to the container */}
      <Slider {...settings}>
        {topMeels.map((item) => (
          <div key={item.title} className="px-2"> {/* Add padding to each item */}
            <CarouselItem
              image={item.image}
              title={item.title}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
