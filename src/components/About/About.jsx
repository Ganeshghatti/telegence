import React from "react";
import "./About.scss";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="About" id="about">
      <MDBRow style={{ width: "90vw" }}>
        <MDBCol
          md="6"
          className="d-flex  flex-column justify-content-center about-left"
        >
          <h4>About Us</h4>
          <h2>Boost your <br/>Business With us</h2>
          <p>
            The Valley Telecom Group has been pioneering in VAS Infrastructure
            and Applications in the Indian and APAC markets since its inception
            in the year 2000. We have grown to become a trusted partner to major
            telecom service providers by providing them with our innovative and
            robust products, including customised software solution development
            and end-to-end managed services.
          </p>
        </MDBCol>
        <MDBCol md="6" className="d-flex  flex-column align-items-center">
          <img
            src="./Assets/Images/about/aboutimg.jpg"
            alt=""
            className="about-img"
          />
        </MDBCol>
      </MDBRow>
    </section>
  );
}
