import React from "react";
import Card from "../components/Card";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function Home({ products, categories }) {
  return (
    <main id="home" className="container mx-auto mt-[120px] mb-8 px-4">
      <h2 className="text-3xl font-bold mb-4">Best Selling Products</h2>
      <hr className="mb-8" />
      <AliceCarousel
        autoPlay="true"
        autoPlayInterval={1000}
        autoPlayDirection="ltr"
        autoPlayStrategy="default"
        controlsStrategy="responsive"
        // disableButtonsControls
        disableDotsControls
        // disableSlideInfo
        // infinite
        keyboardNavigation="true"
        mouseTracking
        // fadeOutAnimation={true}
        // mouseDragEnabled={true}
        // dotsDisabled={true}
        // dotsClass="alice-carousel__dots" // Use dotsClass to target dots with CSS
        responsive={{
          0: { items: 1 },
          768: { items: 2 },
          1024: { items: 3 },
          1280: { items: 4 },
          1936: { items: 5 },
        }}
        swipeDelta
        swipeExtraPadding
        touchTracking
        touchMoveDefaultEvents
        className="w-full"
      >
        {/* {const test = for (let index = 0; index < products.length; index++) {
          const item = products[index];
          <Card key={item.id} item={item} category={item.category} />
          }} */}
      </AliceCarousel>
      <h2 className="text-3xl font-bold mb-4">New Products</h2>
      <hr className="mb-8" />
      <div className="flex flex-wrap justify-center">
        {products.map((item) => (
          <Card key={item.id} item={item} category={item.category} />
        ))}
      </div>
    </main>
  );
}

export default Home;
