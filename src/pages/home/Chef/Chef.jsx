import React from "react";
import { Row } from "react-bootstrap";
import ChefCard from "./ChefCard";

const Chef = ({ chefData }) => {
  return (
    <div className="my-3">
      <h3 className="text-center fw-bold">Cooking Master's</h3>
      <p className="text-center fw-bold"> All Chef are here</p>
      <Row xs={1} md={3} className="g-4">
        {chefData.map((chef) => (
          <ChefCard key={chef.chef_id} chef={chef}></ChefCard>
        ))}
      </Row>
    </div>
  );
};

export default Chef;
