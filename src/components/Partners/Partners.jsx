import React from "react";
import "./Partners.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Partners() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1,
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
  };
  return (
    <section className="partners">
      <p className="partners-title">Our Partners</p>
      <div className="partners-container">
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
          <div className="partners-container-logos"></div>
          <img
            src="./Assets/Images/partners2/cambium.png"
            alt=""
            style={{ ...imageStyles, width: "150px" }}
          />
          <img
            src="./Assets/Images\partners2\hfcl.png"
            alt="rtynhsrjtu,zk7ejsuy"
            style={{ ...imageStyles, width: "100px" }}
          />
          <img
            src="./Assets/Images/partners2/hight8.png"
            alt=""
            style={{ ...imageStyles, width: "120px" }}
          />
          <img
            src="./Assets/Images/partners2/hp.png"
            alt=""
            style={{ ...imageStyles, width: "150px" }}
          />
          <img
            src="./Assets/Images/partners2/quantum.png"
            alt=""
            style={{ ...imageStyles, width: "250px" }}
          />
        </Carousel>
      </div>
    </section>
  );
}
