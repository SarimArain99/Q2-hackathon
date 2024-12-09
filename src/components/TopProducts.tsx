import Image from "next/image";
import React from "react";

function TopProducts() {
  return (
    <div>
      <h1 className="text-[#151875] text-[42px] font-bold text-center my-5">
        Trending Products
      </h1>
      <div className="flex items-center justify-center">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 p-4">
          <div className="h-[361px] max-w-[270px] shadow-xl shadow-gray-400 overflow-hidden">
            <div className="h-[60%]">
              <Image
                src="/chair4.png"
                alt="Cantilever Chair"
                width={1000}
                height={1000}
                className="h-full w-full bg-[#F6F7FB]"
              />
            </div>
            <div className="flex flex-col items-center gap-3 h-[40%] mt-5">
              <h2 className="text-[#FB2E86] text-[18px] font-bold">
                Cantilever Chair
              </h2>
              <div className="flex gap-1 items-center">
                <p className="text-xl">$42.00</p>
                <p className="line-through text-[#FB2448] text-sm">$65.00</p>
              </div>
            </div>
          </div>
          <div className="h-[361px] max-w-[270px] shadow-xl shadow-gray-400 overflow-hidden">
            <div className="h-[60%]">
              <Image
                src="/chair5.png"
                alt="Cantilever Chair"
                width={1000}
                height={1000}
                className="h-full w-full bg-[#F6F7FB]"
              />
            </div>
            <div className="flex flex-col items-center gap-3 h-[40%] mt-5">
              <h2 className="text-[#FB2E86] text-[18px] font-bold">
                Cantilever Chair
              </h2>
              <div className="flex gap-1 items-center">
                <p className="text-xl">$42.00</p>
                <p className="line-through text-[#FB2448] text-sm">$65.00</p>
              </div>
            </div>
          </div>
          <div className="h-[361px] max-w-[270px] shadow-xl shadow-gray-400 overflow-hidden">
            <div className="h-[60%]">
              <Image
                src="/chair6.png"
                alt="Cantilever Chair"
                width={1000}
                height={1000}
                className="h-full w-full bg-[#F6F7FB]"
              />
            </div>
            <div className="flex flex-col items-center gap-3 h-[40%] mt-5">
              <h2 className="text-[#FB2E86] text-[18px] font-bold">
                Cantilever Chair
              </h2>
              <div className="flex gap-1 items-center">
                <p className="text-xl">$42.00</p>
                <p className="line-through text-[#FB2448] text-sm">$65.00</p>
              </div>
            </div>
          </div>
          <div className="h-[361px] max-w-[270px] shadow-xl shadow-gray-400 overflow-hidden">
            <div className="h-[60%]">
              <Image
                src="/chair7.png"
                alt="Cantilever Chair"
                width={1000}
                height={1000}
                className="h-full w-full bg-[#F6F7FB]"
              />
            </div>
            <div className="flex flex-col items-center gap-3 h-[40%] mt-5">
              <h2 className="text-[#FB2E86] text-[18px] font-bold">
                Cantilever Chair
              </h2>
              <div className="flex gap-1 items-center">
                <p className="text-xl">$42.00</p>
                <p className="line-through text-[#FB2448] text-sm">$65.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-5 justify-center items-center">
        <div  className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          <div className="bg-[#FFF6FB] p-5">
            <h2 className="text-[#151875] text-[26px] font-semibold">
              23% off in all products
            </h2>
            <p className="text-[#FB2E86] text-[16px] underline">Shop Now</p>
            <div className="flex justify-end">
              <Image
                src="/clock.png"
                alt="Clock"
                width={1000}
                height={1000}
                className="h-48 w-44"
              />
            </div>
          </div>
          <div className="bg-[#EEEFFB] p-5">
            <h2 className="text-[#151875] text-[26px] font-semibold">
              23% off in all products
            </h2>
            <p className="text-[#FB2E86] text-[16px] underline">
              View Collection
            </p>
            <div className="flex justify-end">
              <Image
                src="/cupboard.png"
                alt="Clock"
                width={1000}
                height={1000}
                className="h-48 w-60"
              />
            </div>
          </div>
          <div>
            <div className="flex justify-center items-center">
              <Image
                src="/chair5.png"
                alt=""
                width={1000}
                height={1000}
                className="h-20 w-20"
              />
              <span>
                <p>Executive Seat chair</p>
                <p>$32.00</p>
              </span>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/chair4.png"
                alt=""
                width={1000}
                height={1000}
                className="h-20 w-20"
              />
              <span>
                <p>Executive Seat chair</p>
                <p>$32.00</p>
              </span>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/chair6.png"
                alt=""
                width={1000}
                height={1000}
                className="h-20 w-20"
              />
              <span>
                <p>Executive Seat chair</p>
                <p>$32.00</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopProducts;
