import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import useToken from "../hooks/useToken";
import Loading from "../Pages/Shared/Loading";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const [updateProfile, updating, uError] = useUpdateProfile(auth);

  const [token] = useToken(user || gUser);

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
  };

  if (loading || gLoading || updating) {
    return <Loading />;
  }

  if (token) {
    navigate(from, { replace: true });
  }

  const handleGoogleSignIn = async () => {
    await signInWithGoogle();
  };
  return (
    <div className="py-12 bg-violet-200">
      <div className="register bg-violet-300 rounded-xl md:w-1/2 mx-auto p-16  ">
        <div>
          <h1 className="text-center text-2xl font-bold text-violet-900  ">
            Please Register
          </h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full "
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is requires",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                className="input input-bordered w-full "
                {...register("email", {
                  required: {
                    value: true,
                    message: "email is requires",
                  },
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Provide a valid email",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                className="input input-bordered w-full"
                {...register("password", {
                  required: {
                    value: true,
                    message: "password is requires",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or longer",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>

            <input
              className="btn w-2/5 bg-violet-900 mx-auto block hover:bg-transparent hover:text-violet-900 hover:border-violet-900"
              type="submit"
              value="Register"
            />
          </form>
        </div>
        {(error || gError || uError) && (
          <p className="text-center text-red-600">
            {error?.message} {gError?.message} {uError?.message}
          </p>
        )}

        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-violet-900">
            Please Login
          </Link>
        </p>
        <div className="divider">OR</div>
        <div className="flex justify-center">
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-outline text-violet-900 hover:text-white hover:bg-violet-900 "
          >
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
