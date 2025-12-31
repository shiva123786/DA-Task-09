import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {

  const [cart, setCart] = useState([]);

  // Load from LocalStorage on first render
  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) setCart(JSON.parse(saved));
  }, []);

  // Save to LocalStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  /* ===============================
     CART FUNCTIONS
  ================================ */

  const addToCart = product => {
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) {
        return prev.map(i =>
          i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = id => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const increaseQty = id => {
    setCart(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = id => {
    setCart(prev =>
      prev.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const clearCart = () => setCart([]);

  const getTotal = () =>
    cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      increaseQty,
      decreaseQty,
      clearCart,
      getTotal
    }}>
      {children}
    </CartContext.Provider>
  );
}
