import Image from "next/image";
import React from "react";

function Offered() {
  return (
    <div>
      <h1 className="text-[#151875] text-[42px] font-bold text-center my-5">
        What Shopex Offer!
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
        <div className="flex flex-col items-center gap-2 p-5">
          <Image
            src="/free.png"
            alt=""
            width={1000}
            height={1000}
            className="h-20 w-20"
          />
          <p className="text-[#151875] text-[22px]">24/7 Support</p>
          <p className="max-w-60 text-center text-[#1A0B5B4D]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
            gravida.
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 p-5">
          <Image
            src="/medal.png"
            alt=""
            width={1000}
            height={1000}
            className="h-24 w-20"
          />
          <p className="text-[#151875] text-[22px]">24/7 Support</p>
          <p className="max-w-60 text-center text-[#1A0B5B4D]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
            gravida.
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 p-5">
          <Image
            src="/call.png"
            alt=""
            width={1000}
            height={1000}
            className="h-20 w-20"
          />
          <p className="text-[#151875] text-[22px]">24/7 Support</p>
          <p className="max-w-60 text-center text-[#1A0B5B4D]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
            gravida.
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 p-5">
          <Image
            src="/cash.png"
            alt=""
            width={1000}
            height={1000}
            className="h-20 w-20"
          />
          <p className="text-[#151875] text-[22px]">24/7 Support</p>
          <p className="max-w-60 text-center text-[#1A0B5B4D]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
            gravida.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Offered;
