import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ClassCourseCart from "../Routes/ClassOneToTwelve/ClassCourseCart";
import Loading from "./Loading";
const SearchResult = () => {
  const { searchCourse } = useParams();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/searchCourse")
      .then((res) => res.json())
      .then((courses) => {
        const matchCourse = courses.filter((course) =>
          course.title.toLowerCase().includes(searchCourse.toLowerCase())
        );
        setCourses(matchCourse);
        setLoading(false);
      });
  }, [searchCourse]);
  if (loading) {
    return <Loading></Loading>;
  }
  //   return (
  //     <div>
  //       <h2 className="text-4xl text-center font-bold py-8">
  //         Total Result Found:{courses?.length}
  //       </h2>
  //       <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 p-6">
  // =======
  //     return <Loading />;
  //   }
  return (
    <div>
      <h2 className="text-4xl text-center font-bold text-violet-800 py-8">
        Your Total Search Result Is: {courses?.length}
      </h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6 p-6">
        {courses?.map((course) => (
          <ClassCourseCart key={course._id} course={course}></ClassCourseCart>
        ))}
      </div>
    </div>
  );
};

export default SearchResult;
