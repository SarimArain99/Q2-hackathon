"use client";

import { useShop } from "../../../../../context/ShopContext";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import SuggestionsComponent from "@/components/Suggestions";
import React, { useEffect, useState } from "react";
import DetailShimmer from "@/components/DetailShimmer";
import { useParams, useRouter } from "next/navigation";

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
  const { id } = useParams(); // Get the product ID from the URL parameters
  const router = useRouter(); // For programmatic navigation

  const { addToCart, addToWishlist } = useShop(); // Get methods for cart and wishlist
  const [product, setProduct] = useState<Product | null>(null); // State to hold the product data
  const [loading, setLoading] = useState(true); // State to track loading

  // Fetch the product when the component mounts
  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return; // If there is no ID, return early

      try {
        // Fetch product data from Sanity using the product ID
        const data = await client.fetch(
          `*[_type == "product" && _id == $id][0]`,
          { id }
        );

        // Set the product data in the state
        setProduct(data || null);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false); // Set loading to false once the fetch is complete
      }
    };

    fetchProduct(); // Call the async function
  }, [id]); // Run the effect when the ID changes

  // Show a shimmer while the product is loading
  if (loading) return <DetailShimmer />;

  // Show a fallback message if no product is found
  if (!product) {
    return (
      <div className="text-center text-gray-500 py-10">
        <h1 className="text-2xl font-bold text-[#101750]">Product Not Found</h1>
        <p>We couldn&apos;t find the product you were looking for.</p>
      </div>
    );
  }

  // Calculate discounted price if there is a discount
  const discountedPrice =
    product.discountPercentage > 0
      ? (product.price * (100 - product.discountPercentage)) / 100
      : product.price;

  return (
    <div className="min-h-screen px-4 sm:px-8 md:px-16 lg:px-20 mb-5">
      <div className="flex flex-col lg:flex-row gap-8 mt-8 items-start lg:items-center">
        {/* Product Image */}
        {product.image?.asset?._ref ? (
          <div className="w-full lg:w-1/2 h-auto bg-[#F6F7FB] rounded-lg overflow-hidden shadow-md">
            <Image
              src={urlFor(product.image.asset._ref).url()}
              alt={product.name}
              width={500}
              height={500}
              className="h-full w-full object-contain"
            />
          </div>
        ) : (
          <div className="w-full lg:w-1/2 h-auto bg-[#F6F7FB] rounded-lg overflow-hidden shadow-md flex items-center justify-center">
            <p className="text-gray-500">No image available</p>
          </div>
        )}

        {/* Product Details */}
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
                addToCart(product); // Add product to cart
                router.push("/cart"); // Navigate to the cart page
              }}
              className="w-44 sm:w-auto bg-[#151875] text-white px-6 py-2 rounded-lg hover:bg-[#232975] transition"
            >
              Add to Cart
            </button>
            <button
              onClick={() => {
                addToWishlist(product); // Add product to wishlist
                router.push("/wishlist"); // Navigate to the wishlist page
              }}
              className="w-44 sm:w-auto bg-[#fb2e86] text-white px-6 py-2 rounded-lg hover:bg-[#e73b86] transition"
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>

      {/* Suggestions Section */}
      <SuggestionsComponent />
    </div>
  );
}
