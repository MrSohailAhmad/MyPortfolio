import React from "react";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";
function HeaderSocial() {
  return (
    <div className="header_social">
      <a
        href="https://www.linkedin.com/in/muhammad-sohail-355a621b1/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/MrSohailAhmad"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub />
      </a>
      <a
        href="https://www.instagram.com/code_totech/"
        target="_blank"
        rel="noreferrer"
      >
        <BsInstagram />
      </a>
    </div>
  );
}

export default HeaderSocial;
