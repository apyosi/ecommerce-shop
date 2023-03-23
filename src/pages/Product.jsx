import React, {useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
// import { FaShoppingCart } from "react-icons/fa";
// import { BsCart4 } from "react-icons/bs";
import { SlArrowLeft } from "react-icons/sl";
import "../assets/css/style.css"
import { SlArrowRight } from "react-icons/sl";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  // AiFillStar,
  // AiOutlineStar,
} from "react-icons/ai";
import OtherProducts from "../components/OtherProducts";
// const cartData=require('../cart.json');


// useEffect(()=>{

//   const cartData=JSON.parse(localStorage.getItem('cartInfo'))


// },[])

const Product = ({ products }) => {
  
const [cartData, setCartData] = useState(JSON.parse(localStorage.getItem('cartInfo')) || []);
const [itemQty, setItemQty] = useState(1);
  const { id } = useParams();
  // console.log(id);
  // console.log(products);
  const product = products.find((item) => item.id.toString() === id);
  // let itemQty =1;
  // console.log(product);
  const handleItemIncrease = (item) =>{

      // itemQty = itemQty+1;
      //  console.log( itemQty);
       setItemQty(itemQty => itemQty+1);
        
}
const handleItemDecrease = (item) =>{

    if (itemQty>0) {
      setItemQty(itemQty => itemQty-1);
    }

}
  
  function getRatings()
  {
    setTimeout(() => {
      const starPercentageRounded = (product.rating/5)*100;
      // console.log(starPercentageRounded);
      const el = document.querySelector(".stars-inner");
      el.style.width = Math.round(starPercentageRounded) +"%";
      // console.log(el);
    },0)

  }
  const handleAddToCart = (cartItem) =>{
    product.qty=itemQty;
    cartData.push(product);
     console.log("Product jsx-54",product);
     console.log("Cart -Product jsx-54",cartData);
     localStorage.setItem('cartInfo', JSON.stringify(cartData));
    
    // finding what is the position of the item that need to be removed

    // let obj = cartData.find(x => x.id == cartItem.id);
    // let index = cartData.indexOf(obj)
    // // console.log(index);
    // cartData.splice(index,1);
    // console.log(cartData);
    
}
 
    // document.addEventListener('DOMContentLoaded',getRatings);
    // <script>
    // document.addEventListener('DOMContentLoaded',getRatings);
    // </script>
  

  return (
    <>
      <main id="product">
        <hr />
        <article className="mt-[120px] ">
          {product && (
            <>
              <div className="w-[90%]  mx-auto flex flex-col-reverse gap-4 md:flex-row ">
                <div id="images" className="w-full md:w-1/2">
                  {/* <div className="all-images">
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
                    className="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div
                        className="carousel-item active"
                        data-bs-interval="2000"
                      >
                        <img
                          src={product.images[0]}
                          className="d-block w-100 h-[600] object-cover"
                          alt="..."
                        />
                      </div>
                      <div className="carousel-item" data-bs-interval="2000">
                        <img
                          src={product.images[1]}
                          className="d-block w-100 h-[600] object-cover"
                          alt="..."
                        />
                      </div>
                      <div className="carousel-item" data-bs-interval="2000">
                        <img
                          src={product.images[2]}
                          className="d-block w-100 h-[600] object-cover"
                          alt="..."
                        />
                      </div>
                    </div>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExampleInterval"
                      data-bs-slide="prev"
                    >
                      <span
                        className="text-purple-600 text-4xl"
                        aria-hidden="true"
                      ><SlArrowLeft></SlArrowLeft></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExampleInterval"
                      data-bs-slide="next"
                    >
                      <span
                        className="text-purple-600 text-4xl"
                        aria-hidden="true"
                      ><SlArrowRight></SlArrowRight></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
                <div id="details" className="w-full md:w-1/2">
                  <div className="flex flex-col gap-4 text-start ">
                    <h1 className="text-4xl">{product.title}</h1>
                    <div className="reviews">
                      <div className="flex">
                        {/* Adding rating Ramaz */}

                        <div className="container">
                          <table className="table table-striped">
                              <thead>
                                  <tr>
                                    <th>Rating  {Math.round(product.rating*10)/10}</th>
                                  </tr>
                              </thead>
                          <tbody>
                            <tr>
                              <td>
                                  <div className="stars-outer">
                                    <div id="toni" className="stars-inner"></div> 
                                  </div> 
                                  <span className="number-rating"></span>
                              </td>
                            </tr>
                          </tbody>
                          </table>
                          
                        </div>


                        {/* <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar /> */}
                      </div>
                      {/* ramaz */}
                      <p>{product.reviewed} reviews</p>
                    </div>
                    <p className="text-">
                      <b>Description: </b>
                      {product.description}
                    </p>
                    <p className="">
                      <b>Brand:</b> {product.brand}
                    </p>
                    <p className="">
                      <b>Category:</b> {product.category}
                    </p>
                    <p className="text-3xl font-bold text-red-600">
                      ${product.price}
                    </p>
                    <div className="flex align-items-center gap-2">
                      <p>
                        <b>Quantity:</b>
                      </p>
                      <p className="flex border border-solid border-gray-500">
                      <button
                          className="text-base py-3 px-3 cursor-pointer border-l border-solid border-gray-500 text-green-600" 
                          onClick={()=>{
                            // console.log(item);
                            handleItemIncrease(product);
                           }}> <AiOutlinePlus/> </button>
                          
                       
                        <span className="text-xl py-2 px-3 cursor-pointer">{itemQty}</span>
                        <button
                          className="text-base py-3 px-3 cursor-pointer border-l border-solid border-gray-500 text-green-600" 
                          onClick={()=>{
                            // console.log(item);
                            handleItemDecrease(product);
                           }}><AiOutlineMinus/> </button>
                      
                      </p>
                    </div>
                    {/* Ramaz */}
                    <div className="flex flex-row flex-wrap gap-2">
                      <button
                        className="w-60 justify-center text-2xl flex flex-row p-2 rounded-md bg-white text-purple-700 border-2 border-purple-700"
                        type="button" onClick={()=>{
                          // console.log(item);
                          handleAddToCart(product);
                          }}
                      >
                        Add to Cart
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
      <section>
        <OtherProducts
          products={products}
          product={product}
        />
      </section>
      {getRatings()}
    </>
  );
};

export default Product;
