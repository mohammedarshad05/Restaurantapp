import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header id="header" className="fixed-top">
      <Navbar expand="lg" className="navbar-dark">
        <Container>
          <Navbar.Brand href="#hero">
            <img src="/logo.png" alt="Logo" className="logo" />
            Restaurantly
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#hero" className="nav-link scrollto active">
                Home
              </Nav.Link>
              <Nav.Link href="#about" className="nav-link scrollto">
                About
              </Nav.Link>
              <Nav.Link href="#menu" className="nav-link scrollto">
                Menu
              </Nav.Link>
              <Nav.Link href="#contact" className="nav-link scrollto">
                Contact
              </Nav.Link>
              <Nav.Link href="#book" className="book-a-table-btn scrollto">
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
