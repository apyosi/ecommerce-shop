import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item, category }) => {

  return (
    <article className="border-black border-solid border">
      <div className="flex flex-col justify-items-end align-align-items-center">
        {category && (
          <>
            <Link to={`${category}/${item.id}`}>
              <img
                src={item.thumbnail}
                className="overflow-hidden rounded-3xl border border-black border-solid"
                width="300px"
                height="300px"
                alt={item.id}
              />
            </Link>
            <Link to={`${category}/${item.id}`}>
              <h3 className="card-title">{item.title}</h3>
            </Link>
          </>
        )}
        {!category && (
            <>
              <Link to={`${item.id}`}>
                <img
                  src={item.thumbnail}
                  className="img-thumbnail border border-1 border-white"
                  width="300px"
                  height="300px"
                  alt={item.id}
                />
              </Link>
              <Link to={`${item.id}`}>
                <h3 className="card-title">{item.title}</h3>
              </Link>
            </>
          )
        }
        <p className="card-text">
           ${item.price}
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
