import React, { useEffect, useState } from "react";
import "./Products.scss";
import { useLocation } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar_component from "../Navbar/Navbar_component";
import Footer from "../Footer/Footer";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Products_3ph_faq from "./Products_3ph_faq";

export default function Products_solar() {
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

  const solardata = [
    {
      img: "./Assets/Images/products/solar3.png",
      title: "LED LIGHTING",
      imgsize: "200",
      description:
        "Luminaires of all types can be used. They can be controlled remotely or triggered by specified actionsconfigured in software",
    },
    {
      img: "./Assets/Images/products/solar4.png",
      title: "WI-FI Hotspots",
      imgsize: "175",
      description:
        "are available for many uses. Fully customizable as Free, Limited Access, or Prepaid WiFi",
    },
    {
      img: "./Assets/Images/products/solar5.png",
      title: "HI-DEF CAMERAS",
      imgsize: "150",
      description:
        "360º surveillance with panoramic sensors, PTZ, and fixed cameras - part of our Smart Pole's innovations in video security.",
    },
    {
      img: "./Assets/Images/products/solar6.png",
      imgsize: "110",
      title: "BATTERY BACKUP MPS",
      description:
        "Smart Poles can use AGM or Lithium batteries for continuous operation during power outages",
    },
    {
      img: "./Assets/Images/products/solar7.png",
      imgsize: "90",
      title: "COMMUNICATIONS",
      description:
        "All Smart Pole functions accessible, monitored, and controlled remotely via communication tech",
    },
  ];

  return (
    <section className="products-solar">
      <Navbar_component />
      <p className="products-solar-title">Solar Charge Controllers</p>
      <p className="products-solar-heading">
        Efficient Energy Management for Solar Panel Systems.
      </p>
      <section id="products-smart-pole-overview">
        <h1 className="products-smart-pole-overview-title">
          Smart Pole Overview
        </h1>
        <div className="products-smart-pole-overview-div">
          <img
            src="./Assets/Images/products/solar1.jpg"
            alt=""
            className="products-smart-pole-overview-img"
          />
          <p className="products-smart-pole-overview-description">
            The <b>Smart Pole</b> is a turn-key <b>Smart</b> Product, utilizing
            MPS technologies embedded within steel and aluminum <b>poles</b> for
            public safety, anti-theft, crime prevention, surveillance,
            anti-terrorism and numerous lighting applications. The smart pole
            system has various advantages over conventional street lights such
            as reduced maintenance <b>costs</b>, real-time reports and
            controllability, less environmental impact, and expendable
            infrastructure and scalability
          </p>
        </div>
        <div className="products-smart-pole-overview-content">
          <h3>SMART POLE OPTIONS & BENEFITS:</h3>
          <div className="products-smart-pole-overview-content-div">
            {solardata.map((item, index) => (
              <div
                className="products-smart-pole-overview-content-div-details"
                key={index}
              >
                <img
                  src={item.img}
                  alt=""
                  className="products-smart-pole-overview-content-div-details-img"
                  width={item.imgsize}
                />

                <div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <img
          src="./Assets/Images/products/solar2.png"
          className="products-smart-pole-lastimg"
          alt=""
        />
      </section>
      <section id="products-SPV">
        <h1>
          HYBRID SOLAR PHOTO VOLTAIC (SPV)
          <br /> POWER SUPPLY
        </h1>
        <img
          src="./Assets/Images/products/solar8.jpg"
          alt=""
          className="products-SPV-img"
        />
        <h4>TSEC Approved against GR No.# TEC/GR/TX/SPV-002/04/MAR-16</h4>
      </section>
      <section id="products-GPON">
        <h1 className="products-GPON-title">
          TSEC Approved:
          <br /> GPON Hybrid Power supply
        </h1>
        <div className="products-GPON-content">
          <div>
            <h4>
              Valley Telegence Pvt. Ltd has developed Hybrid solar charge
              controller against for GPON to provide 24x7 power from Grid &
              Solar with Solar priority.
            </h4>
            <p>
              <b>The major features are</b>
              <ul>
                <li>
                  AC grid Charger enables only when battery is low (Solar
                  Priority)
                </li>
                <li>
                  AC Charging current can be configured for 15Ah to 75Ah battery
                </li>
                <li>
                  Load can be configured from 1 to 4 Amp as per equipment
                  connection using battery current setting switch
                </li>
              </ul>
            </p>
          </div>
          <img src="./Assets/Images/products/solar9.jpg" alt="" />
        </div>

        <h3>General Specifications</h3>
        <div className="products-GPON-content-ul">
          <ul>
            <b>1) Features</b>
            <li>Solar & AC Grid Charging against power situation</li>
            <li>High priority to Solar Charging</li>
            <li>Low priority to AC grid but both can charge at a time</li>
            <li>PWM solar Charging</li>
            <li>Load can run from Solar, AC or mixed of both & Battery</li>
            <li>Nano Technology based intelligent Micro- controller</li>
          </ul>
          <ul>
            <b>2) Protections</b>
            <li>Input surge voltage protection above 275V AC</li>
            <li>Over current (Solar, Battery & DC Load)</li>
            <li>Battery reverse polarity protection</li>
            <li>Over charging/ Under voltage for battery</li>
            <li>Output shutdown at 110% load for more than 10 Sec</li>
            <li>Against short circuit, shutdown within 10mS.</li>
            <li>
              Output protected against complete short & back to normal against
              removal
            </li>
            <li>
              Output shutdown against Voltage &gt; 14V on battery terminal.
            </li>
          </ul>
        </div>
      </section>
      <section id="products-hybrid-solar-power">
        <h1 className="products-hybrid-solar-power-title">
          Hybrid Solar Power For
          <br /> Telecom Equipments
        </h1>
        <div className="products-hybrid-solar-power-CarouselProvider">
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={150}
            totalSlides={4}
            infinite={true}
          >
            <Slider>
              <Slide index={0}>
                <div className="products-hybrid-solar-power-slider">
                  <div>
                    <h3>Working of Solar Hybrid Power System</h3>
                    <h4>Advantages</h4>
                    <ul>
                      <li>Customized power design as per application</li>
                      <li>High reliability as customized for application</li>
                      <li>Ensuring power up 24x7 & 365days an year</li>
                      <li>Integrated System in Single Unit</li>
                      <li>High Efficiency, Minimal Power Wasting Design</li>
                      <li>Different Power Outputs as per Requirements</li>
                      <li>Integration with Cloud Monitoring & Reporting </li>
                    </ul>
                  </div>
                  <img
                    src="./Assets/Images/products/1/1.png"
                    className="products-hybrid-solar-power-img"
                    alt=""
                  />
                </div>
              </Slide>
              <Slide index={1}>
                <div className="products-hybrid-solar-power-slider">
                  <div>
                    <h3>OLTs Powering system</h3>
                    <h4>System key Features</h4>
                    <ul>
                      <li>
                        Designed to power OLT’s 24x7 independent of Grid Supply.
                      </li>
                      <li>System can be modified as per requirements</li>
                      <li>
                        Power Data can be provided through USB, RS232C, or any
                        other media
                      </li>
                      <li>
                        System designed to provide maintenance-free life up to 5
                        years
                      </li>
                      <li>Solar used as a primary power source</li>
                    </ul>
                  </div>
                  <img
                    src="./Assets/Images/products/1/2.png"
                    className="products-hybrid-solar-power-img"
                    alt=""
                  />
                </div>
              </Slide>
              <Slide index={2}>
                <div className="products-hybrid-solar-power-slider">
                  <div>
                    <h3>ONTs Powering system</h3>
                    <h4>System key Features</h4>
                    <ul>
                      <li>
                        Designed to power ONT’s 24x7 independent of Grid Supply.
                      </li>
                      <li>
                        Designed specifically for ONT system as per BBNL
                        requirements.
                      </li>
                      <li>
                        Power Data is provided using USB as per ITI’s server
                        synchronization.
                      </li>
                      <li>Can connect up to 5 ONT’s on single system.</li>
                      <li>Already supplying to ITI for installation.</li>
                    </ul>
                  </div>
                  <img
                    src="./Assets/Images/products/1/3.png"
                    className="products-hybrid-solar-power-img"
                    alt=""
                  />
                </div>
              </Slide>
              <Slide index={3}>
                <div className="products-hybrid-solar-power-slider">
                  <div>
                    <h3>Wi-Fi/CCTV/P2P Powering system</h3>
                    <h4>System key Features</h4>
                    <ul>
                      <li>Power Over Ethernet (POE) Based</li>
                      <li>Hybrid Solar Controllers.</li>
                      <li>POE outputs Gigabit complied</li>
                      <li>
                        Designed specifically for systems like CCTV, Wi-Fi
                        Hotspots, Point to point devices
                      </li>
                      <li>
                        Power Data is provided using USB / Wi-Fi or any other
                        medium
                      </li>
                      <li>
                        Multiple Output options available to connect multiple
                        devices on a single location using single controller
                      </li>
                      <li>Can be further customized as per requirement</li>
                    </ul>
                  </div>
                  <img
                    src="./Assets/Images/products/1/4.png"
                    className="products-hybrid-solar-power-img"
                    alt=""
                  />
                </div>
              </Slide>
            </Slider>
          </CarouselProvider>
        </div>
      </section>
      <section id="products-valley-solar-hybrid">
        <h1>
          Valley Solar Hybrid Power backup
          <br /> Solution for Smart Classes
        </h1>
        <div className="products-valley-solar-hybrid-content">
          <div>
            <h4>Advantages</h4>
            <ul>
              <li>
                Unintrupted classes during the Power cuts, Works on Solar,
                Battery
              </li>
              <li>Reliable Power source</li>
              <li>High Efficient Product</li>
              <li>Also power up Smart TV, BLDC Fan & LED Tube lights</li>
              <li>Smart integrated solution for all needs</li>
            </ul>
          </div>
          <img src="./Assets/Images/products/5/1.png" alt="" />
        </div>
      </section>
      <section id="products-technical-specification-of-mobile-tablet-charging-rack">
        <h1>
          Technical Specification of <br />
          Mobile/TabIet Charging Rack
        </h1>
        <div className="products-technical-specification-of-mobile-tablet-charging-rack-content">
          <img src="./Assets/Images/products/6/1.png" alt="" />
          <div className="products-technical-specification-of-mobile-tablet-charging-rack-content-points">
            <ol>
              <li>
                Rack Capacity to cater 44 Mobile/Tablet Charging at a time
              </li>
              <li>Height of Rack 1 Mtr</li>
              <li>Depth & Width 540x540mm</li>
              <li>Wheel for Easy Movement one place to another</li>
              <li>
                3 Nos Dedicated Charging Section on each Tray that shall Charge
                14 Tablet/Mobile at a time.
              </li>
              <li>One Drawer for Keeping essential Items with lock and key</li>
              <li>
                For Durability Made in 1.2mm thickness CRCA sheet with Powder
                Coated.
              </li>
              <li>
                MCB is Given for Short Circuit Protection with surge Protection
                in All Power Distribution Unit (PDU).
              </li>
              <li>
                The Panel-Mount Digital Timer Series can be operated in 4
                Separate Power supplies, ranging from 240Vac to 12Vdc. Output
                format can be Produced to be Volt-free or voltaic-output.
              </li>
              <li>
                Batteries of Lithium for option which is for retaining the
                Programming during Timer's operating power disconnected.
              </li>
              <li>
                This Digital Timer is Accurate to the Minute. Designed with
                either 16 ON/Off (events) per day also, it provides
                15-combination of Daily-Programs which can lead to great
                convenience for users when choosing the required days in a week
                for operating the timer.
              </li>
              <li>
                Input Voltage
                <ul>
                  <li>IOOV-130Vac 20A/125Vac</li>
                  <li>200V-250Vac 8AFLA, 250Vac</li>
                  <li>24Vac/dc 0.5HP 250/125Vac</li>
                  <li>12Vac/dc 16A/30VDC</li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>120Vac + 10%</li>
                  <li>240Vac</li>
                  <li>24Vac/Vdc</li>
                  <li>12Vdc</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </section>
      <section id="products-3Ph-phase-VFD-inverter">
        <h1 className="products-3Ph-phase-VFD-inverter-title">
          Solar 3Ph Phase VFD Inverter
        </h1>
        <div className="products-3Ph-phase-VFD-inverter-div">
          <p>
            Pumping of the water, Compressor based cooling & many different
            applications has become a basic need of today’s life style along
            with electrical power for the rural economy.
            <br /> It has to meet all requirements of 24x7 for basic power and
            high-power needs when sun is available. Sun power is varying along
            day time but many of the equipment’s requires constant power to run
            them efficiently which can not be taken care by a system which is
            working only with solar power.
            <br /> To compensate this shortage of power, system has a provision
            for small battery bank which will provide popup power to run
            equipment run at constant speed.
          </p>
          <img src="./Assets/Images/products/7/1.png" alt="" />
        </div>
        <img src="./Assets/Images/products/7/2.png" alt="" />
        <Products_3ph_faq />
        {/* <div className="products-3Ph-phase-VFD-inverter-div2">
          <h3>Applications</h3>
          <ul>
            <li>
              A. 3 Phase Output
              <ol>
                <li>
                  Runs various agrarian applications from solar such as pump,
                  thresher, chaff cutter, atta chakki, milk storage, different
                  type of cooling systems etc.
                </li>
                <li>
                  It can support a variety of motors like Induction, PMSM, S4RM,
                  etc., and a variety of pumps like Surface, Submersible,
                  helical, etc.
                </li>
              </ol>
            </li>
            <li>
              B. Single Phase Output
              <ol>
                <li>
                  General lighting application for everyday use 24x7 operations.
                </li>
                <li>Single-phase air conditioner can be operated.</li>
                <li>Single motors for different applications.</li>
              </ol>
            </li>
          </ul>
        </div> */}
      </section>
    </section>
  );
}
