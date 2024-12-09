import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";

function page() {
  return (
    <>
      <div className="min-h-screen text-[#151875]">
        <div className="h-40  bg-[#F6F5FF] px-4 sm:px-8 md:px-16 lg:px-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold py-5">
            Shop Grid Default
          </h2>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Components</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Shop Grid Default</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center py-3 px-4">
          <div>
            <h2 className="text-lg sm:text-xl">
              Ecommerce Accessories & Fashion Items
            </h2>
            <p className="text-sm sm:text-base">
              About 9,620 results (0.62 seconds)
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center mb-4 gap-2">
            <div className="flex gap-2">
              <label>
                Per Page:
                <input
                  type="number"
                  className="border px-2 py-1 w-20 sm:w-24"
                />
              </label>
              <label>
                Sort By:
                <select className="border px-2 py-1">
                  <option>Best Match</option>
                </select>
              </label>
            </div>
            <div className="flex space-x-2 mt-2 sm:mt-0">
              <button className="border px-3 py-1">🔲</button>
              <button className="border px-3 py-1">☰</button>
              <input type="text" className="outline-none border px-2 py-1" />
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center py-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5  max-w-screen-xl">
            <div className="h-[361px] max-w-[270px] shadow-xl shadow-gray-400 overflow-hidden mx-auto">
              <div className="h-[60%]">
                <Image
                  src="/chair4.png"
                  alt="Cantilever Chair"
                  width={1000}
                  height={1000}
                  className="h-full  bg-[#F6F7FB]"
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
                  src="/chair6.png"
                  alt="Cantilever Chair"
                  width={1000}
                  height={1000}
                  className="h-full  bg-[#F6F7FB]"
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
                  className="h-full  bg-[#F6F7FB]"
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
                  src="/chair8.png"
                  alt="Cantilever Chair"
                  width={1000}
                  height={1000}
                  className="h-full  bg-[#F6F7FB]"
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
                  src="/blackHeadset.png"
                  alt="Cantilever Chair"
                  width={1000}
                  height={1000}
                  className="h-full  bg-[#F6F7FB]"
                />
              </div>
              <div className="flex flex-col items-center gap-3 h-[40%] mt-5">
                <h2 className="text-[#FB2E86] text-[18px] font-bold">
                  Black Headphones
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
                  src="/camera.png"
                  alt="Cantilever Chair"
                  width={1000}
                  height={1000}
                  className="h-full  bg-[#F6F7FB]"
                />
              </div>
              <div className="flex flex-col items-center gap-3 h-[40%] mt-5">
                <h2 className="text-[#FB2E86] text-[18px] font-bold">
                  Camera
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
                  src="/gamingHeadset.png"
                  alt="Cantilever Chair"
                  width={1000}
                  height={1000}
                  className="h-full  bg-[#F6F7FB]"
                />
              </div>
              <div className="flex flex-col items-center gap-3 h-[40%] mt-5">
                <h2 className="text-[#FB2E86] text-[18px] font-bold">
                  Gaming Headphones
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
                  src="/watch.png"
                  alt="Cantilever Chair"
                  width={1000}
                  height={1000}
                  className="h-full  bg-[#F6F7FB]"
                />
              </div>
              <div className="flex flex-col items-center gap-3 h-[40%] mt-5">
                <h2 className="text-[#FB2E86] text-[18px] font-bold">
                  Digital Watches
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

        <div className="flex justify-center items-center py-10 px-4">
          <Image
            src="/brand.png"
            alt="Brand Logos"
            width={1000}
            height={1000}
            className="h-auto max- sm:max-w-[600px] md:max-w-[800px] object-contain"
          />
        </div>
      </div>
    </>
  );
}

export default page;
