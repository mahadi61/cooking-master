import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../pages/home/Banner/Banner";
import Footer from "../shared/Footer/Footer";
import Header from "../shared/Header/Header";

const Main = () => {
  return (
    <div>
      <Container>
        <Header></Header>
      </Container>
      <Banner></Banner>

      <Footer></Footer>
    </div>
  );
};

export default Main;
