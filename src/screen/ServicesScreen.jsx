import React from "react";
import { Link } from "react-router-dom";

import {
  FaLaptopCode,
  FaBullhorn,
  FaShieldHalved,
  FaChartLine,
  FaPenRuler,
  FaPalette,
  FaCode,
  FaDatabase,
  FaMobileScreenButton,
  FaArrowRight,
  FaCheck,
  FaGraduationCap,
  FaHeadset,
} from "react-icons/fa6";

import "./ServicesScreen.css";

const ServicesScreen = () => {
  return (
    <div className="services-page">

      {/* SERVICES HERO */}
      <section className="services-hero">
        <div className="services-hero-content">
          <span>OUR SERVICES</span>

          <h1>
            Build Skills That Create
            <br />
            Digital Opportunities
          </h1>

          <p>
            Explore practical digital skills and professional training
            designed to help you develop the knowledge and confidence
            needed in today's digital world.
          </p>

          <div className="services-hero-buttons">
            <Link to="/ContactUs" className="services-btn">
              Get Started
              <FaArrowRight />
            </Link>

            <Link to="/About" className="services-outline-btn">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="services-intro">
        <div className="services-intro-content">
          <span className="services-label">WHAT WE OFFER</span>

          <h2>
            Practical Digital Skills For Your Future
          </h2>

          <p>
            At Morning Class Digital Skill Academy, we provide practical
            training across different areas of technology and digital
            skills. Our programmes are designed to help learners develop
            useful skills they can apply to academic, professional,
            freelance, and entrepreneurial opportunities.
          </p>
        </div>
      </section>

      {/* MAIN SERVICES */}
      <section className="services-section">

        <div className="section-heading">
          <span>OUR PROGRAMMES</span>
          <h2>Explore Our Digital Skills</h2>
          <p>
            Choose an area of interest and begin developing practical
            skills for the digital world.
          </p>
        </div>

        <div className="services-grid">

          {/* WEB DEVELOPMENT */}
          <div className="service-card">
            <div className="service-icon">
              <FaLaptopCode />
            </div>

            <span className="service-number">01</span>

            <h3>Web Development</h3>

            <p>
              Learn how to build modern websites and web applications
              using practical development technologies.
            </p>

            <ul>
              <li>
                <FaCheck />
                HTML, CSS & JavaScript
              </li>

              <li>
                <FaCheck />
                React Development
              </li>

              <li>
                <FaCheck />
                Responsive Web Design
              </li>

              <li>
                <FaCheck />
                Full-Stack Development
              </li>
            </ul>

            <Link to="/ContactUs" className="service-link">
              Learn More
              <FaArrowRight />
            </Link>
          </div>

          {/* DIGITAL MARKETING */}
          <div className="service-card">
            <div className="service-icon">
              <FaBullhorn />
            </div>

            <span className="service-number">02</span>

            <h3>Digital Marketing</h3>

            <p>
              Develop the skills needed to promote brands, products and
              services across digital platforms.
            </p>

            <ul>
              <li>
                <FaCheck />
                Digital Marketing Strategy
              </li>

              <li>
                <FaCheck />
                Content Marketing
              </li>

              <li>
                <FaCheck />
                Social Media Marketing
              </li>

              <li>
                <FaCheck />
                Online Brand Promotion
              </li>
            </ul>

            <Link to="/ContactUs" className="service-link">
              Learn More
              <FaArrowRight />
            </Link>
          </div>

          {/* CYBER SECURITY */}
          <div className="service-card">
            <div className="service-icon">
              <FaShieldHalved />
            </div>

            <span className="service-number">03</span>

            <h3>Cyber Security</h3>

            <p>
              Understand essential cybersecurity concepts and learn how
              to protect digital systems, information and accounts.
            </p>

            <ul>
              <li>
                <FaCheck />
                Cybersecurity Fundamentals
              </li>

              <li>
                <FaCheck />
                Online Safety
              </li>

              <li>
                <FaCheck />
                Data Protection
              </li>

              <li>
                <FaCheck />
                Security Awareness
              </li>
            </ul>

            <Link to="/ContactUs" className="service-link">
              Learn More
              <FaArrowRight />
            </Link>
          </div>

          {/* DATA ANALYSIS */}
          <div className="service-card">
            <div className="service-icon">
              <FaChartLine />
            </div>

            <span className="service-number">04</span>

            <h3>Data Analysis</h3>

            <p>
              Learn how to work with data, identify patterns and turn
              information into useful insights.
            </p>

            <ul>
              <li>
                <FaCheck />
                Data Fundamentals
              </li>

              <li>
                <FaCheck />
                Data Cleaning
              </li>

              <li>
                <FaCheck />
                Data Visualisation
              </li>

              <li>
                <FaCheck />
                Data Interpretation
              </li>
            </ul>

            <Link to="/ContactUs" className="service-link">
              Learn More
              <FaArrowRight />
            </Link>
          </div>

          {/* UI/UX DESIGN */}
          <div className="service-card">
            <div className="service-icon">
              <FaPenRuler />
            </div>

            <span className="service-number">05</span>

            <h3>UI/UX Design</h3>

            <p>
              Learn how to design intuitive and user-friendly digital
              experiences for websites and applications.
            </p>

            <ul>
              <li>
                <FaCheck />
                User Interface Design
              </li>

              <li>
                <FaCheck />
                User Experience
              </li>

              <li>
                <FaCheck />
                Wireframing
              </li>

              <li>
                <FaCheck />
                Prototyping
              </li>
            </ul>

            <Link to="/ContactUs" className="service-link">
              Learn More
              <FaArrowRight />
            </Link>
          </div>

          {/* GRAPHIC DESIGN */}
          <div className="service-card">
            <div className="service-icon">
              <FaPalette />
            </div>

            <span className="service-number">06</span>

            <h3>Graphic Design</h3>

            <p>
              Develop creative design skills for branding, marketing
              materials, social media and digital communication.
            </p>

            <ul>
              <li>
                <FaCheck />
                Brand Design
              </li>

              <li>
                <FaCheck />
                Social Media Graphics
              </li>

              <li>
                <FaCheck />
                Marketing Materials
              </li>

              <li>
                <FaCheck />
                Creative Design
              </li>
            </ul>

            <Link to="/ContactUs" className="service-link">
              Learn More
              <FaArrowRight />
            </Link>
          </div>

        </div>
      </section>

      {/* ADDITIONAL SKILLS */}
      <section className="additional-services">

        <div className="section-heading">
          <span>MORE TO LEARN</span>

          <h2>Additional Digital Skills</h2>

          <p>
            Expand your knowledge with additional technology skills.
          </p>
        </div>

        <div className="additional-grid">

          <div className="additional-card">
            <FaCode />

            <div>
              <h3>Programming</h3>
              <p>
                Build your programming knowledge and problem-solving
                skills.
              </p>
            </div>
          </div>

          <div className="additional-card">
            <FaDatabase />

            <div>
              <h3>Database Skills</h3>
              <p>
                Learn the fundamentals of storing and managing digital
                information.
              </p>
            </div>
          </div>

          <div className="additional-card">
            <FaMobileScreenButton />

            <div>
              <h3>Mobile Technology</h3>
              <p>
                Understand modern mobile technologies and digital
                experiences.
              </p>
            </div>
          </div>

          <div className="additional-card">
            <FaGraduationCap />

            <div>
              <h3>Digital Literacy</h3>
              <p>
                Develop essential computer and digital skills for
                everyday life and work.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* HOW WE TEACH */}
      <section className="training-section">

        <div className="training-content">

          <div className="training-text">
            <span className="services-label">
              OUR APPROACH
            </span>

            <h2>
              Learn. Practise. Build. Grow.
            </h2>

            <p>
              Our training approach focuses on combining knowledge with
              practical learning. We want learners to understand what
              they are learning and gain opportunities to practise their
              skills through practical tasks and projects.
            </p>

            <div className="training-points">

              <div>
                <FaCheck />
                <span>Practical learning</span>
              </div>

              <div>
                <FaCheck />
                <span>Project-based practice</span>
              </div>

              <div>
                <FaCheck />
                <span>Beginner-friendly training</span>
              </div>

              <div>
                <FaCheck />
                <span>Support throughout your learning journey</span>
              </div>

            </div>

            <Link to="/ContactUs" className="services-btn">
              Contact Us
              <FaArrowRight />
            </Link>

          </div>

          <div className="training-box">
            <div className="training-box-icon">
              <FaGraduationCap />
            </div>

            <h3>Start Your Learning Journey</h3>

            <p>
              Choose a digital skill, develop your knowledge and start
              building practical experience.
            </p>

            <Link to="/ContactUs">
              Get Started
              <FaArrowRight />
            </Link>
          </div>

        </div>

      </section>

      {/* SUPPORT */}
      <section className="services-support">

        <div className="support-icon">
          <FaHeadset />
        </div>

        <div className="support-text">
          <span>NEED HELP CHOOSING?</span>

          <h2>
            Not Sure Which Skill To Learn?
          </h2>

          <p>
            Contact us and let us help you identify a digital skill
            that matches your interests and learning goals.
          </p>
        </div>

        <Link to="/ContactUs" className="support-btn">
          Talk To Us
          <FaArrowRight />
        </Link>

      </section>

      {/* FINAL CTA */}
      <section className="services-cta">

        <div>
          <span>START TODAY</span>

          <h2>
            Your Digital Future Starts With A Skill
          </h2>

          <p>
            Take the first step towards developing practical digital
            skills for the modern world.
          </p>

          <Link to="/ContactUs" className="cta-btn">
            Get Started
          </Link>
        </div>

      </section>

    </div>
  );
};

export default ServicesScreen;