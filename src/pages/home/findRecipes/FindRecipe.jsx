import React from "react";
import { Button } from "react-bootstrap";

const FindRecipe = () => {
  return (
    <div className="mb-3">
      <h3 className="text-center">Find Recipes</h3>
      <div className="position-relative ">
        <img
          className="w-100 rounded"
          src="https://i.ibb.co/9bc8HJ6/delicious-indian-food-tray.jpg"
          alt="side image"
        />
        <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
          <input placeholder="What do you want to eat?" className="px-3 my-3" />
          <Button variant="danger" className="fw-bold">
            Find Recipe
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FindRecipe;
