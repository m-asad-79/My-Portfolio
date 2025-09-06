import React from "react";
import { useTheme } from "../Components/ThemeContext";
import "./CSS/ProjectsSection.css";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectsSection = () => {
  const { theme } = useTheme();

 const projects = [
    {
      title: "Portfolio Website",
      desc: "A modern portfolio website built with React, showcasing my skills and projects.",
      img: "https://source.unsplash.com/600x400/?website,design",
      live: "https://yourportfolio.com",
      code: "https://github.com/m-asad-79/portfolio",
    },
    {
      title: "E-Commerce Store",
      desc: "An online store with cart, checkout, and product management features.",
      img: "https://source.unsplash.com/600x400/?ecommerce,website",
      live: "https://yourstore.com",
      code: "https://github.com/m-asad-79/ecommerce",
    },
    {
      title: "Graphic Design Projects",
      desc: "Creative poster, logo, and branding design projects using Photoshop and Illustrator.",
      img: "https://source.unsplash.com/600x400/?graphic,design",
      live: "#",
      code: "#",
    },
    {
      title: "Blog Platform",
      desc: "A blogging platform with authentication, CRUD posts, and responsive design.",
      img: "https://source.unsplash.com/600x400/?blog,web",
      live: "https://yourblog.com",
      code: "https://github.com/m-asad-79/blog",
    },
  ];

  return (
    <div>
    <section className={`projects-section ${theme}`}>
      <div className="projects-header">
        <h2 className="section-title">
          My <span>Projects</span>
        </h2>
        <p className="section-subtitle">
          A collection of work combining creativity and technology
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-img">
              <img src={project.img} alt={project.title} />
              <div className="overlay">
                <a href={project.live} target="_blank" rel="noreferrer">
                  <FaExternalLinkAlt /> Live
                </a>
                <a href={project.code} target="_blank" rel="noreferrer">
                  <FaGithub /> Code
                </a>
              </div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
     <div>
        <div className="bottom-line"></div>
      </div>
    </div>
  );
};

export default ProjectsSection;
