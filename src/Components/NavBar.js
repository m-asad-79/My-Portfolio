import React from "react";
import "./CSS/NavBar.css";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useTheme } from "../Components/ThemeContext";
import { FaMoon, FaSun, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";   // 👈 yeh add karo

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
        {/* 👇 href ki jagah as={Link} to="/" */}
        <Navbar.Brand id="homeLogo" as={Link} to="/" className="fw-bold">
          My Website
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="NavLinks" id="home">Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="NavLinks">About</Nav.Link>
            <Nav.Link as={Link} to="/skills" className="NavLinks">Skills</Nav.Link>
            <Nav.Link as={Link} to="/projects" className="NavLinks">Projects</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="NavLinks">Contact</Nav.Link>
          </Nav>

          {/* 👇 href ki jagah as={Link} to="/login" */}
          <Button
            id="loginbtn"
            as={Link}
            to="/login"
            variant={theme === "light" ? "outline-dark" : "outline-light"}
            className="d-flex align-items-center gap-2"
          >
            <FaUser /> Login
          </Button>

          {/* 👇 Icon button */}
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
