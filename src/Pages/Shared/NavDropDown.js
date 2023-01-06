import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
import ProfilePic from "./ProfilePic";

const NavDropDown = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

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
          {admin && (
            <li>
              <Link to="/users">All Users</Link>
            </li>
          )}
          <li>
            <Link to="/myProfile">My Profile</Link>
          </li>
          <li>
            <Link to="myCollection">My Collection</Link>
          </li>
          <li>
            <Link to="/myOrder">My Order</Link>
          </li>
          {admin && (
            <li>
              <Link to="/addCourse">Add Course</Link>
            </li>
          )}

          {admin && (
            <li>
              <Link to="/addInstructor">Add Instructor</Link>
            </li>
          )}

          <li>
            <Link to="/addReviwe">Add Review</Link>
          </li>
          {admin && (
            <li>
              <Link to="/addBook">Add Book</Link>
            </li>
          )}
          {admin && (
            <li>
              <Link to="/addBlog">Add Blog</Link>
            </li>
          )}
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
