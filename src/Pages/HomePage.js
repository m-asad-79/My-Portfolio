import React from "react";
import LandingPage from "../Components/LandingPage";
import AboutSection from "../Components/AboutSection";
import SkillsSection from "../Components/SkillsSection";
import ProjectsSection from "../Components/ProjectsSection";
import "../Components/CSS/LandingPage.css";
import ContactSection from "../Components/ContactSection";


const HomePage = () => {
  return (
    <div>
      <LandingPage />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      
      <ContactSection />
    </div>
  );
};

export default HomePage;
