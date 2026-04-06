import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import CartDrawer from "../components/CartDrawer";
import WishlistDrawer from "../components/WishlistDrawer";

import { useState } from "react";
import { hookahs, heads, accessories, tobacco } from "../data/Products";

export default function Home() {
  const [animate, setAnimate] = useState(true);

  const [category, setCategory] = useState("hookah");

  const allProducts = [...hookahs, ...heads, ...accessories, ...tobacco];

  const filtered = allProducts.filter((p) => p.category === category);

  return (
    <>
      <Navbar />
      <CartDrawer />
      <WishlistDrawer />
      <Hero />
      {/* 🔥 PRODUCTS SECTION */}
      <section className="section relative ">
        <div className="container-luxury ">
          {/* 🔥 CATEGORY BUTTONS */}
          <div className="flex justify-center gap-6 mb-12 flex-wrap relative z-[100]">
            {["hookah", "head", "accessory", "tobacco"].map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setAnimate(false);
                  setTimeout(() => {
                    setCategory(cat);
                    setAnimate(true);
                  }, 150);
                }}
                className={`tab-luxury uppercase tracking-widest text-sm pb-2 transition-all duration-300
      ${
        category === cat
          ? "text-[#C6A55C] active"
          : "text-white hover:text-[#C6A55C]"
      }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* 🛍 PRODUCTS */}
          <div
            className={`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 ${
              animate ? "category-show" : "category-hidden"
            }`}
          >
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
