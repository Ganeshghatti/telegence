import React, { useEffect } from "react";
import "./Home.scss";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar_component";
import Hero from "./components/Hero/Hero";
import "bootstrap/dist/css/bootstrap.min.css";
import Customers from "./components/Customers/Customers";
import About from "./components/About/About";
import Numbers from "./components/Numbers/Numbers";
import Contact_us from "./components/Contact-us/Contact_us";
import Services from "./components/Services/Services";
import Partners from "./components/Partners/Partners";
import Philosophy from "./components/Philosophy/Philosophy";
import Footer from "./components/Footer/Footer";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetSection = document.querySelector(location.hash);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);
  return (
    <section className="home">
      <Navbar />
      <Hero />
      <About /> 
      <Customers />
      <Services />
      <Philosophy />
      <Partners />
      <Numbers />
      <Contact_us />
    </section>
  );
}
