import React from "react";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <div className="">
      <Carousel variant="dark">
        <Carousel.Item className="">
          <img
            className="d-block w-100"
            src="https://i.ibb.co/cNf62xy/Butter-Chicken.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5 className="text-white fs-3">First slide label</h5>
            <p className="text-white fs-4">
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/9bc8HJ6/delicious-indian-food-tray.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/4gvmzYP/whole-chicken-grill-served-with-rice-garnish-white-plate.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
