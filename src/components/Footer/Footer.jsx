import React from "react";
import "./Footer.scss";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <section className="footer">
      {/* <div className="footer-div">
        <ul className="footer-div1">
          <p className="footer-div-title">Useful Links</p>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Learn More</li>
        </ul>
        <ul className="footer-div2">
          <p className="footer-div-title">Resources</p>
          <li>Blog</li>
          <li>Events</li>
          <li>Privacy policy</li>
          <li>Terms & conditions</li>
        </ul>
        <div className="footer-div3">
          <div className="footer-div3-content-div1">
            <img
              src="./Assets/Images/logo.png"
              alt=""
              className="footer-logo"
              width={100}
            />
            <p className="footer-div3-content-description">
              Delivering best-in-class Software Solutions
              <br /> & IT Services
            </p>
          </div>
          <p className="footer-div3-content-address">
            Plot No-52B,Ground Floor,Okhla Phase -III,NewDelhi,110020
          </p>

          <div className="footer-div3-content-div2">
            <a href="https://www.facebook.com/profile.php?id=100012661155226">
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.linkedin.com/company/valley-telegence/">
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <i class="fa-brands fa-twitter"></i>
          </div>
        </div>
      </div>
      <p className="footer-copyright">
        © Valley Telegence. All Rights Reserved
      </p> */}
      <MDBFooter
        className="text-center text-lg-start text-muted"
        style={{
          width: "100vw",
          backgroundColor: "#040f21",
          color: "white",
        }}
      >
        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Valley Telegenee
                </h6>
                <p>Delivering best-in-class Software Solutions & IT Services</p>
                <a
                  href="https://www.facebook.com/profile.php?id=100012661155226"
                  className="me-4 text-reset"
                >
                  <MDBIcon fab icon="facebook-f" />
                </a>
                <a
                  href="https://www.linkedin.com/company/valley-telegence/"
                  className="me-4 text-reset"
                >
                  <MDBIcon fab icon="linkedin" />
                </a>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="#" className="text-reset">
                    HOME
                  </a>
                </p>
                <p>
                  <a href="#about" className="text-reset">
                    ABOUT
                  </a>
                </p>
                <p>
                  <a href="#contact" className="text-reset">
                    CONTACT US
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Resources</h6>
                <p>
                  <a href="#" className="text-reset">
                    BLOG
                  </a>
                </p>
                <p>
                  <a href="#" className="text-reset">
                    EVENTS
                  </a>
                </p>
                <p>
                  <a href="#" className="text-reset">
                    PRIVACY POLICY
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <MDBIcon icon="home" className="me-2" />
                  <span>
                    <a href="https://www.google.com/maps/place/52B,+Okhla+Phase+3+Rd,+Okhla+Phase+III,+Okhla+Industrial+Estate,+New+Delhi,+Delhi+110020/@28.550279,77.2642433,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce3e8fae48357:0x1415570d5d6691ec!8m2!3d28.5502743!4d77.2668182!16s%2Fg%2F11spxf3zbl?entry=ttu">
                      Plot No-52B,Ground Floor,Okhla Phase -III,NewDelhi,110020  -  
                      <span style={{ color: "blue" }}>view on map</span>
                    </a>
                  </span>
                </p>
                <p>
                  <a href="mailto:info@valleytelegence.com">
                    info@valleytelegence.com
                  </a>
                </p>
                <p>
                  <MDBIcon icon="phone" className="me-3" />
                  <a href="tel:011-4065-8386">LandLine-011-4065-8386</a>
                </p>
                <p>
                  <MDBIcon icon="phone" className="me-3" />
                  <a href="tel:9654000229">Mob-9654000229</a>
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          <p>© 2023 Copyright: valleytelegence.com</p>
        </div>
      </MDBFooter>
    </section>
  );
}
