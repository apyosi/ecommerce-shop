import React from "react";
import Card from "../components/Card";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Home({ products, categories }) {
  return (
    <main id="home">

      <hr />
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
