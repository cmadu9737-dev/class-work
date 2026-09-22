import React from 'react'
import car from "./assets/car.jpg";
import beauty from "./assets/beauty.jpg";
import buyer from "./assets/buyer.png";
import Header from './component/Header/Header';
import Hero from './component/Header/Hero/Hero';
import About from './component/Header/About/About';
import Testimoney from './component/Header/Testimony/Testimoney';
import Call from './component/Header/Call/Call';
import Footer from './component/Header/Footer/Footer';

const App = () => {
  return (
    <div>
        <Header />
        <Hero />
        <About />
    <Testimoney />
    <Call />  
    <Footer />    
    </div>
  )
}

export default App
