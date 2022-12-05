import React, { useEffect, useState } from "react";
// import SearchUser from "./SearchUser";
import UserRow from "./UserRow";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://backend-nipa-akter.onrender.com/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [users]);

  return (
    <div className="pt-4 pb-14">
      <h1 className="text-3xl text-center font-bold text-violet-800  mt-2 mb-10 uppercase">
        All Users
      </h1>
      {/* <SearchUser></SearchUser> */}
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr className="text-center">
              <th className="text-lg text-violet-800">Serial</th>
              <th className="text-lg text-violet-800">Email</th>
              <th className="text-lg text-violet-800">User Role</th>
              <th className="text-lg text-red-500">Delete</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <UserRow key={user._id} user={user} index={index}></UserRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
