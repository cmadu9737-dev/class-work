import React from 'react'
import LandingPageScreen from './screen/LandingPageScreen';
import { Route, Routes } from "react-router-dom";
import ContactUsScreen from './screen/ContactUsScreen';
import Header from './component/Header/Header';
import AboutScreen from './screen/AboutScreen';
import ServicesScreen from './screen/ServicesScreen';
import Footer from './component/Header/Footer/Footer';

const App = () => {
  return (
    <div>
      <Header />

    <Routes>
      <Route path="/" element={<LandingPageScreen />} />
      <Route path="/Contactus" element={<ContactUsScreen />} />
      <Route path="/About" element={<AboutScreen />} />
      <Route path="/Services" element={<ServicesScreen />} />
    </Routes>

     <Footer /> 
    </div>
  )
}

export default App
