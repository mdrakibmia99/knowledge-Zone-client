import React from "react";
import Swal from "sweetalert2";
import { useUpdateProfile } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const ProfileUpdate = ({ name, email, setShowProfile }) => {
  const [updateProfile, updating] = useUpdateProfile(auth);
  const imageStorageKey = "cb1a7d020847680d78193b615dbd3aff";

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const education = e.target.education.value;
    const location = e.target.location.value;
    const phone = e.target.phone.value;
    const profileImg = e.target.profileImg.files[0];

    const formData = new FormData();
    formData.append("image", profileImg);
    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageStorageKey}`;
    const request = await fetch(url, {
      method: "POST",
      body: formData,
    });
    const response = await request.json();
    await updateProfile({ photoURL: response?.data?.url });

    if (response?.success) {
      const profile = {
        name,
        email,
        education,
        location,
        phone,
      };

      fetch(`https://knowledge-zone-2022.onrender.com/users/${email}`, {
        method: "put",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(profile),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount) {
            e.target.reset();
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Profile Updated Successfully !!",
              showConfirmButton: false,
              timer: 1500,
            });

            setShowProfile(false);
          }
        });
    }
  };

  return (
    <div>
      <input type="checkbox" id="profileUpdate" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative p-0 rounded-2xl">
          <label
            htmlFor="profileUpdate"
            className="btn btn-sm btn-circle absolute right-3 top-3 bg-violet-600 hover:bg-violet-900"
          >
            ✕
          </label>
          {updating ? (
            <Loading />
          ) : (
            <div className="bg-violet-200 rounded-lg">
              <div className="px-4 md:px-10 py-5">
                <h1 className="text-center text-2xl font-bold pb-4 text-violet-800 uppercase">
                  Update Your Profile
                </h1>
                <form onSubmit={handleUpdateProfile}>
                  <div className="form-control hidden">
                    <label className="label">
                      <span className="label-text text-lg">Name:</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={name}
                      readOnly
                      disabled
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control hidden">
                    <label className="label">
                      <span className="label-text text-lg">Email:</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      readOnly
                      disabled
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-lg">Education:</span>
                    </label>
                    <input
                      type="text"
                      name="education"
                      required
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-lg">Location:</span>
                    </label>
                    <input
                      type="text"
                      name="location"
                      required
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-lg">Mobile No:</span>
                    </label>
                    <input
                      type="text"
                      name="phone"
                      required
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label pt-3">
                      <span className="label-text text-lg">
                        Upload Your Image:
                      </span>
                    </label>
                    <input
                      type="file"
                      name="profileImg"
                      id="icon"
                      required
                      accept="image/png, image/jpeg, image/jpg"
                      className="pl-1 border-0"
                    />
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn w-2/6 mx-auto border-violet-800 rounded-md bg-violet-800 text-white font-bold hover:bg-transparent hover:text-violet-900 hover:border-violet-900">
                      UPDATE
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdate;
