import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { AuthContext } from "../../contexts/AuthContext";
import "./Navbar.css";

function Navbar() {
  const { cartItems } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">ShopX</Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart 🛒 <span>{cartCount}</span></Link>

        {user ? (
          <>
            <span className="user">Hello, {user.name}</span>
            <button onClick={() => { logout(); navigate("/"); }}>Logout</button>
          </>
        ) : (
          <button onClick={() => navigate("/login")}>Login</button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
