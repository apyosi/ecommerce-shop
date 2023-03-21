import React from "react";
import Card from "../components/Card";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function Home({ products, categories }) {
  return (
    <main id="home" className="container mx-auto my-8 px-4">
      <h1 className="text-3xl font-bold mb-4">Our Products</h1>
      <hr className="mb-8" />
      <div className="corousel-cards">
        <AliceCarousel
          autoPlayInterval={3000}
          autoPlayDirection="rtl"
          autoPlay={true}
          fadeOutAnimation={true}
          mouseDragEnabled={true}
          buttonsDisabled={true}
          dotsDisabled={false}
          responsive={{
            0: { items: 1 },
            768: { items: 3 },
            1024: { items: 4 },
          }}
          className="w-full"
        >
          {products.map((item) => (
            <Card key={item.id} item={item} category={item.category} />
          ))}
        </AliceCarousel>
      </div>

      <hr />
      <div className="product-cards">
        {products
          .map((item) => (
            <Card key={item.id} item={item} category={item.category} />
          ))}
      </div>

    </main>
  );
}

export default Home;


