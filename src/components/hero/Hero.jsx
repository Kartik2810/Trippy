import React from "react";
import "./hero.css";
import video5 from "../videos/video5.mp4";

function Hero() {
  return (
    <>
      <div className="hero">
        <div className="i-container">
          <video
            className="hero-image"
            src={video5}
            alt=""
            autoPlay
            loop
            muted
            srcset=""
          />
        </div>
        <div className="hero-text">
          <h3>OUR PACKAGES</h3>
          <h1>Search your Holyday</h1>
          <div className="search-bar">
            <form className="row g-5 needs-validation" novalidate>
              <div className="col-md-4">
                <label for="validationCustom01" className="form-label">
                  Search Your Destination
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom01"
                  placeholder="Dubai"
                  required
                />
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="col-md-4">
                <label htmlFor="validationCustom02" className="form-label">
                  Select your Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="validationCustom02"
                  required
                />
              </div>
              <div className="col-md-4">
                <label for="validationCustomUsername" className="form-label">
                  Max Price
                </label>
                <div className="input-group has-validation">
                  <input
                    type="number"
                    className="form-control"
                    id="validationCustomUsername"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                </div>
              </div>
            </form>
            <div className="button">
              <button className="btn">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
