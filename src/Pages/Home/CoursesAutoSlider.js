import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import logo from "../../img/assets/kz.png";
import brand from "../../img/assets/kz-brand/1.png";
import brand1 from "../../img/assets/kz-brand/2.png";
import brand2 from "../../img/assets/kz-brand/3.png";
import brand3 from "../../img/assets/kz-brand/4.png";
import brand4 from "../../img/assets/kz-brand/5.png";
import brand5 from "../../img/assets/kz-brand/6.png";

const CoursesAutoSlider = () => {
  const sliderItems = [
    {
      course: brand,
    },
    {
      course: brand1,
    },
    {
      course: brand2,
    },
    {
      course: brand3,
    },
    {
      course: brand4,
    },
    {
      course: brand5,
    },
  ];
  var settings = {
    infinite: true,
    speed: 5000,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-violet-800 py-12 px-7">
      <div className="">
        <img
          style={{ marginTop: "-100px" }}
          width="60"
          height="60"
          className="mx-auto"
          src={logo}
          alt=""
        />
      </div>

      <h1 className="text-white text-center text-4xl font-bold my-8">
        Our Brands & Products
      </h1>

      <div className="container mx-auto">
        <Slider {...settings}>
          {sliderItems.map((item, index) => (
            <div>
              <div key={index}>
                <img className="rounded-xl" src={item.course} alt="" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CoursesAutoSlider;
