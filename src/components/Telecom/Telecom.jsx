import React, { useEffect } from "react";
import "./Telecom.scss";
import Navbar_component from "../Navbar/Navbar_component";
import { useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function Telecom() {
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
    <section className="telecom">
      <Navbar_component />
      <p className="products-telecom-title">Telecom Solutions</p>
      <p className="products-telecom-heading">
        Telecom solutions connect, communicate, and empower global connectivity.
      </p>
      <section id="products-4g">
        <MDBRow>
          <MDBCol md="6">
            <h2>4G OTA</h2>
            <p>
              Valley's 4G/LTE OTA platform can manage files and applets on the
              SIM cards over the air. The integrated Device Manager helps in
              managing the entire SIM card life cycle from activation, to
              upgrades as well as the SIM card cancellation & swapping.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h4>Benefits</h4>
            <p>
              Over the Air Function enables carriers to save costs, enhance
              their customer service, and streamline their inventory management.
              It is fully compliant with the Standard Specifications and also
              provides customized features as per the requirement.
            </p>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md="6">
            <h4>Key Features:</h4>
            <ul>
              <li>
                Supports Remote file and applet management on the SIM over the
                air
              </li>
              <li>
                Complies with ETSI TS 102 226, ETSI TS 102 225, and 3GPP TS
                31.116
              </li>
              <li>Provides Campaign Manager</li>
              <li>
                Supports a data session using a push SMS message that starts a
                data session with the card, or the card can initiate the data
                session. The Remote File Management (RFM) and Remote Application
                Management module of functionality is independent of the bearer.
              </li>
              <li>
                4G LTE cards are now also supported, with the new HTTPS-based
                transport standards, using TLS PSK.
              </li>
              <li>
                The OTA module provides Mobile Device (MS/UE) Management
                functionality and is able to manage settings on the handset SIM,
                independent of the SIM vendor, including preferred roaming list
                (configured by the operator), files (like contact lists),
                encryption keys, applications and applets installation, updates,
                and removal, and (U)SIM menus.
              </li>
            </ul>
          </MDBCol>
          <MDBCol
            md="6"
            className="d-flex  flex-column"
          >
            <img
              src="./Assets/Images/products/telecom/1.jpg"
              alt="telecom 4G OTA"
              className="products-4g-img"
            />
          </MDBCol>
        </MDBRow>
      </section>
      <section id="products-device-management">
        <MDBRow>
          <MDBCol md="12">
            <h2>Device Management</h2>
            <p>
              DIMS can be integrated with OTA system and can provide data
              regarding the subscriber and device details. Based on the device
              demographics operators can launch new schemes for selling their
              mobile phones or tariff plans.
            </p>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md="6">
            <h4>Features:</h4>
            <ul>
              <li>
                vDIMS can maintain a repository of Date, MDN, ESN, MEID, IMSI,
                MIN, Device name, Device type, version by detecting the device
                in the network.
              </li>
              <li>
                If there is any change in the MEID and IMSI combination, then
                DIMS will send a trigger to a device (say CRM) for further
                action.
              </li>
              <li>
                It supports configuration of devices based on defined rules and
                is able to configure the device on demand through customer care
                and SMS interfaces.
              </li>
              <li>
                Valley's DIMs supports open APIs which can be provided to the
                external entities to connect to DIMS and trigger it or vice
                versa e.g. CRM, OTAF, etc.
              </li>
              <li>
                DIMS provides a fully integrated GUI and reporting interface. It
                also provides an LI interface as well.
              </li>
              <li>DIMS can also trigger FOTA system for firmware download.</li>
            </ul>
          </MDBCol>
          <MDBCol md="6">
            <h4>Benefits:</h4>
            <ul>
              <li>Comprehensive device detection and configuration system</li>
              <li>
                Pro-actively and remotely supports subscribers during the entire
                device lifecycle, making it easier for the operators to manage &
                support their subscribers
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </section>

      <section id="products-OTAF">
        <MDBRow>
          <MDBCol md="6">
            <h2>OTAF</h2>
            <p>
              With Valley's automated OTA system, the potential wireless
              subscriber can activate the handset or Internet devices by dialing
              *228 OTASP call using the IVR directly without the intervention of
              third party and hence there is no need for customer to call the
              call center or return back to the retail outlet for activation.
              The OTAPA feature is initiated by the network operator to program
              and administer the parameters which control the wireless network
              usage by the device. Activation and Administration of such
              parameters remotely without the involvement of mobile subscribers
              provides the network operator a great deal of flexibility and
              cost-benefits as well as significantly improves the user
              experience.
            </p>
            <p>
              <b>Over the Air Service Provisioning (OTASP)</b> for remote
              activation of devices - Subscriber Initiated by dialing a
              predefined short code *228.
            </p>
            <p>
              <b>Over the Air parameter administration (OTAPA)</b> for remote
              updating of devices - requires no subscriber intervention -
              Operator / Network Initiated.
            </p>

            <h4>Features</h4>
            <ul>
              <li>IVR based OTASP activation.</li>
              <li>Intelligent NAM & PRL download.</li>
              <li>SPC validation.</li>
              <li>NAM Read & PRL Read.</li>
              <li>NAM Update (MDN, MIN, MCC, MNC).</li>
              <li>PRL download for single MDN.</li>
              <li>PRL Read & then download.</li>
              <li>PRL download via campaign.</li>
              <li>A-Key generation.</li>
              <li>3GPD Read & 3GPD NAI download.</li>
              <li>MMS URI setting.</li>
              <li>Support Mobile Number Portability (MNP).</li>
              <li>Supports RUIM based or RUIM less device provisioning.</li>
              <li>PRL & Firmware download via IP (IOTA).</li>
            </ul>
          </MDBCol>
          <MDBCol md="6">
            <h4>Administration and Monitoring</h4>
            <ul>
              <li>User/Group based access.</li>
              <li>Privilege based access control.</li>
              <li>Campaign Management with complete Reporting Engine.</li>
              <li>Operational support using SNMP.</li>
            </ul>
            <h4>Highlights</h4>
            <ul>
              <li>User-friendly GUI administration.</li>
              <li>IVR support using ISUP & SIP.</li>
              <li>
                High-performance, fully scalable with (N+1) redundant
                architecture.
              </li>
              <li>Supports CDMA2000 1x and EVDO.</li>
              <li>72000 calls per hour (BHCA) and can be scaled further.</li>
              <li>Supports HTTP, SMS & IP interfaces also.</li>
              <li>ESN, MEID (pESN) based handset activation & provisioning.</li>
              <li>
                Compliant with OTA & IOTA 3GPP2 Standards, IS-41D, and IS-683E.
              </li>
              <li>24 X 7 availability & support.</li>
            </ul>
            <h4>Reports</h4>
            <ul>
              <li>OTASP Reports.</li>
              <li>Campaign-wise reports.</li>
              <li>Customized reports.</li>
              <li>Duration-wise reports.</li>
              <li>MDN-wise reports.</li>
              <li>
                Supports many filters to generate different reports as per
                requirement.
              </li>
              <li>Separate Reporting Engine Supported.</li>
            </ul>
            <h4>Benefits to Operators</h4>
            <ul>
              <li>End-to-end Solution.</li>
              <li>Reduces cost associated with manual handset provisioning.</li>
              <li>
                Expedite a huge number of Handsets activation & provisioning.
              </li>
              <li>Reduction in Operational cost.</li>
              <li>
                Point-of-sale retailers do not need to train staff to undertake
                activation procedures.
              </li>
              <li>Inventory and logistics management of RUIM Cards.</li>
              <li>Firmware download and device management.</li>
              <li>
                Modular & Standard based platform for ease of new feature
                addition & customization.
              </li>
              <li>Roadmap for 4G/LTE - UICC.</li>
            </ul>
          </MDBCol>
        </MDBRow>
      </section>

      <section id="products-FOTA">
        <MDBRow>
          <MDBCol md="12">
            <h2>V-FOTA</h2>
            <p>
              As more and more updates are performed successfully every year on
              more and more device types, the volume of Firmware Over The Air
              (FOTA) usage is increasing significantly. Since consumers expect
              their devices to stay up to date with the latest features and
              performance improvements, FOTA is becoming increasingly necessary
              for the operators.
            </p>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md="6">
            <h4>V-Features:</h4>
            <ul>
              <li>Valley's FOTA complies with</li>
              <ul>
                <li>OMA-DM 1.2 Standards</li>
                <li>HTTPS 1.1</li>
                <li>SMPP 3.4</li>
                <li>Fully supports Firmware Update Management Object (FUMO)</li>
              </ul>
            </ul>
            <h4>Benefits</h4>
            <p>
              vFOTA can be a centralized solution for an Operator as it is SIM
              vendor agnostic. vFOTA provides operational flexibility as it can
              be used for individual downloads or in Campaign mode. The
              architecture is highly scalable as it supports Alternative
              download method which can be easily scaled up.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h4>V-FOTA Support:</h4>
            <ul>
              <li>Firmware Update Initiation</li>
              <li>Device Information Exchange</li>
              <li>Update Package Alternate Download</li>
              <li>Update Package Installation</li>
              <li>Notification of Firmware Update</li>
            </ul>
            <p>
              It also provides integrated GUI for seamless Operations and
              Management along with fully integrated Reporting engine. vFOTA
              uses HTTPS v1.1 to provide a secure layer. It can be connected to
              SMSC and uses SMPP 3.4 for sending the Alert Notifications for the
              initiation of download by the mobile device.
            </p>
          </MDBCol>
        </MDBRow>
      </section>

      <section id="products-messaging">
        <MDBRow>
          <MDBCol md="7">
            <h2>Messaging</h2>
            <p>
              In spite of all previous predictions, SMS is the most widely used
              mobile messaging service in the world, accounting for at least 10%
              of ARPU for most mobile operators.
              <br />
              <br /> SMSC is an integral part of Valley's VAS platform, the
              efficient solution for operators to meet high volume market
              demands. The Valley SMSC is a feature-rich, high-performance SMSC
              platform that offers constant premium quality service at very
              cost-effective prices. This innovative technology driven offering
              from Valley, offers high capacity traffic of up to 2,800
              transactions per second. The modular design and integrated load
              balancing mechanism enables Valley to offer an easily upgradeable,
              competitively priced entry-level system with no compromise to high
              quality.
              <br />
              <br /> The building blocks of Valley SMSC are used to provide the
              B-SMSC, an Application to Person (A2P) fast messaging centre that
              enables SMS campaigns initiated by Valley BMS (ADPS) or other
              clients.
            </p>
            <h4>Features:</h4>
            <ul>
              <li>
                The adaptable and intuitive web interfaces enable administrators
                to broadcast SMS messages to some or all subscribers and to
                control SMS traffic.
              </li>
              <li>
                SMPP interface allows operators to sell services to external
                organizations that require SMS messaging, such as banks, content
                aggregators, and value-added service providers.
              </li>
              <li>
                The scalable systems are suitable for 5,000-10,000,000 Busy Hour
                Short Messages (2800 SMS/sec) on one rack.
              </li>
              <li>
                Cutting-edge hardware from world leaders such as HP, Intel, and
                Cisco.
              </li>
              <li>
                The capabilities include SMS mobile to mobile, Web to mobile,
                mobile to email, and email to mobile.
              </li>
              <li>Full hardware redundancy and high availability.</li>
              <li>
                Advanced SMS features such as black & white and scheduled
                distribution lists.
              </li>
              <li>
                SNMP-based Network Management System for real-time alarms and
                status.
              </li>
              <li>Highly sophisticated Retry Plans.</li>
              <li>
                Support for MAP version 2.0 for GSM and IS-41 standard for CDMA
                networks.
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="5">
            <h4>MMSC: Multimedia Message Service Center</h4>
            <p>
              With advent of high end smart phones in the mobile market, the use
              of Multimedia Message Service in mobile messaging has increased
              manifold. It enhances the basic SMS (Short Message Service)
              capability and has become a standard for sending messages that
              include rich multimedia content including videos, audio, pictures,
              text pages and ringtones. Valley MMSC has the capability of
              supporting multimedia messaging for all the above formats.
            </p>
            <ul>
              <li>OMA standard MMS protocols, MM1 through MM11</li>
              <li>Up-to-date Multimedia Transcoder</li>
              <li>Controlled QoS of P2P and A2P messaging</li>
              <li>VASP Management tools</li>
              <li>OMA DRM V_1.0</li>
              <li>Content Screening</li>
              <li>Integrated GUI system administration</li>
              <li>Advanced charging mechanism</li>
              <li>Statistics & reports</li>
            </ul>
          </MDBCol>
        </MDBRow>
      </section>

      <section id="products-gateway">
        <MDBRow>
          <MDBCol md="6">
            <h2>WAP Gateway (Wireless Access Protocol)</h2>
            <p>
              Valley WAP Gateway is a collection of protocols (WSP) and mark up
              languages along with infrastructure that provide web browsing
              services for mobile devices. Users can access the information they
              are interested in when using WAP enabled devices. Valley WAP-GW is
              Valley WAP-GW is a platform independent product and fully
              compliant with the WAP 2.0 standard. The two main advantages of
              WSP (Wireless session Protocol) over HTTP are coded headers and
              the support of push operations. WAP uses coded headers to reduce
              the amount of data that is transmitted over the air.
            </p>
            <h4>SMS Gateway</h4>
            <p>
              SMS gateway is a telecommunications network facility for sending
              or receiving Short Message Service (SMS) transmissions to or from
              a telecommunications network that supports SMS. Most messages are
              eventually routed into the mobile phone networks.
              <br />
              <br />
              Short Message Service (SMS) gateway is a mechanism by which SMS
              messages are sent and received. SMS gateways support
              inter-networking between SMS Centers (SMSC) that store forward,
              convert and deliver SMS messages. It is developed for
              multiprotocol communications, converting SMS protocols (if
              necessary), and allowing smooth messaging between subscribers of
              different carriers. Many SMS gateways support media conversion
              from email and other formats.
              <br />
              <br />
              Valley SMS provides access to Value Added Service Providers via
              SMS to the customers and has the capability of handling
              multifarious SMS application providers.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h4>Valley WAP-GW Features:</h4>
            <ul>
              <li>The main features of Valley WAP-GW are:</li>
              <ul>
                <li>Translation of HTTP protocol to WSP</li>
                <li>
                  Support of WTLS (security layer of WAP protocol standards)
                </li>
                <li>
                  Support of SSL Security Layer enabling end-to-end encryption
                </li>
                <li>
                  Deployment of any mobile network standard (GSM, CDMA etc.)
                </li>
                <li>
                  Supports of all IP based bearer services (GPRS, CDPD, CSD
                  etc.)
                </li>
                <li>Supports of WAP Push standard (PPG)</li>
                <li>Support of WML script compiling</li>
                <li>Support of HTML, cHTML, HDML and WML</li>
                <li>Support of WML to WBXML conversion</li>
                <li>
                  Image (GIF, JPEG, BMP etc.) adaptation to WBMP on the fly
                </li>
                <li>Support for HTTP cookies</li>
                <li>Mobile device specific optimizations based on UAProf</li>
              </ul>
            </ul>
          </MDBCol>
        </MDBRow>
      </section>

      <section id="products-CMS">
        <MDBRow>
          <MDBCol md="6">
            <h2>CMS (Content Management System)</h2>
            <p>
              In today's era CMS is a highly demanded service applicable to
              several industry domains. It is one of our proud offerings which
              we efficiently deliver to our clients. Valley CMS aggregates the
              contents from content providers through a web interface through
              which it catalogs the content and presents it to the end users
              through Web, WAP, USSD and SMS. Valley's ascendible and high
              performance CMS platform enables content owners to drive
              multifarious benefits by delivering and managing personalized, WEB
              and WAP content and applications. Valley CMS has complete control
              over the content it accepts from publishers and developers but can
              customize the content validation process according to the client's
              needs.
            </p>
            <h4>Features</h4>
            <ul>
              <li>Managing and engaging users and their content.</li>
              <li>Targeted advertisement.</li>
              <li>Multi-Content Downloading.</li>
              <li>
                Delivers Streaming media through live encoding / offline
                encoding.
              </li>
              <li>
                Complete Web-based administration with flexible Reporting Engine
                options.
              </li>
              <li>
                Meets high performance and scalability requirements of
                operators.
              </li>
              <li>
                Easily integrates into operator's existing network
                infrastructure including gateways, directories & billing
                systems.
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="6">
            <h4>CRBT (Caller Ring Back Tone)</h4>
            <p>
              Ring back tones (RBTs) are what callers hear while they wait for
              the person they called to answer the phone. Valley offers
              end-to-end services that allow your subscribers to personalize
              their RBTs with music, voice recordings and other types of audio
              content.
              <br />
              <br />
              Valley CRBT system consists of RBT system which lets subscribers
              hear ring-back tone and Contents & Media management system which
              manages ring-back tone contents so that service provider can
              easily manage and provide RBT service. The RBT system also has a
              RBT profile manager which keeps record of the user's subscription
              details like start of subscription, subscription plan (Default,
              Caller ID, Time, Shuffle, etc.) subscription renewal, tone
              subscription and tone renewal.
            </p>
            <h4>Features</h4>
            <ul>
              <li>
                Mobile subscribers can register and cancel RBT service through
                IVR, Web, WAP, SMS, and USSD.
              </li>
              <li>
                Subscribers can listen to a preview of the RBT on the WEB and
                IVR channel and then make a choice.
              </li>
              <li>
                Subscribers can record their voice via IVR and set the recording
                as their CRBT.
              </li>
              <li>
                Subscribers can search for a particular RBT Tone on IVR, SMS,
                WEB, and WAP.
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </section>

      <section id="products-device-tracking">
        <MDBRow>
          <MDBCol md="6">
            <h2>Device Tracking</h2>
            <p>
              ESN is a numeric identifier that uniquely identifies a CDMA phone.
              The ESN can typically be found written underneath a phone's
              battery and is generally written in both decimal and hexadecimal
              versions. The ESN is what a CDMA network uses to identify a phone
              and determine which subscriber's account, if any, it is linked to.
              Because of this, when switching from one phone to another,
              subscribers will have to provide the ESN of the new phone to the
              network carrier before it can be activated. This can often be done
              at the carrier's website. The ESN is slowly being phased out in
              favour of the MEID, a longer number that is compatible with the
              IMEI system used in GSM and UMTS phones. This is happening because
              phone manufacturers are literally running out of ESN identifiers.
              Valley ESN System has a very versatile O&M system as a
              pre-integrated module called VVMS (Valley Versatile Management
              System). Valley VVMS does real time system and application level
              monitoring and raise alarm via mode Phone Call, Alarms on Screen
              SMS and Email. Valley Supports both ESN and MEID based handsets.
            </p>
            <h4>
              The Valley ESN tracker facility is expected to meet following
              marketing needs:
            </h4>
            <ul>
              <li>Identify a handset model.</li>
              <li>Identify user handset buying trend.</li>
              <li>Inventory management and other logistics.</li>
            </ul>
          </MDBCol>
          <MDBCol md="4" className="d-flex  flex-column justify-content-center">
            <h4>Benefits</h4>
            <ul>
              <li>
                Lower TCO - Valley advanced device management makes sure that
                new devices work first time, out of the box, and are updated
                with new settings and application versions throughout their
                lifecycle.
              </li>
              <li>
                Cost-effective front-line customer care - Allows application
                management and self-care facilities from your web portal
                interface.
              </li>
              <li>Greater customer satisfaction and retention.</li>
              <li>Superior market intelligence for targeted services.</li>
              <li>
                Seamless integration with existing network and back-office
                infrastructure.
              </li>
            </ul>
            <img
              src="./Assets/Images/products/telecom/2.jpg"
              alt="telecom 4G OTA"
              className="products-device-tracking-img"
            />
          </MDBCol>
        </MDBRow>
      </section>

      <section id="products-subscription">
        <MDBRow>
          <MDBCol
            md="12"
            className="d-flex  flex-column justify-content-center align-items-center"
          >
            <img
              src="./Assets/Images/products/telecom/subscription-engine.jpg"
              alt="Subscription Engine"
              className="products-subscription-img"
            />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md="6">
            <h2>Subscription Engine</h2>
            <p>
              Valley Subscription Engine provides hassle free subscription
              management for on-net as well off-net content/services partners.
              Service provider need not worry about charging, rating, renewal,
              un-subscription, different pricing policies, credit policies to
              subscriber, discounts, metering rules etc.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h4>Features</h4>
            <ul>
              <li>Web-based subscriber and content management tools</li>
              <li>
                Accept service requests through multiple channels (WAP, SMS,
                USSD, Web, IVR)
              </li>
              <li>Automated opt-in and opt-out for users</li>
              <li>Support promotions and campaigns</li>
              <li>Externalization of rating with centralized rating engine</li>
              <li>
                Subscription discovery and delivery of on-net, off-net, and
                near-net content
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </section>
    </section>
  );
}
