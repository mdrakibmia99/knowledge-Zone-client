import React, { useEffect, useState } from "react";
import LiveChat from "../ContactUs/LiveChat";
import Blog from "./Blog";
import BlogModal from "./BlogModal";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../../actions/blogAction";

const Blogs = () => {
  const [modal, setModal] = useState(null);
  const dispatch = useDispatch();
  const { blogs } = useSelector((state) => state.blogs);

  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);

  return (
    <div>
      <h2
        data-aos-delay="200"
        data-aos="zoom-in"
        data-aos-duration="1000"
        className="text-4xl text-center font-bold text-violet-800  mt-4"
      >
        Blogs
      </h2>
      <div className="lg:w-3/4 mx-auto grid md:grid-cols-2  gap-16 px-8 py-16">
        {blogs?.map((blog) => (
          <Blog setModal={setModal} key={blog._id} blog={blog}></Blog>
        ))}
        <LiveChat />
      </div>
      {modal && <BlogModal modal={modal}></BlogModal>}
    </div>
  );
};

export default Blogs;
