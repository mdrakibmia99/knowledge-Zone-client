import React, { useState } from "react";
import Swal from "sweetalert2";
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

const AddReviwe = () => {
  const [user] = useAuthState(auth);
  const [rattingError, setRattingError] = useState("");
  const handleForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = user?.photoURL;
    const comment = e.target.comment.value;
    const ratting = e.target.ratting.value;
    if (ratting < 0 || ratting > 5) {
      return setRattingError("Ratting Will Be Between 0 to 5 ");
    }
    setRattingError("");
    const review = { name, comment, ratting, image };

    fetch("https://knowledge-zone-2022.onrender.com/addreview", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire("Your Review Add Successfully");
        e.target.reset();
      });
  };
  return (
    <div className="p-12 bg-violet-200">
      <form
        onSubmit={handleForm}
        className="bg-violet-300 rounded-xl md:w-1/2 mx-auto pb-8  "
      >
        <h1 className="text-center p-8 text-3xl font-bold  text-violet-800 ">
          Put Your Review Here
        </h1>
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg    ">Name:</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="input input-bordered"
              value={user?.displayName}
              disabled
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg    ">Comment:</span>
            </label>
            <input
              type="text"
              name="comment"
              placeholder="Comment"
              className="input input-bordered count-chars"
              maxLength="120"
              data-max-chars="120"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg    ">Ratting:</span>
            </label>
            <input
              type="number"
              name="ratting"
              // min={0}
              // max={5}
              placeholder="Ratting"
              className="input input-bordered"
            />
          </div>
        </div>
        {rattingError && (
          <p className="text-red-500 text-center pb-3 font-semibold">
            {rattingError}
          </p>
        )}
        <div className="flex justify-center">
          <button className="btn text-white hover:text-black bg-violet-800 hover:bg-violet-500 border-0">
            submit review
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddReviwe;
