import React, { useEffect, useState } from "react";
import Loading from "../../Shared/Loading";
import ClassCourseCart from "./ClassCourseCart";

const ClassFIve = () => {
  const [classFive, setClassFive] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/courses/classFive")
      .then((res) => res.json())
      .then((data) => {
        setClassFive(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 p-6 ">
      {classFive?.map((course) => (
        <ClassCourseCart key={course._id} course={course}></ClassCourseCart>
      ))}
    </div>
  );
};

export default ClassFIve;
