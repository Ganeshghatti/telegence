import React from "react";
import "./Customers.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Customers() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 2,
    },
  };
  const imageStyles = {
    pointerEvents: "none",
    margin:"auto"
  };
  return (
    <section className="customers">
      <p className="customers-title">
        We are blessed to work with amazing
        <br /> brands worldwide
      </p>
      <div className="customers-container">
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          customTransition="all 5"
          transitionDuration={500}
          arrows={false}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          focusOnSelect={false}
        >
          <img
            src="./Assets/Images/clients/mts.png"
            alt=""
            style={imageStyles}
          />
          <img
            src="./Assets/Images/clients/bsnl.png"
            alt=""
            style={imageStyles}
          />
          <img
            src="./Assets/Images/clients/BBNL.png"
            alt=""
            style={{ ...imageStyles, width: "75px" }}
          />

          <img
            src="./Assets/Images/clients/docomo.png"
            alt=""
            style={imageStyles}
          />
          <img
            src="./Assets/Images/clients/download.png"
            alt=""
            style={{ ...imageStyles, width: "75px" }}
          />
          <img
            src="./Assets/Images/clients/huawei.png"
            alt=""
            style={imageStyles}
          />
          <img
            src="./Assets/Images/clients/idea.png"
            alt=""
            style={imageStyles}
          />
          <img
            src="./Assets/Images/clients/liero.png"
            alt=""
            style={imageStyles}
          />
          <img
            src="./Assets/Images/clients/mtnl.png"
            alt=""
            style={imageStyles}
          />
          <img
            src="./Assets/Images/clients/tata-indicom.png"
            alt=""
            style={imageStyles}
          />
          <img
            src="./Assets/Images/clients/ericsson.png"
            alt=""
            style={imageStyles}
          />
          <img
            src="./Assets/Images/clients/eritel.png"
            alt=""
            style={imageStyles}
          />
          <img
            src="./Assets/Images/clients/iti.png"
            alt=""
            style={imageStyles}
          />
          <img
            src="./Assets/Images/clients/ncell.png"
            alt=""
            style={imageStyles}
          />
          <img
            src="./Assets/Images/clients/nimbus.png"
            alt=""
            style={imageStyles}
          />
          <img
            src="./Assets/Images/clients/railtail.png"
            alt=""
            style={imageStyles}
          />
          <img
            src="./Assets/Images/clients/telekom.png"
            alt=""
            style={imageStyles}
          />
        </Carousel>
      </div>
    </section>
  );
}
