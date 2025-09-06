import React from "react";
import { useTheme } from "../Components/ThemeContext";
import "./CSS/SkillsSection.css";
import {
  FaCode,
  FaPaintBrush,
  FaMobileAlt,
  FaLaptopCode,
  FaDatabase,
  FaFigma,
} from "react-icons/fa";

const SkillsSection = () => {
  const { theme } = useTheme();

  const skills = [
    {
      icon: <FaCode />,
      title: "Web Development",
      desc: "Building responsive and modern websites using React, HTML, CSS, and JavaScript.",
      level: "90%",
      badge: "⭐ Expert",
      tooltip: "3+ years experience, 20+ projects",
    },
    {
      icon: <FaPaintBrush />,
      title: "Graphic Design",
      desc: "Creating eye-catching designs, logos, posters, and social media content.",
      level: "85%",
      badge: "⭐ Expert",
      tooltip: "Adobe Photoshop, Illustrator, Canva",
    },
    {
      icon: <FaMobileAlt />,
      title: "Responsive Design",
      desc: "Optimizing layouts for all screen sizes to ensure a seamless experience.",
      level: "80%",
      badge: "⚡ Intermediate",
      tooltip: "Bootstrap, Tailwind, Media Queries",
    },
    {
      icon: <FaLaptopCode />,
      title: "Freelancing",
      desc: "Delivering projects on time with client-focused solutions and communication.",
      level: "75%",
      badge: "⚡ Intermediate",
      tooltip: "Fiverr & Upwork 15+ Clients",
    },
    {
      icon: <FaDatabase />,
      title: "Database",
      desc: "Managing and integrating databases like MongoDB, MySQL for scalable apps.",
      level: "70%",
      badge: "⚡ Intermediate",
      tooltip: "MongoDB, MySQL, Firebase",
    },
    {
      icon: <FaFigma />,
      title: "UI/UX Design",
      desc: "Designing wireframes and interactive prototypes using Figma.",
      level: "45%",
      badge: "🌱 Beginner",
      tooltip: "Wireframing, Prototyping",
    },
  ];

  return (
    <section className={`skills-section ${theme}`}>
      {/* 👇 Title */}
      <div className="skills-header">
        <h2 className="section-title">
          My <span>Skills</span>
        </h2>
        <p className="section-subtitle">
          A mix of design creativity and technical expertise
        </p>
      </div>

      {/* 👇 Skills Grid */}
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index} title={skill.tooltip}>
            <div className="icon">{skill.icon}</div>
            <h3>{skill.title}</h3>
            <p>{skill.desc}</p>

            {/* 👇 Badge */}
            <span className="skill-badge">{skill.badge}</span>

            {/* 👇 Progress Bar */}
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: skill.level }}
              ></div>
            </div>
            <span className="progress-text">{skill.level}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
