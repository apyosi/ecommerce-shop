import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Cards";
const Categories = ({ categories, products }) => {


  return (
    <>
      {/* <h1>Categories</h1> */}

      {categories.map((category) => (
        <>
          <section>
            <div className="flex justify-between">
            <h2 className="text-4xl p-2">{category.toUpperCase()}</h2>
            <Link to={`/categories/${category}`}>
              <p className="text-4xl p-2 underline">All {category} items</p>
            </Link>
            </div>
            <hr />
            <div className="flex flex-wrap">
              {products
                .filter((item) => item.category === category)
                .map((item) => (
                  <Card key={item.id} item={item} category={category} />
                ))}
            </div>
          </section>
        </>
      ))}
    </>
  );
};

export default Categories;

/* Categories.defaultProps = {
  categories: [
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
    "furniture",
    "tops",
    "womens-dresses",
    "womens-shoes",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "womens-watches",
    "womens-bags",
    "womens-jewellery",
    "sunglasses",
    "automotive",
    "motorcycle",
    "lighting",
  ]
} */

/*   const [smartphones, setSmartphones] = useState([]);
  const [laptops, setLaptops] = useState([]);
  const [fragrances, setFragrances] = useState([]);
  const [skincare, setSkincare] = useState([]);
  const [groceries, setGroceries] = useState([]);
  const [homeDecoration, setHomeDecoration] = useState([]);
  const [furniture, setFurniture] = useState([]);
  const [tops, setTops] = useState([]);
  const [womensDresses, setWomensDresses] = useState([]);
  const [womensShoes, setWomensShoes] = useState([]);
  const [mensShirts, setMensShirts] = useState([]);
  const [mensShoes, setMensShoes] = useState([]);
  const [mensWatches, setMensWatches] = useState([]);
  const [womensWatches, setWomensWatches] = useState([]);
  const [womensBags, setWomensBags] = useState([]);
  const [womensJewellery, setWomensJewellery] = useState([]);
  const [sunglasses, setsunglasses] = useState([]);
  const [automotive, setAutomotive] = useState([]);
  const [motorcycle, setMotorcycle] = useState([]);
  const [lighting, setLighting] = useState([]);
 */
