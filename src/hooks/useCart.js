import { useState, useEffect } from "react";

export default function useCart() {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem("blinkit-cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("blinkit-cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart(prev => [...prev, { ...product, cartId: Date.now() }]);
  };

  const removeFromCart = (cartId) => {
    setCart(prev => prev.filter(item => item.cartId !== cartId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    cartCount: cart.length,
    cartTotal: cart.reduce((sum, item) => sum + item.price, 0)
  };
}