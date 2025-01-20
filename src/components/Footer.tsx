import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#EEEFFB] px-10 py-16 text-[#8A8FB9]">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 items-center">
        <div className="flex flex-col gap-5 items-center">
          <h2 className="text-4xl font-bold text-black text-start">Hekto</h2>
          <div className="flex items-center bg-white rounded-md shadow-md overflow-hidden sm:w-64 lg:w-full">
            <input
              type="text"
              placeholder="Enter Email Address"
              className="flex-1 h-full px-2 text-sm text-gray-800 bg-transparent outline-none placeholder-gray-500"
            />
            <button className="bg-[#FB2E86] px-2 lg:px-0 text-white text-xs h-full font-medium py-2 hover:bg-[#ff4d9c] ">
              Sign-Up
            </button>
          </div>
          <p className="text-[16px] leading-relaxed w-64 lg:w-full">
            Contact Info:
            <br /> 123 Maple Street, London, Greater London NW1 8JR, UK
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl font-semibold text-black text-center">
            Categories
          </h2>
          <ul className="space-y-2 text-center">
            <li>Living Room Furniture</li>
            <li>Bedroom Furniture</li>
            <li>Dining Room Furniture</li>
            <li>Office Furniture</li>
            <li>Outdoor Furniture</li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl font-semibold text-black text-center">
            Customer Care
          </h2>
          <ul className="space-y-2 text-center">
            <li>My Account</li>
            <li>Track My Order</li>
            <li>Shipping & Delivery</li>
            <li>Returns & Exchanges</li>
            <li>Contact Support</li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl font-semibold text-black text-center">
            Pages
          </h2>
          <ul className="space-y-2 text-center flex flex-col">
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/about-us">About Us</Link>
            <Link href="/contact">Contact</Link>
            <Link href="blogs">Blogs</Link>
            <Link href="help">Help</Link>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-300 pt-5 text-sm text-gray-600 flex flex-wrap items-center justify-between sm:justify-around gap-5">
        <p className="text-center w-full sm:w-auto">
          &copy; 2024-{currentYear} Hekto. All Rights Reserved.
        </p>
        <Image
          src="/social.png"
          alt="Social Media Icons"
          height={1000}
          width={1000}
          className="h-6 w-24 mx-auto sm:mx-0"
        />
      </div>
    </footer>
  );
}

export default Footer;
