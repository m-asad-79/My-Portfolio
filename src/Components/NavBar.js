import React from "react";
import "./CSS/NavBar.css";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useTheme } from "../Components/ThemeContext";
import { FaMoon, FaSun, FaUser } from "react-icons/fa";

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
        <Navbar.Brand id="homeLogo" href="/" className="fw-bold">
          My Website
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="NavLinks" id="home" href="/">Home</Nav.Link>
            <Nav.Link className="NavLinks" href="/about">About</Nav.Link>
            <Nav.Link className="NavLinks" href="/skills">Skills</Nav.Link>
            <Nav.Link className="NavLinks" href="/projects">Projects</Nav.Link>
            <Nav.Link className="NavLinks" href="/contact">Contact</Nav.Link>
          </Nav>

          <Button id="loginbtn" variant={theme === "light" ? "outline-dark" : "outline-light"}
              className="d-flex align-items-center gap-2"
              href="/login" >
                 <FaUser /> Register
            </Button>


          {/* 👇 Icon button */}
          <div id="togglebtn"
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
