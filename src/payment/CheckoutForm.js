import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Swal from "sweetalert2";
import auth from "../firebase.init";

const CheckoutForm = ({ course }) => {
  const [user] = useAuthState(auth);
  const [clientSecret, setClientSecret] = useState("");
  const [cartError, setCartError] = useState("");
  const [success, setSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const { price, _id } = course;
  const { displayName, email } = user;

  useEffect(() => {
    fetch("https://knowledge-zone-2022.onrender.com/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    setCartError(error?.message || "");
    setSuccess("");

    //confirm card payment
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: displayName,
            email: email,
          },
        },
      });
    if (intentError) {
      setCartError(intentError?.message);
    } else {
      setCartError("");
      setTransactionId(paymentIntent.id);
      setSuccess("congrats! your payment is completed! ");
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Payment Successful !!",
        showConfirmButton: false,
        timer: 1500,
      });

      const payment = {
        transactionId: paymentIntent.id,
      };

      fetch(`https://knowledge-zone-2022.onrender.com/enrollCourse/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {});
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "18px",
                color: "#575fcf",
                "::placeholder": {
                  color: "#34495e",
                },
              },
              invalid: {
                color: "#f53b57",
              },
            },
          }}
        />
        <button
          className="btn btn-sm border-violet-800 rounded-lg bg-violet-800 text-white font-bold hover:bg-transparent hover:text-violet-900 hover:border-violet-900 mt-8"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Confirm Payment
        </button>
      </form>
      {cartError && (
        <p className="text-red-500 py-2 text-base font-semibold text-center uppercase">
          {cartError}
        </p>
      )}
      {success && (
        <div className="py-2 text-base font-semibold text-center text-green-600">
          <span className="uppercase">
            {success}
            <span> and your </span>
            <span>Transaction ID is :</span>{" "}
          </span>
          <span className="text-violet-800 font-semibold">{transactionId}</span>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
