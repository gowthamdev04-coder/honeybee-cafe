import React from "react";
import "../Styles/About.css";
import { FaUserAlt, FaCoffee } from "react-icons/fa";


export default function About() {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-image">
          {/* <img src="https://via.placeholder.com/500" alt="Cafe" /> */}
            <FaUserAlt size={150} color="#FFD700" /> 

        </div>

        <div className="about-text">
          <h2 className="about-title">About Our Café</h2>
          <p>
            Welcome to HoneyBee Café — a cozy corner built on love, warmth, 
            and the rich aroma of premium coffee beans. We bring together 
            fresh ingredients, handmade recipes, and a touch of golden honey 
            magic to create the perfect café experience.
          </p>

          <p>
            Whether you're here for a quiet moment, a sweet treat, 
            or a refreshing brew — we’re here to make it memorable.
          </p>
        </div>
      </div>
    </section>
  );
}
