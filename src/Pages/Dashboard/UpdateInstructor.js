import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";

const UpdateInstructor = () => {
  const { id } = useParams();
  const [updateInstructor, setUpdateInstructor] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/instructor/${id}`)
      .then((res) => setUpdateInstructor(res.data));
    setLoading(false);
  }, [id]);
  if (loading) {
    return <Loading />;
  }
  const {
    img,
    education,
    name,
    Subject,
    facebook,
    twitter,
    linkedin,
    instagram,
  } = updateInstructor;

  const handleUpdateInstructor = (event) => {
    event.preventDefault();
    const getImg = event.target.image.value;
    const Subject = event.target.Subject.value;
    const name = event.target.name.value;
    const education = event.target.education.value;
    const facebook = event.target.facebook.value;
    const linkedin = event.target.linkedin.value;
    const instagram = event.target.instagram.value;
    const twitter = event.target.twitter.value;

    const updateCourse = {
      Subject: Subject,
      img: getImg,
      name: name,
      education: education,
      facebook: facebook,
      linkedin: linkedin,
      twitter: twitter,
      instagram: instagram,
    };

    axios
      .put(`http://localhost:5000/updateInstructor/${id}`, updateCourse)
      .then((res) => {
        toast.success(`Update the instructor successfully!!`);
        event.target.reset();
      });
  };
  return (
    <div className="p-12 bg-violet-200">
      <form
        className="bg-violet-300 rounded-xl md:w-2/3 mx-auto   px-8 pb-12"
        onSubmit={handleUpdateInstructor}
      >
        <h1 className="text-center p-8 text-3xl font-bold pb-16 text-violet-900 ">
          Update Instructor Here
        </h1>
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-0">
          <div className="mb-6">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text text-lg    ">Subject Name</span>
              </label>
              <input
                required
                type="text"
                name="Subject"
                placeholder={Subject}
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
                placeholder={img}
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="mb-6">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text text-lg    ">Instructor Name:</span>
              </label>
              <input
                required
                type="text"
                name="name"
                placeholder={name}
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>

          <div className="mb-6">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text text-lg    ">
                  Instructor Education:
                </span>
              </label>
              <input
                required
                type="text"
                name="education"
                placeholder={education}
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="mb-6">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text text-lg    ">Facebook:</span>
              </label>
              <input
                required
                type="text"
                name="facebook"
                placeholder={facebook}
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="mb-6">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text text-lg    ">LinkedIn:</span>
              </label>
              <input
                required
                type="text"
                name="linkedin"
                placeholder={linkedin}
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
                placeholder={instagram}
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
                placeholder={twitter}
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
        </div>
        <input
          type="submit"
          value="Update Instructor"
          className="btn w-full bg-violet-900 mx-auto block hover:bg-transparent hover:text-violet-900 hover:border-violet-900"
        />
      </form>
    </div>
  );
};

export default UpdateInstructor;
