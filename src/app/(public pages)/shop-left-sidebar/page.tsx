import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Image from "next/image";

function page() {
  return (
    <div>
      <div className="h-40 bg-[#F6F5FF] px-4 sm:px-8 md:px-16 lg:px-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold py-5">
          Shop Left Sidebar
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
              <BreadcrumbPage>Shop Left Sidebar</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center py-3 px-4 sm:px-8 md:px-16 lg:px-20">
        <div>
          <h2 className="text-lg sm:text-xl lg:text-2xl">
            Ecommerce Accessories & Fashion Items
          </h2>
          <p className="text-sm sm:text-base lg:text-lg">
            About 9,620 results (0.62 seconds)
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-4 sm:mt-0">
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <span>Per Page:</span>
              <input
                type="number"
                className="border px-2 py-1 w-20 sm:w-24 lg:w-28"
              />
            </label>
            <label className="flex items-center gap-2">
              <span>Sort By:</span>
              <select className="border px-2 py-1">
                <option>Best Match</option>
              </select>
            </label>
          </div>
          <div className="flex gap-2 sm:gap-3">
            <button className="border px-3 py-1">🔲</button>
            <button className="border px-3 py-1">☰</button>
            <input
              type="text"
              className="outline-none border px-2 py-1 w-32 sm:w-36 lg:w-48"
            />
          </div>
        </div>
      </div>
      <Sheet>
        <SheetTrigger className="p-5 md:hidden flex flex-col gap-1">
          <div className="h-[3px] w-[20px] bg-black"></div>
          <div className="h-[3px] w-[20px] bg-black"></div>
          <div className="h-[3px] w-[20px] bg-black"></div>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Filters</SheetTitle>
            <SheetDescription>
              <aside className="flex flex-col gap-5 text-[#151875] pl-3">
                <div>
                  <h1 className="text-lg font-semibold underline">
                    Product Brand
                  </h1>
                  <div>
                    {[
                      "Coaster Furniture",
                      "Fusion Dot High Fashion",
                      "Fusion Dot High Fashion",
                      "Dream Furniture Flipping",
                      "Young Repurposed",
                    ].map((brand) => (
                      <div
                        className="flex items-center gap-1 gap-y-2"
                        key={brand}
                      >
                        <Image
                          src="/check.png"
                          alt={`Check icon for ${brand}`}
                          height={1000}
                          width={1000}
                          className="h-5 w-5"
                        />
                        <p className="text-[#7E81A2]">{brand}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h1 className="text-lg font-semibold underline">
                    Discount Offers
                  </h1>
                  <div>
                    {[
                      "20% Cashback",
                      "5% Cashback Offer",
                      "25% Discount Offer",
                    ].map((offer) => (
                      <div
                        className="flex items-center gap-1 gap-y-2"
                        key={offer}
                      >
                        <Image
                          src="/pink.png"
                          alt={`Discount offer icon for ${offer}`}
                          height={1000}
                          width={1000}
                          className="h-5 w-5"
                        />
                        <p className="text-[#7E81A2]">{offer}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h1 className="text-lg font-semibold underline">
                    Categories
                  </h1>
                  <div>
                    {[
                      "Prestashop",
                      "Magento",
                      "Bigcommerce",
                      "osCommerce",
                      "3dcart",
                      "Bags",
                    ].map((category) => (
                      <div
                        className="flex items-center gap-1 gap-y-2"
                        key={category}
                      >
                        <Image
                          src="/pink.png"
                          alt={`Category icon for ${category}`}
                          height={1000}
                          width={1000}
                          className="h-5 w-5"
                        />
                        <p className="text-[#7E81A2]">{category}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h1 className="text-lg font-semibold underline">
                    Price Filter
                  </h1>
                  <div>
                    {[
                      "$0.00 - $150.00",
                      "$150.00 - $350.00",
                      "$150.00 - $504.00",
                      "$450.00 +",
                    ].map((price) => (
                      <div
                        className="flex items-center gap-1 gap-y-2"
                        key={price}
                      >
                        <Image
                          src="/pink.png"
                          alt={`Price filter icon for ${price}`}
                          height={1000}
                          width={1000}
                          className="h-5 w-5"
                        />
                        <p className="text-[#7E81A2]">{price}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </aside>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <div className="flex justify-center items-center">
        <aside className="md:flex hidden flex-col gap-5 text-[#151875] pl-3">
          <div>
            <h1 className="text-lg font-semibold underline">Product Brand</h1>
            <div>
              {[
                "Coaster Furniture",
                "Fusion Dot High Fashion",
                "Fusion Dot High Fashion",
                "Dream Furniture Flipping",
                "Young Repurposed",
              ].map((brand) => (
                <div className="flex items-center gap-1 gap-y-2" key={brand}>
                  <Image
                    src="/check.png"
                    alt={`Check icon for ${brand}`}
                    height={1000}
                    width={1000}
                    className="h-5 w-5"
                  />
                  <p className="text-[#7E81A2]">{brand}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-lg font-semibold underline">Discount Offers</h1>
            <div>
              {["20% Cashback", "5% Cashback Offer", "25% Discount Offer"].map(
                (offer) => (
                  <div className="flex items-center gap-1 gap-y-2" key={offer}>
                    <Image
                      src="/pink.png"
                      alt={`Discount offer icon for ${offer}`}
                      height={1000}
                      width={1000}
                      className="h-5 w-5"
                    />
                    <p className="text-[#7E81A2]">{offer}</p>
                  </div>
                )
              )}
            </div>
          </div>
          <div>
            <h1 className="text-lg font-semibold underline">Categories</h1>
            <div>
              {[
                "Prestashop",
                "Magento",
                "Bigcommerce",
                "osCommerce",
                "3dcart",
                "Bags",
              ].map((category) => (
                <div className="flex items-center gap-1 gap-y-2" key={category}>
                  <Image
                    src="/pink.png"
                    alt={`Category icon for ${category}`}
                    height={1000}
                    width={1000}
                    className="h-5 w-5"
                  />
                  <p className="text-[#7E81A2]">{category}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-lg font-semibold underline">Price Filter</h1>
            <div>
              {[
                "$0.00 - $150.00",
                "$150.00 - $350.00",
                "$150.00 - $504.00",
                "$450.00 +",
              ].map((price) => (
                <div className="flex items-center gap-1 gap-y-2" key={price}>
                  <Image
                    src="/pink.png"
                    alt={`Price filter icon for ${price}`}
                    height={1000}
                    width={1000}
                    className="h-5 w-5"
                  />
                  <p className="text-[#7E81A2]">{price}</p>
                </div>
              ))}
            </div>
          </div>
        </aside>
        <main className="flex flex-col items-center gap-6 px-10 md:px-16 lg:px-20 my-8">
          {[
            {
              img: "/watch2.png",
              title: "Digital Watch",
              price: "$26.00",
              originalPrice: "$52.00",
              rating: 4,
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
              img: "/joystick.png",
              title: "Mauris quis",
              price: "$26.00",
              originalPrice: "$52.00",
              rating: 4,
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
              img: "/shoes.png",
              title: "Nibh varius",
              price: "$26.00",
              originalPrice: "$52.00",
              rating: 4,
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
              img: "/curology.png",
              title: "Sodales sit",
              price: "$26.00",
              originalPrice: "$52.00",
              rating: 4,
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
          ].map(
            (
              { img, title, price, originalPrice, rating, description },
              index
            ) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center gap-4"
              >
                <Image
                  src={img}
                  alt={title}
                  height={1000}
                  width={1000}
                  className="h-40 w-48"
                />
                <div>
                  <h1 className="flex gap-3 items-center text-lg sm:text-xl lg:text-2xl">
                    {title}
                    <div className="flex gap-1">
                      <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
                      <div className="h-3 w-3 bg-pink-500 rounded-full"></div>
                      <div className="h-3 w-3 bg-blue-700 rounded-full"></div>
                    </div>
                  </h1>
                  <div className="flex gap-5 items-center mt-2">
                    <span className="flex gap-3 items-center text-sm sm:text-base lg:text-lg">
                      <h2 className="text-[#111C85]">{price}</h2>
                      <h3 className="text-[#FF2AAA] line-through">
                        {originalPrice}
                      </h3>
                    </span>
                    <span className="flex items-center gap-1">
                      {[...Array(5)].map((_, idx) => (
                        <Image
                          key={idx}
                          src={idx < rating ? "/star.png" : "/star2.png"}
                          alt="Star rating"
                          width={100}
                          height={100}
                          className="h-4 w-4"
                        />
                      ))}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base lg:text-lg mt-2 max-w-lg">
                    {description}
                  </p>
                  <div className="flex items-center gap-3 mt-3">
                    <Image
                      src="/blueCard.png"
                      alt="Card icon"
                      width={100}
                      height={100}
                      className="h-6 w-6"
                    />
                    <Image
                      src="/love.png"
                      alt="Love icon"
                      width={100}
                      height={100}
                      className="h-6 w-6"
                    />
                    <Image
                      src="/zoom.png"
                      alt="Zoom icon"
                      width={100}
                      height={100}
                      className="h-6 w-6"
                    />
                  </div>
                </div>
              </div>
            )
          )}
        </main>
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
  );
}

export default page;
