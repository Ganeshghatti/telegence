import React from "react";
import "./Hero.scss";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-gradientdiv">
        <div className="hero-content">
          <p className="hero-title">Our biggest CARE FOR</p>
          <p className="hero-heading">SERVICE & IT SOLUTION</p>
          <p className="hero-description">
            Don’t let stellar talent fall through the cracks of a messy service
            process. Organize your serive with us .
          </p>
          <Button className="contact-button">
            <Link
              to="/#contact"
              style={{ textDecoration: "none", color: "black" }}
            >
              Know More
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
