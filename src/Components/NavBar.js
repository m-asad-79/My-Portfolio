import React from "react";
import "./CSS/NavBar.css";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useTheme } from "../Components/ThemeContext";
import { FaMoon, FaSun, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import img from "../Images/My Portfolio LOGO.png";

const NavBar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
   <Navbar
  expand="lg"
  bg={theme === "light" ? "light" : "dark"}
  variant={theme === "light" ? "light" : "dark"}
  className="shadow-sm"
>
  <Container>
    {/* 👇 Left Side Logo */}
    <Navbar.Brand as={Link} to="/" className="fw-bold d-flex align-items-center">
      <img
        src={img}
        alt="Logo"
        height="45"
        className="d-inline-block align-top"
      />
    </Navbar.Brand>

    {/* 👇 Center Text */}
    <div
  className="mx-auto fw-bold developer-text"
  style={{
    fontSize: "1.2rem",
    letterSpacing: "1px",
    textAlign: "center",
    color: theme === "light" ? "#333" : "#fff", // 👈 theme ke hisaab se color
    transition: "color 0.3s",
  }}
>
  Developer & Designer
</div>

    <Navbar.Toggle aria-controls="navbar-nav" />
    <Navbar.Collapse id="navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link as={Link} to="/" className="NavLinks" id="home">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/about" className="NavLinks">
          About
        </Nav.Link>
        <Nav.Link as={Link} to="/skills" className="NavLinks">
          Skills
        </Nav.Link>
        <Nav.Link as={Link} to="/projects" className="NavLinks">
          Projects
        </Nav.Link>
        <Nav.Link as={Link} to="/contact" className="NavLinks">
          Contact
        </Nav.Link>
      </Nav>

      {/* 👇 Theme toggle */}
      <div
        id="togglebtn"
        onClick={toggleTheme}
        style={{
          cursor: "pointer",
          fontSize: "1.5rem",
          color: theme === "light" ? "#333" : "#f1c40f",
        }}
      >
        {theme === "light" ? <FaMoon /> : <FaSun />}
      </div>
    </Navbar.Collapse>
  </Container>
</Navbar>

  );
};

export default NavBar;
