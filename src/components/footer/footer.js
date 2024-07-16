import React from "react";
import "./footer.css";
import footer from "../../assets/img/footer.png";
import { Link } from "react-router-dom";

function Footer() {
  //function to align pages at a specific size//
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    //footer is divided into three parts //
    <footer className="footer">
      <div className="container">
        <div className="footer_wrapper">
          <div className="foot-box">
            <div className="logo">
              <div className="logo_image">
                <img src={footer} alt="" />
              </div>

              <h2>TECHFLIX AI</h2>
            </div>

            <p>
              Embrace the future of innovation and technology with our
              cutting-edge tech bussiness solutions
            </p>
          </div>

          <div className="foot-box">
            <div className="footer_title">
              <h4>Company</h4>
            </div>
            <ul className="footer-item">
              <li>
                <Link to="/courses" onClick={handleClick()}>
                  Our programs
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={handleClick()}>
                  Our plan
                </Link>
              </li>
              <li>
                <Link to="/community" onClick={handleClick()}>
                  Become a member
                </Link>
              </li>
            </ul>
          </div>

          <div className="foot-box">
            <div className="footer_title">
              <h4>Quick Links</h4>
            </div>

            <ul className="footer-item">
              <li>
                <Link to="/about" onClick={handleClick()}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={handleClick()}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/support" onClick={handleClick()}>
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    //Link is used to set the URL//
  );
}
export default Footer;
