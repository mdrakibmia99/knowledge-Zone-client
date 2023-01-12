// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Book from "../Books/Book";
// import Loading from "./Loading";

// const SearchBook = () => {
//   const { searchBook } = useParams();
//   const [books, setBooks] = useState([]);
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     fetch("https://knowledge-zone-2022.onrender.com/searchBook")
//       .then((res) => res.json())
//       .then((books) => {
//         const matchBook = books.filter((book) =>
//           book.bookName.toLowerCase().includes(searchBook.toLowerCase())
//         );
//         setBooks(matchBook);
//         setLoading(false);
//       });
//   }, [searchBook]);
//   if (loading) {
//     return <Loading></Loading>;
//   }
//   return (
//     <div>
//       <h2 className="text-4xl text-center font-bold py-8">
//         Total Result Found:{books?.length}
//       </h2>
//       <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 p-6">
//         {books?.map((book) => (
//           <Book key={book._id} book={book}></Book>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SearchBook;
