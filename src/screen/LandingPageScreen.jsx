import React from 'react';
import Hero from '../component/Header/Hero/Hero';
import About from '../component/Header/About/About';
import Testimoney from '../component/Header/Testimony/Testimoney';
import Call from '../component/Header/Call/Call';
import Footer from '../component/Header/Footer/Footer';

const LandingPageScreen = () => {
  return (
    <div>
        
        <Hero />
        <About />
        <Testimoney />
        <Call />         
    </div>
  )
}

export default LandingPageScreen
