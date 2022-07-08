import React from "react";
import CTA from "./CTA";
import Social from "./Social";
import ME from "../assests/profile.png";
function Home() {
  return (
    <div className="home-sec">
      <div className="home-content">
        <h5>Hello I'm</h5>
        <h1>MUHAMMAD SOHAIL</h1>
        <h5 className="text-light"> NODE JS DEVELOPER</h5>
        <CTA />
        <Social />
      </div>
      <div className="header-img">
        <div className="me">
          <img src={ME} alt="profile_image" />
        </div>
      </div>
    </div>
  );
}

export default Home;
