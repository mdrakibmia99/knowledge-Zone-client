import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Contact from "./Pages/ContactUs/Contact";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Shared/Footer";
import Header from "./Pages/Shared/Header";
import NotFound from "./Pages/Shared/NotFound";
import AOS from "aos";
import "aos/dist/aos.css";
import PrivacyPolicy from "./Pages/Home/PrivacyPolicy";


function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="bg-violet-200">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
