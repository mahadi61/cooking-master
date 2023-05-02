import React from "react";
import { Container } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Chef from "../Chef/Chef";
import Banner from "../Banner/Banner";

const Home = () => {
  const chefData = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <Container>
        <Chef chefData={chefData}></Chef>
      </Container>
    </div>
  );
};

export default Home;
