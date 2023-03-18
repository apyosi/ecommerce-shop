import React from "react";
import { Link, useParams } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";


const Product = ({ products }) => {
  const { id } = useParams();
  // console.log(id);
  // console.log(products);
  const product = products.find((item) => item.id.toString() === id);
  console.log(product);
  return (
    <main id="product">
      <hr />
      <article className="">
        {product && (
          <>
            <div className="card mb-3">
              <div className="row g-0">
{/*                 <div className="col-md-4">
                  <img
                    src={product.images[0]}
                    className="img-fluid rounded-start"
                    alt="{product.title}"
                  />
                  <img
                    src={product.images[1]}
                    className="img-fluid rounded-start"
                    alt="{product.title}"
                  />
                  <img
                    src={product.images[2]}
                    className="img-fluid rounded-start"
                    alt="{product.title}"
                  />
                </div> */}

      <div
        id="carouselExampleInterval"
        className="w-96 carousel slide"
        data-bs-ride="carousel" 
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="1000">
            <img src={product.images[0]} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="1000">
            <img src={product.images[1]} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="1000">
            <img src={product.images[2]} className="d-block w-100" alt="..." />
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
      </div>
                <div className="col-md-8">
                  <div className="card-body text-start">
                    <h1 className="text-4xl">{product.title}</h1>
                    <p className="text-3xl"><b>Price:</b> ${product.price}</p>
                    <p className="text-2xl"><b>Category:</b> {product.category}</p>
                    <p className="text-2xl"><b>Brand:</b> {product.brand}</p>
                    <p className="text-2xl"><b>Description: </b>{product.description}</p>
                    <button className="btn bg-dark text-white">
                    <p className="text-5xl text-emerald-500"><FaShoppingCart></FaShoppingCart></p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {!product && (
          <>
            <h2>Product Not Found</h2>
            <p>Well, that's disappointing.</p>
            <p>
              <Link to="/products">Visit product section</Link>
            </p>
          </>
        )}
      </article>
    </main>
  );
};

export default Product;
