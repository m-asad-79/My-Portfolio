import React, { useRef, useState } from "react";
import { useTheme } from "../Components/ThemeContext";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "emailjs-com";
import "./CSS/ContactSection.css";

const ContactSection = () => {
  const { theme } = useTheme();
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a0rtxji",   // ← EmailJS se copy karo
        "template_vekufsn",  // ← EmailJS se copy karo
        formRef.current,
        "SykivTWmGNUNPo2gM"    // ← EmailJS user/public key
      )
      .then(
        (result) => {
          console.log("Email sent ✅", result.text);
          setStatus("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.log("Email error ❌", error.text);
          setStatus("Failed to send message. Try again!");
        }
      );
  };

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
        <form ref={formRef} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn-submit">Send Message</button>
          {status && <p className="status-message">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
