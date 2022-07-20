import React from "react";
import { Link } from "react-router-dom";
import ME from "../assests/profile.png";
import { FaAward } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineFolderOpen } from "react-icons/ai";

function About() {
  return (
    <div className="about-sec">
      <div className="about-heading">
        <h5>Get to know</h5>
        <h2>About Me</h2>
      </div>
      <div className="about-container">
        <div className="about-me">
          <div className="about_me_img">
            <img src={ME} alt="about profile img" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card ">
              <FaAward className="about_icon" />
              <h5>Experiance</h5>
              <small>1.5 Year</small>
            </article>
            {/*  */}
            <article className="about_card ">
              <AiOutlineUser className="about_icon" />
              <h5>Clients</h5>
              <small>4 Clients</small>
            </article>
            {/*  */}
            <article className="about_card ">
              <AiOutlineFolderOpen className="about_icon" />
              <h5>Projects</h5>
              <small>6 Completed</small>
            </article>
          </div>
          <p>
            I have 1.5 year experiance as a Front End Developer with{" "}
            <Link to="https://itguro.com/" target="_blank" rel="norefferrer">
              ITGURO
            </Link>{" "}
            Company Peshawer. And recently i complete BackEnd Development Course
            from Couresera. And now i am looking for new job as Node js
            Developer
          </p>
          <Link to="/Contact" className="lets-btn btn btn-primary">
            Let's Talk
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
