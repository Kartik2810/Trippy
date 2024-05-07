import React from 'react';
import Navbar from "../components/navbar/Navbar.jsx";
import Hero from '../components/hero/Hero.jsx';
import Destination from '../components/destination/Destination.jsx';
import Photo from "../components/photo/Photo.jsx";
import Card from "../components/card/Card.jsx";
import Footer from '../components/footer/Footer.jsx';
function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Destination/>
    <Photo/>
    <Card/>
    <Footer/>
    </>
  )
}

export default Home