import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Industry.scss";
import Navbar_component from "../Navbar/Navbar_component";
import Footer from "../Footer/Footer";

export default function Industry() {
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
    <section className="industry">
      <Navbar_component/>
      <p className="industry-title">Our industries</p>
      <p className="industry-heading">
        Driving Growth Through Diverse Industry Ventures
      </p>
      <section id="industry-government">
        <p className="industry-government-title">GOVERNMENT</p>
      </section>
      <section id="industry-public-sector">
        <p className="industry-public-sector-title">PUBLIC SECTOR</p>
      </section>
      <section id="industry-service-provider">
        <p className="industry-service-provider-title">SERVICE PROVIDER</p>
      </section>
      <section id="industry-enterprise">
        <p className="industry-enterprise-title">ENTERPRISE</p>
      </section>
    </section>
  );
}
