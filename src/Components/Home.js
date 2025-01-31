import React from 'react'
import Navbar from "./Navbar.js";
import Hero from './Hero.js';
import Footer from './Footer.js';

function Home() {
  return (
    <div className='home-container'>
      <Navbar/>
      <Hero description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
      <Footer/>
    </div>
  )
}

export default Home
