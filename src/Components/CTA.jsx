import React from "react";
import CV from "../assests/msCV.pdf";
import { Link } from "react-router-dom";
function Cta() {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <Link to="/Contact" className="btn btn-primary">
        Let's Talk
      </Link>
    </div>
  );
}

export default Cta;
