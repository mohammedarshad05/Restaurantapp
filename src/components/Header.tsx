import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./Header.css";

const Header: React.FC = () => {
  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header id="header" className="fixed-top">
      <Navbar expand="lg" className="navbar-dark">
        <Container>
          <Navbar.Brand
            onClick={() => handleNavClick("hero")}
            style={{ cursor: "pointer" }}
          >
            <img src="/logo.png" alt="Logo" className="logo" />
            Restaurantly
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                onClick={() => handleNavClick("hero")}
                className="nav-link scrollto"
              >
                Home
              </Nav.Link>
              <Nav.Link
                onClick={() => handleNavClick("about")}
                className="nav-link scrollto"
              >
                About
              </Nav.Link>
              <Nav.Link
                onClick={() => handleNavClick("menu")}
                className="nav-link scrollto"
              >
                Menu
              </Nav.Link>
              <Nav.Link
                onClick={() => handleNavClick("contact")}
                className="nav-link scrollto"
              >
                Contact
              </Nav.Link>
              <Nav.Link
                onClick={() => handleNavClick("book")}
                className="book-a-table-btn scrollto"
              >
                Book a Table
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
