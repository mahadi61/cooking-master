import React, { useState } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { BsFillStarFill, BsStar } from "react-icons/bs";
import Rating from "react-rating";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RecipeCard = ({ singleRecipe }) => {
  const { cooking_method, rating, recipe_id, recipe_name, ingredients } =
    singleRecipe;

  const [id, setId] = useState("");

  const handleDisable = (id) => {
    setId(id);
    toast("The recipe is your favorite!");
  };
  return (
    <Col>
      <Card
        style={{ minHeight: "500px" }}
        className="d-flex flex-column shadow bg-body rounded"
      >
        <Card.Body>
          <Card.Title className="text-center fw-bold">{recipe_name}</Card.Title>
          <Card.Text>
            <span className="fw-bold">Ingredients:</span>{" "}
            <ul>
              {ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Card.Text>
          <Card.Text>
            <span className="fw-bold">Cooking Method:</span> {cooking_method}
          </Card.Text>
        </Card.Body>

        <p className="ms-3">
          <span className="text-warning">
            <Rating
              className="me-2"
              placeholderRating={rating}
              emptySymbol={<BsStar />}
              placeholderSymbol={<BsFillStarFill />}
              fullSymbol={<BsFillStarFill />}
              readOnly
            />
          </span>{" "}
          {rating}
        </p>

        <Button
          onClick={() => handleDisable(recipe_id)}
          className="w-100 btn-danger footer-primary fw-bold text-white"
          disabled={recipe_id == id}
        >
          Favorite
        </Button>
        <ToastContainer
          position="top-center"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </Card>
    </Col>
  );
};

export default RecipeCard;
