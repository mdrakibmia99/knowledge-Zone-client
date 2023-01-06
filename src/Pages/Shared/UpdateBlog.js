import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "./Loading";

const UpdateBlog = () => {
  const { id } = useParams();
  const [updateBlog, setUpdateBlog] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/blogs/${id}`)
      .then((res) => setUpdateBlog(res.data));
    setLoading(false);
  }, [id]);
  if (loading) {
    return <Loading></Loading>;
  }
  const { title, writerName, description, img, date } = updateBlog;
  const handleUpdateBlog = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const writerName = event.target.writerName.value;
    const description = event.target.description.value;
    const blogImg = event.target.blogImg.value;
    const date = event.target.date.value;

    const updateBlog = {
      title: title,
      img: blogImg,
      writerName: writerName,
      date: date,
      description: description,
    };

    axios
      .put(`http://localhost:5000/blogUpdate/${id}`, updateBlog)
      .then((res) => {
        toast.success(`Update Blog successfully`);
        event.target.reset();
        navigate("/blogs");
      });
  };
  return (
    <div className="p-12 bg-violet-200">
      <form
        className="bg-violet-300 rounded-xl md:w-2/3 mx-auto font-serif px-8 pb-12"
        onSubmit={handleUpdateBlog}
      >
        <h1 className="text-center p-8 text-3xl font-bold pb-16 text-violet-900 ">
          Blog Update
        </h1>
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-0">
          <div className="mb-6">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text text-lg font-sans">Book Title</span>
              </label>
              <input
                required
                type="text"
                name="title"
                placeholder="Blog Title"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="mb-6">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text text-lg font-sans">Blog Image</span>
              </label>
              <input
                required
                type="text"
                name="blogImg"
                placeholder="Blog Image"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="mb-6">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text text-lg font-sans">Blog Date</span>
              </label>
              <input
                required
                type="date"
                name="date"
                placeholder="Blog Date"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="mb-6">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text text-lg font-sans">
                  Writer Name
                </span>
              </label>
              <input
                required
                type="text"
                name="writerName"
                placeholder="Writer Name"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="mb-6">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text text-lg font-sans">
                  Description
                </span>
              </label>
              <textarea
                required
                type="text"
                name="description"
                placeholder="Description"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
        </div>
        <input
          type="submit"
          value="Update Blog"
          className="btn w-full bg-violet-900 mx-auto block hover:bg-transparent hover:text-violet-900 hover:border-violet-900"
        />
      </form>
    </div>
  );
};

export default UpdateBlog;
