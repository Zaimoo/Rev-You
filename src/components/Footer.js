import React from 'react';
import { Link } from 'react-router-dom';
import './css/Footer.css'
const Footer = () => {
    return (
      <footer className="footer">
        <div className="container footer-container">
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><Link to="/help">Help</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service">Terms of Service</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/values">Our Values</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact Information</h4>
            <ul>
            <li><p>Email: RevYou@gmail.com</p></li>
            <li><p>Phone: +63 906 737 8470</p></li>
            </ul>
           
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