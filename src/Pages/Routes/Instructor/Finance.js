import React, { useEffect, useState } from "react";
import Loading from "../../Shared/Loading";
import InstructorCard from "./InstructorCard";

const Finance = () => {
  const [instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/instructors/Finance")
      .then((res) => res.json())
      .then((data) => {
        setInstructors(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    <Loading />;
  }

  return (
    <div className="mx-8 mb-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
      {instructors?.map((instructor, index) => (
        <InstructorCard
          key={instructor._id}
          instructor={instructor}
        ></InstructorCard>
      ))}
    </div>
  );
};

export default Finance;
