import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import api from "../services/api";
import "./ProductDetail.css";

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get(`/products/${id}`).then(res => {
      setProduct(res.data);
      setLoading(false);
    });
  }, [id]);

  if (loading) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;

  return (
    <div className="product-detail">

      <div className="detail-container">

        <div className="detail-image">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="detail-info">
          <h1>{product.title}</h1>
          <p className="category">{product.category}</p>
          <p className="rating">⭐ {product.rating.rate} / 5</p>
          <h2>${product.price}</h2>
          <p className="description">{product.description}</p>

          <button onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
}

export default ProductDetail;
