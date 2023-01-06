import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../../../firebase.init";
import useAdmin from "../../../hooks/useAdmin";

const InstructorCard = ({ instructor, index }) => {
  const { _id, name, img, education, Subject, facebook, twitter, instagram } =
    instructor;
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  const navigate = useNavigate();

  const handleUpdateInstructor = (id) => {
    navigate(`/${Subject}/newAdd/${id}`);
  };

  const handleDeleteInstructor = (id) => {
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
        const url = `http://localhost:5000/instructor/${id}`;
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
    <div
      key={index}
      data-aos-delay="200"
      data-aos="zoom-in"
      data-aos-duration="1000"
      className="transition ease-in-out delay-150 hover:-translate-1 hover:scale-105 duration-300 rounded-lg"
    >
      <figure>
        <img
          style={{ height: "250px",width:"250px" }}
          src={img}
          alt="instructor"
          className="rounded-full mx-auto"
        />
      </figure>

      <div className="items-center text-center py-2">
        <h2 className="text-2xl font-bold text-violet-800">{name}</h2>
        <p className="pb-3">{education}</p>
        <div className="text-2xl sm:text-center">
          <a href={facebook} target={"_blank"} rel="noreferrer">
            <i className="fa-brands fa-facebook-square mr-4"></i>{" "}
          </a>
          <a href={twitter} target={"_blank"} rel="noreferrer">
            <i className="fa-brands fa-twitter-square mr-4"></i>{" "}
          </a>
          <a href={instagram} target={"_blank"} rel="noreferrer">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
        </div>
        {admin && (
          <div>
            <div className="divider"></div>
            <div className="flex justify-between">
              <button
                onClick={() => handleDeleteInstructor(_id)}
                className="text-red-600 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 mx-6 mb-4"
              >
                <TrashIcon className="h-7 w-7 cursor-pointer" />
              </button>

              <button
                onClick={() => handleUpdateInstructor(_id)}
                className="text-green-600 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 mx-6 mb-4"
              >
                <PencilAltIcon className="h-7 w-7" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InstructorCard;
