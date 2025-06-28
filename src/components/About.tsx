// src/components/About.tsx
import React from "react";
import "./About.css";

const About: React.FC = () => {
  return (
    <section id="about" className="about-section d-flex align-items-center">
      <div className="container text-center text-white">
        <h2 className="about-title">About Us</h2>
        <p className="about-description">
          At Empire, we bring you the finest dining experience with a
          perfect blend of tradition and taste. Every dish is crafted with
          passion and served with love.
        </p>
      </div>
    </section>
  );
};

export default About;
