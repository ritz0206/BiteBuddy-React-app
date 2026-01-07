import React from "react";
import "./HeroSection.css";
import { Link } from "react-router-dom";
import sampleImage from "./assets/HeroSectionImg.png"; // Replace with your actual image

export default function HeroSection() {
  return (
    <section className="hero-section" id="hero-section">
      <div className="hero-container">
          {/* Left Text Column */}
          <div className="hero-text">
            <h2 className="hero-title">Little Lemon</h2>
            <h3 className="hero-subtitle">Chicago</h3>
            <p className="hero-description">
              We are a family owned Mediterranean restaurant, focused on traditional
              recipes served with a modern twist
            </p>
            <Link to="/reserve" className="reserve-button">
              Reserve A Table
            </Link>
          </div>
          {/* Right Image Column */}
          <div className="hero-image-container">
            <img
              src={sampleImage}
              alt="Mediterranean Food"
              className="hero-image"
            />
        </div>
      </div>
    </section>
  );
}
