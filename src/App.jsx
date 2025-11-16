import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import About from "./Pages/About"; 
import ContactPage from "./Pages/ContactPage";
import MenuPage from "./Pages/MenuPage";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="page-wrapper">
        <Routes>
          <Route path="/honeybee-cafe" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="/our-Menus" element={<MenuPage />} />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
