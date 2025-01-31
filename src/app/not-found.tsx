"use client";
import Image from "next/image";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function page() {
  return (
    <div>
      <Header />
      <div className="h-40 bg-[#F6F5FF] px-4 sm:px-8 md:px-16 lg:px-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold py-5 text-[#101750]">
          404 Page Not Found
        </h2>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>404 Page Not Found</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex flex-col items-center px-4 sm:px-8 lg:px-20">
        <Image
          className="h-auto w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl"
          src="/404.jpg"
          alt="404"
          width={1000}
          height={1000}
        />
        <button
          onClick={() => history.back()}
          className="px-4 py-2 bg-[#FB2E86] text-white rounded hover:bg-[#e22276] transition mt-4"
        >
          Go Back
        </button>
      </div>
      <div className="flex justify-center items-center py-10 px-4">
        <Image
          src="/brand.png"
          alt="Brand Logos"
          width={1000}
          height={1000}
          className="h-auto max-w-full sm:max-w-[600px] md:max-w-[800px] object-contain"
        />
      </div>
      <Footer />
    </div>
  );
}

export default page;
