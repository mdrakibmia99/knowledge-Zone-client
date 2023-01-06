import React from "react";
import { Outlet } from "react-router-dom";
import LiveChat from "../../ContactUs/LiveChat";
import CustomLink from "../../Shared/CustomLink";

const Instructor = () => {
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
            className="text-4xl text-center font-bold text-violet-800 mb-8 mt-6 "
          >
            Our Instructors
          </h2>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-52 text-base-content border-r-2 bg-violet-300">
            <li>
              <CustomLink
                className="w-full p-2 border-0 font-bold uppercase text-center rounded-lg"
                to="/instructor"
              >
                Bengali
              </CustomLink>
            </li>
            <li>
              <CustomLink
                className="w-full p-2 border-0 font-bold uppercase text-center rounded-lg"
                to="/instructor/english"
              >
                English
              </CustomLink>
            </li>
            <li>
              <CustomLink
                className="w-full p-2 border-0 font-bold uppercase text-center rounded-lg"
                to="/instructor/mathematics"
              >
                Mathematics
              </CustomLink>
            </li>
            <li>
              <CustomLink
                className="w-full p-2 border-0 font-bold uppercase text-center rounded-lg"
                to="/instructor/chemistry"
              >
                Chemistry
              </CustomLink>
            </li>
            <li>
              <CustomLink
                className="w-full p-2 border-0 font-bold uppercase text-center rounded-lg"
                to="/instructor/physics"
              >
                Physics
              </CustomLink>
            </li>
            <li>
              <CustomLink
                className="w-full p-2 border-0 font-bold uppercase text-center rounded-lg"
                to="/instructor/biology"
              >
                Biology
              </CustomLink>
            </li>
            <li>
              <CustomLink
                className="w-full p-2 border-0 font-bold uppercase text-center rounded-lg"
                to="/instructor/finance"
              >
                Finance
              </CustomLink>
            </li>
            <li>
              <CustomLink
                className="w-full p-2 border-0 font-bold uppercase text-center rounded-lg"
                to="/instructor/religious"
              >
                Religious
              </CustomLink>
            </li>
            <li>
              <CustomLink
                className="w-full p-2 border-0 font-bold uppercase text-center rounded-lg"
                to="/instructor/programming"
              >
                Programming
              </CustomLink>
            </li>
          </ul>
        </div>
      </div>
      <LiveChat />
    </div>
  );
};

export default Instructor;
