import React, { useEffect, useState } from "react";
import Loading from "../../Shared/Loading";
import ClassCourseCart from "../ClassOneToTwelve/ClassCourseCart";

const EntertainingCourse = () => {
  const [entertainCourse, setEntertainCourse] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://knowledge-zone-2022.onrender.com/courses/entertainCourse")
      .then((res) => res.json())
      .then((data) => {
        setEntertainCourse(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 p-6 ">
      {entertainCourse?.map((course) => (
        <ClassCourseCart key={course._id} course={course}></ClassCourseCart>
      ))}
    </div>
  );
};

export default EntertainingCourse;
