import { MenuIcon, XIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../img/assets/kz.png";
import NavDropDown from "./NavDropDown";


const Header = () => {
  const [user] = useAuthState(auth);
  const [open, setOpen] = useState(false);
  
  const menuItems = (
    <>
      <li className="mr-4 p-2 hover:bg-blue-500 rounded cursor-pointer font-bold md:hidden">
        {user ? (
          <NavDropDown />
        ) : (
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-white" : "text-black"
            }
            to="/login"
          >
            Login
          </NavLink>
        )}
      </li>

      {/* notification panel */}
      <li className="mr-4 p-2 hover:bg-blue-500 rounded font-bold cursor-pointer md:hidden">
        {/* panel credentials */}
        <div className="dropdown md:dropdown-end">
          <label tabIndex="0" className="text-xl m-1">
            <i className="text-violet-800 fa-solid fa-bell cursor-pointer"></i>
          </label>
        </div>
      </li>

      <li className="mr-4 p-2 hover:bg-blue-500 rounded font-bold">
        <NavLink
          className={({ isActive }) => (isActive ? "text-white" : "text-black")}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li className="mr-4 p-2 hover:bg-blue-500 rounded font-bold">
        <NavLink
          className= "text-black"
          to="#"
        >
          Academic Course
        </NavLink>
      </li>
      <li className="mr-4 p-2 hover:bg-blue-500 rounded font-bold">
        <NavLink
          className="text-black"
          to="#"
        >
          Skill Development Course
        </NavLink>
      </li>
      <li className="mr-4 p-2 hover:bg-blue-500 rounded font-bold">
        <NavLink
          className="text-black"
          to="#"
        >
          Books
        </NavLink>
      </li>
      <li className="mr-4 p-2 hover:bg-blue-500 rounded font-bold">
        
          Instructor

      </li>

      <li className="mr-4 p-2 hover:bg-blue-500 rounded font-bold">
        <NavLink
          className={({ isActive }) => (isActive ? "text-white" : "text-black")}
          to="/contact"
        >
          Contact
        </NavLink>
      </li>

      {/* notification panel */}
      <li className="mr-4 p-2 hover:bg-blue-500 rounded font-bold cursor-pointer hidden md:block">
        {/* panel credentials */}
        <div className="dropdown md:dropdown-end">
          <label tabIndex="0" className="text-xl m-1">
            <i className="text-black fa-solid fa-bell cursor-pointer"></i>
          </label>
        </div>
      </li>

      <li className="mr-4 p-2 hover:bg-blue-500 rounded cursor-pointer font-bold hidden md:block">
        {user ? (
          <NavDropDown />
        ) : (
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-white" : "text-black"
            }
            to="/login"
          >
            Login
          </NavLink>
        )}
      </li>
    </>
  );
  return (
    <div className="bg-violet-900 sticky top-0 z-50">
      <div className="md:flex flex-row justify-between items-center py-2 px-20 hidden ">
        <div className="flex flex-row items-center">
          <img src={logo} alt="" className="w-[40px] h-[50px]" />
          <h1 className="text-white font-bold text-3xl px-4">Knowledge Zone</h1>
        </div>

        <div>
          <div className="form-control">
            <label className="input-group input-group-sm">
              <input
                type="search"
                name="text"
                placeholder="Search Courses"
                className="input input-bordered input-sm"
              />
              <span className="bg-violet-300">
                <i className="fa-solid fa-magnifying-glass text-lg text-violet-800"></i>
              </span>
            </label>
          </div>
        </div>
      </div>

      <div>
        <nav className="">
          <div className="md:hidden flex flex-row items-center justify-between px-4 py-2">
            <div className="flex flex-row items-center">
              <img src={logo} alt="logo" width="50" height="50" />
              <h1 className="text-white font-bold text-2xl px-4">
                Knowledge Zone
              </h1>
            </div>
            <div
              onClick={() => setOpen(!open)}
              className="w-8 h-8 text-white font-bold"
            >
              {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>
          </div>
          <ul
            className={`md:flex px-2 py-2 md:px-2 md:py-0 justify-center items-center bg-violet-400 mx-auto w-full absolute md:static duration-500 ease-in z-50 ${
              open ? "top-20 " : "top-[-450px]"
            }`}
          >
            {menuItems}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
