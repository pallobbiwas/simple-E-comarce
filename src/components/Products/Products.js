import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  // add tgo order
  const addToCart = (product) => {
    const nerOrder = [...order, product];
    setOrder(nerOrder)
  };
  return (
    <div className="row mt-5 container mx-auto g-2">
      <div className="product-container col-md-10 ">
        <div className="row row-cols-md-3 g-2">
          {products.map((product) => (
            <Product
              key={product.id}
              addToCart={addToCart}
              product={product}
            ></Product>
          ))}
        </div>
      </div>
      <div className="order-container col-md-2">
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Products;
