import React from "react";
const ProfilePic = () => {
  return (
    <div className="flex items-center cursor-pointer">
      <div className="avatar online">
        <div className="w-8 rounded-full">
          <img
            src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT05QbmiwRVyKxlIsQZTLbezR6uzbbxDU1xrA&usqp=CAU"}
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfilePic;
