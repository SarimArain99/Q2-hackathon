import Image from "next/image";
import React from "react";

function Offered() {
  return (
    <div className="border-y-2 mt-10 border-[#151875] ">
      <h1 className="text-[#151875] text-[42px] font-bold text-center my-5">
        What Hekto Offers!
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 px-5 items-center">
        <div className="flex flex-col items-center gap-2 p-5">
          <Image
            src="/free.png"
            alt="Fast Delivery"
            width={1000}
            height={1000}
            className="h-20 w-20"
          />
          <p className="text-[#151875] text-[22px] font-bold">Fast Delivery</p>
          <p className="max-w-xs text-center text-[#180b534d]">
            Enjoy fast and reliable delivery, ensuring your orders reach you on
            time, every time.
          </p>
        </div>

        <div className="flex flex-col items-center gap-2 p-5">
          <Image
            src="/medal.png"
            alt="Award Winning"
            width={1000}
            height={1000}
            className="h-24 w-20"
          />
          <p className="text-[#151875] text-[22px] font-bold">Award Winning</p>
          <p className="max-w-xs text-center text-[#1A0B5B4D]">
            Hekto is proud to be recognized for its outstanding service and
            top-quality products.
          </p>
        </div>

        <div className="flex flex-col items-center gap-2 p-5">
          <Image
            src="/call.png"
            alt="24/7 Support"
            width={1000}
            height={1000}
            className="h-20 w-20"
          />
          <p className="text-[#151875] text-[22px] font-bold">24/7 Support</p>
          <p className="max-w-xs text-center text-[#1A0B5B4D]">
            Our team is available 24/7 to assist you with any queries or
            concerns, ensuring you&apos;re always supported.
          </p>
        </div>

        <div className="flex flex-col items-center gap-2 p-5">
          <Image
            src="/cash.png"
            alt="Secure Payment"
            width={1000}
            height={1000}
            className="h-20 w-20"
          />
          <p className="text-[#151875] text-[22px] font-bold">Secure Payment</p>
          <p className="max-w-xs text-center text-[#1A0B5B4D]">
            We provide secure payment options so you can shop with peace of
            mind, knowing your information is safe.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Offered;
