import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_kt0b48f",
      "template_2hqhgb4",
      form.current,
      "user_8WusVg9REZlpYhDwphPFf"
    );
    e.target.reset();
  };

  return (
    <form ref={form} className="" onSubmit={sendEmail}>
      <input
        type="text"
        className=""
        name="name"
        placeholder="Your Full Name"
        required
      />
      <input
        type="email"
        className=""
        name="email"
        placeholder="Your Email"
        required
      />
      <textarea
        name="message"
        id="iam"
        placeholder="Your Message"
        rows="7"
      ></textarea>
      <button className="btn btn-primary" type="submint">
        Send Message
      </button>
    </form>
  );
};
