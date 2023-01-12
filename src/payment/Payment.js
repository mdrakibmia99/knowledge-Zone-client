import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Pages/Shared/Loading";
import auth from "./../firebase.init";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51LUplwAHqVh6YNbtXIh1r6cMllP3ijNonJXLdAzUIPdOb5UTUwLZ4gzoYwjJVPuIVFJwIySNyL06PnrSOLJDnlRY00SXGHN8mD"
);

const Payment = () => {
  const [user] = useAuthState(auth);
  const { id } = useParams();
  const url = `https://knowledge-zone-2022.onrender.com/payment/${id}`;
  const { data: course, isLoading } = useQuery(["payment", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  const { productName, price, img } = course;
  return (
    <div className="w-11/12 md:w-2/5 mx-auto min-h-scree my-10 bg-gray-100 rounded-xl">
      <div className="text-center py-4">
        <div className="avatar my-2">
          <div className="w-28 rounded flex justify-center items-center">
            <img src={img} alt="" />
          </div>
        </div>
        <h1 className="text-center text-xl font-semibold text-violet-800 mb-2 px-4 leading-8">
          Hello Dear <span className="font-bold">{user.displayName}</span>,
          Please Pay <span className="font-bold">${price}</span> To Confirm Your
          Order
        </h1>
      </div>
      <div className="px-6 py-6 text-center">
        <Elements stripe={stripePromise}>
          <CheckoutForm course={course} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
