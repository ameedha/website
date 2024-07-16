import React from "react";
import "./header.css";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";

function Header() {
  //creatiing an array to display the navbar//
  const nav_titles = [
    { path: "/", display: "Home" },
    { path: "/services", display: "Services" },
    { path: "/courses", display: "Courses" },
    { path: "/about", display: "About" },
  ];
  return (
    //nav_container is divided into logo and navigation//
    <header classname="header">
      <div className="container">
        <div className="nav_container">
          <div className="logo">
            <div className="logo_image">
              <img src={logo} alt="" />
            </div>
            <h2>TechFlix AI</h2>
          </div>

          <div className="navigation">
            <ul className="menu">
              {
                nav_titles.map((item) => (
                  <li className="nav_item">
                    <Link to={item.path}>{item.display}</Link>
                  </li>
                ))
                //Using mapping array elements are separately displyed in li tag//
                //path of nav elements were given using Link tag//
              }
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
