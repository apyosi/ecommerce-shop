import React, { useEffect } from "react";
import Card from "../components/Card";
import Confetti from '../components/Confetti'



function Products({products}) {
  useEffect(() => {
    Confetti();
  }, []);

  return (
    <>
      <main id="products" className="container-fluid mt-[140px] md:mt-[110px]">
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
