import React from "react";
import { Outlet } from "react-router-dom";
import LiveChat from "../../ContactUs/LiveChat";
import CustomLink from "../../Shared/CustomLink";

const Courses = () => {
  return (
    <div>
      <div>
        <label tabIndex="0" htmlFor="dashboard-sidebar" className=" lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 m-2 text-violet-900"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-sidebar"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <h2
            data-aos-delay="200"
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="text-4xl text-center font-bold text-violet-800  mt-6 mb-8"
          >
            Skill Development Courses
          </h2>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto whitespace-nowrap w-68 text-base-content border-r-2 bg-violet-300">
            <li>
              <CustomLink
                className="w-full p-2 border-0 font-bold uppercase text-center rounded-lg"
                to="/courses"
              >
                Free course
              </CustomLink>
            </li>
            <li>
              <CustomLink
                className="w-full p-2 border-0 font-bold uppercase text-center rounded-lg"
                to="/courses/discountCourse"
              >
                discounted course
              </CustomLink>
            </li>
            <li>
              <CustomLink
                className="w-full p-2 border-0 font-bold uppercase text-center rounded-lg"
                to="/courses/specialCourse"
              >
                crash course
              </CustomLink>
            </li>
            <li>
              <CustomLink
                className="w-full p-2 border-0 font-bold uppercase text-center rounded-lg"
                to="/courses/IslamicCourse"
              >
                Islamic course
              </CustomLink>
            </li>
            <li>
              <CustomLink
                className="w-full p-2 border-0 font-bold uppercase text-center rounded-lg"
                to="/courses/KidsCourse"
              >
                Kids course{" "}
              </CustomLink>
            </li>
            <li>
              <CustomLink
                className="w-full p-2 border-0 font-bold uppercase text-center rounded-lg"
                to="/courses/EntertainingCourse"
              >
                Entertaining Courses
              </CustomLink>
            </li>
          </ul>
        </div>
      </div>
      <LiveChat />
    </div>
  );
};

export default Courses;
