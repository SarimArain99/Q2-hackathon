import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function DiscountItem() {
  return (
    <div>
      <div className="px-4 md:px-8 lg:px-16">
        <h1 className="text-[#1A0B5B] text-[28px] md:text-[36px] lg:text-[42px] font-bold text-center py-5">
          Discount Items
        </h1>
      </div>
      <Tabs defaultValue="chair">
        <TabsList>
          <TabsTrigger value="chair">Wood Chairs</TabsTrigger>
          <TabsTrigger value="sofa">Sofas</TabsTrigger>
          <TabsTrigger value="chair2">Fancy Chairs</TabsTrigger>
        </TabsList>
        <TabsContent value="chair">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
            {/* Text Content */}
            <div className="flex flex-col gap-4 items-center text-center lg:text-left">
              <h2 className="text-[22px] md:text-[25px] lg:text-[30px] text-[#1A0B5B] font-bold max-w-full lg:max-w-[500px]">
                Save 20% on Modern Furniture
              </h2>
              <p className="text-[#FB4997] text-[18px] md:text-[21px]">
                Ergonomic Tortuga Sofa
              </p>
              <p className="text-[#84858b] text-[15px] md:text-[17px] max-w-[500px] lg:max-w-[400px] mx-auto lg:mx-0">
                Elevate your living space with our exclusive **Tortuga Furniture
                Collection**, designed to combine **style, comfort**, and
                **durability**. From premium sofas to versatile chairs, our
                modern pieces suit every home.
              </p>
              {/* Features Section */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 justify-center">
                <div className="flex items-center justify-center gap-3">
                  <Image
                    src="/tick.png"
                    alt="High-quality materials"
                    width={20}
                    height={20}
                    className="h-5 w-5"
                  />
                  <div className="w-48 text-center">
                    <p>Premium-quality upholstery</p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Image
                    src="/tick.png"
                    alt="Modern design"
                    width={20}
                    height={20}
                    className="h-5 w-5"
                  />
                  <div className="w-48 text-center">
                    <p>Ergonomic and aesthetic design</p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Image
                    src="/tick.png"
                    alt="Neutral colors"
                    width={20}
                    height={20}
                    className="h-5 w-5"
                  />
                  <div className="w-48 text-center">
                    <p>Available in neutral tones</p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Image
                    src="/tick.png"
                    alt="Durable construction"
                    width={20}
                    height={20}
                    className="h-5 w-5"
                  />
                  <div className="w-48 text-center">
                    <p>Long-lasting build quality</p>
                  </div>
                </div>
              </div>
              {/* Call-to-Action */}
              <button className="text-white bg-[#FB4997] w-[150px] md:w-[200px] h-[45px] md:h-[57px] mt-5 rounded hover:bg-[#e22276] transition">
                <Link href="/shop">Shop Now</Link>
              </button>
            </div>

            {/* Image Content */}
            <div className="w-full lg:w-[699px] flex items-center justify-center">
              <Image
                src="/tortuga.png"
                alt="Tortuga Sofa - Modern Furniture"
                height={597}
                width={699}
                className="h-auto w-full max-w-[500px] lg:max-w-[699px]"
              />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="sofa">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
            {/* Text Content */}
            <div className="flex flex-col gap-4 items-center text-center lg:text-left">
              <h2 className="text-[22px] md:text-[25px] lg:text-[30px] text-[#1A0B5B] font-bold max-w-full lg:max-w-[500px]">
                20% Discount on Luxurious Sofas
              </h2>
              <p className="text-[#FB4997] text-[18px] md:text-[21px]">
                Eames Sofa Compact - Redefining Comfort
              </p>
              <p className="text-[#84858b] text-[15px] md:text-[17px] max-w-[500px] lg:max-w-[400px] mx-auto lg:mx-0">
                Explore the **Eames Sofa Compact**, a perfect blend of
                **elegance** and **functionality**. Enjoy 20% off on premium
                designs that bring style and comfort to your living space.
                Crafted for modern homes, this sofa is the ultimate addition to
                your décor.
              </p>
              {/* Features Section */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 justify-center">
                <div className="flex items-center justify-center gap-3">
                  <Image
                    src="/tick.png"
                    alt="High-quality materials"
                    width={20}
                    height={20}
                    className="h-5 w-5"
                  />
                  <div className="w-48 text-center">
                    <p>Premium-quality materials</p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Image
                    src="/tick.png"
                    alt="Modern design"
                    width={20}
                    height={20}
                    className="h-5 w-5"
                  />
                  <div className="w-48 text-center">
                    <p>Contemporary aesthetics</p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Image
                    src="/tick.png"
                    alt="Neutral colors"
                    width={20}
                    height={20}
                    className="h-5 w-5"
                  />
                  <div className="w-48 text-center">
                    <p>Available in versatile tones</p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Image
                    src="/tick.png"
                    alt="Durable construction"
                    width={20}
                    height={20}
                    className="h-5 w-5"
                  />
                  <div className="w-48 text-center">
                    <p>Built to last</p>
                  </div>
                </div>
              </div>
              {/* Call-to-Action */}
              <button className="text-white bg-[#FB4997] w-[150px] md:w-[200px] h-[45px] md:h-[57px] mt-5 rounded hover:bg-[#e22276] transition">
                <Link href="/shop">Shop Now</Link>
              </button>
            </div>

            {/* Image Content */}
            <div className="w-full lg:w-[699px] flex items-center justify-center">
              <Image
                src="/sofa2.png"
                alt="Eames Sofa Compact - Modern Sofa Design"
                height={597}
                width={699}
                className="h-auto w-full max-w-[500px] lg:max-w-[599px]"
              />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="chair2">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
            {/* Text Content */}
            <div className="flex flex-col gap-4 items-center text-center lg:text-left">
              <h2 className="text-[22px] md:text-[25px] lg:text-[30px] text-[#1A0B5B] font-bold max-w-full lg:max-w-[500px]">
                20% Discount on Elegant Chairs
              </h2>
              <p className="text-[#FB4997] text-[18px] md:text-[21px]">
                Eames Modern Chair
              </p>
              <p className="text-[#84858b] text-[15px] md:text-[17px] max-w-[500px] lg:max-w-[400px] mx-auto lg:mx-0">
                Transform your space with our **Eames Modern Chair**, designed
                to combine **luxury** and **durability**. Enjoy a 20% discount
                on our premium chair collection, perfect for your living room,
                workspace, or dining area.
              </p>
              {/* Features Section */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 justify-center">
                <div className="flex items-center justify-center gap-3">
                  <Image
                    src="/tick.png"
                    alt="High-quality materials"
                    width={20}
                    height={20}
                    className="h-5 w-5"
                  />
                  <div className="w-48 text-center">
                    <p>Premium-quality materials</p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Image
                    src="/tick.png"
                    alt="Modern design"
                    width={20}
                    height={20}
                    className="h-5 w-5"
                  />
                  <div className="w-48 text-center">
                    <p>Contemporary aesthetics</p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Image
                    src="/tick.png"
                    alt="Comfortable seating"
                    width={20}
                    height={20}
                    className="h-5 w-5"
                  />
                  <div className="w-48 text-center">
                    <p>Ergonomic design</p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Image
                    src="/tick.png"
                    alt="Durable construction"
                    width={20}
                    height={20}
                    className="h-5 w-5"
                  />
                  <div className="w-48 text-center">
                    <p>Long-lasting durability</p>
                  </div>
                </div>
              </div>
              {/* Call-to-Action */}
              <button className="text-white bg-[#FB4997] w-[150px] md:w-[200px] h-[45px] md:h-[57px] mt-5 rounded hover:bg-[#e22276] transition">
                <Link href="/shop">Shop Now</Link>
              </button>
            </div>

            {/* Image Content */}
            <div className="w-full lg:w-[699px] flex items-center justify-center">
              <Image
                src="/chair5.png"
                alt="Eames Modern Chair - Premium Design"
                height={597}
                width={699}
                className="h-auto w-full max-w-[500px] lg:max-w-[699px]"
              />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default DiscountItem;
