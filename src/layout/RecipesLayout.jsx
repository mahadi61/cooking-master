import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLoaderData, useParams } from "react-router-dom";
import RecipeChef from "../pages/recipes/RecipeChef";
import Recipes from "../pages/recipes/Recipes";

const RecipesLayout = () => {
  const { id } = useParams();
  const recipe = useLoaderData();
  const [chefData, setChefData] = useState({});
  const { chef_name } = chefData;
  useEffect(() => {
    fetch(`https://cooking-master-server-mahadi61.vercel.app/${id}`)
      .then((res) => res.json())
      .then((data) => setChefData(data));
  }, []);
  return (
    <Container>
      <Row>
        <RecipeChef chefData={chefData}></RecipeChef>
      </Row>
      <Row className="justify-content-md-center">
        <Col>
          <h3 className="text-center">Recipes of {chef_name}</h3>
          <Recipes recipe={recipe}></Recipes>
        </Col>
      </Row>
    </Container>
  );
};

export default RecipesLayout;
