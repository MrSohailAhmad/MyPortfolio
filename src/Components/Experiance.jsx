import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";

function Experiance() {
  return (
    <div className="exp-sec">
      <div className="exp-heading">
        <h5>What Skill I Have</h5>
        <h2>My Experience</h2>
      </div>
      <div className="exp-container">
        <div className="experience_front-end">
          <h3>FrontEnd Development</h3>
          <div className="experience-content">
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h5>HTML 5</h5>
                <small className="text-light">Experinced</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h5>CSS 3</h5>
                <small className="text-light">Experinced</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h5>JS ES6</h5>
                <small className="text-light">Experinced</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h5>BOOTSTRAP 5</h5>
                <small className="text-light">Experinced</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h5>REACT JS</h5>
                <small className="text-light">Experinced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_backend">
          <h3>BackEnd Development</h3>
          <div className="experience-content">
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h5>Node JS</h5>
                <small className="text-light">intermediate</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h5>EXPRESS JS</h5>
                <small className="text-light">intermediate</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h5>MONGODB</h5>
                <small className="text-light">intermediate</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h5>MYSQL</h5>
                <small className="text-light">intermediate</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h5>GIT / GITHUB</h5>
                <small className="text-light">Experinced</small>
              </div>
            </article>
          </div>
        </div>
        <section className="padd"></section>
      </div>
    </div>
  );
}

export default Experiance;
