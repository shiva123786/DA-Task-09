import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import "./Cart.css";

function Cart() {
  const { cart, removeFromCart, increaseQty, decreaseQty } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0)
    return <h2 className="empty-cart">🛒 Your cart is empty</h2>;

  return (
    <div className="cart-page">
      <h2>Your Shopping Cart</h2>

      {cart.map(item => (
        <div className="cart-item" key={item.id}>
          <img src={item.image} alt={item.title} />

          <div className="cart-info">
            <h4>{item.title}</h4>
            <p>${item.price}</p>

            <div className="qty">
              <button onClick={() => decreaseQty(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => increaseQty(item.id)}>+</button>
            </div>
          </div>

          <button className="remove-btn" onClick={() => removeFromCart(item.id)}>✖</button>
        </div>
      ))}

      <h3 className="total">Total: ${total.toFixed(2)}</h3>
    </div>
  );
}

export default Cart;
