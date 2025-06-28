import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer id="footer">
      <div className="container">
        <h3>Empire</h3>
        <p>
          Delivering delicious food with a taste of tradition and modern style.
        </p>

        <div className="social-links">
          <a
            href="https://github.com/mohammedarshad05"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/ot.arsh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/mohammad-arshad-a5202a33b"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-linkedin"></i>
          </a>
        </div>

        <div className="copyright">
          &copy; 2025{" "}
          <strong>
            <span>Empire</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Designed by{" "}
          <a
            href="https://www.linkedin.com/in/mohammad-arshad-a5202a33b"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mohammed Arshad
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
