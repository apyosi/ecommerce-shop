import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    // console.log(data);
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return <div className="App">
    <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home products={products} />} />
        <Route path="products">
          <Route index element={<Products products={products} />} />
          <Route path=":id" element={<Product products={products} />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    </Router>

  </div>;
}

export default App;
