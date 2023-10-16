import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home";
import Verticals from "./components/Verticals/Verticals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Industry from "./components/Industry/Industry";
import Solutions from "./components/Solutions/Solutions";
import Products_solar from "./components/Products/Products_solar";
import Products_telecom from "./components/Telecom/Telecom";
import Footer from "./components/Footer/Footer";
import Navbar_component from "./components/Navbar/Navbar_component";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/verticals" element={<Verticals />} />
      <Route path="/industry" element={<Industry />} />
      <Route path="/solutions" element={<Solutions />} />
      <Route path="/products-solar" element={<Products_solar />} />
      <Route path="/products-telecom" element={<Products_telecom />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
