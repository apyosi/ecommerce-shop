import React from "react";
import Card from "../components/Card";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Home({ products, categories }) {
  return (
    <main id="home">
      <h1>Home Page</h1>
      <hr />
      <div className="flex flex-wrap">
              {products
                .map((item) => (
                  <Card key={item.id} item={item} category={item.category} />
                ))}
            </div>


 {/*      <div
        id="carouselExampleInterval"
        className="carousel slide w-96"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="1000">
            <img src={products[1].images[0]} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={products[1].images[1]} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={products[1].images[2]} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}


{/* <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src="..." className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="..." className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
 */}

    </main>
  );
}

export default Home;
