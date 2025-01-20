"use client";

import { useShop } from "../../../../../context/ShopContext";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import SuggestionsComponent from "@/components/Suggestions";
import React, { useEffect, useState } from "react";
import DetailShimmer from "@/components/DetailShimmer";
import { useParams, useRouter } from "next/navigation"; // Correct import for App Router

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

export default function ProductPage() {
  const { id } = useParams(); // Retrieve the `id` from the dynamic route segment
  const router = useRouter(); // For programmatic navigation

  const { addToCart, addToWishlist } = useShop();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      client
        .fetch(`*[_type == "product" && _id == $id][0]`, { id })
        .then((data) => setProduct(data));
    }
  }, [id]);

  if (!product)
    return (
      <div>
        <DetailShimmer />
      </div>
    );

  const discountedPrice =
    product.discountPercentage > 0
      ? (product.price * (100 - product.discountPercentage)) / 100
      : product.price;

  return (
    <div className="min-h-screen px-4 sm:px-8 md:px-16 lg:px-20 mb-5">
      <div className="flex flex-col lg:flex-row gap-8 mt-8 items-start lg:items-center">
        <div className="w-full lg:w-1/2 h-auto bg-[#F6F7FB] rounded-lg overflow-hidden shadow-md">
          <Image
            src={urlFor(product.image.asset._ref).url()}
            alt={product.name}
            width={500}
            height={500}
            className="h-full w-full object-contain"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#151875]">
            {product.name}
          </h1>
          <p className="text-sm text-gray-500">Category: {product.category}</p>
          {product.isFeaturedProduct && (
            <p className="text-sm text-[#fb2e86] font-semibold">
              Featured Product
            </p>
          )}
          <p className="text-gray-500 text-sm">
            Stock Level: {product.stockLevel}
          </p>
          <div className="flex items-center gap-2">
            <p className="text-xl font-semibold text-[#FB2E86]">
              ${discountedPrice}
            </p>
            {product.discountPercentage > 0 && (
              <p className="text-gray-500 line-through">${product.price}</p>
            )}
          </div>
          <p className="text-gray-700">{product.description}</p>
          <div className="flex gap-4 mt-6 flex-col sm:flex-row items-center">
            <button
              onClick={() => {
                addToCart(product);
                router.push("/cart"); // Programmatically navigate to the cart page
              }}
              className="w-44 sm:w-auto bg-[#151875] text-white px-6 py-2 rounded-lg hover:bg-[#232975] transition"
            >
              Add to Cart
            </button>
            <button
              onClick={() => {
                addToWishlist(product);
                router.push("/wishlist"); // Programmatically navigate to the wishlist page
              }}
              className="w-44 sm:w-auto bg-[#fb2e86] text-white px-6 py-2 rounded-lg hover:bg-[#e73b86] transition"
            >
              Add to Favorites
            </button>
          </div>
        </div>
      </div>
      <SuggestionsComponent />
    </div>
  );
}
