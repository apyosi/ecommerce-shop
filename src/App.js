import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import database from "./data.json";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";
import "./App.css";
import Categories from "./pages/Categories";
import Category from "./pages/Category";
import Search from "./pages/Search";
import ScrollBtn from "./components/ScrollBtn"

function App() {


  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [categories, setCategories] = useState([
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
  ]);
  const [products, setProducts] = useState(database);

  useEffect(() => {
    /*     const fetchProducts = async () => {
      try {
        // const response = await fetch("https://dummyjson.com/products/");
        const response = await fetch("https://dummyjson.com/products?limit=100");
        const data = await response.json();
        // console.log(data);
        setProducts(data.products);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProducts(); */

    console.log(search);
    const filteredResults = products.filter(
      (item) =>
        item.description.toLowerCase().includes(search.toLowerCase()) ||
        item.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(filteredResults.reverse());
  }, [search, products]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Layout search={search} setSearch={setSearch} />}
          >
            <Route
              index
              element={
                <Home categories={categories} products={searchResults} />
              }
            ></Route>
            <Route path=":id/:id" element={<Product products={products} />} />
            <Route path="men">
              <Route
                index
                element={
                  <Categories
                    categories={["mens-shirts", "mens-shoes", "mens-watches"]}
                    products={products}
                  />
                }
              />
              <Route path=":id/:id" element={<Product products={products} />} />
            </Route>

            <Route path="women">
              <Route
                index
                element={
                  <Categories
                    categories={[
                      "womens-dresses",
                      "womens-shoes",
                      "womens-watches",
                      "womens-bags",
                      "womens-jewellery",
                    ]}
                    products={products}
                  />
                }
              />
              <Route path=":id/:id" element={<Product products={products} />} />
            </Route>

            <Route path="tech">
              <Route
                index
                element={
                  <Categories
                    categories={["automotive", "laptops", "smartphones"]}
                    products={products}
                  />
                }
              />
              <Route path=":id/:id" element={<Product products={products} />} />
            </Route>

            <Route path="products">
              <Route index element={<Products products={products} />} />
              <Route path=":id" element={<Product products={products} />} />
            </Route>

            <Route path="categories">
              <Route
                index
                element={
                  <Categories categories={categories} products={products} />
                }
              />
              <Route path=":id" element={<Category products={products} />} />
              <Route path=":id/:id" element={<Product products={products} />} />
              <Route
                path=":id/:id/:id"
                element={<Product products={products} />}
              />
            </Route>

            {/* <Route path="search" element={<Search categories={categories} products={products} />} /> */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
      <ScrollBtn />
    </div>
  );
}

export default App;
