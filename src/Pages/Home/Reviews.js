import React, { useEffect, useState } from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import quote from "../../../src/img/quote.png";
import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Reviews = () => {
  const [user] = useAuthState(auth);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/addreview`)
      .then((response) => response.json())
      .then((data) => setReviews(data));
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="mt-24 md:mt-32">
      <section id="team-section">
        <div className="container mx-auto">
          <div
            className=" w-full mx-auto"
            data-aos-delay="200"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h3 className="text-center px-4 text-4xl font-bold text-violet-800 pb-8 md:pb-16">
              What Our Students Say About Us
            </h3>
          </div>
          <div className="flex lg:justify-between lg:flex-row flex-col lg:mx-0 mx-2 lg:mb-0 mb-4">
            <div></div>
          </div>
          <div>
            <Carousel swipeable="true" responsive={responsive} infinite={true}>
              {reviews
                .slice(reviews.length - 3, reviews.length)
                .map((review, index) => (
                  <div key={index} className="p-4 w-full">
                    <div
                      className="bg-gray-100 p-8 rounded-lg"
                      data-aos="zoom-in"
                      data-aos-duration="1000"
                      data-aos-delay="200"
                    >
                      <img src={quote} width={30} alt="" className="pb-3" />
                      <p className="h-[100px] leading-relaxed mb-6">
                        {review.comment}
                      </p>
                      <a className="inline-flex items-center">
                        <img
                          alt=""
                          src={review.image}
                          className="w-14 h-14 rounded-full flex-shrink-0 object-cover object-center"
                        />
                        <span className="flex-grow flex flex-col pl-4">
                          <p>
                            <Rating
                              readonly
                              initialRating={review.ratting}
                              emptySymbol={
                                <AiOutlineStar color="orange" size={"15px"} />
                              }
                              fullSymbol={
                                <AiFillStar color="orange" size={"15px"} />
                              }
                            />
                          </p>
                          <span className="title-font font-medium text-violet-800">
                            {review.name}
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                ))}
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
