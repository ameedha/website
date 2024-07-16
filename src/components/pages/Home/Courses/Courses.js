import React from "react";
import "./Courses.css";
import ai from "../../../../assets/img/ai.png";
import dg from "../../../../assets/img/dg.png";
import hacking from "../../../../assets/img/hacking.png";
import sd from "../../../../assets/img/sd.png";

function Courses() {
  const courseData = [
    //Created an array names courseData which contain details of courses,its descritions and image//
    {
      title: "AI DEVELOPMENT",
      description: "Master AI Development",
      image: ai,
    },
    {
      title: "DIGITAL MARKETING",
      description: "Master Digital Marketing",
      image: dg,
    },
    {
      title: "CYBER SECURITY",
      description: "Master Cyber Security",
      image: hacking,
    },
    {
      title: "SOFTWARE DEVELOPMENT",
      description: "Master Software Development",
      image: sd,
    },
  ];
  return (
    <div className="container course_container">
      <div className="course_top">
        <h2 className="section_titile">Our Free Courses</h2>
        <p>The Top Trending Free cources With Free Certification</p>

        <div className="course_wrapper">
          {courseData.map((course, index) => (
            <div className="course_item" key={index}>
              <span className="course_icon">
                <img src={course.image} alt="" />
              </span>
              <div className="course_content">
                <h4>{course.title}</h4>
                <p>{course.description}</p>
              </div>
            </div>
            //mapping funtion helps to retrive data from the array,index is used to identify each element in an array//
          ))}
        </div>
      </div>
    </div>
  );
}
export default Courses;
