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
import Link from "next/link";

function page() {
  return (
    <div>
      <div className="h-40 bg-[#F6F5FF] px-4 sm:px-8 md:px-16 lg:px-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold py-5">
          Hekto Demo
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
              <BreadcrumbPage>Hekto Demo</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:items-start">
        <div className="p-4 sm:p-10 w-full lg:w-2/3">
          <h1 className="text-2xl font-bold mb-4">Hekto Demo</h1>
          <p className="text-sm text-gray-500 mb-8">
            Cart / Information / Shipping / Payment
          </p>
          <div>
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
              <input
                type="text"
                placeholder="Email or mobile phone number"
                className="w-full p-3 border border-gray-300 rounded mb-4"
              />
              <div className="flex items-center mb-4">
                <input type="checkbox" id="updates" className="mr-2" />
                <label htmlFor="updates" className="text-sm">
                  Keep me up to date on news and exclusive offers
                </label>
              </div>
              <p className="text-sm text-gray-500">
                Already have an account?{" "}
                <Link href="#" className="text-blue-500">
                  Log in
                </Link>
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Shipping address</h2>
              <div className="flex flex-col sm:flex-row mb-4">
                <input
                  type="text"
                  placeholder="First name (optional)"
                  className="w-full sm:w-1/2 p-3 border-b-2 border-gray-300 rounded sm:mr-2 mb-4 sm:mb-0"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full sm:w-1/2 p-3 border-b-2 border-gray-300 rounded"
                />
              </div>
              <input
                type="text"
                placeholder="Address"
                className="w-full p-3 border-b-2 border-gray-300 rounded mb-4"
              />
              <input
                type="text"
                placeholder="Apartment, suite, etc. (optional)"
                className="w-full p-3 border-b-2 border-gray-300 rounded mb-4"
              />
              <div className="flex flex-col sm:flex-row mb-4">
                <input
                  type="text"
                  placeholder="City"
                  className="w-full sm:w-1/2 p-3 border-b-2 border-gray-300 rounded sm:mr-2 mb-4 sm:mb-0"
                />
                <input
                  type="text"
                  placeholder="Country"
                  className="w-full sm:w-1/2 p-3 border-b-2 border-gray-300 rounded"
                />
              </div>
              <input
                type="text"
                placeholder="Postal Code"
                className="w-full p-3 border-b-2 border-gray-300 rounded mb-4"
              />
              <button className="bg-[#FB2E86] text-white p-3 rounded">
                Continue Shipping
              </button>
            </div>
          </div>
        </div>
        <div className="p-4 sm:p-10 w-full lg:w-1/3">
          <div>
            {["demo1.png", "demo2.png","demo3.png", "demo4.png", "demo5.png"]
              .map((_, idx) => (
                <div key={idx} className="flex items-center mb-4">
                  <Image
                    src={`/demo${idx + 1}.png`}
                    alt={`Item ${idx + 1}`}
                    className="w-16 h-16 rounded mr-4"
                    width={1000}
                    height={1000}
                  />
                  <div>
                    <p className="text-sm">Ullamcorper</p>
                    <p className="text-xs text-gray-500">Color: Brown</p>
                    <p className="text-xs text-gray-500">Size: XL</p>
                    <p className="text-sm font-semibold">$32.00</p>
                  </div>
                </div>
              ))}
            <div className="flex justify-between mb-4">
              <p className="text-sm">Subtotal</p>
              <p className="text-sm font-semibold">$219.00</p>
            </div>
            <div className="flex justify-between mb-4">
              <p className="text-sm">Total</p>
              <p className="text-sm font-semibold">$325.00</p>
            </div>
            <button className="bg-[#19D16F] text-white p-3 rounded">
              Proceed To Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
