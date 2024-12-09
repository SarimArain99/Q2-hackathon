import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <footer className="bg-[#EEEFFB] px-10 py-16 text-[#8A8FB9]">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl font-bold text-black text-start">Hekto</h2>
          <div className="flex items-center bg-white rounded-md shadow-md overflow-hidden">
            <input
              type="text"
              placeholder="Enter Email Address"
              className="flex-1 px-2 py-2 text-sm text-gray-800 bg-transparent outline-none placeholder-gray-500"
            />
            <button className="bg-[#FB2E86] text-white text-sm font-medium px-2 py-2 hover:bg-[#ff4d9c] transition">
              Sign Up
            </button>
          </div>
          <p className="text-[16px] leading-relaxed">
            Contact Info:
            <br /> 17 Princess Road, London, Greater London NW1 8JR, UK
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="text-2xl font-semibold text-black text-center">
            Category
          </h2>
          <ul className="space-y-2 text-center">
            <li>Laptops & Computers</li>
            <li>Cameras & Photography</li>
            <li>Smart Phones & Tablets</li>
            <li>Video Games & Consoles</li>
            <li>Waterproof Headphones</li>
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="text-2xl font-semibold text-black text-center">
            Customer Care
          </h2>
          <ul className="space-y-2 text-center">
            <li>My Account</li>
            <li>Discount</li>
            <li>Orders History</li>
            <li>Returns</li>
            <li>Order Tracking</li>
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="text-2xl font-semibold text-black text-center">
            Pages
          </h2>
          <ul className="space-y-2 text-center">
            <li>Blog</li>
            <li>Browse the Shop</li>
            <li>Category</li>
            <li>Pre-Built Pages</li>
            <li>Visual Composer Elements</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-300 pt-5 text-sm text-gray-600 flex flex-wrap items-center justify-between sm:justify-around gap-5">
        <p className="text-center w-full sm:w-auto">
          &copy; 2024 Hekto. All Rights Reserved.
        </p>
        <Image
          src="/social.png"
          alt=""
          height={1000}
          width={1000}
          className="h-6 w-20 mx-auto sm:mx-0"
        />
      </div>
    </footer>
  );
}

export default Footer;
