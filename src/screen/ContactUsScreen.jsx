import React from "react";
import { Link } from "react-router-dom";

import {
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaClock,
  FaPaperPlane,
  FaArrowRight,
  FaHeadset,
} from "react-icons/fa6";

import "./ContactUsScreen.css";

const ContactScreen = () => {
  return (
    <div className="contact-page">

      {/* ==========================================
          CONTACT HERO
      ========================================== */}

      <section className="contact-hero">

        <div className="contact-hero-content">

          <span>CONTACT US</span>

          <h1>Let's Start a Conversation</h1>

          <p>
            Have a question about our courses or digital skills training?
            We would love to hear from you. Get in touch with Morning Class
            Digital Skill Academy today.
          </p>

        </div>

      </section>


      {/* ==========================================
          CONTACT INFORMATION
      ========================================== */}

      <section className="contact-section">

        <div className="contact-container">

          {/* Left Side */}

          <div className="contact-info">

            <span className="contact-label">
              GET IN TOUCH
            </span>

            <h2>
              We're Here To Help You
            </h2>

            <p className="contact-description">
              Whether you want to learn more about our programmes, ask
              about our training, or need help choosing the right digital
              skill to learn, our team is ready to assist you.
            </p>


            {/* Email */}

            <div className="contact-info-card">

              <div className="contact-icon">
                <FaEnvelope />
              </div>

              <div>
                <h3>Email Us</h3>

                <p>
                  info@example.com
                </p>
              </div>

            </div>


            {/* Phone */}

            <div className="contact-info-card">

              <div className="contact-icon">
                <FaPhone />
              </div>

              <div>
                <h3>Call Us</h3>

                <p>
                  +234 913 085 0978
                </p>
              </div>

            </div>


            {/* Location */}

            <div className="contact-info-card">

              <div className="contact-icon">
                <FaLocationDot />
              </div>

              <div>
                <h3>Our Location</h3>

                <p>
                  Owerri, Imo State, Nigeria
                </p>
              </div>

            </div>


            {/* Opening Hours */}

            <div className="contact-info-card">

              <div className="contact-icon">
                <FaClock />
              </div>

              <div>
                <h3>Working Hours</h3>

                <p>
                  Monday - Saturday
                </p>

                <small>
                  8:00 AM - 6:00 PM
                </small>
              </div>

            </div>

          </div>


          {/* ==========================================
              CONTACT FORM
          ========================================== */}

          <div className="contact-form-container">

            <div className="form-heading">

              <div className="form-icon">
                <FaHeadset />
              </div>

              <div>
                <span>HAVE A QUESTION?</span>

                <h2>
                  Send Us a Message
                </h2>
              </div>

            </div>


            <form className="contact-form">

              <div className="form-row">

                <div className="form-group">

                  <label htmlFor="name">
                    Full Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                  />

                </div>


                <div className="form-group">

                  <label htmlFor="email">
                    Email Address
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                  />

                </div>

              </div>


              <div className="form-group">

                <label htmlFor="phone">
                  Phone Number
                </label>

                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                />

              </div>


              <div className="form-group">

                <label htmlFor="subject">
                  Subject
                </label>

                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="What would you like to know?"
                />

              </div>


              <div className="form-group">

                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Write your message here..."
                ></textarea>

              </div>


              <button
                type="submit"
                className="contact-submit"
              >

                Send Message

                <FaPaperPlane />

              </button>

            </form>

          </div>

        </div>

      </section>


      {/* ==========================================
          QUICK SUPPORT
      ========================================== */}

      <section className="contact-support">

        <div className="support-content">

          <div className="support-icon">
            <FaHeadset />
          </div>

          <div className="support-text">

            <span>NEED MORE INFORMATION?</span>

            <h2>
              We're Ready To Help You Begin
            </h2>

            <p>
              Take the first step towards developing practical digital
              skills that can create new opportunities for your future.
            </p>

          </div>

          <Link
            to="/Services"
            className="support-btn"
          >
            Explore Our Services

            <FaArrowRight />

          </Link>

        </div>

      </section>


      {/* ==========================================
          FINAL CTA
      ========================================== */}

      <section className="contact-cta">

        <div>

          <span>START LEARNING TODAY</span>

          <h2>
            Ready To Build Your Digital Future?
          </h2>

          <p>
            Explore our digital skills programmes and take the next
            step towards developing skills for the digital world.
          </p>

          <Link
            to="/Services"
            className="cta-btn"
          >
            Explore Courses
          </Link>

        </div>

      </section>

    </div>
  );
};

export default ContactScreen;