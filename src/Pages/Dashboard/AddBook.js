import axios from "axios";
import React from "react";
import toast from "react-hot-toast";

const AddBook = () => {
  const handleAddBook = (event) => {
    event.preventDefault();
    const bookName = event.target.bookName.value;
    const bookImg = event.target.bookImg.value;
    const price = event.target.price.value;
    const fileSize = event.target.fileSize.value;
    const formate = event.target.formate.value;
    const interactive = event.target.interactive.value;
    const pageNumber = event.target.pageNumber.value;
    const about = event.target.about.value;
    const writerEducation1 = event.target.writerEducation1.value;
    const writerEducation2 = event.target.writerEducation2.value;
    const writerEducation3 = event.target.writerEducation3.value;
    const writerEducation4 = event.target.writerEducation4.value;
    const writerImg1 = event.target.writerImg1.value;
    const writerImg2 = event.target.writerImg2.value;
    const writerImg3 = event.target.writerImg3.value;
    const writerImg4 = event.target.writerImg4.value;
    const writerName1 = event.target.writerName1.value;
    const writerName2 = event.target.writerName2.value;
    const writerName3 = event.target.writerName3.value;
    const writerName4 = event.target.writerName4.value;

    const addBook = {
      bookName: bookName,
      img: bookImg,
      state: "unread",
      writerImg: writerImg1,
      writerImg2: writerImg2,
      writerImg3: writerImg3,
      writerImg4: writerImg4,
      writerName1: writerName1,
      writerName2: writerName2,
      writerName3: writerName3,
      writerName4: writerName4,
      educationWriter1: writerEducation1,
      educationWriter2: writerEducation2,
      educationWriter3: writerEducation3,
      educationWriter4: writerEducation4,
      objective: {
        point1:
          "The class teachers are having a little trouble understanding the lectures.",
        point2:
          "Those who do not know the explanation of all the topics of chemistry properly.",
        point3:
          "The topics are easier for those who understand the lectures easily.",
      },
      about: about,
      page: pageNumber,
      interactive: interactive,
      formate: formate,
      filesize: fileSize,
      price: price,
    };

    axios.post(`https://knowledge-zone-2022.onrender.com/addBook`, addBook).then((res) => {
      toast.success(`Add a Book`);
      event.target.reset();
    });
  };

  return (
    <div className="p-12 bg-violet-200">
      <form
        className="bg-violet-300 rounded-xl md:w-2/3 mx-auto   px-8 pb-12"
        onSubmit={handleAddBook}
      >
        <h1 className="text-center p-8 text-3xl font-bold pb-16 text-violet-900 ">
          Add Books From Here
        </h1>
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-0">
          <div className="mb-6">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text text-lg    ">Book Name:</span>
              </label>
              <input
                required
                type="text"
                name="bookName"
                placeholder="Book Name"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>

          <div className="mb-6">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text text-lg    ">Writer Name 1:</span>
              </label>
              <input
                required
                type="text"
                name="writerName1"
                placeholder="Writer Name 1"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="mb-6">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text text-lg    ">Writer Name 2:</span>
              </label>
              <input
                type="text"
                name="writerName2"
                placeholder="Writer Name 2"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="mb-6">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text text-lg    ">Writer Name 3:</span>
              </label>
              <input
                type="text"
                name="writerName3"
                placeholder="Writer Name 3"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="mb-6">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text text-lg    ">Writer Name 4:</span>
              </label>
              <input
                type="text"
                name="writerName4"
                placeholder="Writer Name 4"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="mb-6">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text text-lg    ">Writer img 1:</span>
              </label>
              <input
                required
                type="text"
                name="writerImg1"
                placeholder="Writer img 1"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="mb-6">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text text-lg    ">Writer img 2:</span>
              </label>
              <input
                type="text"
                name="writerImg2"
                placeholder="Writer img 2"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="mb-6">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text text-lg    ">Writer img 3:</span>
              </label>
              <input
                type="text"
                name="writerImg3"
                placeholder="Writer img 3"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="mb-6">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text text-lg    ">Writer img 4:</span>
              </label>
              <input
                type="text"
                name="writerImg4"
                placeholder="Writer img 4"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="mb-6">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text text-lg    ">
                  Writer Education 1:
                </span>
              </label>
              <input
                required
                type="text"
                name="writerEducation1"
                placeholder="Writer img 1"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="mb-6">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text text-lg    ">
                  Writer Education 2:
                </span>
              </label>
              <input
                type="text"
                name="writerEducation2"
                placeholder="Writer img 2"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="mb-6">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text text-lg    ">
                  Writer Education 3:
                </span>
              </label>
              <input
                type="text"
                name="writerEducation3"
                placeholder="Writer img 3"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="mb-6">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text text-lg    ">
                  Writer Education 4:
                </span>
              </label>
              <input
                type="text"
                name="writerEducation4"
                placeholder="Writer img 4"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>

          <div className="mb-6">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text text-lg    ">About:</span>
              </label>
              <textarea
                required
                type="text"
                name="about"
                placeholder="About Book"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="mb-6">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text text-lg    ">Page Number:</span>
              </label>
              <input
                required
                type="number"
                name="pageNumber"
                placeholder="Course Description"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="mb-6">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text text-lg    ">Interactive:</span>
              </label>

              <select
                required
                type="text"
                name="interactive"
                placeholder="Interactive"
                className="input input-bordered w-full max-w-xs"
              >
                <option>YES</option>
                <option>NO</option>
              </select>
            </div>
          </div>
          <div className="mb-6">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text text-lg    ">Formate:</span>
              </label>
              <select
                required
                type="text"
                name="formate"
                placeholder="Formate"
                className="input input-bordered w-full max-w-xs"
              >
                <option>PDF</option>
                <option>MP3</option>
              </select>
            </div>
          </div>
          <div className="mb-6">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text text-lg    ">File Size:</span>
              </label>
              <input
                required
                type="text"
                name="fileSize"
                placeholder="File size"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="mb-6">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text text-lg    ">Price:</span>
              </label>
              <input
                required
                type="number"
                name="price"
                min={1}
                placeholder="Price"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="mb-6">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text text-lg">Book Image:</span>
              </label>
              <input
                required
                type="text"
                name="bookImg"
                placeholder="Book Image link"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
        </div>

        <input
          type="submit"
          value="Add Book"
          className="btn w-full bg-violet-900 mx-auto block hover:bg-transparent hover:text-violet-900 hover:border-violet-900"
        />
      </form>
    </div>
  );
};

export default AddBook;
