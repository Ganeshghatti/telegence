import React, { useEffect } from "react";
import "./Solutions.scss";
import { useLocation } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar_component from "../Navbar/Navbar_component";
import Footer from "../Footer/Footer";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";


export default function Solutions() {
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
    <section className="solutions">
      <Navbar_component />
      <p className="solutions-title">Solutions</p>
      <p className="solutions-heading">
        Driving Growth Through Diverse solutions Ventures
      </p>
      <section id="solutions-system-integration">
        <MDBRow>
          <MDBCol
            md="8"
            className="d-flex  flex-column justify-content-center align-items-center"
            style={{ padding: "20px 20px 20px 40px" }}
          >
            <div className="d-flex  flex-column justify-content-center">
              <h3 className="solutions-system-integration-title">
                System Integration
              </h3>
              <p>
                IT boasts extensive industry experience, shaping India's tech
                standards. Our dedicated team serves diverse corporate and
                public sectors with tailored solutions. We prioritize
                partnerships with global experts, offering turnkey System
                Integration services. Our model covers Supply, Installation,
                Testing, and Commissioning of IT/ICT projects. We have strong
                relationships with major IT/Networking OEMs and Tier1
                Distributors, streamlining logistics for nationwide projects.
                Trust, Integrity, and Teamwork drive our growth and success
              </p>
            </div>
          </MDBCol>
          <MDBCol
            md="4"
            className="d-flex  flex-column justify-content-center align-items-center"
          >
            <img src="./Assets/Images/solutions/system.jpeg" alt="system" />
          </MDBCol>
        </MDBRow>
      </section>
      <section id="solutions-managed-services">
        <MDBRow>
          <MDBCol
            md="4"
            className="d-flex justify-content-center align-items-center"
          >
            <img
              src="./Assets/Images/solutions/services.jpeg"
              alt="system"
              style={{ width: "70%" }}
            />
          </MDBCol>
          <MDBCol
            md="8"
            className="d-flex  flex-column justify-content-center align-items-center"
            style={{ padding: "20px 20px 20px 40px" }}
          >
            <div className="d-flex  flex-column justify-content-center">
              <h3 className="solutions-managed-services-title">
                Managed services
              </h3>
              <p>
                In a rapidly changing business landscape, achieving
                unprecedented scale requires automated digital platforms. We
                specialize in building, deploying, and maintaining these
                platforms, providing a solid foundation in a data-driven world.
                Our focus spans infrastructure building, application deployment,
                and complete IT environment maintenance. Whether you're in the
                build, deploy, or maintain phase, we're here to elevate your
                operations, transitioning from manual to automated management,
                one-off intervention to long-term managed services, and
                embracing self-healing systems. Automation drives our approach.
              </p>
            </div>
          </MDBCol>
        </MDBRow>
      </section>
      <section id="solutions-project-management-consultation">
        <MDBRow>
          <MDBCol
            md="8"
            className="d-flex  flex-column justify-content-center align-items-center"
            style={{ padding: "20px 20px 20px 40px" }}
          >
            <div className="d-flex  flex-column justify-content-center">
              <h3 className="solutions-project-management-consultation-title">
                Project Management Consultation
              </h3>
              <p>
                Valley Telegence, a top choice for PMC services, supports
                clients' objectives, delivering safe, eco-friendly, on-time, and
                on-budget projects. We offer a structured approach covering all
                phases: feasibility studies, design, engineering, procurement,
                construction, commissioning, and start-up. With extensive
                experience, we seamlessly integrate engineering, procurement,
                and construction for successful large-scale projects, earning
                trust as project management consultants.
              </p>
            </div>
          </MDBCol>
          <MDBCol
            md="4"
            className="d-flex justify-content-center align-items-center"
          >
            <img src="./Assets/Images/solutions/project.jpeg" alt="system" />
          </MDBCol>
        </MDBRow>
      </section>
      <section id="solutions-ofc">
        <MDBRow>
          <MDBCol
            md="4"
            className="d-flex justify-content-center align-items-center"
          >
            <img src="./Assets/Images/solutions/ofc.jpeg" alt="system" />
          </MDBCol>
          <MDBCol
            md="8"
            className="d-flex  flex-column justify-content-center align-items-center"
            style={{ padding: "20px 20px 20px 40px" }}
          >
            <div className="d-flex  flex-column justify-content-center">
              <h3 className="solutions-ofc-title">OFC laying</h3>
              <p>
                Valley Telegence, a leader in Optical Fibre Cabling (OFC),
                offers end-to-end solutions for OFC networks. Our services
                encompass Survey, Design, Supply, Installation, Testing, and
                Maintenance for both Underground and Aerial installations. With
                a track record of 1,000+ Km OFC installations in India, we're
                executing 400Km+ BharatNet Projects. Our expertise, resources,
                and digital tools ensure seamless connectivity in the fibre
                infrastructure domain.
              </p>
            </div>
          </MDBCol>
        </MDBRow>
      </section>
      <section id="solutions-cctv-surveillance-system">
        <MDBRow>
          <MDBCol
            md="8"
            className="d-flex  flex-column justify-content-center align-items-center"
            style={{ padding: "20px 20px 20px 40px" }}
          >
            <div className="d-flex  flex-column justify-content-center">
              <h3 className="solutions-cctv-surveillance-system-title">
                CCTV surveillance system
              </h3>
              <p>
                Top class engineers serve you the best security solutions. With
                Valley Telegence , we propose to add value to your efforts of
                sustaining a safe and secure environment, by substitute as the
                virtual security guard, intended at protecting your property at
                all times. 1. IP Based CCTV design, implementation, Operation
                and maintenance 2. Integrated control and command center 3. City
                surveillance, traffic planning and monitoring 4. Smart city
                initiative 5. Biometric, RFID and Physical layer security 6.
                Wireless and communication infrastructure 7. POS,
                E-ticketing-metering and Remote telemetry
              </p>
            </div>
          </MDBCol>
          <MDBCol
            md="4"
            className="d-flex justify-content-center align-items-center"
          >
            <img src="./Assets/Images/solutions/cctv.jpeg" alt="system" />
          </MDBCol>
        </MDBRow>
      </section>
      <section id="solutions-software-and-application-development">
        <MDBRow>
          <MDBCol
            md="4"
            className="d-flex justify-content-center align-items-center"
          >
            <img src="./Assets/Images/solutions/software.jpeg" alt="system" />
          </MDBCol>
          <MDBCol
            md="8"
            className="d-flex  flex-column justify-content-center align-items-center"
            style={{ padding: "20px 20px 20px 40px" }}
          >
            <div className="d-flex  flex-column justify-content-center">
              <h3 className="solutions-software-and-application-development-title">
                Software and application development
              </h3>
              <p>
                – Valley Telegence is a Professional, Website and Mobile App
                Development Company that Endeavor on Highly Proficient,
                Intuitive and Cost Effective Software solutions. Since our
                Inception, We have been helping companies across all the
                industries to achieve their Business Goals with Impactful,
                Business Centric Software Solutions. With our cutting-edge
                technologies, Agile Methodologies and in-depth industry
                knowledge, we support the Digital Transformation of our clients
                across all Business Verticals.
              </p>
            </div>
          </MDBCol>
        </MDBRow>
      </section>
      <section id="solutions-data-center-management">
        <MDBRow>
          <MDBCol
            md="8"
            className="d-flex  flex-column justify-content-center align-items-center"
            style={{ padding: "20px 20px 20px 40px" }}
          >
            <div className="d-flex  flex-column justify-content-center">
              <h3 className="solutions-data-center-management-title">
                Data center management
              </h3>
              <p>
                - Today’s Data Center Infrastructure Management is a complex
                beast. Therefore, infrastructure management solutions that
                assist with performance monitoring of your IT assets are crucial
                to reducing outages and increasing response times. Regardless of
                how big or small, remote or centralized organization’s data
                center operations are, they need visibility, control, and
                planning tools for efficient Data center infrastructure
                management and monitoring, and cloud orchestration.
              </p>
            </div>
          </MDBCol>
          <MDBCol
            md="4"
            className="d-flex justify-content-center align-items-center"
          >
            <img src="./Assets/Images/solutions/data.jpeg" alt="system" />
          </MDBCol>
        </MDBRow>
      </section>
    </section>
  );
}
