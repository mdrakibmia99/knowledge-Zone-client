import axios from "axios";
import React from "react";
import toast from "react-hot-toast";

const AddInstructor = () => {
  const selectSubject = [
    "Bengali",
    "Biology",
    "Chemistry",
    "English",
    "Finance",
    "Mathematics",
    "Physics",
    "Programming",
    "Religion",
  ];

  const handleAddInstructor = (event) => {
    event.preventDefault();

    const subject = event.target.subject.value;
    const name = event.target.name.value;
    const getImg = event.target.image.value;
    const education = event.target.education.value;
    const facebook = event.target.facebook.value;
    const linkedin = event.target.linkedin.value;
    const instagram = event.target.instagram.value;
    const twitter = event.target.twitter.value;

    const addInstructor = {
      Subject: subject,
      name: name,
      img: getImg,
      education: education,
      facebook: facebook,
      linkedin: linkedin,
      instagram: instagram,
      twitter: twitter,
    };

    axios
      .post(`https://knowledge-zone-2022.onrender.com/addInstructor`, addInstructor)
      .then((res) => {
        toast.success(`Instructor added successfully!!`);
        event.target.reset();
      });
  };
  return (
    <div className="p-12 bg-violet-200">
      <form
        className="bg-violet-300 rounded-xl md:w-2/3 mx-auto   px-8 pb-12"
        onSubmit={handleAddInstructor}
      >
        <h1 className="text-center p-8 text-3xl font-bold pb-16 text-violet-900 ">
          Add Instructor Here
        </h1>
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-0">
          <div className="mb-6">
            <label className="label">
              {" "}
              <span className="label-text text-lg    ">
                Choose Subject for Instructor:
              </span>
            </label>
            <select
              name="subject"
              required
              className="select select-bordered w-full max-w-xs"
            >
              <option disabled selected>
                Select Subject Name:
              </option>
              {selectSubject.map((subject) => (
                <option>{subject}</option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text text-lg  ">Instructor Name:</span>
              </label>
              <input
                required
                type="text"
                name="name"
                placeholder="Instructor Name"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>

          <div className="mb-6">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text text-lg    ">
                  Instructor Image:
                </span>
              </label>
              <input
                required
                type="text"
                name="image"
                placeholder="Instructor Image url"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>

          <div className="mb-6">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text text-lg    ">
                  Educational Qualification
                </span>
              </label>
              <input
                required
                type="text"
                name="education"
                placeholder="Educational Qualification"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>

          <div className="mb-6">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text text-lg  ">Facebook:</span>
              </label>
              <input
                required
                type="text"
                name="facebook"
                placeholder="Facebook Profile Link"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>

          <div className="mb-6">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text text-lg    ">Linkedin:</span>
              </label>
              <input
                required
                type="text"
                name="linkedin"
                placeholder="Linkedin Profile Link"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>

          <div className="mb-6">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text text-lg    ">Instagram:</span>
              </label>
              <input
                required
                type="text"
                name="instagram"
                placeholder="Instagram Profile Link"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>

          <div className="mb-6">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text text-lg    ">Twitter:</span>
              </label>
              <input
                required
                type="text"
                name="twitter"
                placeholder="Twitter Profile Link"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
        </div>
        <input
          type="submit"
          value="Add Instructor"
          className="btn w-full bg-violet-900 mx-auto block hover:bg-transparent hover:text-violet-900 hover:border-violet-900"
        />
      </form>
    </div>
  );
};

export default AddInstructor;
