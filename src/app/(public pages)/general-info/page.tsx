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
      <div className="h-40 bg-[#F6F5FF] px-4 sm:px-8 md:px-16 lg:px-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold py-5 text-[#1D3178]">
          Shop List
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
              <BreadcrumbPage>Shop List</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-16">
        <div className="p-6 sm:p-8 w-full max-w-4xl bg-white shadow-md rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-[#1D3178]">
                General Information
              </h1>
              {[
                {
                  title: "Eu dictumst cum at sed euismood condimentum?",
                  description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.",
                },
                {
                  title: "Magna bibendum est fermentum eros.",
                  description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.",
                },
                {
                  title: "Odio muskana hak eris conseekin skeleto?",
                  description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.",
                },
                {
                  title: "Elit id blandit sabara boi velit gua mara?",
                  description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.",
                },
              ].map((item, idx) => (
                <div className="mb-4" key={idx}>
                  <h2 className="text-lg sm:text-xl font-semibold mb-2 text-[#1D3178]">
                    {item.title}
                  </h2>
                  <p className="text-[#A1ABCC]">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-gray-100 p-6 sm:p-8 rounded-xl">
              <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-[#1D3178]">
                Ask a Question
              </h1>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#A1ABCC]">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#A1ABCC]">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#A1ABCC]">
                    Type Your Message
                  </label>
                  <textarea
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    rows={4}
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="py-2 px-4 bg-[#FB2E86] text-white font-semibold rounded-md shadow-sm hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                  >
                    Send Mail
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center py-10 px-4 sm:px-8">
        <Image
          src="/brand.png"
          alt="Brand Logos"
          width={1000}
          height={1000}
          className="h-auto w-full max-w-[300px] sm:max-w-[600px] md:max-w-[800px] object-contain"
        />
      </div>
    </div>
  );
}

export default page;
