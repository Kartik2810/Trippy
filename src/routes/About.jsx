import React from "react";
import "./about.css";
import Navbar from "../components/navbar/Navbar.jsx";
import img15 from "../components/images/img15.jpg";
function About() {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <img src={img15} alt="aboutimage" srcset="" />
        <h1>About Us</h1>
      </div>

      <div className="about-contant">
        <h2>Our History</h2>
        <p>
          Trippy is owned and managed bt Trippy.in pvt.ltd a leading brand in
          web designing services and e-commerece solution Trippy.in pvt ltd is
          counted for it's expertise in web solutions and it's toop ranking
          business portals our invlnclble expertise and rich experince has
          ralsed our spirits to reach ahede from our client expectation
          commendable success rate of other portails managed by Trippy is a
          liveparadigm of our work experience
        </p>
        <h2>Our Mission</h2>
        <p>
          our mission is to touch the harizon where our capoblites may
          successfull meet with the requirement of our clients that too with
          ultimate transparent and cost effectiveness
        </p>
      </div>
    </>
  );
}

export default About;
