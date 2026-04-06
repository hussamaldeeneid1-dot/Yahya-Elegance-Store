import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

export default function Navbar() {
  const { cart, setOpen: openCart } = useCart();
  const { wishlist, setOpen: openWishlist } = useWishlist();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center transition-all duration-500
      ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* LOGO */}
      <h1 className="font-display text-xl tracking-widest gold-text">
        Yahya King
      </h1>

      {/* ACTIONS */}
      <div className="flex items-center gap-4">
        {/* ❤️ WISHLIST */}
        <button onClick={() => openWishlist(true)} className="relative group">
          <div
            className="w-10 h-10 flex items-center justify-center rounded-full 
          bg-white/5 backdrop-blur-md border border-white/10 
          group-hover:border-[#C6A55C] transition-all duration-300"
          >
            ♥
          </div>

          {/* BADGE */}
          {wishlist.length > 0 && (
            <span className="absolute -top-1 -right-1 text-xs bg-[#C6A55C] text-black px-1.5 rounded-full animate-pulse">
              {wishlist.length}
            </span>
          )}
        </button>

        {/* 🛒 CART */}
        <button onClick={() => openCart(true)} className="relative group">
          <div
            className="w-10 h-10 flex items-center justify-center rounded-full 
          bg-white/5 backdrop-blur-md border border-white/10 
          group-hover:border-[#C6A55C] transition-all duration-300"
          >
            🛒
          </div>

          {/* BADGE */}
          {cart.length > 0 && (
            <span className="absolute -top-1 -right-1 text-xs bg-[#C6A55C] text-black px-1.5 rounded-full animate-pulse">
              {cart.length}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
}
