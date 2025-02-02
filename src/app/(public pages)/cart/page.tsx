"use client";
import { urlFor } from "@/sanity/lib/image";
import { useShop } from "../../../../context/ShopContext";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

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
  quantity?: number;
}

const Cart = () => {
  const {
    cart,
    cartTotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useShop();

  return (
    <>
      <div className="h-40 bg-[#F6F5FF] px-4 sm:px-8 md:px-16 lg:px-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold py-5 text-[#101750]">
          Cart
        </h2>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Cart</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="sm:px-10 px-5 min-h-screen">
        {cart.length === 0 ? (
          <p className="text-2xl font-semibold text-center text-[#FB2E86] items-center justify-center flex h-screen">
            Your cart is waiting to be filled! 🛒
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
                  <div className="flex items-center gap-4">
                    <h2 className="text-lg text-gray-800">
                      <b>Price:</b> ${item.price}
                    </h2>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => decreaseQuantity(item._id)}
                        className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
                      >
                        -
                      </button>
                      <span className="text-lg font-semibold">
                        {item.quantity || 1}
                      </span>
                      <button
                        onClick={() => increaseQuantity(item._id)}
                        className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item._id)}
                      className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div className="mt-8 p-6 bg-white rounded-lg shadow-sm text-right">
              <h2 className="text-2xl font-bold text-gray-800">
                Cart Total: ${cartTotal.toFixed(2)}
              </h2>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
