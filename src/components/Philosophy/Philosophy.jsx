import React from "react";
import "./Philosophy.scss";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function Philosophy() {
  return (
    <section className="philosophy">
      <MDBRow style={{ width: "90vw" }}>
        <MDBCol md="6" className="d-flex  flex-column align-items-center">
          <img
            src="./Assets/Images/philosophy/philosophy.png"
            alt="our philosophy"
            className="philosophy-img"
          />
        </MDBCol>
        <MDBCol
          md="6"
          className="d-flex  flex-column justify-content-center philosphy-left"
        >
          <h4>Our Philosophy</h4>
          <h2>Elevating Excellence Through Innovation.</h2>
          <p>
            Our focus is on creating simple solutions for complex problems. We
            have developed capabilities in ensuring connectivity is enabled at
            all “hard-to-reach” areas of the country. Using frugal innovation
            and deep domain expertise, we have started to create impacts in not
            only our customers but their users as well.
            <br /> Presently, the company is working on ICT solutions that
            include Large Scale Wi-Fi Networking, SDWAN, CCTV Surveillance and
            Private Cloud using OpenStack
          </p>
        </MDBCol>
      </MDBRow>
    </section>
  );
}
