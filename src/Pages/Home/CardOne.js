import React from "react";
import img1 from "../../img/assets/newspaper/1.png";
import img2 from "../../img/assets/newspaper/2.png";
import img3 from "../../img/assets/newspaper/3.png";
import logo1 from "../../img/assets/newspaper/tds.png";
import logo2 from "../../img/assets/newspaper/pa.png";
import logo3 from "../../img/assets/newspaper/bbc.png";

const CardOne = () => {
  return (
    <div className="bg-violet-900 mt-16 md:mt-24 pb-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 py-16 px-6 md:px-0">
          <div
            className="bg-gray-100 rounded-xl p-5"
            data-aos-delay="200"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <img src={logo1} alt="" className="w-[115px] h-[80px] pb-5" />
            <img
              src={img1}
              alt=""
              className="rounded-lg pb-5"
            />
            <p className="text-lg text-justify">
              Students are getting increasingly used to accessing information
              through video in their day-to-day lives, so are naturally eager to
              use similar resources in the classroom.
            </p>
          </div>

          <div
            className="bg-gray-100 rounded-xl p-5"
            data-aos-delay="200"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <img src={logo2} alt="" className="w-[115px] h-[80px] pb-5" />
            <img
              src={img2}
              alt=""
              className="rounded-lg pb-5 h-[250px] w-96 mx-auto"
            />
            <p className="text-lg text-justify">
              Knowledge Zone targets the entire education market from violet-800
              through to Secondary, Higher Education, Corporate learning,
              English Language learning and lifelong learning.
            </p>
          </div>
          <div
            className="bg-gray-100 rounded-xl p-5"
            data-aos-delay="200"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <img src={logo3} alt="" className="w-[115px] h-[80px] pb-5" />
            <img
              src={img3}
              alt=""
              className="rounded-lg pb-5 h-[250px] w-96 mx-auto"
            />
            <p className="text-lg text-justify">
              Knowledge Zone is now looking to build more relationships with
              various content providers, and to build up their search algorithm
              that allows you to refine clip searches by curriculum, topic, and
              source.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardOne;
