import React from "react";
import Categories from "./Categories";

const Search = ({ categories, products }) => {
  return (
    <article className="mt-[140px] md:mt-[110px]">
      <Categories categories={categories} products={products} />
    </article>
  );
};

export default Search;
