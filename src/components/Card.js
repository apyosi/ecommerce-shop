import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item, category }) => {

  return (
  
    <article className="">
      <div className="card flex flex-col m-3 p-4 justify-items-end align-items-center border-2 border-purple-600">
            <Link to={`/${category}/${item.id}`}>
              <img
                src={item.thumbnail}
                className="overflow-hidden my-2 border-black border-solid w-96 h-96 object-cover"
                width="300px"
                height="300px"
                alt={item.id}
              />
            </Link>
            <Link to={`/${category}/${item.id}`}>
              <h3 className="card-title font-medium font-sans p-1">{item.title}</h3>
            </Link>
        <p className="card-text ">
        <span className="font-bold">Price:</span>  £{item.price}
        </p>
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
