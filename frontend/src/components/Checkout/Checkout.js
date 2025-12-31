import React, { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import "./Checkout.css";

function Checkout() {
  const { cart, clearCart } = useContext(CartContext);

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: ""
  });

  const [success, setSuccess] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const placeOrder = e => {
    e.preventDefault();
    if (Object.values(form).some(v => v === "")) {
      alert("Please fill all fields");
      return;
    }
    clearCart();
    setSuccess(true);
  };

  if (success)
    return (
      <div className="checkout-success">
        <h2>🎉 Order Placed Successfully!</h2>
        <p>Your order will be delivered soon.</p>
      </div>
    );

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>

      <form className="checkout-form" onSubmit={placeOrder}>
        <input name="name" placeholder="Full Name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="address" placeholder="Address" onChange={handleChange} />
        <input name="city" placeholder="City" onChange={handleChange} />
        <input name="zip" placeholder="ZIP Code" onChange={handleChange} />

        <button type="submit">Place Order</button>
      </form>

      <div className="order-summary">
        <h3>Order Summary</h3>
        {cart.map(item => (
          <p key={item.id}>
            {item.title} × {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
          </p>
        ))}
        <h3>Total: ${total.toFixed(2)}</h3>
      </div>
    </div>
  );
}

export default Checkout;
