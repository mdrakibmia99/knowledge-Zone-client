import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="bg-violet-900 text-white py-12 mt-5">
      <div className="w-4/5 mx-auto lg:flex lg:justify-between sm:grid sm:grid-cols-1 items-center">
        <div className="flex flex-col md:flex-row gap-6">
          <a href="https://play.google.com/">
            <img
              className=" w-6/7"
              src="/images/logo/app-store.svg"
              alt="app store logo"
            />
          </a>
          <a href="https://www.apple.com/app-store/">
            <img
              className=" w-6/7"
              src="/images/logo/google-play.svg"
              alt="google play logo"
            />
          </a>
        </div>

        <div>
          <p className="font-bold pt-4 md:pt-0">Contact Us</p>
          <p>knowledgezone404@gmail.com</p>
        </div>

        <div className="text-xl my-4 sm:text-center">
          <p className="mb-2">Follow Us On</p>
          <a href="#" target={"_blank"} rel="noreferrer">
            <i className="fa-brands fa-facebook-square mr-4"></i>{" "}
          </a>
          <a href="" target={"_blank"} rel="noreferrer">
            <i className="fa-brands fa-twitter-square mr-4"></i>{" "}
          </a>
          <a href="" target={"_blank"} rel="noreferrer">
            <i className="fa-brands fa-instagram-square mr-4"></i>{" "}
          </a>
          <a href="" target={"_blank"} rel="noreferrer">
            <i className="fa-brands fa-github-square mr-4"></i>
          </a>
          <a href="" target={"_blank"} rel="noreferrer">
            <i className="fa-brands fa-youtube-square"></i>
          </a>
        </div>
      </div>

      <div className="mt-12">
        <div className="flex flex-col md:flex-row px-8 md:px-0  gap-x-6 md:justify-center">
          <Link
            to="/"
            className="border-b-2 border-transparent hover:border-b-2 hover:border-b-white rounded-bl duration-500"
          >
            Home
          </Link>
          <Link
            to="/courses"
            className="border-b-2 border-transparent hover:border-b-2 hover:border-b-white rounded-bl duration-500"
          >
            Courses
          </Link>

          <Link
            to="/instructor"
            className="border-b-2 border-transparent hover:border-b-2 hover:border-b-white rounded-bl duration-500"
          >
            Instructor
          </Link>
          <Link
            to="/contact"
            className="border-b-2 border-transparent hover:border-b-2 hover:border-b-white rounded-bl duration-500"
          >
            Contact Us
          </Link>
          <Link
            to="/privacy"
            className="border-b-2 border-transparent hover:border-b-2 hover:border-b-white rounded-bl duration-500"
          >
            Privacy Policy
          </Link>
        </div>
      </div>

      <hr className="w-4/5 mx-auto my-6" />
      <p className="text-center">
        {" "}
        Copyright &copy; knowledge-zone {year} all the right reserved | Designed
        by Knowledge Zone Team
      </p>
    </div>
  );
};

export default Footer;
