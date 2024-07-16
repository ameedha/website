import React from "react";
import "./Home.css";
import Courses from "./Courses/Courses";
import meta from "../../../assets/img/meta.jpeg";
import { FaWhatsapp } from "react-icons/fa6";
import Community from "../community/community";
import Plans from "../plans/plans";

function Home() {
  //funtion to open the link in new tab//
  const handleClick = () => {
    window.open("https://www.youtube.com/@techflixai", "_blank");
  };
  return (
    //Frangments are used for rendering group of elements.//
    //Section is used to separate home element from other elements.//
    //home container is divided into two parts//
    <>
      <section>
        <div className="container">
          <div className="home_container">
            <div className="home_content">
              <h2 className="section_title">Learn Everything For Free!!</h2>
              <p>
                Master Trending Technologies with Techflix AI.Invest your time
                and return skills
              </p>
              <div className="home_button">
                <button className="register_button" onClick={handleClick}>
                  Get Started
                </button>
                <button className="register_button" onClick={handleClick}>
                  Watch Now
                </button>
              </div>
            </div>
            <div className="home_img">
              <div className="home_image_wrap">
                <div className="box_01">
                  <div className="box_image">
                    <img src={meta} alt="" />
                  </div>
                </div>
                <div className="whatsapp_container">
                  <h5>500+ Students</h5>
                  <FaWhatsapp color="green" />
                </div>
                <div className="support">
                  <h5 className>Active Support</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Courses />
      <Community />
      <Plans />
    </>
  );
}
export default Home;
