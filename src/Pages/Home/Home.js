import React from "react";
import BooksCarousel from "../Books/BooksCarousel";
import AcademicCourses from "./AcademicCourses";
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
    </div>
  );
};

export default Home;
