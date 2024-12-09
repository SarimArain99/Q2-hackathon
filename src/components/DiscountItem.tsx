import Image from "next/image";
import React from "react";

function DiscountItem() {
  return (
    <div className="px-4 md:px-8 lg:px-16">
      <h1 className="text-[#1A0B5B] text-[28px] md:text-[36px] lg:text-[42px] font-bold text-center py-5">
        Discount Items
      </h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 text-[#151875] gap-4 text-lg md:text-xl font-bold mb-5 text-center">
          <p className="text-[#FB4997] border-b-4 border-[#FB4997] ">
            Wood Chair
          </p>
          <p>Plastic Chair</p>
          <p>Sofa Collection</p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Text Section */}
        <div className="text-center lg:text-left">
          <h2 className="text-[20px] md:text-[28px] lg:text-[35px] text-[#151875] font-bold max-w-full lg:max-w-[500px] mx-auto lg:mx-0">
            20% Discount On All Products
          </h2>
          <p className="text-[#FB4997] text-[18px] md:text-[21px]">
            Eams Sofa Compact
          </p>
          <p className="text-[#B7BACB] text-[15px] md:text-[17px] max-w-full lg:max-w-[400px] mx-auto lg:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
            feugiat habitasse nec, bibendum condimentum.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
            <span className="flex items-center gap-3">
              <Image
                src="/tick.png"
                alt=""
                width={20}
                height={20}
                className="h-5 w-5"
              />
              <p>Material expose like metals</p>
            </span>
            <span className="flex items-center gap-3">
              <Image
                src="/tick.png"
                alt=""
                width={20}
                height={20}
                className="h-5 w-5"
              />
              <p>Clear lines and geometric figures</p>
            </span>
            <span className="flex items-center gap-3">
              <Image
                src="/tick.png"
                alt=""
                width={20}
                height={20}
                className="h-5 w-5"
              />
              <p>Simple neutral colours.</p>
            </span>
            <span className="flex items-center gap-3">
              <Image
                src="/tick.png"
                alt=""
                width={20}
                height={20}
                className="h-5 w-5"
              />
              <p>Material expose like metals</p>
            </span>
          </div>
          <button className="text-white bg-[#FB4997] w-[150px] md:w-[200px] h-[45px] md:h-[57px] mt-5">
            Shop Now
          </button>
        </div>

        <div className="w-full lg:w-[699px] flex justify-center">
          <Image
            src="/tortuga.png"
            alt=""
            height={597}
            width={699}
            className="h-auto w-full max-w-[500px] lg:max-w-[699px]"
          />
        </div>
      </div>
    </div>
  );
}

export default DiscountItem;
