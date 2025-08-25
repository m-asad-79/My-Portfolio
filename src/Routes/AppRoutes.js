import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import AboutPage from "../Pages/AboutPage";
import SkillsPage from "../Pages/SkillsPage";
import ProjectsPage from "../Pages/ProjectsPage";
import ContactPage from "../Pages/ContactPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="skills" element={<SkillsPage />} />
      <Route path="projects" element={<ProjectsPage />} />
      <Route path="contact" element={<ContactPage />} />
    </Routes>
  );
};

export default AppRoutes;
