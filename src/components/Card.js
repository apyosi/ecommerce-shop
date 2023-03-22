import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ item, category }) => {

  return (
  
    <article className="">
      <div className="card flex bg-slate-50 flex-col m-3 p-3 justify-items-end align-items-center border-0 shadow-xl">
            <Link to={`/${category}/${item.id}`}>
              <img
                src={item.thumbnail}
                className="overflow-hidden my-2 border-black border-solid w-80 h-80 object-cover"
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

export default Cards;
