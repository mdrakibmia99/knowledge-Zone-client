import React, { useEffect, useState } from "react";
import LiveChat from "../ContactUs/LiveChat";
import Book from "./Book";

const Books = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    fetch("https://knowledge-zone-2022.onrender.com/books")
      .then((response) => response.json())
      .then((data) => setBook(data));
  }, []);

  return (
    <div>
      <h2
        data-aos-delay="200"
        data-aos="zoom-in"
        data-aos-duration="1000"
        className="text-4xl text-center font-bold text-violet-800  mt-4"
      >
        Books List
      </h2>
      <div className="grid md:grid-cols-4 gap-10 px-8 py-8">
        {book.map((bo) => (
          <Book key={bo._id} book={bo}></Book>
        ))}
        <LiveChat />
      </div>
    </div>
  );
};

export default Books;
