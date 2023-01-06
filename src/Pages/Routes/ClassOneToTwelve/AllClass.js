import React from "react";
import { Outlet } from "react-router-dom";
import LiveChat from "../../ContactUs/LiveChat";
import CustomLink from "../../Shared/CustomLink";

const AllClass = () => {
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
            className="text-4xl text-center font-bold text-violet-800 mt-6 mb-8"
          >
            Academic Courses
          </h2>
          <Outlet></Outlet>
        </div>

        <div className="drawer-side">
          <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-48 text-base-content bg-violet-300">
            {/* <!-- Sidebar content here --> */}
            <li>
              <CustomLink
                className="w-full p-2 border-0 font-bold uppercase text-center rounded-lg"
                to="/classes"
              >
                class 1
              </CustomLink>
            </li>
            <li>
              <CustomLink
                className="w-full p-2 border-0 font-bold uppercase text-center rounded-lg"
                to="/classes/two"
              >
                Class 2
              </CustomLink>
            </li>
            <li>
              <CustomLink
                className="w-full p-2 border-0 font-bold uppercase text-center rounded-lg"
                to="/classes/three"
              >
                Class 3
              </CustomLink>
            </li>
            <li>
              <CustomLink
                className="w-full p-2 border-0 font-bold uppercase text-center rounded-lg"
                to="/classes/four"
              >
                Class 4
              </CustomLink>
            </li>
            <li>
              <CustomLink
                className="w-full p-2 border-0 font-bold uppercase text-center rounded-lg font"
                to="/classes/five"
              >
                Class 5
              </CustomLink>
            </li>
            <li>
              <CustomLink
                className="w-full p-2 border-0 font-bold uppercase text-center rounded-lg"
                to="/classes/six"
              >
                Class 6
              </CustomLink>
            </li>
            <li>
              <CustomLink
                className="w-full p-2 border-0 font-bold uppercase text-center rounded-lg"
                to="/classes/seven"
              >
                Class 7
              </CustomLink>
            </li>
            <li>
              <CustomLink
                className="w-full p-2 border-0 font-bold uppercase text-center rounded-lg"
                to="/classes/eight"
              >
                Class 8
              </CustomLink>
            </li>
            <li>
              <CustomLink
                className="w-full p-2 border-0 font-bold uppercase text-center rounded-lg"
                to="/classes/nine"
              >
                Class 9
              </CustomLink>
            </li>
            <li>
              <CustomLink
                className="w-full p-2 border-0 font-bold uppercase text-center rounded-lg"
                to="/classes/ten"
              >
                Class 10
              </CustomLink>
            </li>
            <li>
              <CustomLink
                className="w-full p-2 border-0 font-bold uppercase text-center rounded-lg"
                to="/classes/eleven"
              >
                Class 11-12
              </CustomLink>
            </li>
          </ul>
        </div>
      </div>
      <LiveChat />
    </div>
  );
};

export default AllClass;
