import React from "react";
import("./Product.css");

const Product = ({ product }) => {
  const { name, img, seller, ratings, price } = product;
  return (
    <div className="product-container">
      <div className="mx-3">
        <img className="w-100 img-fluid p-4 rounded-3" src={img} alt="" />
        <div className="details p-4">
          <p>Name: {name}</p>
          <p>Saller: {seller}</p>
          <p>Ratings: {ratings}</p>
          <p>Price: {price}</p>
          <p>saller: {seller}</p>
        </div>
      </div>
      <button className="footer w-75 my-4 py-2">Add to cart</button>
    </div>
  );
};

export default Product;
