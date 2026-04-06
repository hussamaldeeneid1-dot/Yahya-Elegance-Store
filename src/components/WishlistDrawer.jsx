import { useWishlist } from "../context/WishlistContext";

export default function WishlistDrawer() {
  const { wishlist, removeFromWishlist, open, setOpen } = useWishlist();
  console.log("wishlist open:", open);
  return (
    <>
      {/* OVERLAY */}
      {open && (
        <div className="cart-overlay" onClick={() => setOpen(false)}></div>
      )}

      {/* DRAWER */}
      <div className={`cart-drawer ${open ? "open" : ""}`}>
        <div className="p-6 flex flex-col h-full">
          {/* HEADER */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="heading-lg gold-text">Wishlist</h2>

            {/* ❌ CLOSE DRAWER */}
            <button
              onClick={() => setOpen(false)}
              className="w-10 h-10 flex items-center justify-center rounded-full 
              bg-white/5 hover:bg-[#C6A55C] hover:text-black 
              transition-all duration-300"
            >
              ✕
            </button>
          </div>

          {/* ITEMS */}
          <div className="flex-1 overflow-y-auto space-y-4 hide-scrollbar">
            {wishlist.length === 0 && (
              <p className="text-muted">No saved items</p>
            )}

            {wishlist.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b border-white/10 pb-4"
              >
                <div>
                  <h3>{item.name}</h3>
                  <p className="text-muted">${item.price}</p>
                </div>

                {/* ❌ REMOVE ITEM */}
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="w-8 h-8 flex items-center justify-center rounded-full 
                  bg-white/5 hover:bg-[#C6A55C] hover:text-black 
                  transition-all duration-300"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
