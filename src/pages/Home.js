import React from "react";
import Card from "../components/Card";


function Home({ products, categories }) {
  return ( 
    <main id="home" className="container mx-auto mt-[120px] mb-8 px-4">
      <h1 className="text-3xl font-bold mb-4">Our Products</h1>
      <hr className="mb-8" />

      <div className="flex flex-wrap justify-center">
        {products
          .map((item) => (
            <Card key={item.id} item={item} category={item.category} />
          ))}
      </div>


    </main>
  );
}

export default Home;


