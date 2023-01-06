import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import Loading from "./Loading";

const UpdateCourse = () => {
  const { id } = useParams();
  const [updateCourse, serUpdateCourse] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/course/${id}`)
      .then((res) => serUpdateCourse(res.data));
    setLoading(false);
  }, [id]);
  if (loading) {
    return <Loading />;
  }
  const {
    notes,
    quizzes,
    videos,
    hours,
    img,
    about,
    education,
    instructorName,
    ShortDescription,
    price,
    title,
    classCourse,
  } = updateCourse;

  const handleUpdateCourse = (event) => {
    event.preventDefault();
    const getImg = event.target.image.value;
    const title = event.target.title.value;
    const price = event.target.price.value;
    const shortDesc = event.target.sortDesc.value;
    const instructorName = event.target.instructorName.value;
    const education = event.target.education.value;
    const about = event.target.about.value;
    const hour = event.target.hour.value;
    const videos = event.target.videos.value;
    const quiz = event.target.quiz.value;
    const note = event.target.note.value;

    const updateCourse = {
      classCourse: classCourse,
      img: getImg,
      title: title,
      price: price,
      state: "unread",
      ShortDescription: shortDesc,
      instructorImg: getImg,
      instructorName: instructorName,
      education: education,
      objective: {
        point1:
          "Necessary spoken English skills for job interviews, presentations, local and foreign client meetings, conversations with colleagues.",
        point2:
          "Cover letter/ resume writing to apply for jobs and email/ report writing in English.",
        point3:
          "Speaking English using the right words and the correct pronunciation in the office, hangouts with colleagues, and in meetings.",
      },
      about: about,
      syllabus: {
        free: {
          title: "Resume, Cover Letter, LinkedIn",
          point1: "Resume Writing",
          point2: "Cover Letter Writing",
          point3: "LinkedIn Profile Setup",
        },
        email: {
          title: "Email Writing",
          point1: "Email basic Writing",
          point2: "Meeting Calling Template",
          point3: "Cold email send",
        },
        monologues: {
          title: "How to Speak English",
          point1: "How to give introduction",
          point2: "How to give presentation",
          point3: "How to promot your office",
        },
      },
      video: getImg,
      promoCode: "bk5283",
      Enrolled: 25,
      hours: hour,
      videos: videos,
      quizzes: quiz,
      notes: note,
      transcripts: 10,
    };

    axios
      .put(`http://localhost:5000/courseUpdate/${id}`, updateCourse)
      .then((res) => {
        toast.success(`Update ${classCourse}`);
        event.target.reset();
      });
  };

  return (
    <div className="p-12 bg-violet-200">
      <form
        className="bg-violet-300 rounded-xl md:w-2/3 mx-auto   px-8 pb-12"
        onSubmit={handleUpdateCourse}
      >
        <h1 className="text-center p-8 text-3xl font-bold pb-16 text-violet-900 ">
          Update Courses Here
        </h1>
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-0">
          <div className="mb-6">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text text-lg    ">Course Title:</span>
              </label>
              <input
                required
                type="text"
                name="title"
                placeholder={title}
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="mb-6">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text text-lg    ">Course Image:</span>
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
                <span className="label-text text-lg    ">Course Price:</span>
              </label>
              <input
                required
                type="number"
                name="price"
                placeholder={price}
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="mb-6">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text text-lg    ">
                  Course Description:
                </span>
              </label>
              <textarea
                required
                type="text"
                name="sortDesc"
                placeholder={ShortDescription}
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
                name="instructorName"
                placeholder={instructorName}
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
              <textarea
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
                <span className="label-text text-lg    ">About Course:</span>
              </label>
              <textarea
                required
                type="text"
                name="about"
                placeholder={about}
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="mb-6">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text text-lg    ">
                  Total Video Duration:
                </span>
              </label>
              <input
                required
                type="number"
                name="hour"
                placeholder={hours}
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="mb-6">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text text-lg    ">Total Videos:</span>
              </label>
              <input
                required
                type="Number"
                name="videos"
                placeholder={videos}
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="mb-6">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text text-lg    ">Total Quiz</span>
              </label>
              <input
                required
                type="Number"
                name="quiz"
                placeholder={quizzes}
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="mb-6">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text text-lg    ">Total Notes:</span>
              </label>
              <input
                required
                type="Number"
                name="note"
                placeholder={notes}
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
        </div>
        <input
          type="submit"
          value="Update Course"
          className="btn w-full bg-violet-900 mx-auto block hover:bg-transparent hover:text-violet-900 hover:border-violet-900"
        />
      </form>
    </div>
  );
};

export default UpdateCourse;
