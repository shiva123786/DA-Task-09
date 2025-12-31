import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import { AuthProvider } from "./contexts/AuthContext";
import Navbar from "./components/Navbar/Navbar";

// Lazy loaded pages (performance optimization)
const Home = lazy(() => import("./pages/Home"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const CartPage = lazy(() => import("./pages/CartPage"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage"));

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Navbar />

          {/* Suspense for lazy loading */}
          <Suspense fallback={<div className="loading">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
            </Routes>
          </Suspense>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
