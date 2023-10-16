import React, { useState } from "react";
import "./Navbar.scss";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function Navbar_component() {
  return (
    <nav>
      <Navbar expand="lg" className="navbar">
        <Navbar.Brand href="/">
          <img
            src="./Assets/Images/logo.png"
            alt="logo"
            className="navbar-logo-img"
            style={{ width: "135px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          style={{
            margin: window.innerWidth > 700 ? "0 0 0 15vw" : "0 0 0 5vw",
          }}
        >
          <Nav
            className="me-auto"
            style={{
              padding: window.innerWidth > 700 ? "0 2vw 0 0" : "30px 0 0 0",
            }}
          >
            <Nav.Link
              href="/"
              style={{
                padding: window.innerWidth > 700 ? "0 2vw 0 0" : "30px 0 0 0",
                margin: window.innerWidth > 700 ? "auto" : "",
              }}
            >
              HOME
            </Nav.Link>
            <Nav.Link
              href="/#about"
              style={{
                padding: window.innerWidth > 700 ? "0 2vw 0 0" : "30px 0 0 0",
                margin: window.innerWidth > 700 ? "auto" : "",
              }}
            >
              ABOUT
            </Nav.Link>
            <NavDropdown
              title="VERTICALS"
              id="basic-nav-dropdown"
              className="custom-dropdown"
              style={{
                padding: window.innerWidth > 700 ? "0 2vw 0 0" : "30px 0 0 0",
                color: "white",
              }}
            >
              <NavDropdown.Item
                as={Link}
                to="/verticals#verticals-system-integration"
                style={{
                  fontSize: "clamp(12px, 1.2vw, 20px)",
                  paddingTop: "12px",
                  fontWeight: "600",
                }}
              >
                System Integration
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/verticals#verticals-managed-services"
                style={{
                  fontSize: "clamp(12px, 1.2vw, 20px)",
                  paddingTop: "12px",
                  fontWeight: "600",
                }}
              >
                Managed services
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/verticals#verticals-new-product-development"
                style={{
                  fontSize: "clamp(12px, 1.2vw, 20px)",
                  paddingTop: "12px",
                  fontWeight: "600",
                }}
              >
                New Product Development
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/verticals#verticals-iot"
                style={{
                  fontSize: "clamp(12px, 1.2vw, 20px)",
                  paddingTop: "12px",
                  fontWeight: "600",
                }}
              >
                IOT
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="SOLUTIONS"
              className="custom-dropdown"
              id="basic-nav-dropdown"
              style={{
                padding: window.innerWidth > 700 ? "0 2vw 0 0" : "30px 0 0 0",
              }}
            >
              <NavDropdown.Item
                as={Link}
                to="/solutions#solutions-system-integration"
                style={{
                  fontSize: "clamp(12px, 1.2vw, 20px)",
                  paddingTop: "12px",
                  fontWeight: "600",
                }}
              >
                System Integration
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/solutions#solutions-managed-services"
                style={{
                  fontSize: "clamp(12px, 1.2vw, 20px)",
                  paddingTop: "12px",
                  fontWeight: "600",
                }}
              >
                Managed services
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/solutions#solutions-project-management-consultation"
                style={{
                  fontSize: "clamp(12px, 1.2vw, 20px)",
                  paddingTop: "12px",
                  fontWeight: "600",
                }}
              >
                Project Management Consultation
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/solutions#solutions-ofc"
                style={{
                  fontSize: "clamp(12px, 1.2vw, 20px)",
                  paddingTop: "12px",
                  fontWeight: "600",
                }}
              >
                OFC laying
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/solutions#solutions-cctv-surveillance-system"
                style={{
                  fontSize: "clamp(12px, 1.2vw, 20px)",
                  paddingTop: "12px",
                  fontWeight: "600",
                }}
              >
                CCTV surveillance system
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/solutions#solutions-software-and-application-development"
                style={{
                  fontSize: "clamp(12px, 1.2vw, 20px)",
                  paddingTop: "12px",
                  fontWeight: "600",
                }}
              >
                Software and application development
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/solutions#solutions-data-center-management"
                style={{
                  fontSize: "clamp(12px, 1.2vw, 20px)",
                  paddingTop: "12px",
                  fontWeight: "600",
                }}
              >
                Data center management
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="PRODUCTS"
              className="custom-dropdown"
              id="basic-nav-dropdown"
              style={{
                padding: window.innerWidth > 700 ? "0 2vw 0 0" : "30px 0 0 0",
              }}
            >
              <NavDropdown title="Telecom solutions" id="basic-nav-dropdown">
                <NavDropdown.Item
                  as={Link}
                  to="/products-telecom#products-4g"
                  style={{
                    fontSize: "clamp(12px, 1.2vw, 20px)",
                    paddingTop: "12px",
                    fontWeight: "600",
                  }}
                >
                  4G OTA
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link}
                  to="/products-telecom#products-device-management"
                  style={{
                    fontSize: "clamp(12px, 1.2vw, 20px)",
                    paddingTop: "12px",
                    fontWeight: "600",
                  }}
                >
                  Device Management
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/products-telecom#products-OTAF"
                  style={{
                    fontSize: "clamp(12px, 1.2vw, 20px)",
                    paddingTop: "12px",
                    fontWeight: "600",
                  }}
                >
                  OTAF
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/products-telecom#products-FOTA"
                  style={{
                    fontSize: "clamp(12px, 1.2vw, 20px)",
                    paddingTop: "12px",
                    fontWeight: "600",
                  }}
                >
                  FOTA
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/products-telecom#products-messaging"
                  style={{
                    fontSize: "clamp(12px, 1.2vw, 20px)",
                    paddingTop: "12px",
                    fontWeight: "600",
                  }}
                >
                  Messaging
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/products-telecom#products-gateway"
                  style={{
                    fontSize: "clamp(12px, 1.2vw, 20px)",
                    paddingTop: "12px",
                    fontWeight: "600",
                  }}
                >
                  Gateway
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link}
                  to="/products-telecom#products-CMS"
                  style={{
                    fontSize: "clamp(12px, 1.2vw, 20px)",
                    paddingTop: "12px",
                    fontWeight: "600",
                  }}
                >
                  CMS
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/products-telecom#products-device-tracking"
                  style={{
                    fontSize: "clamp(12px, 1.2vw, 20px)",
                    paddingTop: "12px",
                    fontWeight: "600",
                  }}
                >
                  Device Tracking
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/products-telecom#products-subscription"
                  style={{
                    fontSize: "clamp(12px, 1.2vw, 20px)",
                    paddingTop: "12px",
                    fontWeight: "600",
                  }}
                >
                  Subscription Engine
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Solar Charge Controllers"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item
                  as={Link}
                  to="/products-solar#products-smart-pole-overview"
                  style={{
                    fontSize: "clamp(12px, 1.2vw, 20px)",
                    paddingTop: "12px",
                    fontWeight: "600",
                  }}
                >
                  Smart Pole Overview
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/products-solar#products-SPV"
                  style={{
                    fontSize: "clamp(12px, 1.2vw, 20px)",
                    paddingTop: "12px",
                    fontWeight: "600",
                  }}
                >
                  HYBRID SOLAR PHOTO VOLTAIC (SPV)
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link}
                  to="/products-solar#products-GPON"
                  style={{
                    fontSize: "clamp(12px, 1.2vw, 20px)",
                    paddingTop: "12px",
                    fontWeight: "600",
                  }}
                >
                  TSEC Approved:
                  <br /> GPON Hybrid Power supply
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/products-solar#products-hybrid-solar-power"
                  style={{
                    fontSize: "clamp(12px, 1.2vw, 20px)",
                    paddingTop: "12px",
                    fontWeight: "600",
                  }}
                >
                  Hybrid Solar Power For
                  <br /> Telecom Equipment
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/products-solar#products-valley-solar-hybrid"
                  style={{
                    fontSize: "clamp(12px, 1.2vw, 20px)",
                    paddingTop: "12px",
                    fontWeight: "600",
                  }}
                >
                  Valley Solar Hybrid
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/products-solar#products-technical-specification-of-mobile-tablet-charging-rack"
                  style={{
                    fontSize: "clamp(12px, 1.2vw, 20px)",
                    paddingTop: "12px",
                    fontWeight: "600",
                  }}
                >
                  Technical Specification of
                  <br /> Mobile/TabIet Charging Rack
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link}
                  to="/products-solar#products-3Ph-phase-VFD-inverter"
                  style={{
                    fontSize: "clamp(12px, 1.2vw, 20px)",
                    paddingTop: "12px",
                    fontWeight: "600",
                  }}
                >
                  Solar 3Ph Phase VFD Inverter
                </NavDropdown.Item>
              </NavDropdown>
            </NavDropdown>

            <Nav.Link
              as={Link}
              to="/#contact"
              style={{
                padding: window.innerWidth > 700 ? "0 2vw 0 0" : "30px 0 0 0",
              }}
            >
              <Button className="contact-button">Contact Us</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
}
