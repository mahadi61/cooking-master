import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const LatestRecipes = () => {
  return (
    <div className="">
      <h3 className="text-center">Latest Recipes</h3>
      <Row className="my-3">
        <Col sm={6}>
          <Card>
            <Card.Img
              variant="top"
              className="w-100"
              src="https://i.ibb.co/zV6GcHz/author-banner.jpg"
              alt="food image"
            />
            <Card.Body>
              <Card.Text>
                <h3 className="text-center">Biriyani</h3>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6}>
          <Card>
            <Card.Img
              variant="top"
              className="w-100"
              src="https://i.ibb.co/LngMGKk/food4.png"
              alt="food image"
            />
            <Card.Body>
              <Card.Text>
                <h3 className="text-center">Butter Chicken</h3>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default LatestRecipes;
