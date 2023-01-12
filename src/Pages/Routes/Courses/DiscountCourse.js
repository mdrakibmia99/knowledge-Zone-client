import React, { useEffect, useState } from "react";
import Loading from "../../Shared/Loading";
import ClassCourseCart from "../ClassOneToTwelve/ClassCourseCart";
const DiscountCourse = () => {
  const [discountCourses, setDiscountCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://knowledge-zone-2022.onrender.com/courses/discountCourse")
      .then((res) => res.json())
      .then((data) => {
        setDiscountCourses(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 p-6 ">
      {discountCourses?.map((course) => (
        <ClassCourseCart key={course.id} course={course}></ClassCourseCart>
      ))}
    </div>
  );
};

export default DiscountCourse;
