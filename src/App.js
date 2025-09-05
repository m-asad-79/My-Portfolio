import React from "react";
import NavBar from "./Components/NavBar";
import { ThemeProvider, useTheme } from "./Components/ThemeContext";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes/AppRoutes";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
          <NavBar />
          <AppRoutes />
          <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
