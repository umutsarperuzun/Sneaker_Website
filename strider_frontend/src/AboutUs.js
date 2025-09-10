import React from 'react';
import './App.css'; // Import to CSS

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-header">
        <h1>About Strider Luxe</h1>
        <p>Experience the exclusive world of limited edition sneakers.</p>
      </div>
      <div className="about-us-content">
        <section className="about-us-intro">
          <img src=".\images\main\trylogo6.png" alt="Exclusive Sneakers" className="intro-image" />
          <p>
            At Strider Luxe, we redefine luxury with our exclusive collection of limited edition sneakers. Each pair is a testament to craftsmanship and style, offering an unparalleled experience for true sneaker enthusiasts.
          </p>
        </section>
        <section className="about-us-collection">
          <h2>Our Collection</h2>
          <p>
            Our curated selection of limited edition sneakers brings together rare and coveted models from the world’s top designers. We source each pair meticulously, ensuring that every sneaker we offer is a masterpiece of design and quality.
          </p>
        </section>
        <section className="about-us-experience">
          <h2>Celebrity Endorsements</h2>
          <div className="celebrity-quotes">
            <div className="celebrity-quote">
              <img src=".\images\main\030424_Mauro_Icardi_of_Galatasaray_1920.jpg" alt="Celebrity 1" className="celebrity-photo" />
              <p>"Strider Luxe offers the most exclusive and stylish sneakers. A must-have for any sneakerhead!" - Mauro Icardi</p>
            </div>
            <div className="celebrity-quote">
              <img src=".\images\main\kanye-west-0814-GQ-FEKW01.01.webp" alt="Celebrity 2" className="celebrity-photo" />
              <p>"The quality and uniqueness of Strider Luxe sneakers are unmatched. They truly set the trend!" - 
                Kanye West
              </p>
            </div>
          </div>
        </section>
        <section className="about-us-gallery">
          <h2>Gallery</h2>
          <div className="gallery-grid">
            <img src=".\images\main\nike2.2.jpg" alt="Sneaker 1" className="gallery-item" />
            <img src=".\images\main\yeezy2.webp" alt="Sneaker 2" className="gallery-item" />
            <img src=".\images\main\jordan1.jpg" alt="Sneaker 3" className="gallery-item" />
          </div>
        </section>
        <section className="about-us-contact">
          <h2>Contact Us</h2>
          <p>
            Have questions or want to learn more about our collection? Feel free to reach out to us. Our team is always here to assist you.
          </p>
          <a href="/contact" className="contact-link">Get in Touch</a>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;


