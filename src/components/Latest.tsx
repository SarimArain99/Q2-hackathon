import Image from "next/image";
import React from "react";

function Latest() {
  return (
    <div>
      <h1 className="text-[#151875] text-[52px] font-bold text-center my-5">
        Latest Products
      </h1>
      <div className="flex justify-center">
      <div className="grid lg:grid-cols-4 grid-cols-2 text-[#151875] gap-10 text-xl font-bold  mb-5">
        <p className="text-[#FB4997] border-b-4 border-[#FB4997] ">
          New Arrival
        </p>
        <p>Best Seller</p>
        <p>Featured</p>
        <p>Special Offer</p>
      </div>
      </div>
      <div className="flex flex-wrap justify-center gap-4 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="w-full sm:w-[320px] md:w-[280px] lg:w-[330px] h-[269px] flex flex-col">
            <div className="overflow-hidden">
              <Image
                src="/woodChair.png"
                alt="Comfort Handy Craft"
                width={1000}
                height={1000}
                className=" bg-[#F7F7F7] h-full object-contain"
              />
            </div>
            <div className="h-[20%] flex justify-between items-center">
              <p>Comfort Handy Craft</p>
              <div className="flex gap-1 items-center">
                <p className="text-xl">$42.00</p>
                <p className="line-through text-[#FB2448] text-sm">$65.00</p>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-[320px] md:w-[280px] lg:w-[330px] h-[269px] flex flex-col">
            <div className=" overflow-hidden relative">
              <Image
                src="/sale.png"
                alt=""
                width={1000}
                height={1000}
                className="h-16 w-16 absolute top-2 left-2"
              />
              <Image
                src="/blueCard.png"
                alt=""
                width={1000}
                height={1000}
                className="h-6 w-5 absolute left-2 bottom-2"
              />
              <Image
                src="/love.png"
                alt=""
                width={1000}
                height={1000}
                className="h-5 w-5 absolute left-2 bottom-8"
              />
              <Image
                src="/zoom.png"
                alt=""
                width={1000}
                height={1000}
                className="h-5 w-5 absolute left-2 bottom-14"
              />
              <Image
                src="/chair6.png"
                alt="Comfort Handy Craft"
                width={1000}
                height={1000}
                className="w-full object-contain h-full"
              />
            </div>
            <div className="h-[20%] flex justify-between items-center">
              <p>Comfort Handy Craft</p>
              <div className="flex gap-1 items-center">
                <p className="text-xl">$42.00</p>
                <p className="line-through text-[#FB2448] text-sm">$65.00</p>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-[320px] md:w-[280px] lg:w-[330px] h-[269px] flex flex-col">
            <div className=" overflow-hidden">
              <Image
                src="/chair5.png"
                alt="Comfort Handy Craft"
                width={1000}
                height={1000}
                className=" bg-[#F7F7F7] object-contain h-full"
              />
            </div>
            <div className="h-[20%] flex justify-between items-center">
              <p>Comfort Handy Craft</p>
              <div className="flex gap-1 items-center">
                <p className="text-xl">$42.00</p>
                <p className="line-through text-[#FB2448] text-sm">$65.00</p>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-[320px] md:w-[280px] lg:w-[330px] h-[269px] flex flex-col">
            <div className=" overflow-hidden">
              <Image
                src="/chair4.png"
                alt="Comfort Handy Craft"
                width={1000}
                height={1000}
                className="w-full bg-[#F7F7F7] object-contain h-full"
              />
            </div>
            <div className="h-[20%] flex justify-between items-center">
              <p>Comfort Handy Craft</p>
              <div className="flex gap-1 items-center">
                <p className="text-xl">$42.00</p>
                <p className="line-through text-[#FB2448] text-sm">$65.00</p>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-[320px] md:w-[280px] lg:w-[330px] h-[269px] flex flex-col">
            <div className=" overflow-hidden">
              <Image
                src="/chair3.png"
                alt="Comfort Handy Craft"
                width={1000}
                height={1000}
                className="w-full bg-[#F7F7F7] object-contain h-full"
              />
            </div>
            <div className="h-[20%] flex justify-between items-center">
              <p>Comfort Handy Craft</p>
              <div className="flex gap-1 items-center">
                <p className="text-xl">$42.00</p>
                <p className="line-through text-[#FB2448] text-sm">$65.00</p>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-[320px] md:w-[280px] lg:w-[330px] h-[269px] flex flex-col">
            <div className=" overflow-hidden">
              <Image
                src="/chair1.png"
                alt="Comfort Handy Craft"
                width={1000}
                height={1000}
                className="w-full bg-[#F7F7F7] object-contain h-full"
              />
            </div>
            <div className="h-[20%] flex justify-between items-center">
              <p>Comfort Handy Craft</p>
              <div className="flex gap-1 items-center">
                <p className="text-xl">$42.00</p>
                <p className="line-through text-[#FB2448] text-sm">$65.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Latest;
