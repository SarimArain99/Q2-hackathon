import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";

function page() {
  const products = [
    {
      name: "Ut diam consequat",
      color: "Brown",
      size: "XL",
      price: 32.0,
      total: 219.0,
      img: "/cart1.png",
    },
    {
      name: "Vel faucibus posuere",
      color: "Brown",
      size: "XL",
      price: 32.0,
      total: 219.0,
      img: "/cart2.png",
    },
    {
      name: "Ac vitae vestibulum",
      color: "Brown",
      size: "XL",
      price: 32.0,
      total: 219.0,
      img: "/cart3.png",
    },
    {
      name: "Elit massa diam",
      color: "Brown",
      size: "XL",
      price: 32.0,
      total: 219.0,
      img: "/cart4.png",
    },
    {
      name: "Proin pharetra elementum",
      color: "Brown",
      size: "XL",
      price: 32.0,
      total: 219.0,
      img: "/cart5.png",
    },
  ];
  return (
    <div>
      {/* Header */}
      <div className="h-40 bg-[#F6F5FF] px-4 sm:px-8 md:px-16 lg:px-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold py-5">
          Shopping Cart
        </h2>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Shop List</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex flex-col items-center p-4 space-y-8">
        <div className="w-full max-w-4xl overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="p-2 border-b-2">Product</th>
                <th className="p-2 border-b-2">Price</th>
                <th className="p-2 border-b-2">Quantity</th>
                <th className="p-2 border-b-2">Total</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item, index) => (
                <tr key={index}>
                  <td className="p-2 border-b flex items-center">
                    <Image
                      src={item.img}
                      alt={item.name}
                      width={64}
                      height={64}
                      className="w-16 h-16 mr-4"
                    />
                    <div>
                      <div className="font-medium">{item.name}</div>
                      <div className="text-sm text-gray-500">
                        Color: {item.color}
                      </div>
                      <div className="text-sm text-gray-500">
                        Size: {item.size}
                      </div>
                    </div>
                  </td>
                  <td className="p-2 border-b">${item.price.toFixed(2)}</td>
                  <td className="p-2 border-b">
                    <input
                      type="number"
                      className="w-16 p-1 border rounded"
                      defaultValue="1"
                    />
                  </td>
                  <td className="p-2 border-b">${item.total.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-full max-w-4xl flex flex-col sm:flex-row justify-between gap-4">
          <button className="w-full sm:w-auto px-4 py-2 text-white bg-[#FF1788] rounded">
            Update Cart
          </button>
          <button className="w-full sm:w-auto px-4 py-2 text-white bg-[#FF1788] rounded">
            Clear Cart
          </button>
        </div>
        <div className="w-full max-w-md">
          <div className="p-4 border rounded">
            <h2 className="text-lg font-bold">Cart Totals</h2>
            <div className="flex justify-between mt-2">
              <span>Subtotals:</span> <span>$219.00</span>
            </div>
            <div className="flex justify-between mt-2">
              <span>Totals:</span> <span>$325.00</span>
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full px-4 py-2 mt-4 text-white bg-green-500 rounded">
              Proceed To Checkout
            </button>
          </div>
        </div>
        <div className="w-full max-w-md">
          <div className="p-4 border rounded">
            <h2 className="text-lg font-bold">Calculate Shipping</h2>
            <input
              type="text"
              placeholder="Country"
              className="w-full p-2 mt-2 border rounded"
            />
            <input
              type="text"
              placeholder="City"
              className="w-full p-2 mt-2 border rounded"
            />
            <input
              type="text"
              placeholder="Postal Code"
              className="w-full p-2 mt-2 border rounded"
            />
            <button className="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded">
              Calculate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
