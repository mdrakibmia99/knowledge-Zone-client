import React from "react";
import Slider from "react-slick";
import course1 from "../../img/assets/skillDevCourses/12.png";
import course2 from "../../img/assets/skillDevCourses/13.png";
import course3 from "../../img/assets/skillDevCourses/14.png";
import course4 from "../../img/assets/skillDevCourses/15.png";
import course5 from "../../img/assets/skillDevCourses/16.png";
import course6 from "../../img/assets/skillDevCourses/17.png";

const SkillDevCourses = () => {
  const skillDevelopment = [
    {
      picture: course1,
      link: "/courses",
    },
    {
      picture: course2,
      link: "/courses/discountCourse",
    },
    {
      picture: course3,
      link: "/courses/specialCourse",
    },
    {
      picture: course4,
      link: "/courses/IslamicCourse",
    },
    {
      picture: course5,
      link: "/courses/KidsCourse",
    },
    {
      picture: course6,
      link: "/courses/EntertainingCourse",
    },
  ];
  var settings = {
    dots: true,
    arrows:false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
    <div>
      <div className="container mx-auto mt-24 md:mt-32">
        <h1
          className="text-4xl font-bold text-center text-violet-800 pb-16"
          data-aos-delay="200"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          Skill Development Courses
        </h1>
        <Slider {...settings}>
          {skillDevelopment.map((courses, index) => (
            <div
              data-aos-delay="200"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <div key={index} className=" flex justify-center">
                <a href={courses.link}>
                  <img className="rounded-lg" src={courses.picture} alt="" />
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SkillDevCourses;
