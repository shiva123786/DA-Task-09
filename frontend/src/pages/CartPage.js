import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import "./CartPage.css";

function CartPage() {
  const { cart, removeFromCart, updateQty } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0)
    return (
      <div className="empty-cart">
        <h2>Your cart is empty 😢</h2>
        <Link to="/">Go Shopping</Link>
      </div>
    );

  return (
    <div className="cart-page">

      <h1>Your Cart</h1>

      {cart.map(item => (
        <div className="cart-item" key={item.id}>

          <img src={item.image} alt={item.title} />

          <div className="cart-info">
            <h3>{item.title}</h3>
            <p>${item.price}</p>

            <div className="qty-controls">
              <button onClick={() => updateQty(item.id, item.quantity - 1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQty(item.id, item.quantity + 1)}>+</button>
            </div>

            <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
              Remove
            </button>
          </div>
        </div>
      ))}

      <div className="cart-summary">
        <h2>Total: ${total.toFixed(2)}</h2>
        <Link to="/checkout" className="checkout-btn">Proceed to Checkout</Link>
      </div>

    </div>
  );
}

export default CartPage;
