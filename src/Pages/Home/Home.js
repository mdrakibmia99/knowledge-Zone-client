import React from "react";
import BooksCarousel from "../Books/BooksCarousel";
import LiveChat from "../ContactUs/LiveChat";
import AcademicCourses from "./AcademicCourses";
import CardOne from "./CardOne";
import CoursesAutoSlider from "./CoursesAutoSlider";
import HeroBanner from "./HeroBanner";
import Investor from "./Investor";
import Reviews from "./Reviews";
import SkillDevCourses from "./SkillDevCourses";

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <AcademicCourses />
      <SkillDevCourses />
      <BooksCarousel />
      <Reviews />
      <Investor />
      <CardOne />
      <CoursesAutoSlider />
      <LiveChat />
    </div>
  );
};

export default Home;
