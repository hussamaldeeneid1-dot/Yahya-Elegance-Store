import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Toaster } from "react-hot-toast";

import CartProvider from "./context/CartContext";
import WishlistProvider from "./context/WishlistContext";
import { BrowserRouter } from "react-router-dom";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <WishlistProvider>
          {/* 🔥 TOASTER INSIDE */}
          <Toaster
            position="top-center"
            toastOptions={{
              style: {
                background: "#111",
                color: "#C6A55C",
                border: "1px solid rgba(198,165,92,0.3)",
              },
            }}
          />

          <App />
        </WishlistProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
