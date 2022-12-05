import React from "react";
import hero from "../../img/assets/removed.gif";

const HeroBanner = () => {
  return (
    <div className="hero pb-8">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <div
          className="md:w-1/2 flex justify-center"
          data-aos-delay="200"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <img src={hero} alt="banner" className="w-full" />
        </div>
        <div   data-aos="zoom-in"
            data-aos-delay="400"
            data-aos-duration="900"
            className="md:w-1/2 pt-4  px-6 md:pt-6 ">
          <h1
            className="lg:text-4xl text-3xl text-violet-900 font-bold "
          >
            Welcome To The Future Of Learning
          </h1>
          <p
            className="py-6 text-lg text-justify"
          >
            KNOWLEDGE ZONE makes learning engaging & effective by leveraging
            deep pedagogy & cutting edge technology. With offerings ranging from
            adaptive self-learning courses on apps & web to personalised 1-on-1
            classes with expert teachers for ages 4-18+, we have programs for
            every learner.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
