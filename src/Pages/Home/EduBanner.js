import React from "react";

const EduBanner = () => {
  return (
    <section className="container mx-auto my-10">
      <div className="flex flex-col lg:flex-row">
        <div>
          <img
            src="https://byjus-f9igwgtqi.whjr.dev/images/aboutus/kids.png"
            alt=""
            className="md:max-w-md lg:max-w-lg rounded-lg"
          />
        </div>

        <div className="flex flex-col  justify-center px-5">
          <h1 className="lg:text-5xl text-4xl text-blue-500 font-bold">
            Education for All
          </h1>
          <div className="carousel w-full py-8">
            <div id="item1" className="carousel-item w-full">
              <h1 className="text-3xl font-bold ">
                Making dreams come true with the power of education.
              </h1>
            </div>
            <div id="item2" className="carousel-item w-full">
              <h1 className="text-3xl font-bold">
                3.4 Millions+ students connected to the education within a year.
              </h1>
            </div>
            <div id="item3" className="carousel-item w-full">
              <h1 className="text-3xl font-bold">
                On a mission to empower 10 Million+ children by 2025.
              </h1>
            </div>
          </div>
          <div className="flex py-2 gap-2">
            <a href="#item1" className="btn btn-xs">
              1
            </a>
            <a href="#item2" className="btn btn-xs">
              2
            </a>
            <a href="#item3" className="btn btn-xs">
              3
            </a>
          </div>

          <div>
            <button className="btn bg-violet-800 hover:bg-transparent hover:text-violet-900 hover:border-violet-900">Know More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EduBanner;
