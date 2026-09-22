import React from 'react';
import './About.css';
import car from '../../../assets/car.jpg';

const About = () => {
  return (
    <div>
      {/* <!-- About Section --> */}
          
           <section className="about">
              <div className="about-text">
                  <h3>About Us</h3>
                  <h2>building skills, <br/>Building Future</h2>
                   <p>At morning class digital skill academy, we provide practical training that help you create a future.</p>
                   <ul>
                      <li>&#10004; Digital Marketing </li>
                      <li>&#10004; Web Development </li>
                      <li>&#10004; Cyber Security</li>
                      <li>&#10004; Data Analysis</li>
                   </ul>
                   <a href="htpps//www.google.com" className="btn">learn more</a>
              </div>
             
              <div className="about-image">
                  <img src={car} alt="about image" />
              </div>
          </section>
    </div>
  )
}

export default About
