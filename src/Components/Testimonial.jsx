import React from "react";
import "../Styles/Testimonial.css";
import { FaUserCircle } from "react-icons/fa";

export default function Testimonial() {
  return (
    <section className="test-section">
      <h2 className="section-title">What Our Customers Say</h2>

      <div className="test-grid">
        {/* Customer 1 */}
        <div className="test-card">
          <FaUserCircle size={80} color="#FFD700" className="test-icon" />
          <h3>Aarav</h3>
          <p>"Best coffee in town! Smooth, rich and perfectly brewed."</p>
          <span className="stars">★★★★★</span>
        </div>

        {/* Customer 2 */}
        <div className="test-card">
          <FaUserCircle size={80} color="#FFD700" className="test-icon" />
          <h3>Meera</h3>
          <p>"Their honey pastries are out of this world!"</p>
          <span className="stars">★★★★★</span>
        </div>

        {/* Customer 3 */}
        <div className="test-card">
          <FaUserCircle size={80} color="#FFD700" className="test-icon" />
          <h3>David</h3>
          <p>"Love the ambience. Cozy, clean and peaceful."</p>
          <span className="stars">★★★★★</span>
        </div>
      </div>
    </section>
  );
}
