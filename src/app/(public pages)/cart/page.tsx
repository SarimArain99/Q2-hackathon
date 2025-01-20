"use client";
import { urlFor } from "@/sanity/lib/image";
import { useShop } from "../../../../context/ShopContext";
import Image from "next/image";

interface Product {
  _id: string;
  name: string;
  image: {
    asset: {
      _ref: string;
    };
  };
  price: number;
  discountPercentage: number;
  isFeaturedProduct: boolean;
  stockLevel: number;
  category: string;
}

const Cart = () => {
  const { cart } = useShop();
  return (
    <div className="pt-20 sm:px-10 px-5 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-center uppercase cursor-default">
        All Cart Items
      </h1>
      {cart.length === 0 ? (
        <p className="text-xl font-semibold text-center text-gray-700">
          Your Cart is Empty.
        </p>
      ) : (
        <div className="space-y-6">
          {cart.map((item: Product) => (
            <div
              key={item._id}
              className="flex flex-col lg:flex-row items-center lg:items-center justify-between border-b pb-4 bg-white p-4 rounded-lg shadow-sm"
            >
              <div className="flex-shrink-0 mb-4 lg:mb-0">
                <Image
                  src={urlFor(item.image.asset._ref).url()}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="w-36 object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-col lg:flex-row lg:items-center gap-x-4 w-full">
                <div className="ml-4 lg:ml-0 flex-1">
                  <h2 className="text-lg font-semibold text-gray-800">
                    <b>Name:</b> {item.name}
                  </h2>
                  <h2 className="text-lg font-semibold text-gray-800">
                    <b>Stock:</b> {item.stockLevel}
                  </h2>
                  <h2 className="text-lg font-semibold text-gray-800">
                    <b>Category:</b> {item.category}
                  </h2>
                  {item.discountPercentage > 0 && (
                    <h2 className="text-sm font-semibold text-red-600">
                      Discount {item.discountPercentage}%
                    </h2>
                  )}
                  {item.isFeaturedProduct && (
                    <span className="inline-block bg-yellow-200 text-yellow-800 text-xs font-bold px-2 py-1 rounded">
                      Featured
                    </span>
                  )}
                </div>
                <h2 className="text-lg text-gray-800 lg:text-right mt-4 lg:mt-0">
                  <b>Price:</b> ${item.price}
                </h2>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
