import React from "react";
import { useTheme } from "../Components/ThemeContext";
import { Typewriter } from "react-simple-typewriter";
import {
  FaLinkedin,
  FaGithub,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import "./CSS/LandingPage.css";
import img from "../Images/My Pic 2.jpg";
const LandingPage = () => {
  const { theme } = useTheme();

  return (
    <>
    <div className={`landing-page ${theme}`}>
      <div className="content">
        {/* 👇 Name + Skills */}
        <h1 className="name">
          Hi, I'm <span className="highlight">M. Asad Ullah</span>
        </h1>

        <h2 className="role">
          I’m{" "}
          <span className="dynamic-text">
            <Typewriter
              words={["Web Developer", "Graphic Designer", "Freelancer"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h2>

        {/* 👇 Short Intro */}
        <p className="intro">
          Passionate about creating modern websites and stunning designs. I love
          building user-friendly digital experiences that help brands and
          businesses grow online.
        </p>

        {/* 👇 Buttons */}
        <div className="buttons">
          <a href="/contact" className="btn-main">
            Hire Me
          </a>
          <a href="/contact" className="btn-outline">
            Contact
          </a>
        </div>

        {/* 👇 Social Icons */}
        <div className="social-icons">
         <a
            href="https://www.facebook.com/CHASAD005/"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/m_asad_79/?hl=en"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
         
          <a
            href="https://www.linkedin.com/in/m-asad-ullah-bb8aa931b/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/m-asad-79"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          
        </div>
      </div>

      {/* 👇 Profile Image at End */}
      <div className="image-section">
        <img
          src= {img} // apni pic ka path lagao
          alt="My Profile"
          className="profile-pic"
        />
      </div>
    </div>
    <div className="bottom-line"></div>
    </>
  );
};

export default LandingPage;
