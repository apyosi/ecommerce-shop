import React from "react";
import Card from "../components/Card";

function Products({products}) {
  return (
    <>
      <main id="products" className="container-fluid">
        <h1 className="text-center">Products</h1>
        <hr />
        <div className="container">
          <div className="row g-1 ">
            {products.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default Products;
