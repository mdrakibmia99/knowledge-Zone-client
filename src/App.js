import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import Contact from "./Pages/ContactUs/Contact";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Blogs from "./Pages/Blogs/Blogs";
import Books from "./Pages/Books/Books";
import Home from "./Pages/Home/Home";
import GradeFourToEight from "./Pages/Home/LearningProgram/GradeFourToEight";
import GradeNineToTwelve from "./Pages/Home/LearningProgram/GradeNineToTwelve";
import GradeThree from "./Pages/Home/LearningProgram/GradeThree";
import AllClass from "./Pages/Routes/ClassOneToTwelve/AllClass";
import ClassEight from "./Pages/Routes/ClassOneToTwelve/ClassEight";
import ClassEleven from "./Pages/Routes/ClassOneToTwelve/ClassEleven";
import ClassFIve from "./Pages/Routes/ClassOneToTwelve/ClassFIve";
import ClassFour from "./Pages/Routes/ClassOneToTwelve/ClassFour";
import ClassNine from "./Pages/Routes/ClassOneToTwelve/ClassNine";
import ClassOne from "./Pages/Routes/ClassOneToTwelve/ClassOne";
import ClassSeven from "./Pages/Routes/ClassOneToTwelve/ClassSeven";
import ClassSix from "./Pages/Routes/ClassOneToTwelve/ClassSix";
import ClassTen from "./Pages/Routes/ClassOneToTwelve/ClassTen";
import ClassThree from "./Pages/Routes/ClassOneToTwelve/ClassThree";
import ClassTwelve from "./Pages/Routes/ClassOneToTwelve/ClassTwelve";
import ClassTwo from "./Pages/Routes/ClassOneToTwelve/ClassTwo";
import Courses from "./Pages/Routes/Courses/Courses";
import DiscountCourse from "./Pages/Routes/Courses/DiscountCourse";
import EntertainingCourse from "./Pages/Routes/Courses/EntertainingCourse";
import FreeCourse from "./Pages/Routes/Courses/FreeCourse";
import IslamicCourse from "./Pages/Routes/Courses/IslamicCourse";
import KidsCourse from "./Pages/Routes/Courses/KidsCourse";
import LiveCourse from "./Pages/Routes/Courses/LiveCourse";
import SpecialCourse from "./Pages/Routes/Courses/SpecialCourse";
import Bengali from "./Pages/Routes/Instructor/Bengali";
import Biology from "./Pages/Routes/Instructor/Biology";
import Chemistry from "./Pages/Routes/Instructor/Chemistry";
import English from "./Pages/Routes/Instructor/English";
import Finance from "./Pages/Routes/Instructor/Finance";
import Instructor from "./Pages/Routes/Instructor/Instructor";
import Mathematics from "./Pages/Routes/Instructor/Mathematics";
import Physics from "./Pages/Routes/Instructor/Physics";
import Programming from "./Pages/Routes/Instructor/Programming";
import Religious from "./Pages/Routes/Instructor/Religious";
import Footer from "./Pages/Shared/Footer";
import Header from "./Pages/Shared/Header";
import NotFound from "./Pages/Shared/NotFound";
import RequireAuth from "./auth/RequireAuth";
import Users from "./Pages/Users/Users";
import RequireAdmin from "./auth/RequireAdmin";
import BookInfo from "./Pages/Shared/BooksInfo/BookInfo";
import Payment from "./payment/Payment";
import ClassCourseDetails from "./Pages/Shared/ClassCourseDetails/ClassCourseDetails";
import BlogInfo from "./Pages/Shared/BlogInfo/BlogInfo";
import MyOrder from "./Pages/Shared/MyOrder/MyOrder";
import AddCourse from "./Pages/Dashboard/AddCourse";
import UpdateCourse from "./Pages/Shared/UpdateCourse";
import AddReviwe from "./Pages/Home/LearningProgram/AddReviwe";
import UpdateBook from "./Pages/Shared/UpdateBook";
import MyProfile from "./Pages/Dashboard/MyProfile";
import AddBook from "./Pages/Dashboard/AddBook";
import SearchResult from "./Pages/Shared/SearchResult";
import AddBlog from "./Pages/Dashboard/AddBlog";
import UpdateBlog from "./Pages/Shared/UpdateBlog";
import PrivacyPolicy from "./Pages/Home/PrivacyPolicy";
import AddInstructor from "./Pages/Dashboard/AddInstructor";
import UpdateInstructor from "./Pages/Dashboard/UpdateInstructor";
import AOS from "aos";
import "aos/dist/aos.css";
import MyCollection from "./Pages/Shared/MyCollection";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="bg-violet-200">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<GradeThree />} />
          <Route path="gradeEight" element={<GradeFourToEight />} />
          <Route path="gradeTwelve" element={<GradeNineToTwelve />} />
        </Route>
        <Route path="contact" element={<Contact />} />
        {/* instructor route list */}
        <Route
          path="/instructor"
          element={
            <RequireAuth>
              <Instructor />
            </RequireAuth>
          }
        >
          <Route index element={<Bengali />} />
          <Route path="english" element={<English />} />
          <Route path="mathematics" element={<Mathematics />} />
          <Route path="chemistry" element={<Chemistry />} />
          <Route path="physics" element={<Physics />} />
          <Route path="biology" element={<Biology />} />
          <Route path="finance" element={<Finance />} />
          <Route path="religious" element={<Religious />} />
          <Route path="programming" element={<Programming />} />
        </Route>
        <Route
          path="/courses"
          element={
            <RequireAuth>
              <Courses />
            </RequireAuth>
          }
        >
          <Route index element={<FreeCourse />} />
          <Route path="discountCourse" element={<DiscountCourse />} />
          <Route path="liveCourse" element={<LiveCourse />} />
          <Route path="specialCourse" element={<SpecialCourse />} />
          <Route path="IslamicCourse" element={<IslamicCourse />} />
          <Route path="KidsCourse" element={<KidsCourse />} />
          <Route path="EntertainingCourse" element={<EntertainingCourse />} />
        </Route>
        <Route
          path="/classes"
          element={
            <RequireAuth>
              <AllClass />
            </RequireAuth>
          }
        >
          <Route index element={<ClassOne />} />
          <Route path="two" element={<ClassTwo />} />
          <Route path="three" element={<ClassThree />} />
          <Route path="four" element={<ClassFour />} />
          <Route path="five" element={<ClassFIve />} />
          <Route path="six" element={<ClassSix />} />
          <Route path="seven" element={<ClassSeven />} />
          <Route path="eight" element={<ClassEight />} />
          <Route path="nine" element={<ClassNine />} />
          <Route path="ten" element={<ClassTen />} />
          <Route path="eleven" element={<ClassEleven />} />
          <Route path="twelve" element={<ClassTwelve />} />
        </Route>

        {/* class 1 to 12 route list */}
        {/* courses information component start */}
        <Route
          path="/:classCourse/coursesInfo/:id"
          element={
            <RequireAuth>
              {" "}
              <ClassCourseDetails />{" "}
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/:classCourse/update/:id"
          element={
            <RequireAuth>
              {" "}
              <UpdateCourse />{" "}
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/updateBook/:id"
          element={
            <RequireAuth>
              {" "}
              <UpdateBook />{" "}
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/updateBlog/:id"
          element={
            <RequireAuth>
              {" "}
              <UpdateBlog />{" "}
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/addCourse"
          element={
            <RequireAdmin>
              <AddCourse />
            </RequireAdmin>
          }
        >
          {" "}
        </Route>
        <Route
          path="/addBook"
          element={
            <RequireAdmin>
              <AddBook />
            </RequireAdmin>
          }
        >
          {" "}
        </Route>

        <Route
          path="/addBlog"
          element={
            <RequireAdmin>
              <AddBlog />
            </RequireAdmin>
          }
        />

        <Route path="/searchCourse/:searchCourse" element={<SearchResult />}>
          {" "}
        </Route>
        {/* <Route path="/searchBook/:searchBook" element={<SearchBook />}>
          {" "}
        </Route> */}

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route
          path="/blog/:id"
          element={
            <RequireAuth>
              <BlogInfo />
            </RequireAuth>
          }
        />
        <Route
          path="/users"
          element={
            <RequireAdmin>
              <Users />
            </RequireAdmin>
          }
        />
        <Route path="/myOrder" element={<MyOrder />} />

        <Route path="/addReviwe" element={<AddReviwe />} />
        <Route path="/myCollection" element={<MyCollection />} />
        <Route
          path="/addBook"
          element={
            <RequireAdmin>
              <AddBook />
            </RequireAdmin>
          }
        />
        <Route
          path="/addInstructor"
          element={
            <RequireAdmin>
              <AddInstructor></AddInstructor>
            </RequireAdmin>
          }
        />

        <Route
          path="/:Subject/newAdd/:id"
          element={
            <RequireAuth>
              <UpdateInstructor />
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/books"
          element={
            <RequireAuth>
              <Books />
            </RequireAuth>
          }
        />
        <Route
          path="/myProfile"
          element={
            <RequireAuth>
              <MyProfile />
            </RequireAuth>
          }
        />
        <Route
          path="/payment/:id"
          element={
            <RequireAuth>
              <Payment />
            </RequireAuth>
          }
        />
        <Route
          path="/book/:id"
          element={
            <RequireAuth>
              <BookInfo />
            </RequireAuth>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
