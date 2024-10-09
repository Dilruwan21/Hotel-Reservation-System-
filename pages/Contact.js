import React from 'react';
import './contact.css';
// Import your own photo from the local project folder
import c1 from './img/c1.jpg';

const ContactUs = () => {
  return (
    <div className="contact-container">
      <section className="contact-section">
        <div className="contact-content">
          <h1>Contact Us</h1>
          <p className="contact-description">
            Have a question, feedback, or inquiry? We would love to hear from you! 
            Fill out the form below, and we will get back to you as soon as possible.
          </p>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Enter your message" rows="5" required></textarea>
            </div>
            <button type="submit" className="contact-button">Send Message</button>
          </form>
        </div>
        <div className="contact-image">
          <img
            src={c1}
            alt="Contact Us"
            className="contact-image-style"
          />
        </div>
      </section>
    </div>
  );
};

export default ContactUs;

