import React from 'react'
import "./Hero.css";

function Hero() {
  return (
    <div>
      {/* <!-- hero section --> */}
     <section className="hero">
        <div className="overlay">
            <div className="hero-content">
                <h1>welcome to my webpage</h1>
                <p>learn fullsatck development, ui/ux, graphic design and other digital skills</p>
                <button>Get Started</button>
            </div>             
        </div>
    </section>
    </div>
  )
}

export default Hero
