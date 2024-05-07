import React from "react";
import "./footer.css";

import video4 from "../videos/video-4.mp4";
function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="fooet-image">
          <video src={video4} autoPlay loop muted alt="image" srcset="" />
        </div>
        <div className="footer-content">
          <div className="con1">
            <h3>Trippy</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A, nobis
              ut magnam quasi aut eveniet! Ducimus at nemo eligendi, ipsum
              expedita, commodi mollitia quasi beatae quod, aut blanditiis iusto
              impedit?
            </p>
            <div className="con1-social_media">
              <i class="icon fa-brands fa-square-twitter"></i>
              <i class="icon fa-brands fa-youtube"></i>
              <i class="icon fa-brands fa-instagram"></i>
              <i class="icon fa-brands fa-square-facebook"></i>
            </div>
          </div>
          <div className="con2">
            <h6>OUR AGENCY</h6>
            <ul>
              <li>
                <i class="fa-solid fa-chevron-right"></i> Services
              </li>
              <li>
                <i class="fa-solid fa-chevron-right"></i> insurance
              </li>
              <li>
                <i class="fa-solid fa-chevron-right"></i> Agency
              </li>
              <li>
                <i class="fa-solid fa-chevron-right"></i> Toursim
              </li>
              <li>
                <i class="fa-solid fa-chevron-right"></i> payment
              </li>
            </ul>
          </div>
          <div className="con3">
            <h6>PARTNERS</h6>
            <ul>
              <li>
                <i class="fa-solid fa-chevron-right"></i> Services
              </li>
              <li>
                <i class="fa-solid fa-chevron-right"></i> insurance
              </li>
              <li>
                <i class="fa-solid fa-chevron-right"></i> Agency
              </li>
              <li>
                <i class="fa-solid fa-chevron-right"></i> Toursim
              </li>
              <li>
                <i class="fa-solid fa-chevron-right"></i> payment
              </li>
            </ul>
          </div>
          <div className="con4">
            <h6>LAST MINUTE</h6>
            <ul>
              <li>
                <i class="fa-solid fa-chevron-right"></i> Services
              </li>
              <li>
                <i class="fa-solid fa-chevron-right"></i> insurance
              </li>
              <li>
                <i class="fa-solid fa-chevron-right"></i> Agency
              </li>
              <li>
                <i class="fa-solid fa-chevron-right"></i> Toursim
              </li>
              <li>
                <i class="fa-solid fa-chevron-right"></i> payment
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
