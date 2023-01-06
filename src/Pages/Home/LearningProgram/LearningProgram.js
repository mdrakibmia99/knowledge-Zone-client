import React from "react";
import { Outlet } from "react-router-dom";
import CustomLink from "../../Shared/CustomLink";

const LearningProgram = () => {
  return (
    <section className="text-3xl overflow-x-hidden mt-20 container mx-auto">
      <h1 className="lg:text-5xl md:text-4xl text-violet-800 font-bold text-xl text-center ">
        A learning program for every student
      </h1>
      <div className="flex justify-center relative">
        <div className="container bg-violet-300 mb-10 text-center flex  justify-between mt-10 sm:mx-5 lg:w-1/2 w-full whitespace-nowrap mx-auto py-4 px-5 rounded-full  text-xs md:text-2xl lg:text-3xl">
          <CustomLink
            className="mr-5 lg:p-4 p-[7px] lg:py-0 rounded-full hover:bg-[red]"
            to={"/"}
          >
            Grade 3
          </CustomLink>
          <CustomLink
            className="mr-5 lg:p-4 p-[7px]  lg:py-0 rounded-full hover:bg-[red]"
            to={"/gradeEight"}
          >
            Grade 4 to 8
          </CustomLink>
          <CustomLink
            className="lg:p-4 p-[7px]  lg:py-0 rounded-full hover:bg-[red]"
            to={"/gradeTwelve"}
          >
            Grade 9 to 12
          </CustomLink>
        </div>
      </div>
      <Outlet></Outlet>
    </section>
  );
};

export default LearningProgram;
