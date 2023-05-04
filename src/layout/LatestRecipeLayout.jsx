import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import LatestRecipes from "../pages/home/latestRecipes/LatestRecipes";
import FindRecipe from "../pages/home/findRecipes/FindRecipe";

const LatestRecipeLayout = () => {
  return (
    <Container>
      <Row>
        <Col sm={8}>
          <LatestRecipes></LatestRecipes>
        </Col>
        <Col sm={4}>
          <FindRecipe></FindRecipe>
        </Col>
      </Row>
    </Container>
  );
};

export default LatestRecipeLayout;
