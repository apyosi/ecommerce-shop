import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item, category }) => {
  return (
    <article className="flex  align-items-start border-purple-600 border-solid border-1  m-3">
      <div className="flex flex-col gap-2 justify-items-start align-items-center border-black border-solid border-0 p-3">
        <Link to={`/${category}/${item.id}`}>
          <img
            src={item.thumbnail}
            className="overflow-hidden rounded-3xl border-2 border-purple-600 border-solid"
            width="300px"
            height="300px"
            alt={item.id}
          />
        </Link>
        <Link to={`/${category}/${item.id}`}>
          <h3 className="text-xl">{item.title}</h3>
        </Link>
        <p className="text-xl text-red-700 font-bold">${item.price}</p>
        {/* <p className="card-text">
          <b>Category:</b> {item.category}
        </p> */}
        <p className="card-text">
          <b>Brand:</b> {item.brand}
        </p>
        {/* <p className="card-text">{item.description}</p> */}
      </div>
    </article>
  );
};

export default Card;
