import React from "react";
import "./About.css";
import miya from "../../../assets/img/miya.jpg";

function AboutUs() {
  //about_container is divided into two parts//
  //Image is added from source code//
  return (
    <div className="container">
      <div className="about_container">
        <div className="team_member">
          <h2>Our Team</h2>
          <div className="member_card">
            <img className src={miya} alt="" />
            <h3 className="member_name">Miya</h3>
            <p className="member_role">Co-Founder</p>
          </div>
        </div>
        <div className="About_description">
          <h1 className="About_heading">About Us</h1>
          <p>
            With a passion for empowering learnersaf all ages.Our mission is to
            make education accessible,engaging and personalized through our
            cutting-edge educational technology plateform.
          </p>
        </div>
      </div>
    </div>
  );
}
export default AboutUs;
