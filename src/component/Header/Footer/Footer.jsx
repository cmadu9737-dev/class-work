import React from 'react'
import "./Footer.css";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      {/* <!--Footer--> */}

    <footer className="footer">

        <div className="footer-container">

            {/* <!-- about --> */}

            <div className="footer-box">

                <h2>Our digital skill Academy</h2>
                <p>
                    empowering students with practical digital skills for a better future.
                </p>
            </div>

            {/* <!-- Quick links --> */}
            <div className="footer-box">

                <h3>Quick Links</h3>

                <p>Home</p>
                <p>About</p>
                <p>Courses</p>
                <p>Contact</p>

            </div>

            {/* <!-- Contact --> */}

            <div className="footer-box">

                <h3>Contact Us</h3>

                <p>Email: Info@example.com</p>
                <p>Phone: +2349130850978</p>
                <p>Owerri, Imo State</p>

            </div>                        
        </div>

        {/* <!-- COPYRIGHT --> */}
             
            <div className="copyright">
                
                <p>&copy;  2026 Our Digital Skills Academy, All Rights Reserved</p>

            </div>
    </footer>
    </div>
  )
}

export default Footer
