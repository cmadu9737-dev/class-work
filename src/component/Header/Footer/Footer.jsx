import React from 'react'
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      {/* <!--Footer--> */}

    <footer class="footer">

        <div class="footer-container">

            {/* <!-- about --> */}

            <div class="footer-box">

                <h2>Our digital skill Academy</h2>
                <p>
                    empowering students with practical digital skills for a better future.
                </p>
            </div>

            {/* <!-- Quick links --> */}
            <div class="footer-box">

                <h3>Quick Links</h3>

                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Courses</a>
                <a href="#">Contact</a>

            </div>

            {/* <!-- Contact --> */}

            <div class="footer-box">

                <h3>Contact Us</h3>

                <p>Email: Info@example.com</p>
                <p>Phone: +2349130850978</p>
                <p>Owerri, Imo State</p>

            </div>                        
        </div>

        {/* <!-- COPYRIGHT --> */}
             
            <div class="copyright">
                
                <p>&copy;  2026 Our Digital Skills Academy, All Rights Reserved</p>

            </div>
    </footer>
    </div>
  )
}

export default Footer
