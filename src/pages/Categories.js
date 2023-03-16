import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = [
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
    "furniture",
    "tops",
    "womens-dresses",
    "womens-shoes",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "womens-watches",
    "womens-bags",
    "womens-jewellery",
    "sunglasses",
    "automotive",
    "motorcycle",
    "lighting",
  ];
  return (
    <>
      <h1>Product Categories</h1>

      {categories.map((item) => (
        <ul>
          <li>
            <Link to={item}>
              <h3>{item}</h3>
            </Link>
          </li>
        </ul>
      ))}
    </>
  );
};

export default Categories;
