import React from "react";
import ContactInfo from "./ContactInfo";
import SendMessage from "./SendMessage";
import email from "../../img/assets/output-onlinegiftools.gif";

const Contact = () => {
  return (
    <div className="bg-violet-200">
      <div>
        <div className="contact text-white text-center">
          <div data-aos-delay="200" data-aos="zoom-in" data-aos-duration="1000">
            <h1 className="text-2xl font-bold">Contact Us</h1>
            <p>Knowledge Zone an EdTech Platform</p>
          </div>
        </div>
        <ContactInfo />
        <div className="grid md:grid-cols-2 gap-8">
          <img
            data-aos-delay="200"
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="w-3/4 mx-auto"
            src={email}
            alt=""
          />
          <SendMessage />
        </div>
      </div>
    </div>
  );
};

export default Contact;
