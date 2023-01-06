import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import auth from "../../firebase.init";
import ProfileUpdate from "./ProfileUpdate";
import { PencilAltIcon } from "@heroicons/react/solid";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const [profile, setProfile] = useState({});
  const [showProfile, setShowProfile] = useState(false);
  const name = user?.displayName;
  const email = user?.email;
  const photoUrl = user?.photoURL;
  useEffect(() => {
    fetch(`http://localhost:5000/user/${email}`)
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }, [email, profile, photoUrl]);

  const { education, location, phone } = profile;
  return (
    <div className="bg-violet-100 py-10">
      <div className="md:w-3/5 md:mx-auto bg-violet-200 rounded-xl p-10">
        <div className="flex justify-between  items-center px-12 ">
          <h1 className="text-center font-bold text-3xl text-violet-800">
            My Profile
          </h1>
          <span>
            <label
              htmlFor="profileUpdate"
              onClick={() => setShowProfile(true)}
              className="text-violet-800"
            >
              <PencilAltIcon className="h-9 w-9 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer" />
            </label>
          </span>
        </div>
        <div className="divider"></div>
        <div className="md:flex justify-around align-center text-center">
          <div className="avatar p-6">
            <div className="w-56 h-56 rounded-full ring ring-violet-500 ring-offset-gray-100 ring-offset-2">
              <img src={photoUrl} alt="" />
            </div>
          </div>

          <div className="md:text-justify text-xl md:text-2xl">
            <p className="py-1 font-semibold pt-5">
              <span className="text-violet-800">Name:</span>
              <span className="font-normal pl-3 text-violet-800">{name}</span>
            </p>
            <p className="py-1 font-semibold pt-5">
              <span className="text-violet-800">Email:</span>
              <span className="font-normal pl-3 text-violet-800">{email}</span>
            </p>
            <p className="py-1 font-semibold pt-5">
              <span className="text-violet-800">Education:</span>
              <span className="font-normal pl-3 text-violet-800">
                {education || "Not Updated"}
              </span>
            </p>
            <p className="py-1 font-semibold pt-5">
              <span className="text-violet-800">Location:</span>
              <span className="font-normal pl-3 text-violet-800">
                {location || "Not Updated"}
              </span>
            </p>
            <p className="py-1 font-semibold pt-5">
              <span className="text-violet-800">Phone:</span>
              <span className="font-normal pl-3 text-violet-800">
                {phone || "Not Updated"}
              </span>
            </p>
          </div>
        </div>
        {showProfile && (
          <ProfileUpdate
            setShowProfile={setShowProfile}
            name={name}
            email={email}
          />
        )}
      </div>
    </div>
  );
};

export default MyProfile;
