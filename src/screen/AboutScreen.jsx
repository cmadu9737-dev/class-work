import React from "react";
import { Link } from "react-router-dom";
import {
  FaCode,
  FaPenRuler,
  FaPalette,
  FaBullhorn,
  FaChartLine,
  FaShieldHalved,
  FaLaptopCode,
  FaUserGraduate,
  FaDiagramProject,
  FaUsers,
} from "react-icons/fa6";

import car from "../assets/car.jpg";
import "./AboutScreen.css";

const AboutScreen = () => {
  return (
    <div className="about-page">

      {/* =========================
          ABOUT HERO
      ========================== */}
      <section className="about-hero">
        <div className="about-hero-content">
          <span>ABOUT US</span>

          <h1>Empowering People Through Digital Skills</h1>

          <p>
            At Morning Class Digital Skill Academy, we believe that digital
            skills are essential for building a successful career and creating
            opportunities in today's fast-changing world.
          </p>
        </div>
      </section>


      {/* =========================
          WHO WE ARE
      ========================== */}
      <section className="who-we-are">

        <div className="about-image">
          <img
            src={car}
            alt="Students learning digital skills"
          />
        </div>

        <div className="about-content">
          <span>WHO WE ARE</span>

          <h2>Learn. Practise. Create. Grow.</h2>

          <p>
            Morning Class Digital Skill Academy is a practical digital skills
            academy focused on helping students, beginners, entrepreneurs,
            and aspiring professionals develop valuable skills they can use
            in the real world.
          </p>

          <p>
            Our training combines practical learning, hands-on projects,
            and guidance designed to help learners build confidence and
            prepare for opportunities in the digital economy.
          </p>

          <Link to="/ContactUs" className="about-btn">
            Get Started
          </Link>
        </div>

      </section>


      {/* =========================
          WHAT WE DO
      ========================== */}
      <section className="what-we-do">

        <div className="section-heading">
          <span>WHAT WE DO</span>

          <h2>Develop Skills That Create Opportunities</h2>

          <p>
            We provide practical training across different areas of
            technology and digital creativity.
          </p>
        </div>


        <div className="skills-grid">

          {/* Web Development */}
          <div className="skill-card">

            <div className="skill-icon">
              <FaCode />
            </div>

            <h3>Web Development</h3>

            <p>
              Learn how to build modern, responsive websites and
              web applications.
            </p>

          </div>


          {/* UI/UX Design */}
          <div className="skill-card">

            <div className="skill-icon">
              <FaPenRuler />
            </div>

            <h3>UI/UX Design</h3>

            <p>
              Develop the skills to create attractive and
              user-friendly digital experiences.
            </p>

          </div>


          {/* Graphic Design */}
          <div className="skill-card">

            <div className="skill-icon">
              <FaPalette />
            </div>

            <h3>Graphic Design</h3>

            <p>
              Learn how to create professional visual designs
              for businesses, brands, and individuals.
            </p>

          </div>


          {/* Digital Marketing */}
          <div className="skill-card">

            <div className="skill-icon">
              <FaBullhorn />
            </div>

            <h3>Digital Marketing</h3>

            <p>
              Learn how to promote brands, products, and
              services using digital platforms.
            </p>

          </div>


          {/* Data Analysis */}
          <div className="skill-card">

            <div className="skill-icon">
              <FaChartLine />
            </div>

            <h3>Data Analysis</h3>

            <p>
              Develop practical skills for working with data
              and turning information into useful insights.
            </p>

          </div>


          {/* Cyber Security */}
          <div className="skill-card">

            <div className="skill-icon">
              <FaShieldHalved />
            </div>

            <h3>Cyber Security</h3>

            <p>
              Learn the fundamentals of protecting digital
              systems, information, and online activities.
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          MISSION & VISION
      ========================== */}
      <section className="mission-vision">

        <div className="mission">

          <span>OUR MISSION</span>

          <h2>Making Digital Education Accessible</h2>

          <p>
            Our mission is to make practical digital education accessible
            to people who want to develop valuable skills, improve their
            careers, start businesses, and participate confidently in the
            digital economy.
          </p>

        </div>


        <div className="vision">

          <span>OUR VISION</span>

          <h2>Building the Digital Professionals of Tomorrow</h2>

          <p>
            Our vision is to become a trusted digital skills academy that
            equips individuals with the knowledge, creativity, and confidence
            they need to succeed in a technology-driven world.
          </p>

        </div>

      </section>


      {/* =========================
          WHY CHOOSE US
      ========================== */}
      <section className="why-us">

        <div className="section-heading">

          <span>WHY CHOOSE US</span>

          <h2>Why Learn With Morning Class?</h2>

          <p>
            We are committed to helping learners develop practical skills,
            confidence, and experience for the digital world.
          </p>

        </div>


        <div className="why-grid">

          {/* Practical Learning */}
          <div className="why-card">

            <div className="why-icon">
              <FaLaptopCode />
            </div>

            <h3>Practical Learning</h3>

            <p>
              Our training focuses on skills that can be applied to
              real projects and everyday digital challenges.
            </p>

          </div>


          {/* Beginner Friendly */}
          <div className="why-card">

            <div className="why-icon">
              <FaUserGraduate />
            </div>

            <h3>Beginner Friendly</h3>

            <p>
              Our programmes support learners as they develop their
              skills from the fundamentals to more advanced concepts.
            </p>

          </div>


          {/* Project Based */}
          <div className="why-card">

            <div className="why-icon">
              <FaDiagramProject />
            </div>

            <h3>Project-Based Experience</h3>

            <p>
              Students practise their skills through projects that
              help them develop practical experience.
            </p>

          </div>


          {/* Supportive Environment */}
          <div className="why-card">

            <div className="why-icon">
              <FaUsers />
            </div>

            <h3>Supportive Environment</h3>

            <p>
              We encourage students to ask questions, practise
              consistently, and build confidence.
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          FINAL CTA
      ========================== */}
      <section className="about-cta">

        <div>

          <span>START YOUR JOURNEY</span>

          <h2>Build Your Digital Future With Us</h2>

          <p>
            You don't need to know everything before you begin.
            You simply need the willingness to learn, practise, and grow.
          </p>

          <Link to="/ContactUs" className="cta-btn">
            Join Us Today
          </Link>

        </div>

      </section>

    </div>
  );
};

export default AboutScreen;
