import React from "react";
import Categories from "./Categories";

const Search = ({ categories, products }) => {
  return (
    <div>
      <Categories categories={categories} products={products} />
    </div>
  );
};

export default Search;
