import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { RotatingLines } from "react-loader-spinner";
import ChefCard from "./ChefCard";

const Chef = () => {
  const [chefData, setChefData] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetch("https://cooking-master-server-mahadi61.vercel.app/")
      .then((res) => res.json())
      .then((data) => setChefData(data));
    setLoader(false);
  }, []);

  return (
    <div className="my-3">
      <h3 className="text-center fw-bold">Cooking Master's</h3>
      <p className="text-center fw-bold"> All Chef are here</p>
      {loader ? (
        <div className="text-center">
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        </div>
      ) : (
        <Row xs={1} md={3} className="g-4">
          {chefData.map((chef) => (
            <ChefCard key={chef.chef_id} chef={chef}></ChefCard>
          ))}
        </Row>
      )}
    </div>
  );
};

export default Chef;
