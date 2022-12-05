import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import { useNavigate } from "react-router-dom";

const BooksCarousel = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  const handleBook = (id) => {
    navigate(`/book/${id}`);
  };
  useEffect(() => {
    fetch(`https://backend-nipa-akter.onrender.com/books`)
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      gap: "20px",
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
          <div className="w-full mx-auto">
            <h3
              className="text-center text-4xl font-bold text-violet-800 pb-10 md:pb-16"
              data-aos-delay="200"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              Our Available Books
            </h3>
          </div>

          <div className="flex lg:justify-between lg:flex-row flex-col lg:mx-0 mx-2 lg:mb-0 mb-4"></div>
          <div>
            <Carousel swipeable="true" responsive={responsive} infinite={true}>
              {books?.slice(-6).map((book, index) => (
                <div
                  className="relative"
                  key={index}
                  data-aos-delay="200"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  <div
                    className="cursor-pointer flex justify-center"
                  >
                    <img className="rounded-lg" src={book.img} alt="" />
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

export default BooksCarousel;
