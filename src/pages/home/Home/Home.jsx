import React from "react";
import { Container } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import LatestRecipeLayout from "../../../layout/LatestRecipeLayout";
import Banner from "../Banner/Banner";
import Chef from "../Chef/Chef";
import PopularRecipes from "../popularRecipes/PopularRecipes";

const Home = () => {
  const chefData = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <Container>
        <Chef chefData={chefData}></Chef>
        <PopularRecipes></PopularRecipes>
        <LatestRecipeLayout></LatestRecipeLayout>
      </Container>
    </div>
  );
};

export default Home;
