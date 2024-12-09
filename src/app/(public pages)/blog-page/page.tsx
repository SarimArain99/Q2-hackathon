import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

function page() {
  return (
    <div>
      <div className="h-40 bg-[#F6F5FF] px-4 sm:px-8 md:px-16 lg:px-20 text-[#101750]">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold py-5 text-[#101750]">
          Blog Page
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
              <BreadcrumbPage>Blog Page</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="container mx-auto px-4 py-5">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-2/3 px-4">
            <div className="mb-8">
              <Image
                src="/1blog.png"
                alt="Blog Post 1"
                className="w-full h-auto mb-4"
                width={1000}
                height={1000}
              />
              <div className="flex flex-wrap items-center text-sm text-gray-500 mb-2">
                <span className="mr-2">Self Motivation</span>
                <span className="mr-2">|</span>
                <span>August 2023</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold mb-2 text-[#101750]">
                Mauris at orci non vulputate diam tincidunt nec.
              </h2>
              <p className="text-[#8A8FB9] mb-4 text-sm sm:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link href="/" className="text-blue-500">
                Read More
              </Link>
            </div>
            {[2, 3].map((num) => (
              <div key={num} className="mb-8">
                <Image
                  src={`/${num}blog.png`}
                  alt={`Blog Post ${num}`}
                  className="w-full h-auto mb-4"
                  width={1000}
                  height={1000}
                />
                <div className="flex flex-wrap items-center text-sm text-gray-500 mb-2">
                  <span className="mr-2">Self Motivation</span>
                  <span className="mr-2">|</span>
                  <span>August 2023</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold mb-2 text-[#101750]">
                  Aenean vitae in aliquam ultrices lectus. Etiam.
                </h2>
                <p className="text-[#8A8FB9] mb-4 text-sm sm:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Link href="/" className="text-blue-500">
                  Read More
                </Link>
              </div>
            ))}
          </div>
          <div className="w-full lg:w-1/3 px-4">
            <div className="mb-8">
              <input
                type="text"
                placeholder="Search"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-8">
              <h3 className="text-lg sm:text-xl font-bold mb-4">Categories</h3>
              <ul className="list-disc list-inside text-sm sm:text-base">
                <li>Motivation (20)</li>
                <li>Inspiration (10)</li>
                <li>Life (5)</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-lg sm:text-xl font-bold mb-4">Recent Post</h3>
              <div>
                {[...Array(5)].map((_, idx) => (
                  <div key={idx} className="flex items-center mb-4">
                    <Image
                      src={`/demo${idx + 1}.png`}
                      alt={`Item ${idx + 1}`}
                      className="w-16 h-16 rounded mr-4"
                      width={1000}
                      height={1000}
                    />
                    <div>
                      <p className="text-sm">It is a long established fact</p>
                      <p className="text-xs text-gray-500">Aug 09 2020</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-8">
              <h3 className="text-lg sm:text-xl font-bold mb-4">Sale Offer</h3>
              <div>
                {[...Array(5)].map((_, idx) => (
                  <div key={idx} className="flex items-center mb-4">
                    <Image
                      src={`/demo${idx + 1}.png`}
                      alt={`Item ${idx + 1}`}
                      className="w-16 h-16 rounded mr-4"
                      width={1000}
                      height={1000}
                    />
                    <div>
                      <p className="text-sm">It is a long established fact</p>
                      <p className="text-xs text-gray-500">Aug 09 2020</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-8">
              <h3 className="text-lg sm:text-xl font-bold mb-4">Tags</h3>
              <div className="flex flex-wrap">
                {["motivation", "inspiration", "life"].map((tag, idx) => (
                  <Link
                    key={idx}
                    href="/"
                    className="bg-gray-200 px-3 py-1 rounded-full text-sm text-gray-700 mr-2 mb-2"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
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
  );
}

export default page;
