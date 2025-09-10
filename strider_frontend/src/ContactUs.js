import React, { useState } from 'react';
import './App.css'; // connected to ContactUs.css

const ContactUs = () => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevContact) => ({
      ...prevContact,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(contact);
    alert('Thank you for contacting us!');
    setContact({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="contact-us-container">
      <div className="contact-header">
        <h2>Contact Us</h2>
        <p>We'd love to hear from you! Drop us a message and we'll get back to you as soon as possible.</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-info-item">
            <h3>Our Office</h3>
            <p>123 Luxury Street, Suite 456</p>
            <p>Fashion City, FC 78901</p>
            <p>Email: support@striderluxe.com</p>
            <p>Phone: +1 (234) 567-8901</p>
          </div>
          <div className="contact-info-item">
            <h3>Follow Us</h3>
            <a href="https://www.instagram.com/striderluxe" className="social-link">
              <img src=".\images\main\instagram.webp" alt="Instagram" className="social-icon" /> Instagram
            </a>
            <a href="https://twitter.com/striderluxe" className="social-link">
              <img src=".\images\main\twitter.webp" alt="Twitter" className="social-icon" /> Twitter
            </a>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              name="name"
              value={contact.name}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              name="email"
              value={contact.email}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              name="message"
              value={contact.message}
              onChange={handleChange}
              required
              rows="4"
              className="form-textarea"
            />
          </div>
          <button type="submit" className="form-button">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;


