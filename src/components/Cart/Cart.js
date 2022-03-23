import React from "react";

const Cart = (props) => {
  const { order } = props;
  let quantity = 0;
  let price = 0;

  for (const product of order) {
    price = price + product.price * product.quantity;
    quantity = quantity + product.quantity;
  }
  const Tax = price * 0.1;
  const total = price + Tax;

  return (
    <div>
      <h5>Order Summary</h5>
      <p>Total oreder: {quantity}</p>
      <p>Price:{price}</p>
      <p>Tax: {Tax.toFixed(2)}</p>
      <p>Total: {total}</p>
    </div>
  );
};

export default Cart;
