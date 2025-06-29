import React from "react";
import "./TopBar.css";

const TopBar: React.FC = () => {
  return (
    <div id="topbar" className="d-flex align-items-center fixed-top">
      <div className="container d-flex justify-content-between">
        <div className="topbar-left d-flex align-items-center">
          <i className="bi bi-envelope"></i>
          <a href="mailto:arshff005@gmail.com">arshff005@gmail.com</a>
          <i className="bi bi-phone ms-4"></i> +91 80737 77432
        </div>
        <div className="topbar-right d-none d-lg-flex align-items-center">
          <i className="bi bi-clock"></i> Mon-Sat: 11AM - 11PM
        </div>
      </div>
    </div>
  );
};

export default TopBar;
