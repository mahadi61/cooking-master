import React from "react";
import { Container } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Chef from "../Chef/Chef";
import Recipes from "../../recipes/Recipes";

const Home = () => {
  const chefData = useLoaderData();
  return (
    <div>
      <Container>
        <Banner></Banner>
        <Chef chefData={chefData}></Chef>
        <Recipes></Recipes>
      </Container>
    </div>
  );
};

export default Home;
