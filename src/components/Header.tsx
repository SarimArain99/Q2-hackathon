"use client";
import React, { useState } from "react";
import TopHeader from "./TopHeader";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const path = usePathname();

  function handleHambuger() {
    setMenuOpen(!menuOpen);
  }
  return (
    <>
      <TopHeader />
      <div className="bg-white py-2">
        <div className="flex items-center justify-between px-4 sm:px-8 md:px-16 lg:px-20">
          <h1 className="text-[34px] font-bold text-[#0D0E43]">Hekto</h1>
          <div className="hidden lg:flex items-center gap-7">
            <Link
              href="/"
              className={`text-[#0D0E43] hover:text-[#FB2E86] font-semibold text-lg ${path === "/" ? "text-[#FB2E86]" : ""}`}
            >
              Home
            </Link>
            <Link
              href="/blogs"
              className={`text-[#0D0E43] hover:text-[#FB2E86] font-semibold text-lg ${path === "/blogs" ? "text-[#FB2E86]" : ""}`}
            >
              Blogs
            </Link>
            <Link
              href="/about-us"
              className={`text-[#0D0E43] hover:text-[#FB2E86] font-semibold text-lg ${path === "/about-us" ? "text-[#FB2E86]" : ""}`}
            >
              About Us
            </Link>
            <Link
              href="/shop"
              className={`text-[#0D0E43] hover:text-[#FB2E86] font-semibold text-lg ${path === "/shop" ? "text-[#FB2E86]" : ""}`}
            >
              Shop
            </Link>
            <Link
              href="/contact"
              className={`text-[#0D0E43] hover:text-[#FB2E86] font-semibold text-lg ${path === "/contact" ? "text-[#FB2E86]" : ""}`}
            >
              Contact
            </Link>
            <Link
              href="/help"
              className={`text-[#0D0E43] hover:text-[#FB2E86] font-semibold text-lg ${path === "/help" ? "text-[#FB2E86]" : ""}`}
            >
              Help
            </Link>
          </div>
          <div className="hidden lg:flex items-center overflow-hidden">
            <input
              type="text"
              className="px-4 py-2 outline-none border-y border-l focus:border-[#FB2E86] duration-500"
              placeholder="Search"
            />
            <button className="bg-[#FB2E86] p-2 border-y border-r border-[#FB2E86]">
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
          <div className="lg:hidden flex flex-col items-center h-full bg-white px-6 py-4 space-y-4 duration-1000">
            <Link
              onClick={handleHambuger}
              href="/"
              className="text-[#0D0E43] flex items-center pl-5 text-xl hover:text-[white] font-semibold border-y w-full hover:bg-[#fb2e86] duration-500 h-20"
            >
              Home
            </Link>
            <Link
              onClick={handleHambuger}
              href="/blogs"
              className="text-[#0D0E43] flex items-center pl-5 text-xl hover:text-[white] font-semibold border-y w-full hover:bg-[#fb2e86] duration-500 h-20"
            >
              Blogs
            </Link>
            <Link
              onClick={handleHambuger}
              href="/about-us"
              className="text-[#0D0E43] flex items-center pl-5 text-xl hover:text-[white] font-semibold border-y w-full hover:bg-[#fb2e86] duration-500 h-20"
            >
              About Us
            </Link>
            <Link
              onClick={handleHambuger}
              href="/shop"
              className="text-[#0D0E43] flex items-center pl-5 text-xl hover:text-[white] font-semibold border-y w-full hover:bg-[#fb2e86] duration-500 h-20"
            >
              Shop
            </Link>
            <Link
              onClick={handleHambuger}
              href="/contact"
              className="text-[#0D0E43] flex items-center pl-5 text-xl hover:text-[white] font-semibold border-y w-full hover:bg-[#fb2e86] duration-500 h-20"
            >
              Contact
            </Link>
            <Link
              onClick={handleHambuger}
              href="/help"
              className="text-[#0D0E43] flex items-center pl-5 text-xl hover:text-[white] font-semibold border-y w-full hover:bg-[#fb2e86] duration-500 h-20"
            >
              Help
            </Link>
            <div className="flex items-center px-5 text-xl font-semibold w-full h-20 duration-500 bg-white text-[#0D0E43] hover:bg-[#fb2e86] group">
              <input
                type="text"
                className="px-4 py-2 outline-none flex-grow border group-hover:border-white h-[50%] duration-500"
                placeholder="Search..."
              />
              <button className="bg-[#FB2E86] p-2 border group-hover:border-white h-[50%] duration-500">
                <Image
                  src="/search.png"
                  alt="Search"
                  width={1000}
                  height={1000}
                  className="h-6 w-6"
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
