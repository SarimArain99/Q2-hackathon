import Image from "next/image";
import Link from "next/link";
import React from "react";

function Promotional() {
  return (
    <div className="bg-[#F2F0FF] flex flex-col xl:flex-row items-center lg:items-center justify-between px-6 lg:px-10 relative pb-5">
      <div className="flex justify-center lg:justify-start w-full lg:w-auto mb-10 lg:mb-0 lg:absolute lg:top-0 lg:left-10">
        <Image
          src="/lamp.png"
          alt="Lamp"
          width={1000}
          height={1000}
          className="h-40 w-40 sm:h-48 sm:w-48 lg:h-60 lg:w-60"
        />
      </div>

      <div className="flex flex-col gap-3 max-w-full lg:max-w-2xl z-10 text-center lg:text-left mt-10 lg:mt-72 lg:mx-auto lg:px-5">
        <p className="text-[#FB2E86] text-[14px] sm:text-[16px] font-bold">
          Best Furniture For Your Castle...
        </p>
        <h2 className="text-[32px] text-[#0D0E43] sm:text-[40px] lg:text-[53px] font-bold leading-tight">
          New Furniture Collection Trends in 2025
        </h2>
        <p className="text-[#8A8FB9] text-[14px] sm:text-[16px]">
          Discover elegance and comfort with our exclusive range of furniture.
          Transform your living space with pieces that are crafted for both
          style and function.
        </p>

        <button className="bg-[#FB2E86] w-[140px] sm:w-[164px] h-[40px] sm:h-[50px] text-white rounded-lg shadow-lg hover:bg-[#d02270] mx-auto lg:mx-0">
          <Link href="/shop">Shop Now</Link>
        </button>
      </div>

      <div className="flex justify-center lg:justify-end w-full lg:w-auto mt-10 lg:mt-0 lg:absolute lg:top-10 lg:right-10">
        <Image
          src="/sofa.png"
          alt="Sofa"
          width={1000}
          height={1000}
          className="h-52 w-52 sm:h-64 sm:w-64 lg:h-72 lg:w-72"
        />
      </div>
    </div>
  );
}

export default Promotional;
