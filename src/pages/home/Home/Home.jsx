import React from "react";
import { Container } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import RecipeList from "../All recipes/RecipeList";
import Banner from "../Banner/Banner";
import Chef from "../Chef/Chef";

const Home = () => {
  const chefData = useLoaderData();
  return (
    <div>
      <Container>
        <Banner></Banner>
        <Chef chefData={chefData}></Chef>
        <RecipeList></RecipeList>
      </Container>
    </div>
  );
};

export default Home;
