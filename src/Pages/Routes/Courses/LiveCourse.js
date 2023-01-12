import React, { useEffect, useState } from "react";
import Loading from "../../Shared/Loading";
import ClassCourseCart from "../ClassOneToTwelve/ClassCourseCart";

const LiveCourse = () => {
  const [liveCourse, setLiveCourse] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://knowledge-zone-2022.onrender.com/courses/liveCourse")
      .then((res) => res.json())
      .then((data) => {
        setLiveCourse(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-4 mx-5">
      {liveCourse?.map((course) => (
        <ClassCourseCart key={course._id} course={course}></ClassCourseCart>
      ))}
    </div>
  );
};

export default LiveCourse;
