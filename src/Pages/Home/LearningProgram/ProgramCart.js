import React from "react";
import { Link } from "react-router-dom";

const ProgramCart = ({ info }) => {
  const { icon, title, programs, description, program_img } = info;
  return (
    <div className="w-full bg-violet-200 rounded-xl">
      <div className="p-5 rounded-xl">
        <div>
          <img src={icon} alt="" />
        </div>
        <div className="flex w-full ">
          <div className="w-[60%] flex flex-col justify-around">
            <h3 className="lg:text-4xl md:text-4xl font-bold mb-5 lg:mb-0 md:mb-0  mr-5">
              {title}
            </h3>
            <div className="mb-5 lg:mb-0 md:mb-0 ">
              {programs?.map((program) => (
                <Link
                  to="#"
                  className="text-sm m-2 bg-violet-800 text-white rounded-xl p-2 outline-none whitespace-pre-wrap"
                >
                  {" "}
                  {program}
                </Link>
              ))}
            </div>
            <div className="mb-5 lg:mb-0 md:mb-0 ">
              <p className="text-base">{description}</p>
            </div>
            <div>
              <Link to={"/classes"} className="btn bg-violet-800 hover:bg-transparent hover:text-violet-900 hover:border-violet-900">
                {" "}
                EXPLORE &gt;{" "}
              </Link>
            </div>
          </div>
          <div className="w-[40%]">
            <img className="w-full" src={program_img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramCart;
