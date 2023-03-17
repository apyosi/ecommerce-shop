import React from 'react'
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Category = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products/");
    const data = await response.json();
    // console.log(data);
    setProducts(data.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>Category {id}</div>
  )
}

export default Category