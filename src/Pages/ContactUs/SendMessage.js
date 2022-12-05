import React from "react";

const SendMessage = () => {
  return (
    <div data-aos-delay="200" data-aos="zoom-in" data-aos-duration="1000">
      <form
        action="https://formsubmit.co/knowledgezone404@gmail.com"
        method="POST"
        className="card-body"
        target="_blank"
      >
        <h1 className="text-2xl text-violet-800 text-center pb-4">
          Send Your Message
        </h1>
        <div className="form-control">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              name="name"
              className="input input-bordered input-violet-800"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              className="input input-bordered input-violet-800 "
              required
            />
          </div>
        </div>

        <div className="form-control">
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            className="input input-bordered input-violet-800 "
            required
          />
        </div>
        <div className="form-control">
          <textarea
            className="textarea textarea-violet-800 pb-16 resize-none"
            placeholder="Write your message here"
            name="message"
            required
          ></textarea>
        </div>
        <div className="form-control">
          <input
            type="submit"
            className="btn bg-violet-800 hover:bg-transparent hover:text-violet-900 hover:border-violet-900"
            value="Send Message"
          />
        </div>
      </form>
    </div>
  );
};

export default SendMessage;
