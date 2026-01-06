import React from "react";
import "./Footer.css";
import logoImage from "./assets/LeftSidelogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Logo / Image */}
      <div className="footer-section footer-logo">
        <img src={logoImage} alt="Logo" />
      </div>

      {/* Location */}
      <div className="footer-section footer-location">
        <h4>Location</h4>
        <p>123 Main Street</p>
        <p>Chicago, IL 60601</p>
      </div>

      {/* Contact */}
      <div className="footer-section footer-contact">
        <h4>Contact</h4>
        <p>Email: info@example.com</p>
        <p>Phone: +1 234 567 890</p>
      </div>

      {/* Social Media */}
      <div className="footer-section footer-social">
        <h4>Social Media</h4>
        <div className="social-icons">
          <a
            href="https://www.facebook.com/YourPage"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            href="https://twitter.com/YourProfile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://www.instagram.com/YourProfile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.linkedin.com/in/YourProfile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
      </div>
    </footer>
  );
}
