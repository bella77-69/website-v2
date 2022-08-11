import React from "react";
import "./footer.scss";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function footer() {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <p className="footer-txt footer-title">
          Designed and Developed by Chantelle
        </p>
        <div className="footer-wrapper">
          <div className="footer-wrapper--social">
            <a href="mailto:mrspascer@hotmail.com" className="footer-icon">
              <HiOutlineMail />
            </a>
            <a
              href="https://www.linkedin.com/in/chantellepasceri/"
              className="footer-icon"
            >
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/bella77-69" className="footer-icon">
              <FaGithub />
            </a>
            <a href="https://twitter.com/home" className="footer-icon">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
