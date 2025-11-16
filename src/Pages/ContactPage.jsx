import React from "react";
import "../Styles/ContactPage.css";

export default function ContactPage() {
  return (
    <section className="contact-page">
      <h2 className="section-title">Contact Us</h2>

      <div className="contact-container">
        {/* Contact Form */}
        <div className="contact-form">
          <h3>Send Us a Message</h3>
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your Name" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your Email" />

            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Your Message" rows="5"></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p><strong>Address:</strong> 123 Honeybee Street, Café City</p>
          <p><strong>Phone:</strong> +91 12345 67890</p>
          <p><strong>Email:</strong> info@honeybeecafe.com</p>

          <h4>Follow Us</h4>
          <div className="socials">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
          </div>
        </div>
      </div>
    </section>
  );
}
