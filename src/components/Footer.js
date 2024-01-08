import React from 'react';
import './css/Footer.css'
const Footer = () => {
    return (
      <footer className="footer">
        <div className="container footer-container">
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><a href="/help">Help</a></li>
              <li><a href="/tutorials">Tutorials</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/terms-of-service">Terms of Service</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/values">Our Values</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact Information</h4>
            <p>Email: RevYou@gmail.com</p>
            <p>Phone: +63 906 737 8470</p>
            <div className="social-icons">

            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 RevYou Inc.</p>
        </div>
      </footer>
    );
  };

export default Footer;