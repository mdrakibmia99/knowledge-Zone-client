import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Blog = ({ blog }) => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  const { description, title, img, _id, writerName, date } = blog;
  const navigate = useNavigate();
  const handleBlog = (id) => {
    navigate(`/blog/${id}`);
  };
  const handleDeleteBlog = (id) => {
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
        Swal.fire("Deleted!", "Your blog has been deleted.", "success");
        const url = `https://knowledge-zone-2022.onrender.com/blogDelete/${id}`;
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
  const handleBlogUpdate = (id) => {
    navigate(`/updateBlog/${id}`);
  };
  return (
    <div
      data-aos-delay="200"
      data-aos="zoom-in"
      data-aos-duration="1000"
      className="w-full bg-gray-100 transition ease-in-out delay-150 hover:-translate-1 hover:scale-105 duration-300 rounded-lg"
    >
      <div className="">
        <img src={img} alt="/" className="rounded-t-lg w-full h-[330px]" />
      </div>
      <div className="text-justify px-6">
        <h2 className="text-3xl text-violet-800 text-center py-3">{title}</h2>
        <p>
          {description.slice(0, 255)}{" "}
          <span className="text-violet-800 font-semibold pl-3">
            {description.length > 255 ? (
              <label
                onClick={() => handleBlog(_id)}
                htmlFor="my-modal-3"
                className="cursor-pointer text-violet-800 font-bold"
              >
                Read More ...
              </label>
            ) : (
              ""
            )}
          </span>
          <div className="mt-5">
            <div className="divider"></div>
            <div className="flex justify-between mb-5">
              <span className="text-xl font-semibold">{writerName}</span>
              <span className="text-xl font-semibold">{date}</span>
            </div>
          </div>
        </p>

        {admin && (
          <div>
            <div className="divider"></div>
            <div className="flex justify-between">
              <button
                onClick={() => handleDeleteBlog(_id)}
                className="text-red-600 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300  mx-4 mb-4"
              >
                <label for="my-modal-6">
                  <TrashIcon className="h-7 w-7 cursor-pointer" />
                </label>
              </button>

              <button
                onClick={() => handleBlogUpdate(_id)}
                className="text-green-600 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300  mx-4 mb-4"
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

export default Blog;
