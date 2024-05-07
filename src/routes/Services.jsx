import React from 'react';
import "./services.css"
import Navbar from "../components/navbar/Navbar.jsx"
import img17 from "../components/images/img17.jpg"
function Services() {
  return (
    <>
    <Navbar/>
    <div className='services'>
      <img src={img17} alt="image17" srcset="" />
    </div>
    </>
  )
}

export default Services