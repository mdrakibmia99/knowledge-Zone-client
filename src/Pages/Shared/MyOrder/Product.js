import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
// import useMyOrder from "../../../hooks/useMyOrder";
import { TrashIcon } from "@heroicons/react/solid";

const Product = ({ order, index }) => {
  const { _id, productName, email, paid } = order;
  const navigate = useNavigate();

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
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        const url = `https://knowledge-zone-2022.onrender.com/order/${id}`;

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
      <td className="font-bold">{productName}</td>
      {/* <td>{email}</td> */}
      <td>
        {paid !== true ? (
          <button
            onClick={() => navigate(`/payment/${_id}`)}
            className={`btn btn-sm bg-violet-800 hover:bg-transparent hover:text-violet-900 hover:border-violet-900`}
          >
            PAY
          </button>
        ) : (
          <button
            className={`btn-disabled text-green-500 btn btn-sm border-green-500 bg-white`}
          >
            PAID
          </button>
        )}
      </td>
      <td>
        <button
          onClick={() => handleDelete(_id)}
          className={`${
            paid === true && "btn-disabled bg-white text-red-500"
          } text-red-600 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 mt-4 mx-2`}
        >
          <TrashIcon className="h-7 w-7 cursor-pointer" />
        </button>
      </td>
    </tr>
  );
};

export default Product;
