import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import carousel2 from "../../img/assets/carusel/carusel-2.webp";
import carousel3 from "../../img/assets/carusel/carusel-3.jpg";
import carousel4 from "../../img/assets/carusel/carusel-4.jpg";
import carousel1 from "../../img/assets/carusel/carusel-1.jpg";

const settings = {
  dots: false,
  fade: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
};

const CarouselOne = () => {
  return (
    <div className="px-7 bg-gradient-to-r from-blue-900 via-violet-900 to-purple-900 py-24 ">
      <div className="container mx-auto">
        <Slider {...settings}>
          <div>
            <img src={carousel1} alt="" className="mx-auto w-full h-[350px]" />
          </div>
          <div>
            <img src={carousel2} alt="" className="mx-auto w-full h-[350px]" />
          </div>
          <div>
            <img src={carousel3} alt="" className="mx-auto w-full h-[350px]" />
          </div>
          <div>
            <img src={carousel4} alt="" className="mx-auto w-full h-[350px]" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default CarouselOne;
