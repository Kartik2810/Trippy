import React, { useState } from "react";
import "./navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="Navbar">
      <div className="container">
        <div className="logo">Trippy</div>
        <div className={`menu ${isOpen ? "active" : ""}`}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">ContactUs</Link>
        </div>
        <div className="toggle" onClick={toggleNavbar}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
