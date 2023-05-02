import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Recipes = () => {
  const { id } = useParams();
  const recipe = useLoaderData();
  const [chefData, setChefData] = useState({});
  const {
    chef_id,
    chef_picture,
    chef_name,
    years_of_experience,
    num_of_recipes,
    likes,
    chef_short_bio,
  } = chefData;
  useEffect(() => {
    fetch(`http://localhost:5000/${id}`)
      .then((res) => res.json())
      .then((data) => setChefData(data));
  }, []);
  // console.log(recipe);
  // console.log(id);
  return <div></div>;
};

export default Recipes;
