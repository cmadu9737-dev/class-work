import React from 'react'

const App = () => {
  return (
    <div>
         {/* <!-- Header --> */}
     <section>
        <header>
            <div className="nav-links-text"><a href="#">Home</a></div>
            <div className="nav-links-text"><a href="#">About</a></div>
            <div className="nav-links-text"><a href="#">Contact</a></div>
            <div className="nav-links-text"><a href="#">services</a></div>
        </header>
    </section>
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
            <img src="./../sample/car.jpg" alt="about image" />
        </div>
    </section>
    {/* <!-- TESTIMONY --> */}
    <section className="testimonials">
        <h4>TESTIMONIES</h4>
        <h2>Feedback From Our Student</h2>
        <div className="testimonial-container">
            <div className="card">
                <img src="../sample/beauty.jpg" alt="studend Testimonies"/>
                <h3>Oluchi Iwueze</h3>
                <p>This Academy completely changed my career. i learnt how to design from this program</p>
            </div>
            <div className="card">
                <img src="../sample/buyer.png" alt="studend Testimonies"/>
                <h3>Oluchi Iwueze</h3>
                <p>head the spin me and am confused at first but later it started becoming so clearer thanks to the the program</p>
            </div>
            <div className="card">
                <img   src="../sample/car.jpg" alt="studend Testimonies"/>
                <h3>Oluchi Iwueze</h3>
                <p>This program helped me to become confident in my design</p>
            </div>
        </div>

    </section>
    {/* <!--Call To Action Section--> */}
    <section className="cta">
        <div className="cta-content">
            <h2>Ready to Start your Learning Journey?</h2>
            <p>Jion Us to Tody and start learning practical digital
                 skills that can transform your future
            </p>
            <a href="#" className="cta-button">Get Started </a>
        </div>
    </section>

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

                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Courses</a>
                <a href="#">Contact</a>

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

export default App
