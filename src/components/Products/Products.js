import React, { useEffect, useState } from "react";
import { addToDb, getCart } from "../../utilities/fakedb";
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

  useEffect(()=>{
    const storCart = getCart()
    const saveCart = [];
    for(const id in storCart){
      const addProduct = products.find((p) => p.id === id);
      if (addProduct){
        const quantity = storCart[id]
        addProduct.quantity = quantity
        saveCart.push(addProduct)
      }
    }
    setOrder(saveCart)
  },[products])
  // add tgo order
  const addToCart = (product) => {
    let newOrder = []
    const exist = order.find(p=>p.id === product.id);
    if(!exist){
      product.quantity = 1;
      newOrder = [...order, product]
    }else{
      const rest = order.filter(p=> p.id !== product.id)
      exist.quantity = exist.quantity + 1;
      newOrder = [...rest, exist]
    }
    setOrder(newOrder)
    addToDb(product.id)
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
        <Cart order={order}></Cart>
      </div>
    </div>
  );
};

export default Products;
