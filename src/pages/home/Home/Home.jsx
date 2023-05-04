import React from "react";
import { Container } from "react-bootstrap";
import LatestRecipeLayout from "../../../layout/LatestRecipeLayout";
import Banner from "../Banner/Banner";
import Chef from "../Chef/Chef";
import PopularRecipes from "../popularRecipes/PopularRecipes";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Container>
        <Chef></Chef>
        <PopularRecipes></PopularRecipes>
        <LatestRecipeLayout></LatestRecipeLayout>
      </Container>
    </div>
  );
};

export default Home;
