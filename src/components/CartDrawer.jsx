import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function CartDrawer() {
  const navigate = useNavigate();

  const { cart, open, setOpen, addToCart, decreaseQty, removeItem } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      {/* OVERLAY */}
      {open && (
        <div className="cart-overlay" onClick={() => setOpen(false)}></div>
      )}

      {/* DRAWER */}
      <div className={`cart-drawer ${open ? "open" : ""}`}>
        <div className="flex flex-col h-full">
          {/* HEADER (fixed) */}
          <div className="p-6 border-b border-white/10 flex justify-between items-center">
            <h2 className="heading-lg gold-text">Your Cart</h2>
            <button onClick={() => setOpen(false)}>✕</button>
          </div>

          {/* 🛒 SCROLLABLE ITEMS */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6 hide-scrollbar">
            {cart.length === 0 && (
              <div className="text-center mt-20 text-white/50">
                <p>Your cart feels empty 🖤</p>
              </div>
            )}

            {cart.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b border-white/10 pb-4"
              >
                {cart.length === 0 && (
                  <div className="text-center mt-20 text-white/50">
                    <p>Your cart feels empty 🖤</p>
                  </div>
                )}
                <div>
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-muted">${item.price}</p>
                </div>

                {/* QUANTITY */}
                <div className="flex items-center gap-3">
                  <button
                    className="px-2 border border-white/20"
                    onClick={() => decreaseQty(item.id)}
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    className="px-2 border border-white/20"
                    onClick={() => addToCart(item)}
                  >
                    +
                  </button>
                </div>

                {/* REMOVE */}
                <button
                  className="text-red-500 text-sm"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* TOTAL (fixed bottom) */}
          <div className="p-6 border-t border-white/10 bg-[#111]">
            <h3 className="mb-4">
              Total: <span className="text-gold">${total}</span>
            </h3>

            <button
              onClick={() => navigate("/checkout")}
              className="btn-solid w-full mt-4"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
