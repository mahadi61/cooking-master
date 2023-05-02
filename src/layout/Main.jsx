import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../shared/Footer/Footer";
import Header from "../shared/Header/Header";
import Home from "../pages/home/Home/Home";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Container>
        <Header></Header>
      </Container>

      <Outlet></Outlet>

      <Footer></Footer>
    </div>
  );
};

export default Main;
