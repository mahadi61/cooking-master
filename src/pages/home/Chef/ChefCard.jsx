import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { BiLike } from "react-icons/bi";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";
const ChefCard = ({ chef }) => {
  const {
    chef_id,
    chef_picture,
    chef_name,
    years_of_experience,
    num_of_recipes,
    likes,
    chef_short_bio,
  } = chef;
  return (
    <Col>
      <Card className="d-flex flex-column justify-content-between">
        <div className="text-center">
          <LazyLoad>
            <img
              style={{ height: "400px" }}
              className="mt-4 border rounded"
              src={chef_picture}
            />
          </LazyLoad>
        </div>
        <Card.Body>
          <Card.Title className="text-center fw-bold fs-2 ">
            {chef_name}
          </Card.Title>
          <div className="d-flex justify-content-between">
            <span className=" fw-bold">
              Experience: {years_of_experience} years
            </span>
            <span className="">
              <BiLike className="" /> {likes}
            </span>
          </div>

          <Card.Text className="">{chef_short_bio}</Card.Text>
          <p className="d-flex align-items-center justify-content-between fs-4">
            <span>Total recipes: {num_of_recipes}</span>
          </p>
          <Link to={`/recipes/${chef_id}`}>
            <Button className="brand-color-bg fw-bold border border-0">
              View Recipes
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ChefCard;
