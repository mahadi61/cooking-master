import React from "react";
import { BiLike } from "react-icons/bi";

const RecipeChef = ({ chefData }) => {
  const {
    chef_id,
    chef_picture,
    chef_name,
    years_of_experience,
    num_of_recipes,
    likes,
    chef_short_bio,
  } = chefData;

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(https://i.ibb.co/zV6GcHz/author-banner.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",

        height: "430px",
        borderRadius: "8px",
      }}
      className="d-flex flex-column flex-md-row text-white py-3 px-4 my-3"
    >
      <div>
        <img
          style={{ height: "400px" }}
          className="rounded w-100"
          src={chef_picture}
          alt=""
        />
      </div>
      <div className="w-75 ms-3  my-auto  ">
        <h4 className="fs-1 fw-bold">{chef_name}</h4>
        <p className="fw-bold">Experience: {years_of_experience} years</p>
        <p className="fs-4">{chef_short_bio}</p>
        <p className="fw-bold">
          Total Like: <BiLike className="fs-4" />
          {likes}
        </p>
      </div>
    </div>
  );
};

export default RecipeChef;
