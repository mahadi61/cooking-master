import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)),url(https://i.ibb.co/fvDf7VQ/banner1.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",

        height: "90vh",
      }}
    >
      <div className="ms-auto">
        <h2>Awsome receopue</h2>
      </div>
    </div>
  );
};

export default Banner;
