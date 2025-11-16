import React from "react";
import "../Styles/AboutPage.css";
import { FaUserAlt, FaCoffee, FaLeaf, FaHeart } from "react-icons/fa";

export default function About() {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-image">
          <FaUserAlt size={150} color="#FFD700" />
        </div>

        <div className="about-text">
          <h2>About Our Café</h2>
          <p>
            Welcome to HoneyBee Café — a cozy corner built on love, warmth, 
            and the rich aroma of premium coffee beans. Fresh ingredients, 
            handmade recipes, and a touch of golden honey magic create the 
            perfect café experience.
          </p>

          <p>
            Whether you're here for a quiet moment, a sweet treat, 
            or a refreshing brew — we’re here to make it memorable.
          </p>

          {/* Mission & Vision */}
          <div className="about-mission">
            <h3>Our Mission</h3>
            <p>
              To serve freshly brewed coffee and handcrafted treats with 
              love and care, creating memorable moments for every visitor.
            </p>
            <h3>Our Vision</h3>
            <p>
              To become the community’s favorite café, known for quality, 
              warmth, and sustainability.
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="about-features">
            <h3>Why Choose Us</h3>
            <ul>
              <li>
                <FaCoffee color="#FFD700" /> Premium Coffee Beans
              </li>
              <li>
                <FaLeaf color="#FFD700" /> Fresh, Organic Ingredients
              </li>
              <li>
                <FaHeart color="#FFD700" /> Cozy & Friendly Atmosphere
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
