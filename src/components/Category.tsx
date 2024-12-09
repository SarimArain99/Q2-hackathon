import Image from "next/image";
import React from "react";

function Category() {
  return (
    <div>
      <h1 className="text-[#151875] text-[42px] text-center my-5 font-bold">
        Top Categories
      </h1>
      <div className="flex justify-center items-center">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 p-5">
          <div className="flex flex-col items-center">
            <div className="bg-[#F6F7FB] p-5 rounded-full">
              <Image
                src="/chair4.png"
                alt=""
                width={1000}
                height={1000}
                className="h-28 w-28"
              />
            </div>
            <div className="flex flex-col gap-2 text-center">
              <p>Mni LWC Chair</p>
              <p>$56.00</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#F6F7FB] p-5 rounded-full">
              <Image
                src="/chair5.png"
                alt=""
                width={1000}
                height={1000}
                className="h-28 w-28"
              />
            </div>
            <div className="flex flex-col gap-2 text-center">
              <p>Mni LWC Chair</p>
              <p>$56.00</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#F6F7FB] p-5 rounded-full">
              <Image
                src="/chair6.png"
                alt=""
                width={1000}
                height={1000}
                className="h-28 w-28"
              />
            </div>
            <div className="flex flex-col gap-2 text-center">
              <p>Mni LWC Chair</p>
              <p>$56.00</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#F6F7FB] p-5 rounded-full">
              <Image
                src="/chair1.png"
                alt=""
                width={1000}
                height={1000}
                className="h-28 w-28"
              />
            </div>
            <div className="flex flex-col gap-2 text-center">
              <p>Mni LWC Chair</p>
              <p>$56.00</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Category;
