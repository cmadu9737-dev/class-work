import React from 'react'
import "./Header.css";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <section>
        <header>
            <div className="nav-links-text">
              <Link to="/">Home</Link>
              </div>

            <div className="nav-links-text">
              <Link to="/About">About</Link>
              </div>

            <div className="nav-links-text">
              <Link to="/ContactUs">Contact</Link>

              </div>

            <div className="nav-links-text">
              <Link to="/Services">Services</Link>
              </div>

        </header>
    </section>
    </div>
  )
}

export default Header
