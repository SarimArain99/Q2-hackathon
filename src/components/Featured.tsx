import Image from "next/image";
import React from "react";

function Featured() {
  return (
    <div>
      <h1 className="text-[#1A0B5B] text-[42px] font-bold text-center py-5">
        Featured Products
      </h1>
      <div className="flex justify-center">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 px-3">
          <div className="h-[361px] max-w-[270px] shadow-xl shadow-gray-400 overflow-hidden mx-auto">
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
              <div className="flex gap-3">
                <div className="bg-blue-300 h-[3px] w-[15px]"></div>
                <div className="bg-red-600 h-[3px] w-[15px]"></div>
                <div className="bg-blue-700 h-[3px] w-[15px]"></div>
              </div>
              <p className="text-[#151875] text-[14px]">Code - Y523201</p>
              <p className="text-[#151875] text-[14px]">$42.00</p>
            </div>
          </div>
          <div className="h-[361px] max-w-[270px] shadow-xl shadow-gray-400 overflow-hidden mx-auto">
            <div className="relative h-[60%]">
              <Image src="/blueCard.png" alt="" width={1000} height={1000} className="h-6 w-6 absolute top-1 left-2"/>
              <Image src="/love.png" alt="" width={1000} height={1000} className="h-5 w-5 absolute top-2 left-8"/>
              <Image src="/zoom.png" alt="" width={1000} height={1000} className="h-5 w-5 absolute top-2 left-14"/>
              <Image
                src="/chair6.png"
                alt="Cantilever Chair"
                width={1000}
                height={1000}
                className="h-full w-full bg-[#F6F7FB]"
              />
            </div>
            <div className="flex flex-col items-center gap-3 h-[40%] mt-5 bg-[#2F1AC4]">
              <h2 className=" text-[18px] font-bold text-white">
                Cantilever Chair
              </h2>
              <div className="flex gap-3">
                <div className="bg-blue-400 h-[3px] w-[15px]"></div>
                <div className="bg-red-500 h-[3px] w-[15px]"></div>
                <div className="bg-blue-600 h-[3px] w-[15px]"></div>
              </div>
              <p className="text-white text-[14px]">Code - Y523201</p>
              <p className="text-white text-[14px]">$42.00</p>
            </div>
          </div>
          <div className="h-[361px] max-w-[270px] shadow-xl shadow-gray-400 overflow-hidden mx-auto">
            <div className="h-[60%]">
              <Image
                src="/chair3.png"
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
              <div className="flex gap-3">
                <div className="bg-blue-300 h-[3px] w-[15px]"></div>
                <div className="bg-red-600 h-[3px] w-[15px]"></div>
                <div className="bg-blue-700 h-[3px] w-[15px]"></div>
              </div>
              <p className="text-[#151875] text-[14px]">Code - Y523201</p>
              <p className="text-[#151875] text-[14px]">$42.00</p>
            </div>
          </div>
          <div className="h-[361px] max-w-[270px] shadow-xl shadow-gray-400 overflow-hidden mx-auto">
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
              <div className="flex gap-3">
                <div className="bg-blue-300 h-[3px] w-[15px]"></div>
                <div className="bg-red-600 h-[3px] w-[15px]"></div>
                <div className="bg-blue-700 h-[3px] w-[15px]"></div>
              </div>
              <p className="text-[#151875] text-[14px]">Code - Y523201</p>
              <p className="text-[#151875] text-[14px]">$42.00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-10 flex justify-center items-center gap-2">
        <div className="h-[4px] w-[25px] bg-[#FB2E86] rounded-xl"></div>
        <div className="h-[4px] w-[18px] bg-[#FEBAD7] rounded-xl"></div>
        <div className="h-[4px] w-[18px] bg-[#FEBAD7] rounded-xl"></div>
        <div className="h-[4px] w-[18px] bg-[#FEBAD7] rounded-xl"></div>
      </div>
    </div>
  );
}

export default Featured;
