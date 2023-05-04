import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { RotatingLines } from "react-loader-spinner";
import LatestRecipeLayout from "../../../layout/LatestRecipeLayout";
import Banner from "../Banner/Banner";
import Chef from "../Chef/Chef";
import PopularRecipes from "../popularRecipes/PopularRecipes";

const Home = () => {
  const [chefData, setChefData] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    fetch("https://cooking-master-server-mahadi61.vercel.app/")
      .then((res) => res.json())
      .then((data) => setChefData(data));
    setLoader(false);
  }, []);

  // spinner
  if (loader) {
    return (
      <div className="text-center">
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      </div>
    );
  }

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
