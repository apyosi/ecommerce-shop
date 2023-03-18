import React from "react";
// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

const Category = ({ products}) => {
  const { id } = useParams();

/*   const [category, setCategory] = useState([]);

  const fetchCategory = async () => {
  const response = await fetch("https://dummyjson.com/products/category/" + id);
    const data = await response.json();
    // console.log(data);
    setCategory(data.products);
  };

  useEffect(() => {
    fetchCategory();
  }, []); */

  return (
    <>
    <section>
      <div className="flex justify-between">
      <h2 className="text-4xl p-2">{id.toUpperCase()}</h2>
      </div>
      <hr />
      <div className="flex flex-wrap">
        {products
          .filter((item) => item.category === id)
          .map((item) => (
            <Card key={item.id} item={item} category={id}/>
          ))}
      </div>
    </section>
  </>

/*     <main id="products" className="container-fluid">
      <h1 className="text-center">Category {id}</h1>
      <hr />
      <div className="container">
        <div className="row g-1 ">
          {products.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </main> */
  );
};

export default Category;
