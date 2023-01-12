import { TrashIcon } from "@heroicons/react/solid";
import React from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const UserRow = ({ user, index }) => {
  const { _id, email, role } = user;
  const makeAdmin = () => {
    fetch(`https://knowledge-zone-2022.onrender.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to make an admin.");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Successfully made an admin");
        }
      });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Do You Want To Delete This ??",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#eb2f06",
      cancelButtonColor: "#00ab41",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your File Has Been Deleted !!", "success");
        const url = `https://knowledge-zone-2022.onrender.com/user/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            window.location.reload();
          });
      }
    });
  };
  return (
    <tr className="text-center">
      <th className="font-bold">{index + 1}</th>
      <td className="font-bold">{email}</td>
      <td>
        {role !== "admin" ? (
          <button
            onClick={makeAdmin}
            className="btn btn-sm bg-violet-800 hover:bg-transparent hover:text-violet-900 hover:border-violet-900"
          >
            Make Admin
          </button>
        ) : (
          <h1 className="font-bold text-green-500">ADMIN</h1>
        )}
      </td>
      <td>
        <button
          onClick={() => handleDelete(_id)}
          className="text-red-600 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 mt-4 mx-2"
        >
          <TrashIcon className="h-7 w-7 cursor-pointer" />
        </button>
      </td>
    </tr>
  );
};

export default UserRow;
