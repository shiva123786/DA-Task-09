import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  const filtered =
    category === "all"
      ? products
      : products.filter(p => p.category === category);

  if (loading) return <h2 className="loading">Loading products...</h2>;

  return (
    <div className="product-section">
      <h2 className="title">Shop Products</h2>

      <select
        className="category-filter"
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="all">All Categories</option>
        <option value="men's clothing">Men</option>
        <option value="women's clothing">Women</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
      </select>

      <div className="product-grid">
        {filtered.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
