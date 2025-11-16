import React from "react";
import "../Styles/Featured.css";
import { FaCoffee, FaBreadSlice, FaMugHot } from "react-icons/fa"; // coffee, pastry, mug

export default function Featured() {
  return (
    <section className="featured-section">
      <h2 className="section-title">Featured Menu</h2>

      <div className="featured-grid">
        {/* Coffee */}
        <div className="featured-card">
          <FaCoffee size={80} color="#FFD700" className="featured-icon" />
          <h3>Signature Coffee</h3>
          <p>Rich, smooth & freshly brewed every morning.</p>
        </div>

        {/* Pastries */}
        <div className="featured-card">
          <FaBreadSlice size={80} color="#FFD700" className="featured-icon" />
          <h3>Fresh Pastries</h3>
          <p>Baked daily with love and premium ingredients.</p>
        </div>

        {/* Honey / Specials */}
        <div className="featured-card">
          <FaMugHot size={80} color="#FFD700" className="featured-icon" />
          <h3>Honey Specials</h3>
          <p>Exclusive honey-infused recipes crafted for you.</p>
        </div>
      </div>
    </section>
  );
}
