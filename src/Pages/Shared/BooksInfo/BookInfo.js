import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import auth from "../../../firebase.init";
import useMyOrder from "../../../hooks/useMyOrder";
import Loading from "../Loading";

const BookInfo = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user] = useAuthState(auth);
  const [myOrder] = useMyOrder(["paidOrder"]);
  const [matchPaid, setMatchPaid] = useState(false);
  const [bookInfo, setBookInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const {
    bookName,
    img,
    price,
    writerImg,
    writerImg2,
    writerImg3,
    writerImg4,
    writerName1,
    writerName2,
    writerName3,
    writerName4,
    educationWriter1,
    educationWriter2,
    educationWriter3,
    educationWriter4,
    objective,
    about,
    page,
    interactive,
    formate,
    filesize,
    _id,
  } = bookInfo;

  useEffect(() => {
    axios
      .get(`http://localhost:5000/book/${id}`)
      .then((res) => setBookInfo(res.data));
    myOrder?.find((paid) => {
      if (paid.id == _id) return setMatchPaid(true);
    });
    setLoading(false);
  }, [myOrder, _id, id]);

  // const {
  //   isLoading,
  //   error,
  //   data: book,
  // } = useQuery(["book", id], () =>
  //   fetch(`http://localhost:5000/book/${id}`, {
  //     method: "get",
  //     headers: {
  //       authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //     },
  //   }).then((res) => res.json())
  // );
  // if (isLoading) return <Loading />;
  // if (error) return "An error has occurred: " + error.message;

  const handleOrder = () => {
    const userName = user?.displayName;
    const email = user?.email;
    const productName = bookName;

    const order = {
      userName,
      email,
      productName,
      img,
      price,
      paid: false,
      id: _id,
    };
    fetch("http://localhost:5000/order", {
      method: "post",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          navigate("/myOrder");
        }
      });
  };
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="container mx-auto py-16 ">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 px-6 md:px-0">
        <div>
          <h1 className="text-2xl text-violet-800 font-bold">{bookName}</h1>
          <div className="py-12">
            <h2 className="text-xl pb-4">Writers</h2>
            <div className="grid md:grid-cols-2 border-2 rounded-xl px-6 py-8 gap-4">
              <div className="flex items-center">
                <div className="avatar mr-8">
                  <div className="w-16 rounded-full">
                    <img src={writerImg} alt="" />
                  </div>
                </div>
                <div>
                  <h2 className="text-xl text-violet-700">{writerName1}</h2>
                  <h3 className="text-sm">{educationWriter1}</h3>
                </div>
              </div>
              <div className="flex items-center">
                <div className="avatar mr-8">
                  <div className="w-16  rounded-full">
                    <img src={writerImg2} alt="" />
                  </div>
                </div>
                <div>
                  <h2 className="text-xl text-violet-700">{writerName2}</h2>
                  <h3 className="text-sm">{educationWriter2}</h3>
                </div>
              </div>
              <div className="flex items-center">
                <div className="avatar mr-8">
                  <div className="w-16  rounded-full">
                    <img src={writerImg3} alt="" />
                  </div>
                </div>
                <div>
                  <h2 className="text-xl text-violet-700">{writerName3}</h2>
                  <h3 className="text-sm">{educationWriter3}</h3>
                </div>
              </div>
              <div className="flex items-center">
                <div className="avatar mr-8">
                  <div className="w-16  rounded-full">
                    <img src={writerImg4} alt="" />
                  </div>
                </div>
                <div>
                  <h2 className="text-xl text-violet-700">{writerName4}</h2>
                  <h3 className="text-sm">{educationWriter4}</h3>
                </div>
              </div>

              <div></div>
            </div>
          </div>

          <div>
            <h2 className="text-xl text-violet-800 pb-4">About</h2>
            <p>{about}</p>
          </div>

          <div className="py-12">
            <h2 className="text-xl text-violet-800 pb-4">Objective</h2>
            <p>
              <i className="text-violet-900 mr-4 font-bold text-xl fa-solid fa-angles-right"></i>
              {objective?.point1}
            </p>
            <p>
              <i className="text-violet-900 mr-4 font-bold text-xl fa-solid fa-angles-right"></i>
              {objective?.point2}
            </p>
            <p>
              <i className="text-violet-900 mr-4 font-bold text-xl fa-solid fa-angles-right"></i>
              {objective?.point3}
            </p>
          </div>
        </div>

        <div>
          <div className="border-2 p-4 rounded-xl">
            <div className="grid md:grid-cols-2 gap-12 justify-center">
              <div>
                <img src={img} alt="" />
              </div>
              <div>
                <div className="flex items-center py-2">
                  <div className="bg-green-200 mr-4 rounded">
                    <i className="pl-4 py-3 text-green-900 mr-4 font-bold text-3xl fa-solid fa-book"></i>
                  </div>
                  <div>
                    <p className="text-gray-600">Pages</p>
                    <p className="text-violet-800 font-bold">{page}</p>
                  </div>
                </div>
                <div className="flex items-center py-2">
                  <div className="bg-orange-200 mr-4 rounded">
                    <i className="pl-4 py-3 text-orange-700 mr-4 font-bold text-2xl fa-solid fa-tv"></i>
                  </div>
                  <div>
                    <p className="text-gray-600">Interactive</p>
                    <p className="text-violet-800 font-bold">{interactive}</p>
                  </div>
                </div>
                <div className="flex items-center py-2">
                  <div className="bg-violet-200 mr-4 rounded">
                    <i className="pl-4 py-3 text-violet-900 mr-4 font-bold text-3xl fa-solid fa-file-lines"></i>
                  </div>
                  <div>
                    <p className="text-gray-600">Format</p>
                    <p className="text-violet-800 font-bold">{formate}</p>
                  </div>
                </div>
                <div className="flex items-center py-2">
                  <div className="bg-red-200 mr-4 rounded">
                    <i className="pl-4 py-3 text-red-700 mr-4 font-bold text-2xl fa-solid fa-file-circle-plus"></i>
                  </div>
                  <div>
                    <p className="text-gray-600">File Size</p>
                    <p className="text-violet-800 font-bold">{filesize}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between py-4">
              <a className="text-violet-700" href="/">
                <u>Promo Code</u>
              </a>
              <p className="text-xl font-bold">$ {price}</p>
            </div>
            {matchPaid ? (
              <button
                onClick={() => navigate("/myCollection")}
                className="btn bg-red-600 hover:bg-transparent hover:text-red-600 border-red-600 hover:border-red-600 w-full my-4"
              >
                ALREADY PAID
              </button>
            ) : (
              <button
                onClick={handleOrder}
                className="btn bg-violet-800 hover:bg-transparent hover:text-violet-900 hover:border-violet-900 w-full my-4"
              >
                Buy the Book
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookInfo;
