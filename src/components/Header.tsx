"use client";
import React, { useState } from "react";
import TopHeader from "./TopHeader";
import Link from "next/link";
import Image from "next/image";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <TopHeader />
      <div className="bg-white py-2">
        <div className="flex items-center justify-between px-6 lg:justify-around">
          <h1 className="text-[34px] font-bold text-[#0D0E43]">Hekto</h1>
          <div className="hidden lg:flex items-center gap-8">
            <select name="" id="" className="outline-none text-[#FB2E86]">
              <option value="">
                <Link href="/">Home</Link>
              </option>
            </select>
            <Link href="/pages" className="text-[#0D0E43] hover:text-[#FB2E86]">
              Pages
            </Link>
            <Link
              href="/shop-list"
              className="text-[#0D0E43] hover:text-[#FB2E86]"
            >
              Products
            </Link>
            <Link href="/blog-page" className="text-[#0D0E43] hover:text-[#FB2E86]">
              Blogs
            </Link>
            <Link href="/about-us" className="text-[#0D0E43] hover:text-[#FB2E86]">
              About Us
            </Link>
            <Link href="/shop-grid-default" className="text-[#0D0E43] hover:text-[#FB2E86]">
              Shop
            </Link>
            <Link
              href="/contact"
              className="text-[#0D0E43] hover:text-[#FB2E86]"
            >
              Contact
            </Link>
          </div>
          <div className="hidden lg:flex items-center border-2 overflow-hidden">
            <input
              type="text"
              className="px-4 py-2 outline-none"
              placeholder="Search..."
            />
            <button className="bg-[#FB2E86] p-2">
              <Image
                src="/search.png"
                alt="Search"
                width={1000}
                height={1000}
                className="h-6 w-6 "
              />
            </button>
          </div>
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col gap-1 w-6 h-6 justify-center items-center"
            >
              <span
                className={`h-[2px] w-full bg-[#0D0E43] transition-transform duration-500 ${
                  menuOpen ? "rotate-45 translate-y-1" : ""
                }`}
              ></span>
              <span
                className={`h-[2px] w-full bg-[#0D0E43] transition-opacity duration-500 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`h-[2px] w-full bg-[#0D0E43] transition-transform duration-500 ${
                  menuOpen ? "-rotate-45 -translate-y-[8px]" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="lg:hidden flex flex-col items-start bg-white px-6 py-4 space-y-4">
            <Link href="/" className="text-[#0D0E43] hover:text-[#FB2E86]">
              Home
            </Link>
            <Link href="/pages" className="text-[#0D0E43] hover:text-[#FB2E86]">
              Pages
            </Link>
            <Link
              href="/products"
              className="text-[#0D0E43] hover:text-[#FB2E86]"
            >
              Products
            </Link>
            <Link href="/blogs" className="text-[#0D0E43] hover:text-[#FB2E86]">
              Blogs
            </Link>
            <Link href="/shop" className="text-[#0D0E43] hover:text-[#FB2E86]">
              Shop
            </Link>
            <Link
              href="/contact"
              className="text-[#0D0E43] hover:text-[#FB2E86]"
            >
              Contact
            </Link>
            <div className="flex border-2 overflow-hidden">
              <input
                type="text"
                className="px-4 py-2 outline-none"
                placeholder="Search..."
              />
              <button className="bg-[#FB2E86] p-2">
                <Image
                  src="/search.png"
                  alt="Search"
                  width={1000}
                  height={1000}
                  className="h-6 w-6 "
                />
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
