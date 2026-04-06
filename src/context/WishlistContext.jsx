import { createContext, useContext, useState } from "react";

const WishlistContext = createContext();

export const useWishlist = () => useContext(WishlistContext);

export default function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);
  const [open, setOpen] = useState(false); // ✅ ADD THIS

  // ❤️ ADD / REMOVE
  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.find((item) => item.id === product.id);

      if (exists) {
        return prev.filter((item) => item.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  };

  // ✅ CHECK
  const isInWishlist = (id) => {
    return wishlist.some((item) => item.id === id);
  };

  // ❌ REMOVE
  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        toggleWishlist,
        isInWishlist,
        removeFromWishlist,
        open, // ✅ ADD THIS
        setOpen, // ✅ ADD THIS
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}
