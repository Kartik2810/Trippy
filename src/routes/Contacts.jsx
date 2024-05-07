import React from "react";
import "./contact.css";
import Navbar from "../components/navbar/Navbar.jsx";

function Contacts() {
  return (
    <>
      <Navbar />
      <div className="contact-container">
        <div className="right-page">
          <h1>Talk With Our Sals Team</h1>
          <p>
            Fill out your information and Asana representative will reach out to
            you. Have a simple question?
          </p>
        </div>
        <div className="left-side">
          <form>
            <h1>Send a Message To Us !</h1>
            <div className="mb-4">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Name
              </label>
              <input
                type="name"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-4">
              <label for="exampleInputEmail1" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-4">
              <label for="exampleInputPassword1" className="form-label">
                Subject
              </label>
              <input
                type="name"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Message..."
                name="textarea"
                id="textarea"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contacts;
