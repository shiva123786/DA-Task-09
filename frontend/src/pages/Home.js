import React from "react";
import ProductList from "../components/ProductList/ProductList";
import "./Home.css";

function Home() {
  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>Shop Smarter. Live Better.</h1>
          <p>Discover trending products with best quality & fast delivery.</p>
          <a href="#products" className="hero-btn">Start Shopping</a>
        </div>
      </section>

      {/* PRODUCT LIST */}
      <section id="products" className="product-section">
        <h2>Featured Products</h2>
        <ProductList />
      </section>

    </div>
  );
}

export default Home;
