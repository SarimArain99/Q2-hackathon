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
    <div>
      {/* Header Section */}
      <div className="h-40 bg-[#F6F5FF] px-4 sm:px-8 md:px-16 lg:px-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold py-5">
          Order Completed
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
              <BreadcrumbPage>Order Completed</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="p-4 sm:p-8 lg:p-10">
        <div className="flex flex-col items-center justify-center gap-5 relative">
          <Image
            src="/clock1.png"
            alt="Clock Icon"
            height={1000}
            width={1000}
            className="h-14 w-14 absolute top-5 md:left-40 sm:left-20 left-2"
          />

          <div className="flex items-center justify-center bg-gray-300 rounded-full p-4">
            <Image
              src="/order.png"
              alt="Order Icon"
              width={1000}
              height={1000}
              className="h-10 w-10"
            />
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#101750] font-semibold text-center">
            Your Order Is Completed!
          </h1>

          <p className="max-w-lg sm:max-w-xl text-center text-sm sm:text-base text-[#8D92A7]">
            Thank you for your order! Your order is being processed and will be
            completed within 3-6 hours. You will receive an email confirmation
            when your order is completed.
          </p>
          <button className=" px-4 py-2 text-white bg-[#FF1788] rounded hover:bg-[#e51578] transition duration-200">
            Continue Shopping
          </button>
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
