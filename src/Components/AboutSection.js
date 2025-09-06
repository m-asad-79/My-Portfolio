import React from 'react';
import { useTheme } from "../Components/ThemeContext";
import { FaCode, FaPaintBrush, FaLaptopCode, FaUserFriends, FaProjectDiagram, FaClock } from "react-icons/fa";
import "./CSS/AboutSection.css";
import img from "../Images/My Pic 3.png";

const AboutSection = () => {
   const { theme } = useTheme();

  return (
    <div className={`about-page ${theme}`}>
      <div className="about-container">
        
        {/* 👇 Heading */}
        <h1 className="about-title">About Me</h1>

        {/* 👇 Intro with Image */}
        <div className="about-intro-section">
          <img
            src= {img}
            alt="My Profile"
            className="about-profile-pic"
          />
          <p className="about-intro">
            Hi, I’m <span className="highlight">Asad Ullah</span>.  
            A creative <b>Web Developer</b> & <b>Graphic Designer</b> passionate 
            about building modern, fast, and visually appealing digital products.  
            I enjoy turning ideas into real-world solutions and collaborating with
            clients worldwide.
          </p>
        </div>

        {/* 👇 Skills Section */}
        <h2 className="section-heading">My Expertise</h2>
        <div className="skills-section">
          <div className="skill-card">
            <FaCode className="skill-icon" />
            <h3>Web Development</h3>
            <p>Modern websites using React, JavaScript & responsive designs.</p>
          </div>
          <div className="skill-card">
            <FaPaintBrush className="skill-icon" />
            <h3>Graphic Design</h3>
            <p>Branding, posters, and creative visuals with unique styles.</p>
          </div>
          <div className="skill-card">
            <FaLaptopCode className="skill-icon" />
            <h3>Freelancing</h3>
            <p>Delivering professional projects to clients across the globe.</p>
          </div>
        </div>

        {/* 👇 Skill Progress Bars */}
        <h2 className="section-heading">Technical Skills</h2>
        <div className="progress-bars">
          <div className="progress-item">
            <span>HTML / CSS</span>
            <div className="progress">
              <div className="progress-fill" style={{ width: "90%" }}></div>
            </div>
          </div>
          <div className="progress-item">
            <span>React JS</span>
            <div className="progress">
              <div className="progress-fill" style={{ width: "80%" }}></div>
            </div>
          </div>
          <div className="progress-item">
            <span>Graphic Design</span>
            <div className="progress">
              <div className="progress-fill" style={{ width: "85%" }}></div>
            </div>
          </div>
          <div className="progress-item">
            <span>Freelancing</span>
            <div className="progress">
              <div className="progress-fill" style={{ width: "75%" }}></div>
            </div>
          </div>
        </div>

        {/* 👇 Fun Facts / Counters */}
        <h2 className="section-heading">Achievements</h2>
        <div className="fun-facts">
          <div className="fact">
            <FaUserFriends className="fact-icon" />
            <h3>50+</h3>
            <p>Happy Clients</p>
          </div>
          <div className="fact">
            <FaProjectDiagram className="fact-icon" />
            <h3>100+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="fact">
            <FaClock className="fact-icon" />
            <h3>1+</h3>
            <p>Years Experience</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutSection;