import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import AboutPage from "../Pages/AboutPage";
import SkillsPage from "../Pages/SkillsPage";
import ProjectsPage from "../Pages/ProjectsPage";
import ContactPage from "../Pages/ContactPage";
import LoginSection from "../Components/LoginSection";
import SignupSection from "../Components/SignupSection";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="skills" element={<SkillsPage />} />
      <Route path="projects" element={<ProjectsPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="login" element={<LoginSection />} />
      <Route path="signup" element={<SignupSection />} />
    </Routes>
  );
};

export default AppRoutes;
