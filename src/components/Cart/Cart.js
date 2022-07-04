import { useNavigate } from "react-router-dom";
import "./Cart.css";

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

  const navigate = useNavigate()

  const payment = () => {
    navigate('/payment')
  }

  return (
    <div className="cart">
      <div>
      <h5>Order Summary</h5>
      <p>Total oreder: {quantity}</p>
      <p>Price:{price}</p>
      <p>Tax: {Tax.toFixed(2)}</p>
      <p>Total: {total}</p>
      </div>
      <button onClick={payment} className="btn btn-success">Proceed to pay</button>
    </div>
  );
};

export default Cart;
