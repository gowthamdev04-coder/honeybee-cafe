import React from "react";
import "../Styles/MenuPage.css";
import { FaCoffee, FaCookieBite, FaStar } from "react-icons/fa";

export default function MenuPage() {
  return (
    <section className="menu-page">
      {/* Hero Section */}
      <div className="menu-hero">
        <h2>Discover Our Menu</h2>
        <p>
          Freshly brewed, handcrafted, and made with love — explore our range of coffee, 
          pastries, and special treats.
        </p>
      </div>

      {/* Menu Categories */}
      <div className="menu-categories">
        <div className="category-card">
          <FaCoffee className="category-icon" />
          <h3>Coffee</h3>
        </div>

        <div className="category-card">
          <FaCookieBite className="category-icon" />
          <h3>Pastries</h3>
        </div>

        <div className="category-card special">
          <FaStar className="category-icon" />
          <h3>Specials</h3>
        </div>
      </div>

      {/* Menu Items */}
      <div className="menu-items">
        {/* Coffee */}
        <div className="menu-section">
          <h3 className="menu-section-title">Coffee</h3>
          <div className="menu-grid">
            <div className="menu-card">
              <FaCoffee size={40} color="#FFD700" />
              <h4>Espresso</h4>
              <p>Rich, smooth shot of pure coffee goodness.</p>
              <span>₹120</span>
            </div>
            <div className="menu-card">
              <FaCoffee size={40} color="#FFD700" />
              <h4>Cappuccino</h4>
              <p>Classic blend of espresso, steamed milk & foam.</p>
              <span>₹150</span>
            </div>
            <div className="menu-card">
              <FaCoffee size={40} color="#FFD700" />
              <h4>Latte</h4>
              <p>Perfectly balanced espresso with creamy milk.</p>
              <span>₹160</span>
            </div>
          </div>
        </div>

        {/* Pastries */}
        <div className="menu-section">
          <h3 className="menu-section-title">Pastries</h3>
          <div className="menu-grid">
            <div className="menu-card">
              <FaCookieBite size={40} color="#FFD700" />
              <h4>Chocolate Croissant</h4>
              <p>Flaky, buttery pastry filled with rich chocolate.</p>
              <span>₹90</span>
            </div>
            <div className="menu-card">
              <FaCookieBite size={40} color="#FFD700" />
              <h4>Blueberry Muffin</h4>
              <p>Freshly baked muffins bursting with blueberries.</p>
              <span>₹80</span>
            </div>
            <div className="menu-card">
              <FaCookieBite size={40} color="#FFD700" />
              <h4>Honey Tart</h4>
              <p>Sweet and tangy honey-infused tart for dessert lovers.</p>
              <span>₹100</span>
            </div>
          </div>
        </div>

        {/* Specials */}
        <div className="menu-section">
          <h3 className="menu-section-title">Specials</h3>
          <div className="menu-grid">
            <div className="menu-card special-card">
              <FaStar size={40} color="#FFD700" />
              <h4>Honey Latte</h4>
              <p>Latte infused with golden honey for a sweet twist.</p>
              <span>₹180</span>
            </div>
            <div className="menu-card special-card">
              <FaStar size={40} color="#FFD700" />
              <h4>Seasonal Pumpkin Spice</h4>
              <p>Warm flavors of fall in a perfect espresso blend.</p>
              <span>₹190</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
