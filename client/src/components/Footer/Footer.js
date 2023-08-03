import React from "react";
import "./footer.scss";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import logosmall from "../../assets/logo/logo-sm.png";

export default function footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="footer-text">Designed and Developed by Chantelle</p>
          </div>
          <div className="footer-image">
            <img src={logosmall} alt="logo" className="footer-logo" />
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12 footer-box">
            <ul className="social-icons">
              <li>
                {" "}
                <a href="mailto:mrspascer@hotmail.com" className="footer-icon">
                  <HiOutlineMail className="footer-svg"/>
                </a>
              </li>
              <li>
                {" "}
                <a
                  href="https://www.linkedin.com/in/chantellepasceri/"
                  className="footer-icon"
                >
                  <FaLinkedinIn className="footer-svg"/>
                </a>
              </li>
              <li>
                {" "}
                <a href="https://twitter.com/home" className="footer-icon">
                  <FaTwitter className="footer-svg"/>
                </a>
              </li>
              <li>
                {" "}
                <a href="https://github.com/bella77-69" className="footer-icon">
                  <FaGithub className="footer-svg"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
