import React from "react";
import { useTheme } from "../Components/ThemeContext";
import { FaLinkedin, FaGithub, FaFacebookF, FaInstagram } from "react-icons/fa";
import "./CSS/Footer.css";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className={`footer ${theme}`}>
      <div className="footer-container">

        {/* Left: Logo or Name */}
        <div className="footer-brand">
          <h2>M. Asad <span>Ullah</span></h2>
          <p>Web Developer | Graphic Designer | Freelancer</p>
        </div>

        {/* Middle: Quick Links */}
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
          <a href="/contact">Contact</a>
        </div>

        {/* Right: Social Icons */}
        <div className="footer-socials">
            <a href="https://www.facebook.com/CHASAD005/" target="_blank" rel="noreferrer"><FaFacebookF /></a>
          <a href="https://www.instagram.com/m_asad_79/?hl=en" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/m-asad-ullah-bb8aa931b/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/m-asad-79" target="_blank" rel="noreferrer"><FaGithub /></a>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="footer-bottom">
        <p>© 2025 Asad Ullah | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
