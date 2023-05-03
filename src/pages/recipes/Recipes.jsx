import React from "react";
import RecipeCard from "./RecipeCard";
import { Row } from "react-bootstrap";

const Recipes = ({ recipe }) => {
  return (
    <Row xs={1} sm={4} className="g-3 my-3">
      {recipe.map((singleRecipe) => (
        <RecipeCard
          key={singleRecipe.recipe_id}
          singleRecipe={singleRecipe}
        ></RecipeCard>
      ))}
    </Row>
  );
};

export default Recipes;
