import Image from "next/image";
import React from "react";

function Treandy() {
  return (
    <div className="flex flex-col md:flex-row bg-[#F1F0FF] items-center justify-center p-4 gap-8">
      <Image
        src="/blueSofa.png"
        alt=""
        width={1000}
        height={1000}
        className="w-full max-w-[400px] md:max-w-[509px] h-auto"
      />
      <div className="flex flex-col gap-5 items-start md:items-start text-center md:text-left">
        <h1 className="text-[24px] md:text-[28px] lg:text-[35px] text-[#151875] font-bold max-w-[300px] md:max-w-[400px] lg:max-w-[500px]">
          Unique Features Of Latest & Trending Products
        </h1>
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 bg-green-600 rounded-full shrink-0"></div>
          <p className="text-[#ACABC3] text-sm">
            All frames constructed with hardwood solids and laminates
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 bg-blue-700 rounded-full shrink-0"></div>
          <p className="text-[#ACABC3] text-sm max-w-[300px] md:max-w-[400px]">
            Reinforced with double wood dowels, glue, screw-nails corner blocks
            and machine nails
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 bg-red-700 rounded-full shrink-0"></div>
          <p className="text-[#ACABC3] text-sm">
            Arms, backs, and seats are structurally reinforced
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
          <button className="text-[15px] md:text-[17px] bg-[#FB2E86] text-white w-[120px] md:w-[157px] h-[40px] md:h-[45px]">
            Add To Cart
          </button>
          <div className="text-center md:text-left">
            <p className="text-[#151875] text-sm">
              B&B Italian Sofa
            </p>
            <p className="text-[#151875] text-lg md:text-xl">$32.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Treandy;
