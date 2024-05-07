import React from "react";
import "./photo.css";
import Image4 from "../images/img6.jpg"

function Photo() {
  return (
    <>
      <div className="img-container">
        <img className="img4" src={Image4} alt="image4" srcset="" />
      </div>
    </>
  );
}

export default Photo;
