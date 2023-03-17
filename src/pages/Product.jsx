import React from "react";
import { Link, useParams } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaShopify } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";

const Product = ({ products }) => {
  const { id } = useParams();
  console.log(id);
  console.log(products);
  const product = products.find((item) => item.id.toString() === id);
  console.log(typeof(id))
  console.log(product);
  return (
    <main id="product">
      <hr />
      <article className="">
        {product && (
          <>
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
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
                </div>
                <div className="col-md-8">
                  <div className="card-body text-start">
                    <h1 className="card-title">{product.title}</h1>
                    <p className="card-text"><b>Price:</b> ${product.price}</p>
                    <p className="card-text"><b>Category:</b> {product.category}</p>
                    <p className="card-text"><b>Brand:</b> {product.brand}</p>
                    <p className="card-text">{product.description}</p>
                    <button className="btn bg-dark text-white">
                    <h1 className="text-bg-danger"><FaShoppingCart></FaShoppingCart></h1>
                    <FaShoppingBasket ></FaShoppingBasket>
                    <FaShopify></FaShopify>
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
