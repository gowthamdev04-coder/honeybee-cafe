import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen(!open);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="nav-logo">Honeybee Café</div>

      {/* Hamburger for mobile */}
      <div
        className={`nav-hamburger ${open ? "active" : ""}`}
        onClick={handleToggle}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation menu */}
      <ul className={`nav-menu ${open ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={() => setOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/our-Menus" onClick={() => setOpen(false)}>
            Menu
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setOpen(false)}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
