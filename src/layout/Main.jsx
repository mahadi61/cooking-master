import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import Header from "../shared/Header/Header";

const Main = () => {
  return (
    <div>
      <Header></Header>
      {/* In outlet there is all pages */}
      <Outlet></Outlet>

      <div className="footer-bg py-4">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
