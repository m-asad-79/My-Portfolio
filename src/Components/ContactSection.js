import React from "react";
import { useTheme } from "../Components/ThemeContext";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import "./CSS/ContactSection.css";

const ContactSection = () => {
  const { theme } = useTheme();

  return (
    <section className={`contact-section ${theme}`}>
      <div className="contact-header">
        <h2 className="section-title">
          Get In <span>Touch</span>
        </h2>
        <p className="section-subtitle">
          Let’s connect! You can reach me anytime via email or social links.
        </p>
      </div>

      <div className="contact-container">
        {/* Left Side - Info */}
        <div className="contact-info">
          <div id="email" className="info-item">
            <FaEnvelope className="icon" />
            <div>
              <h4>Email</h4>
              <p>asadullah7959@gmail.com</p>
            </div>
          </div>
          <div className="info-item">
            <FaPhoneAlt className="icon" />
            <div>
              <h4>Phone</h4>
              <p>+92 322 9876560</p>
            </div>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <div>
              <h4>Location</h4>
              <p>Lahore, Pakistan</p>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="5" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn-submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
