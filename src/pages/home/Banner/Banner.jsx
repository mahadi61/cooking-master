import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";
const Banner = () => {
  return (
    <Carousel style={{ height: "100vh" }} variant="dark">
      <Carousel.Item>
        <div className="position-relative">
          <img
            style={{ height: "100vh" }}
            className="w-100 z-n1"
            src="https://i.ibb.co/cNf62xy/Butter-Chicken.jpg"
            alt="First slide"
          />
          <div
            className="position-absolute"
            style={{ height: "100vh", backgroundColor: "black" }}
          ></div>
        </div>
        <Carousel.Caption className="">
          <h5 className="banner-title  fs-1 fw-bold">Find Your Recipe Here</h5>
          <p className="text-white fs-4 fw-bold">
            Most experienced Chef are available here
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: "100vh" }}
          className="w-100"
          src="https://i.ibb.co/9bc8HJ6/delicious-indian-food-tray.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5 className="banner-title  fs-1 fw-bold">Find Your Recipe Here</h5>
          <p className="text-white fs-4 fw-bold">
            Most experienced Chef are available here
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: "100vh" }}
          className="w-100"
          src="https://i.ibb.co/4gvmzYP/whole-chicken-grill-served-with-rice-garnish-white-plate.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5 className="banner-title  fs-1 fw-bold">Find Your Recipe Here</h5>
          <p className="text-white fs-4 fw-bold">
            Most experienced Chef are available here
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
