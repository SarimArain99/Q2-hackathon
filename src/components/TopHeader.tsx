import Link from "next/link";
import React from "react";

function TopHeader() {
  return (
    <div className="bg-[#0D0E43] text-white flex flex-wrap gap-5 items-center justify-center px-4 py-2 lg:justify-around">
      <div className="flex items-center gap-4 lg:gap-10">
        <div className="flex items-center gap-1">
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />{" "}
            <polyline points="22,6 12,13 2,6" />
          </svg>
          <p className="text-xs lg:text-lg font-semibold">
            <Link
              href="mailto:sarimarain99@gmail.com"
              className="hover:underline outline-none"
            >
              sarimarain99@gmail.com
            </Link>
          </p>
        </div>
        <p>|</p>
        <div className="flex items-center gap-1">
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <Link
            href="tel:03103236272"
            className="text-sm lg:text-base font-semibold"
          >
            03103236272
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <select className="bg-transparent text-sm lg:text-lg border-none outline-none font-semibold">
          <option value="" className="text-black" hidden>
            Languages
          </option>
          <option value="" className="text-black">
            English
          </option>
          <option value="" className="text-black">
            Urdu
          </option>
          <option value="" className="text-black">
            French
          </option>
          <option value="" className="text-black">
            Spanish
          </option>
          <option value="" className="text-black">
            Arabic
          </option>
          <option value="" className="text-black">
            Hindi
          </option>
          <option value="" className="text-black">
            Japanese
          </option>
          <option value="" className="text-black">
            German
          </option>
          <option value="" className="text-black">
            Italian
          </option>
          <option value="" className="text-black">
            Portuguese
          </option>
          <option value="" className="text-black">
            Russian
          </option>
          <option value="" className="text-black">
            Korean
          </option>
        </select>
        <p>|</p>
        <select className="bg-transparent text-sm lg:text-lg outline-none font-semibold">
          <option value="" className="text-black" hidden>
            Currencies
          </option>
          <option value="" className="text-black">
            PKR
          </option>
          <option value="" className="text-black">
            USD
          </option>
          <option value="" className="text-black">
            EUR
          </option>
          <option value="" className="text-black">
            JPY
          </option>
          <option value="" className="text-black">
            GBP
          </option>
          <option value="" className="text-black">
            AUD
          </option>
          <option value="" className="text-black">
            CAD
          </option>
          <option value="" className="text-black">
            CHF
          </option>
          <option value="" className="text-black">
            CNY
          </option>
          <option value="" className="text-black">
            INR
          </option>
        </select>
        <p>|</p>
        <Link
          href="/login"
          className="flex items-center text-sm lg:text-base gap-1"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="md:block hidden font-semibold text-lg">Login</p>
        </Link>
        <p>|</p>
        <Link
          href="/wishlist"
          className="flex items-center gap-1 text-sm lg:text-base"
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          <p className="md:block hidden font-semibold text-lg"> WishList</p>
        </Link>
        <p>|</p>
        <Link
          href="/cart"
          className="flex items-center text-sm lg:text-base gap-1"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <p className="md:block hidden font-semibold text-lg"> Cart</p>
        </Link>
      </div>
    </div>
  );
}

export default TopHeader;
