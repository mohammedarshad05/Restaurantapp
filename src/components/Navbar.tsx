// src/components/Navbar.tsx
import React from "react";
import { FaUtensils } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar: React.FC = () => {
  return (
    <header id="header" className="fixed-top d-flex align-items-center">
      <div className="container d-flex align-items-center justify-content-between">
        <h1 className="logo">
          <a href="#hero">
            <FaUtensils className="me-2" />
            Restaurantly
          </a>
        </h1>

        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a className="nav-link scrollto active" href="#hero">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#menu">
                Menu
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#gallery">
                Gallery
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#contact">
                Contact
              </a>
              <a className="nav-link scrollto" href="#book">
                Book a Table
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
