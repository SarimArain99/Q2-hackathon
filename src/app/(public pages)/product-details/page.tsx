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
  const relatedProducts = [
    {
      title: "Mens Fashion Wear",
      image: "/men.png",
      price: "$49.99",
    },
    {
      title: "Womens Fashion",
      image: "/women1.png",
      price: "$89.99",
    },
    {
      title: "Wolx Dummy Fashion",
      image: "/women2.png",
      price: "$59.99",
    },
    {
      title: "Top Wall Digital Clock",
      image: "/women3.png",
      price: "$129.99",
    },
  ];
  return (
    <div>
      <div className="h-40 bg-[#F6F5FF] px-4 sm:px-8 md:px-16 lg:px-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold py-5">
          Product Details
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
              <BreadcrumbPage>Product Details</BreadcrumbPage>
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

      <div className="flex items-center justify-center gap-3 my-5 flex-col sm:flex-row">
        <div className="flex flex-col gap-1">
          <Image
            src="/purse1.png"
            alt=""
            width={1000}
            height={1000}
            className="h-24 w-32 object-cover rounded-lg"
          />
          <Image
            src="/purse2.png"
            alt=""
            width={1000}
            height={1000}
            className="h-28 w-32 object-cover rounded-lg"
          />
          <Image
            src="/purse4.png"
            alt=""
            width={1000}
            height={1000}
            className="h-28 w-32 object-cover rounded-lg"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src="/purse3.png"
            alt=""
            width={1000}
            height={1000}
            className="h-80 w-64 object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#0D134E] font-bold">
            Playwood arm chair
          </h2>
          <div className="flex items-center gap-1">
            <Image
              src="/star.png"
              alt=""
              width={100}
              height={100}
              className="h-4 w-4"
            />
            <Image
              src="/star.png"
              alt=""
              width={100}
              height={100}
              className="h-4 w-4"
            />
            <Image
              src="/star.png"
              alt=""
              width={100}
              height={100}
              className="h-4 w-4"
            />
            <Image
              src="/star.png"
              alt=""
              width={100}
              height={100}
              className="h-4 w-4"
            />
            <Image
              src="/star2.png"
              alt=""
              width={100}
              height={100}
              className="h-4 w-4"
            />
          </div>
          <span className="flex gap-3 items-center text-sm sm:text-base lg:text-lg">
            <h2 className="text-[#111C85]">$26.00</h2>
            <h3 className="text-[#FF2AAA] line-through">$52.00</h3>
          </span>
          <p className="text-sm sm:text-base">Color</p>
          <p className="max-w-xl text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            tellus porttitor purus, et volutpat sit.
          </p>
          <div className="flex items-center gap-3">
            <p className="text-sm sm:text-base">Add To Cart</p>
            <Image
              src="/love.png"
              alt=""
              width={100}
              height={100}
              className="h-6 w-6"
            />
          </div>
          <div>
            <p className="text-sm sm:text-base">Categories:</p>
            <p className="text-sm sm:text-base">Tags</p>
            <p className="text-sm sm:text-base">Share</p>
          </div>
        </div>
      </div>

      <div className="bg-[#F9F8FE] text-[#151875] flex flex-col gap-5 items-center py-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center justify-center gap-20 text-xl font-semibold">
          <h2 className="underline">Description</h2>
          <h2>Additional Info</h2>
          <h2>Reviews</h2>
          <h2>Video</h2>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Varius tempor.</h2>
          <p className="text-[#A9ACC6] max-w-3xl text-sm sm:text-base">
            Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
            ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris
            varius ac est bibendum. Scelerisque a, risus ac ante. Velit
            consectetur neque, elit, aliquet. Non varius proin sed urna, egestas
            consequat laoreet diam tincidunt. Magna eget faucibus cras justo,
            tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla
            lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui,
            massa viverr .
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">More details</h2>
          {[
            "Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .",
            "Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .",
            "Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .",
            "Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .",
          ].map((msg, i) => (
            <div className="flex items-center gap-3" key={i}>
              <Image
                src="/arrow.png"
                alt=""
                width={100}
                height={1000}
                className="h-7 w-8"
              />
              <p className="text-[#A9ACC6] max-w-3xl text-sm sm:text-base">
                {msg}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-semibold text-[#101750] px-10 sm:px-20 lg:px-40">
          Related Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 p-4 items-center">
          {relatedProducts.map((product, index) => (
            <div key={index} className=" flex flex-col items-center">
              <div className="flex justify-center">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={1000}
                  height={1000}
                  className="h-60 w-48 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="flex flex-col justify-center space-y-2">
                <p className="text-xl font-semibold text-[#101750]">
                  {product.title}
                </p>
                <div className="flex items-center gap-1">
                  {[...Array(4)].map((_, idx) => (
                    <Image
                      key={idx}
                      src="/star.png"
                      alt="Star"
                      width={100}
                      height={100}
                      className="h-4 w-4"
                    />
                  ))}
                  <Image
                    src="/star2.png"
                    alt="Star"
                    width={100}
                    height={100}
                    className="h-4 w-4"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-lg font-semibold text-[#FF6347]">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
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
  );
}

export default page;
