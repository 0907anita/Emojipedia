import React from "react";
import twitter from "../images/twitter.svg";
import linkedin from "../images/linkedin.svg";
import github from "../images/github.svg";
import code from "../images/code.svg";
import Insta from "../images/Insta.svg";

export default function Footer({ flag }) {
  function getClass() {
    if (flag === "desk") {
      return "footer footer-desk";
    } else {
      return "footer footer-mobile";
    }
  }
  return (
    <div className={getClass()}> 
      <div className="social-media">
        <a href="https://twitter.com/Anita448590591">
          <img src={twitter} alt="twitter icon" />
        </a>
        <a href="https://www.linkedin.com/in/anita-choudhary-229608197/">
          <img src={linkedin} alt="linkedin icon" />
        </a>
        <a href="https://github.com/0907anita">
          <img src={github} alt="github icon" />
        </a>
        <a href="https://www.instagram.com/hye_kwan__/">
          <img src={Insta} alt="Instagram icon" />
        </a>
        <pre href="/">{""} by Anita</pre>
      </div>
    </div>
  );
}
     