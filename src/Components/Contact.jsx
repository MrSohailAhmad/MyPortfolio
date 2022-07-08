import React from "react";
import "./style/app.css";
import { ContactUs } from "./Form";
import { GoMail } from "react-icons/go";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";

function Contact() {
  return (
    <div className="con-sec">
      <div className="con-heading">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
      </div>
      <div className="contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <GoMail className="contact-option-icon" />
            <h4>Email</h4>
            <h5>ahmadsohail1819@gmail.com</h5>
            <a href="mailto:ahmadsohail1819@gmail.com" className="">
              Send Email
            </a>
          </article>
          {/*  */}
          <article className="contact-option">
            <AiOutlineLinkedin className="contact-option-icon" />
            <h4>LinkedIn</h4>
            <h5>Muhamamd Sohail</h5>
            <a
              href="https://www.linkedin.com/in/muhammad-sohail-355a621b1/"
              className=""
              target="_blank"
              rel="noreferrer"
            >
              Check Account
            </a>
          </article>
          {/*  */}
          <article className="contact-option">
            <AiOutlineWhatsApp className="contact-option-icon" />
            <h4>Whatsapp</h4>
            <h5>+92 344 4912684</h5>
            <a
              href="http://api.whatsapp.com/send?phone=923444912684"
              target="_blank"
              rel="noreferrer"
              className=""
            >
              Send Message
            </a>
          </article>
        </div>

        {/*  form import from Form.jsx file in this directory*/}
        <ContactUs />
      </div>
    </div>
  );
}

export default Contact;
