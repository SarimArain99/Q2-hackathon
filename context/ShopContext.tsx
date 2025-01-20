"use client"
import React, { createContext, useContext, useState } from "react";

interface Product {
  _id: string;
  name: string;
  image: {
    asset: {
      _ref: string;
    };
  };
  price: number;
  description: string;
  discountPercentage: number;
  isFeaturedProduct: boolean;
  stockLevel: number;
  category: string;
}

interface ShopContextType {
  wishlist: Product[];
  cart: Product[];
  cartTotal: number;
  addToWishlist: (product: Product) => void;
  addToCart: (product: Product) => void;
  removeFromWishlist: (id: string) => void;
  removeFromCart: (id: string) => void;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  // Add to Wishlist
  const addToWishlist = (product: Product) => {
    setWishlist((prev) => {
      if (!prev.find((item) => item._id === product._id)) {
        // Check duplicates based on _id
        return [...prev, product];
      }
      return prev;
    });
  };

  // Remove from Wishlist
  const removeFromWishlist = (id: string) => {
    setWishlist((prev) => prev.filter((item) => item._id !== id));
  };

  // Add to Cart
  const addToCart = (product: Product) => {
    setCart((prev) => {
      if (!prev.find((item) => item._id === product._id)) {
        // Check duplicates based on _id
        return [...prev, product];
      }
      return prev;
    });
  };

  // Remove from Cart
  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item._id !== id));
  };

  // Calculate Cart Total
  const cartTotal = cart.reduce((total, item) => total + item.price, 0);

  return (
    <ShopContext.Provider
      value={{
        wishlist,
        cart,
        cartTotal,
        addToWishlist,
        addToCart,
        removeFromWishlist,
        removeFromCart,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = (): ShopContextType => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("useShop must be used within a ShopProvider");
  }
  return context;
};
