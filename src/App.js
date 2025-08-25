import React from "react";
import NavBar from "./Components/NavBar";
import { ThemeProvider, useTheme } from "./Components/ThemeContext";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes/AppRoutes";

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
          <NavBar />
          <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
