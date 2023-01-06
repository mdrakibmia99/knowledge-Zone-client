import React from "react";
import { useNavigate } from "react-router-dom";
import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import { useAuthState } from "react-firebase-hooks/auth";
import useAdmin from "../../hooks/useAdmin";
import auth from "../../firebase.init";
import Swal from "sweetalert2";

const Book = ({ book }) => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  const { bookName, img, _id } = book;
  const navigate = useNavigate();
  const handleBook = (id) => {
    navigate(`/book/${id}`);
  };
  const handleDeleteBook = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your book has been deleted.", "success");
        const url = `http://localhost:5000/bookDelete/${id}`;
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

  const handleBookUpdate = (id) => {
    navigate(`/updateBook/${id}`);
  };
  return (
    <div>
      <div
        data-aos-delay="200"
        data-aos="zoom-in"
        data-aos-duration="1000"
        className="rounded-lg bg-gray-100 transition ease-in-out delay-150 hover:-translate-1 hover:scale-105 duration-300"
      >
        <div>
          <img src={img} alt="/" className="rounded-t-lg w-full" />
        </div>
        <div>
          <h2 className="text-center font-bold uppercase text-lg pt-4 text-violet-800">
            {bookName}
          </h2>

          <div className="card-actions justify-center pt-4 pb-2">
            <button
              className="btn btn-sm border-violet-800 rounded-lg bg-violet-800 text-white font-bold hover:bg-transparent hover:text-violet-900 hover:border-violet-900"
              onClick={() => handleBook(_id)}
            >
              View Details
            </button>
          </div>
          {admin && (
            <div>
              <div className="divider"></div>
              <div className="flex justify-between">
                <button
                  onClick={() => handleDeleteBook(_id)}
                  className="text-red-600 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 mx-6 mb-4"
                >
                  <label htmlFor="my-modal-6">
                    <TrashIcon className="h-7 w-7 cursor-pointer" />
                  </label>
                </button>

                <button
                  onClick={() => handleBookUpdate(_id)}
                  className="text-green-600 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 mx-6 mb-4"
                >
                  <PencilAltIcon className="h-7 w-7" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Book;
