import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="row mt-5 container mx-auto g-2">
      <div className="product-container col-md-10 ">
        <div className="row row-cols-md-3 g-2">
          {
              products.map(product => <Product key={product.id} product = {product}></Product>)
          }
        </div>
      </div>
      <div className="order-container col-md-2">
        <h5>Order Summary</h5>
      </div>
    </div>
  );
};

export default Products;
