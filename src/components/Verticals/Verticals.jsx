import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Verticals.scss";
import Navbar_component from "../Navbar/Navbar_component";
import Footer from "../Footer/Footer";

export default function Verticals() {
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
    <section className="verticals">
      <Navbar_component />
      <p className="verticals-title">Our Verticals</p>
      <p className="verticals-heading">
        Driving Growth Through Diverse Industry Ventures
      </p>
      <section id="verticals-system-integration">
        <div className="verticals-system-integration-div verticals-main-div">
          <p className="verticals-system-integration-title verticals-main-div-title">
            SYSTEM INTEGRATION
          </p>
          <p className="verticals-system-integration-description verticals-main-div-description">
            <b>Valley Telegence</b> Offers turnkey System Integration services
            to customers. Our Engagement model typically consists of Supply,
            Installation, Testing and Commissioning of IT/ICT projects. We have
            a well-established relationship with most of the large OEMs in the
            IT/Networking space and also the large Tier1 Distributors. This
            helps us streamline our logistics such that we are able to execute
            projects in the remotest parts of the country.
          </p>
        </div>
        <div className="verticals-content-div">
          <p className="verticals-content-text">
            Our asset light model ensures that we utilize local manpower for
            installation and maintenance services while retaining the design,
            configuration and monitoring activities at our centralized NOC.
            <br />
            <br />
            Owing to this, we have created a “Cookie Cutter” model for
            deployment that ensures that we are able to execute large-scale
            distributed projects efficiently and in the shortest possible time.
            We are thus able to design, deploy and deliver large scale systems
            in:
            <ul>
              <li>WAN Connectivity</li>
              <li>LAN Connectivity</li>
              <li>Video Surveillance Solutions</li>
              <li>Smart Classroom Solutions</li>
            </ul>
          </p>
          <div className="verticals-contentimg-div">
            <img
              src="./Assets/Images/verticals/m2m-capabilities.png"
              alt=""
              className="verticals-system-integration-contentimg"
            />
          </div>
        </div>
      </section>

      <section id="verticals-managed-services">
        <div className="verticals-managed-services-div verticals-main-div">
          <p className="verticals-managed-services-title verticals-main-div-title">
            MANAGED SERVICES
          </p>
          <p className="verticals-managed-services-description verticals-main-div-description">
            The Covid19 pandemic has ushered in a “New Normal” way of working
            for companies. Many companies prefer to stay lean and focus on their
            core capabilities rather than invest in non-core areas. One of the
            primary functions is that of the IT/Networking function in an
            organization. Instead of hiring full-time IT/Networking personnel to
            deploy and manage their networks, many companies are preferring to
            offload these activities in a Managed Service model to MSPs or
            Managed Service Providers.
          </p>
        </div>
        <div className="verticals-content-div">
          <p className="verticals-content-text">
            <b>Valley Telegence </b>offers such MSP services in the
            IT/Networking space to our customers. We leverage our deep domain
            knowledge and expertise to offer cutting edge solutions to customers
            and also operate and maintain these systems for an extended period.
            <br />
            <br />
            In this model, the customer outlines his business requirement and
            preference for vendor if any along with the budget. Valley Telegence
            puts together a comprehensive solution that includes design,
            deployment, operation and maintenance. Using Cloud-based controllers
            and monitoring systems, we are able to ensure high reliability and
            availability for customer systems on a 24/7 basis. This typically
            works best for customers who have distributed offices/branches and
            need to apply the same network/IT policies and standards across all
            the sites. <br />
            For the customer, he has a choice to go with either
            <ul>
              <li>Capex + Opex model or</li>
              <li>Full Opex model</li>
            </ul>
            The selection of model depends upon the duration of the MSP contract
            – longer contracts can be of Opex type which shorter contracts of
            the hybrid type.
          </p>
          <div className="verticals-contentimg-div">
            <img
              src="./Assets/Images/verticals/msp-1-1-768x546.png"
              alt=""
              className="verticals-contentimg"
            />
            <img
              src="./Assets/Images/verticals/msp-2-1-300x215.png"
              alt=""
              className="verticals-contentimg"
            />
          </div>
        </div>
      </section>
      <section id="verticals-new-product-development">
        <div className="verticals-new-product-development-div verticals-main-div">
          <p className="verticals-new-product-development-title verticals-main-div-title">
            NEW PRODUCT DEVELOPMENT
          </p>
          <p className="verticals-new-product-development-description verticals-main-div-description">
            <b>Valley Telegence</b> has always fostered a culture of
            Problem-Solving using frugal innovation. We realize that at times
            COTS solutions are not available for certain use-cases that
            Customers may have. In such cases, we undertake development of a new
            product using existing systems/solutions.
          </p>
        </div>
        <div className="verticals-content-div">
          <p className="verticals-content-text">
            The advantage of such development is that it reduces time to market
            for Customers and offers a better alternative for their solutions
            meeting their requirement. Some examples of the work that we have
            undertaken include:
            <br />
            <br />
            <ul>
              <li>
                A LiFePO4 based hybrid solar power unit for powering up Wi-Fi
                Access Points where availability of Grid-power was a challenge
                either due to non-electrification or site issues
              </li>
              <li>
                An industrial PoE switch based power Unit for Railway
                applications that also converted 110v DC to 57v DC using the
                train’s power supply.
              </li>
            </ul>
            The selection of model depends upon the duration of the MSP contract
            – longer contracts can be of Opex type which shorter contracts of
            the hybrid type.
          </p>
          <div className="verticals-contentimg-div">
            <img
              src="./Assets/Images/verticals/verticals1.jpeg"
              alt=""
              className="verticals-contentimg"
              width="25vw"
            />
            <img
              src="./Assets/Images/verticals/verticals2.jpeg"
              alt=""
              className="verticals-contentimg"
            />
          </div>
        </div>
      </section>

      <section id="verticals-iot">
        <div className="verticals-iot-div verticals-main-div">
          <p className="verticals-iot-title verticals-main-div-title">
            Internet of Things
          </p>
          <p className="verticals-iot-description verticals-main-div-description">
            The Internet of Things (IoT) has become a part of our daily lives
            whether we recognize and realize it or not. It simply means devices
            and systems that communicate with each other using some protocol or
            the other without human intervention.
          </p>
        </div>
        <div className="verticals-content-div">
          <p className="verticals-content-text">
            Some examples include – Automated utility metering (also known as
            Smart Meters for Gas, Water and electricity), Wearables (activity
            trackers, medical diagnostic devices), intelligent Lighting systems
            and so on.
            <br />
            <br />
            <b>Valley Telegence</b> has been developing capabilities in the IoT
            space by focusing on the LoraWAN ecosystem that enables
            communications between sensors and the cloud using the LORA
            protocol. We have developed a platform for onboarding,
            visualization, monitoring, control and analysis of smart street
            lights, precision agriculture, environmental monitoring amongst
            others. This is offered on a Cloud-based hosted model.
          </p>
          <div className="verticals-contentimg-div">
            <img
              src="./Assets/Images/verticals/verticalsiot.jpg"
              alt=""
              className="verticals-contentimg"
              width="25vw"
            />
          </div>
        </div>
      </section>
    </section>
  );
}
