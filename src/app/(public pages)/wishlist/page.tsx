"use client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { useShop } from "../../../../context/ShopContext";

const Favourites = () => {
  const { wishlist } = useShop();

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

  return (
    <div className="pt-20 sm:px-10 px-5 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-center uppercase cursor-default">
        Wishlist
      </h1>
      {wishlist.length === 0 ? (
        <p className="text-xl font-semibold text-center text-gray-700">
          Your Wishlist is Empty.
        </p>
      ) : (
        <div className="space-y-6">
          {wishlist.map((item: Product) => (
            <div
              key={item._id}
              className="flex items-center justify-between border-b pb-4 bg-white p-4 rounded-lg shadow-sm hover:scale-95 duration-500"
            >
              <div className="flex items-center gap-x-4">
                <Image
                  src={urlFor(item.image.asset._ref).url()}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="w-36 object-cover rounded-lg"
                />
                <div className="ml-4">
                  <h2 className="text-lg font-semibold text-gray-800">
                    <b>Name</b>: {item.name}
                  </h2>
                  <p className="text-lg text-gray-800 font-semibold">
                    <b>Description</b>: {item.description}
                  </p>
                  <h2 className="text-lg font-semibold text-gray-800">
                    <b>Price</b>: {item.price}
                  </h2>
                  <h2 className="text-lg font-semibold text-gray-800">
                    <b>Stock</b>: {item.stockLevel}
                  </h2>
                  <h2 className="text-sm text-gray-800 font-semibold">
                    <b>Category</b>: {item.category}
                  </h2>
                  {item.discountPercentage > 0 && (
                    <h2 className="text-lg text-red-600 font-semibold">
                      Discount {item.discountPercentage}%
                    </h2>
                  )}
                  {item.isFeaturedProduct ? (
                    <span className="inline-block bg-yellow-200 text-yellow-800 text-xs font-bold px-2 py-1 rounded">
                      Featured
                    </span>
                  ) : (
                    <span className="inline-block bg-yellow-200 text-yellow-800 text-xs font-bold px-2 py-1 rounded">
                      Not Featured yet
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favourites;
