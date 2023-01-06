import React, { useEffect, useState } from "react";
import Loading from "../../Shared/Loading";
import ClassCourseCart from "./ClassCourseCart";

const ClassFour = () => {
  const [classFour, setClassFour] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/courses/classFour")
      .then((res) => res.json())
      .then((data) => {
        setClassFour(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 p-6 ">
      {classFour?.map((course) => (
        <ClassCourseCart key={course._id} course={course}></ClassCourseCart>
      ))}
    </div>
  );
};

export default ClassFour;
