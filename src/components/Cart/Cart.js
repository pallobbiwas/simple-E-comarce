import React from "react";

const Cart = (props) => {
  const { order } = props;
  let price = 0;

  for (const product of order) {
    price = price + product.price;
  }
  const Tax = price * 0.1;
  const total = price + Tax;

  return (
    <div>
      <h5>Order Summary</h5>
      <p>Total oreder: {order.length}</p>
      <p>Price:{price}</p>
      <p>Tax: {Tax.toFixed(2)}</p>
      <p>Total: {total}</p>
    </div>
  );
};

export default Cart;
