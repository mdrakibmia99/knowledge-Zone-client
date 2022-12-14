import React, { useEffect } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import useToken from "../hooks/useToken";
import Loading from "../Pages/Shared/Loading";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const email = watch("email");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const [sendPasswordResetEmail, sending, pResetError] =
    useSendPasswordResetEmail(auth);

  const [token] = useToken(user || gUser);

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);

  if (loading || gLoading || sending) {
    return <Loading />;
  }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };
  return (
    <div className="py-12 bg-violet-200">
      <div className=" bg-violet-300 rounded-xl md:w-1/2 mx-auto p-20  ">
        <div>
          <h1 className="text-center text-2xl font-bold  text-violet-900 ">
            Please Login
          </h1>
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <div>
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
            <div>
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
              value="Login"
            />
          </form>
        </div>
        {(error || gError || pResetError) && (
          <p className="text-center text-red-600">
            {error?.message} {gError?.message} {pResetError?.message}
          </p>
        )}

        <p className="text-center mt-4">
          New to Knowledge Zone?{" "}
          <Link to="/register" className="text-violet-900">
            Create new account
          </Link>
        </p>
        <p className="text-center mt-4">
          Forget Password?{" "}
          <button
            className="text-violet-900"
            onClick={async () => {
              await sendPasswordResetEmail(email);
              alert("Sent email");
            }}
          >
            Reset Password
          </button>
        </p>
        <div className="divider">OR</div>
        <div className="flex justify-center">
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline text-violet-900 hover:text-white hover:bg-violet-900 "
          >
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
