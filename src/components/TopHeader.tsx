import Image from "next/image";
import Link from "next/link";
import React from "react";

function TopHeader() {
  return (
    <div className="bg-[#7E33E0] text-white flex flex-wrap items-center justify-between px-4 py-2 lg:justify-around">
      <div className="flex flex-wrap gap-4 lg:gap-10">
        <div className="flex items-center gap-2">
          <Image
            src="/mail.png"
            alt="Mail"
            width={1000}
            height={1000}
            className="h-5 w-5"
          />
          <p className="text-xs lg:text-base">mhhasanul@gmail.com</p>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src="/phone.png"
            alt="Phone"
            width={1000}
            height={1000}
            className="h-5 w-5"
          />
          <p className="text-sm lg:text-base">(12345)67890</p>
        </div>
      </div>
      <div className="flex items-center gap-4 mt-2 lg:mt-0">
        <select className="bg-transparent text-sm lg:text-base">
          <option value="">English</option>
        </select>
        <select className="bg-transparent text-sm lg:text-base">
          <option value="">USD</option>
        </select>
        <Link
          href="/login"
          className="flex items-center gap-1 text-sm lg:text-base"
        >
          <p className="md:block hidden">Login</p>
          <Image
            src="/login.png"
            alt="Login"
            width={1000}
            height={1000}
            className="h-5  w-5"
          />
        </Link>
        <Link
          href="/shop-left-sidebar"
          className="flex items-center gap-1 text-sm lg:text-base"
        >
          <p className="md:block hidden"> WishList</p>
          <Image
            src="/wishlist.png"
            alt="Wishlist"
            width={1000}
            height={1000}
            className="h-5  w-5"
          />
        </Link>
        <Link href="/shopping-cart">
          <Image
            src="/cart.png"
            alt="Cart"
            width={1000}
            height={1000}
            className="h-5  w-5"
          />
        </Link>
      </div>
    </div>
  );
}

export default TopHeader;
