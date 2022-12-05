import { signOut } from "firebase/auth";
import React from "react";
import auth from "../../firebase.init";
import ProfilePic from "./ProfilePic";

const NavDropDown = () => {
  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };
  return (
    <div className="flex items-center">
      <div className="dropdown md:dropdown-end">
        <label tabIndex="0">
          <ProfilePic />
        </label>
        <ul
          tabIndex="0"
          className="dropdown-content menu shadow bg-gray-100 rounded-md w-44 "
        >
          <li>
            <button
              className="btn btn-ghost text-red-600 font-bold"
              onClick={logout}
            >
              Log Out
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavDropDown;
