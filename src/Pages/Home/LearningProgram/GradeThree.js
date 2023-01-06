import React from "react";
import { Outlet } from "react-router-dom";
import iconImg from "../../../img/assets/LearningProgram/Live.png";
import img from "../../../img/assets/LearningProgram/study.png";
import ProgramCart from "./ProgramCart";

const GradeThree = () => {
  const programData = [
    {
      id: 1,
      icon: iconImg,
      title: "Blooming Gang Live 1-on-1",
      programs: ["Coding", "Music"],
      description:
        "Personalised, 1-on-1 tutoring classes with expert teachers.",
      program_img: img,
    },
    {
      id: 2,
      icon: iconImg,
      title: "Blooming Gang Live 2-on-2",
      programs: ["Coding", "Music"],
      description:
        "Personalised, 2-on-2 tutoring classes with expert teachers.",
      program_img: img,
    },
    {
      id: 3,
      icon: iconImg,
      title: "Blooming Gang Live 3-on-3",
      programs: ["Coding", "Music"],
      description:
        "Personalised, 1-on-1 tutoring classes with expert teachers.",
      program_img: img,
    },
  ];

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 items-center container mx-auto gap-8">
      {programData.map((info) => (
        <ProgramCart key={info.id} info={info}></ProgramCart>
      ))}

      <Outlet></Outlet>
    </div>
  );
};

export default GradeThree;
