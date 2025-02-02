"use client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { useShop } from "../../../../context/ShopContext";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Favourites = () => {
  const { wishlist, removeFromWishlist } = useShop();

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
    <>
      {/* Wishlist Header */}
      <div className="h-40 bg-[#F6F5FF] px-4 sm:px-8 md:px-16 lg:px-20 flex flex-col justify-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#101750] text-center sm:text-left">
          Wishlist
        </h2>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Wishlist</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="pt-16 sm:px-10 px-5 min-h-screen">
        {wishlist.length === 0 ? (
          <p className="text-lg sm:text-xl font-semibold text-center text-[#101750]">
            Your wishlist is empty. Start adding your favorite items today!
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {wishlist.map((item: Product) => (
              <div
                key={item._id}
                className="relative flex flex-col lg:flex-row items-center bg-white overflow-hidden p-4 border-b-2 border-gray-200"
              >
                <div className="w-full lg:w-36 flex items-center justify-center">
                  <Image
                    src={urlFor(item.image.asset._ref).url()}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="w-auto lg:w-36"
                  />
                </div>

                <div className="mt-4 lg:mt-0 lg:ml-6 text-center lg:text-left w-full">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-600">
                    <b className="text-[#101750]">Name:</b> {item.name}
                  </h2>
                  <p className="text-sm sm:text-base font-semibold text-gray-600">
                    <b className="text-[#101750]">Description:</b>{" "}
                    {item.description}
                  </p>

                  <h2 className="text-sm font-semibold text-gray-600">
                    <b className="text-[#101750]">Stock:</b> {item.stockLevel}
                  </h2>
                  <h2 className="text-sm font-semibold text-gray-600">
                    <b className="text-[#101750]">Category:</b> {item.category}
                  </h2>
                  <h2 className="text-lg font-semibold text-gray-600">
                    <b className="text-[#101750]">Price:</b> ${item.price}
                  </h2>
                  {item.discountPercentage > 0 && (
                    <h2 className="text-md text-red-600 font-semibold">
                      Discount {item.discountPercentage}%
                    </h2>
                  )}
                  <span
                    className={`inline-block mt-2 px-2 py-1 text-xs font-bold rounded ${
                      item.isFeaturedProduct
                        ? "bg-yellow-200 text-yellow-800"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {item.isFeaturedProduct ? "Featured" : "Not Featured"}
                  </span>
                </div>

                <div className="flex justify-center lg:justify-end w-full mt-4 lg:mt-0 lg:absolute lg:bottom-4 lg:right-4">
                  <button
                    onClick={() => removeFromWishlist(item._id)}
                    className="w-40 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Favourites;
