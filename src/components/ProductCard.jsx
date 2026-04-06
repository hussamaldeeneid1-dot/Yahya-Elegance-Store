import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import toast from "react-hot-toast";

export default function ProductCard({ product, setLastAdded }) {
  const { toggleWishlist, isInWishlist, setOpen } = useWishlist();
  const { addToCart } = useCart();

  return (
    <div className="w-full h-full product-card group">
      {/* IMAGE */}
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[320px] object-cover img-zoom"
        />

        {/* ❤️ WISHLIST */}
        <button
          onClick={() => {
            console.log("CLICKED ❤️");
            toggleWishlist(product);
            setOpen(true);
          }}
          className={`absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center
          backdrop-blur-md border transition-all duration-300
            ${
              isInWishlist(product.id)
                ? "bg-[#C6A55C] text-black shadow-[0_0_15px_rgba(198,165,92,0.6)]"
                : "bg-black/40 text-white border-white/20 hover:border-[#C6A55C]"
            }`}
        >
          ♥
        </button>
      </div>

      {/* INFO */}
      <div className="mt-4">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-price">${product.price}</p>

        {/* BUTTON */}
        <button
          onClick={() => {
            addToCart(product);
            toast.success("Added to cart 💎");
          }}
          className="btn-primary mt-4 w-full"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
