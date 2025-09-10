import React from 'react';
import './App.css'; // Import specific CSS for Footer

const Footer = () => {
  return (
    <footer className="footerContainer">
      <div className="footerContent">
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>We offer a curated selection of limited edition sneakers from top brands like Nike, Adidas, Jordan, and more. Stay ahead in the sneaker game with us!</p>
        </div>
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/Login">Login</a></li>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: support@sneakerstore.com</p>
          <p>Phone: +44 452 749364</p>
          <p>Address: 123 Sneaker Lane, London, UK</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Strider Luxe. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
