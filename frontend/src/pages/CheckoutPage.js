import React, { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import "./CheckoutPage.css";

function CheckoutPage() {
  const { cart, clearCart } = useContext(CartContext);

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    pincode: ""
  });

  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert("🎉 Order placed successfully!");
    clearCart();
  };

  return (
    <div className="checkout-page">

      <h1>Checkout</h1>

      <div className="checkout-grid">

        {/* FORM */}
        <form className="checkout-form" onSubmit={handleSubmit}>

          <h2>Shipping Details</h2>

          <input name="name" placeholder="Full Name" required onChange={handleChange} />
          <input name="email" type="email" placeholder="Email" required onChange={handleChange} />
          <input name="address" placeholder="Address" required onChange={handleChange} />
          <input name="city" placeholder="City" required onChange={handleChange} />
          <input name="pincode" placeholder="Pincode" required onChange={handleChange} />

          <button type="submit">Place Order</button>
        </form>

        {/* ORDER SUMMARY */}
        <div className="order-summary">
          <h2>Order Summary</h2>

          {cart.map(item => (
            <div key={item.id} className="summary-item">
              <span>{item.title} × {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}

          <hr />
          <h3>Total: ${total.toFixed(2)}</h3>
        </div>

      </div>

    </div>
  );
}

export default CheckoutPage;
