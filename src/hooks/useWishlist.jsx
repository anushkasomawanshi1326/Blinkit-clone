import { useState, useEffect } from "react";

export default function useWishlist() {
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem("blinkit-wishlist");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("blinkit-wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (product) => {
    if (!wishlist.find(item => item.id === product.id)) {
      setWishlist([...wishlist, product]);
    }
  };

  const removeFromWishlist = (productId) => {
    setWishlist(wishlist.filter(item => item.id !== productId));
  };

  const isInWishlist = (productId) => {
    return wishlist.some(item => item.id === productId);
  };

  return { wishlist, addToWishlist, removeFromWishlist, isInWishlist };
}