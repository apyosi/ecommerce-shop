import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <article className="card col-md-4 col-sm-6 border-0" >
      <div className="text-center w-100 p-2 border border-0 border-light ">
        <Link to={`${item.id}`}>
          <img src={item.image} className="img-thumbnail border border-1 border-white" width="300px" height="300px" alt={item.id} />
        </Link>
        <Link to={`${item.id}`}>
          <h3 className="card-title">{item.title}</h3>
        </Link>
        <p className="card-text">{item.description}</p>
      </div>
    </article>
  );
};

export default Card;
