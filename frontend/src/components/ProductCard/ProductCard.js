import React, { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import "./ProductCard.css";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const [adding, setAdding] = useState(false);

  const handleAdd = () => {
    setAdding(true);
    addToCart(product);
    setTimeout(() => setAdding(false), 700);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} loading="lazy" />

      <div className="product-body">
        <h3>{product.title}</h3>
        <p className="category">{product.category}</p>

        <div className="rating">
          {"★".repeat(Math.round(product.rating.rate))}
          <span> ({product.rating.count})</span>
        </div>

        <div className="card-footer">
          <span className="price">${product.price}</span>

          <button
            className={`add-btn ${adding ? "adding" : ""}`}
            onClick={handleAdd}
            disabled={adding}
          >
            {adding ? "Adding..." : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
