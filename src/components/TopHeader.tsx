import Image from "next/image";
import Link from "next/link";
import React from "react";

function TopHeader() {
  return (
    <div className="bg-[#7E33E0] text-white flex flex-wrap gap-5 items-center justify-center px-4 py-2 lg:justify-around">
      <div className="flex items-center gap-4 lg:gap-10">
        <div className="flex items-center gap-1">
          <Image
            src="/mail.png"
            alt="Mail"
            width={1000}
            height={1000}
            className="h-5 w-5"
          />
          <p className="text-xs lg:text-base">
            <Link
              href="mailto:sarimarain99@gmail.com"
              className="hover:underline"
            >
              sarimarain99@gmail.com
            </Link>
          </p>
        </div>
        <div className="flex items-center gap-1">
          <Image
            src="/phone.png"
            alt="Phone"
            width={1000}
            height={1000}
            className="h-5 w-5"
          />
          <p className="text-sm lg:text-base">03103236272</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <select className="bg-transparent text-sm lg:text-base border-none outline-none">
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

        <select className="bg-transparent text-sm lg:text-base outline-none">
          <option value="" className="text-black" hidden>
            currencies
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
          href="/wishlist"
          className="flex items-center gap-1 text-sm lg:text-base"
        >
          <p className="md:block hidden"> WishList</p>
          <Image
            src="/wishlist.png"
            alt="Wishlist"
            width={1000}
            height={1000}
            className="h-5 w-5"
          />
        </Link>
        <Link href="/cart" className="flex items-center gap-1 text-sm lg:text-base">
        <p className="md:block hidden"> Cart</p>
          <Image
            src="/cart.png"
            alt="Cart"
            width={1000}
            height={1000}
            className="h-5 w-5"
          />
        </Link>
      </div>
    </div>
  );
}

export default TopHeader;
