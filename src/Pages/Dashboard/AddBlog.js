import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

const AddBlog = () => {
  const handleAddBlog = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const writerName = event.target.writerName.value;
    const blogImg = event.target.blogImg.value;
    const date = event.target.date.value;
    const description = event.target.description.value;

    const addBlog = {
      title: title,
      img: blogImg,
      writerName: writerName,
      date: date,
      description: description,
    };

    axios.post(`https://knowledge-zone-2022.onrender.com/addBlog`, addBlog).then((res) => {
      toast.success(`Add a Blog`);
      event.target.reset();
    });
  };
  return (
    <div className="p-12 bg-violet-200">
      <form
        className="bg-violet-300 rounded-xl md:w-2/3 mx-auto px-8 pb-12"
        onSubmit={handleAddBlog}
      >
        <h1 className="text-center p-8 text-3xl font-bold pb-16 text-violet-900 ">
          Add Blog From Here
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
          value="Add Blog"
          className="btn w-full bg-violet-900 mx-auto block hover:bg-transparent hover:text-violet-900 hover:border-violet-900"
        />
      </form>
    </div>
  );
};

export default AddBlog;
