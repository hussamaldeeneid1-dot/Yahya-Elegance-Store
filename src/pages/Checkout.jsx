import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0,
  );

  return (
    <div className="fade-page min-h-screen bg-black text-white relative overflow-hidden">
      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute w-[500px] h-[500px] bg-[#C6A55C]/20 blur-[120px] top-[-100px] left-[-100px]" />
        <div className="absolute w-[400px] h-[400px] bg-[#C6A55C]/10 blur-[100px] bottom-[-100px] right-[-100px]" />
      </div>

      {/* ❌ CLOSE BUTTON */}
      <button
        onClick={() => navigate("/")}
        className="fixed top-6 right-6 z-[999]
                   w-12 h-12 flex items-center justify-center
                   glass rounded-full text-gold text-xl
                   hover:bg-[#C6A55C] hover:text-black
                   transition-all duration-300"
      >
        ✕
      </button>

      {/* 🧾 MAIN CONTENT */}
      <div className="relative z-10 container-luxury py-20 grid md:grid-cols-2 gap-12">
        {/* LEFT — FORM */}
        <div className="glass p-10 rounded-3xl space-y-6 backdrop-blur-xl">
          <h1 className="heading-lg gold-text mb-6">Checkout</h1>

          <input className="input-luxury" placeholder="Full Name" />
          <input className="input-luxury" placeholder="Email Address" />
          <input className="input-luxury" placeholder="Phone Number" />
          <input className="input-luxury" placeholder="Shipping Address" />

          <div className="divider my-6"></div>

          <button className="btn-solid w-full text-lg py-4">Place Order</button>
        </div>

        {/* RIGHT — ORDER SUMMARY */}
        <div className="glass p-10 rounded-3xl backdrop-blur-xl flex flex-col">
          <h2 className="heading-lg mb-6">Your Order</h2>

          <div className="flex-1 overflow-y-auto space-y-5 hide-scrollbar">
            {cart.length === 0 && (
              <p className="text-muted">Your cart is empty</p>
            )}

            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b border-white/10 pb-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    className="w-16 h-16 object-cover rounded-lg"
                  />

                  <div>
                    <h3 className="font-display">{item.name}</h3>
                    <p className="text-muted text-sm">x{item.quantity || 1}</p>
                  </div>
                </div>

                <span className="text-gold">
                  ${item.price * (item.quantity || 1)}
                </span>
              </div>
            ))}
          </div>

          <div className="divider my-6"></div>

          <h3 className="text-2xl font-semibold">
            Total: <span className="text-gold">${total}</span>
          </h3>
        </div>
      </div>
    </div>
  );
}
