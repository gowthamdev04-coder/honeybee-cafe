import React, { useState } from "react";
import "../Styles/Footer.css";

export default function Footer() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>Honeybee Café</h2>
          <p>Fresh brews • Cozy vibes • Sweet treats</p>
        </div>

        <div className="footer-sections">
          <div className="footer-section">
            <h3 onClick={() => toggleSection("about")}>
              About Us <span className="arrow">{openSection === "about" ? "−" : "+"}</span>
            </h3>
            <ul className={openSection === "about" ? "open" : ""}>
              <li>Our Story</li>
              <li>Our Beans</li>
              <li>Careers</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 onClick={() => toggleSection("menu")}>
              Menu <span className="arrow">{openSection === "menu" ? "−" : "+"}</span>
            </h3>
            <ul className={openSection === "menu" ? "open" : ""}>
              <li>Coffee</li>
              <li>Sandwiches</li>
              <li>Desserts</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 onClick={() => toggleSection("support")}>
              Support <span className="arrow">{openSection === "support" ? "−" : "+"}</span>
            </h3>
            <ul className={openSection === "support" ? "open" : ""}>
              <li>Contact</li>
              <li>Terms & Policies</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Honeybee Café. All rights reserved.</p>
      </div>
    </footer>
  );
}
