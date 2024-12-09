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
    <div className="py-10 text-[#101750]">
      <div className="h-40 bg-[#F6F5FF] px-4 sm:px-8 md:px-16 lg:px-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold py-5 text-[#101750]">
          Single Blog
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
              <BreadcrumbPage>Single Blog</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="container mx-auto px-4 py-10">
        <main className="flex flex-col lg:flex-row">
          <div className="lg:w-3/4 lg:pr-4">
            <article>
              <Image
                src="/1blog.png"
                alt="Featured"
                className="w-full h-auto mb-4"
                width={1000}
                height={1000}
              />
              <h1 className="text-2xl font-bold mb-2 text-[#101750]">
                Mauris at orci non vulputate diam tincidunt nec.
              </h1>
              <div className="text-[#8A8FB9] mb-4">
                <span>By Author</span> | <span>August 30, 2023</span>
              </div>
              <p className="mb-4 text-[#8A8FB9]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum bibendum auctor purus, id cursus lorem. Cras
                tincidunt eros vel velit varius, nec consectetur sapien
                dignissim. Aenean dignissim, orci non vehicula laoreet, orci
                nisi bibendum est, nec tincidunt lorem leo nec lorem.
              </p>
              <blockquote className="border-l-4 border-blue-500 pl-4 mb-4 text-[#8A8FB9]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                tincidunt eros vel velit varius, nec consectetur sapien
                dignissim.
              </blockquote>
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <Image
                  src="/2blog.png"
                  alt="Image 1"
                  className="w-full sm:w-1/2 h-auto"
                  height={1000}
                  width={1000}
                />
                <Image
                  src="/3blog.png"
                  alt="Image 2"
                  className="w-full sm:w-1/2 h-auto"
                  height={1000}
                  width={1000}
                />
              </div>
              <p className="mb-4 text-[#8A8FB9]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum bibendum auctor purus, id cursus lorem. Cras
                tincidunt eros vel velit varius, nec consectetur sapien
                dignissim. Aenean dignissim, orci non vehicula laoreet, orci
                nisi bibendum est, nec tincidunt lorem leo nec lorem.
              </p>
            </article>
          </div>

          <aside className="lg:w-1/4 lg:pl-4 mt-8 lg:mt-0">
            <div className="mb-8">
              <input
                type="text"
                placeholder="Search"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Categories</h3>
              <ul className="list-disc list-inside">
                <li>Motivation (20)</li>
                <li>Inspiration (10)</li>
                <li>Life (5)</li>
              </ul>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
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
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Tags</h3>
              <div className="flex flex-wrap">
                <Link
                  href="/"
                  className="bg-gray-200 px-3 py-1 rounded-full text-sm text-gray-700 mr-2 mb-2"
                >
                  #motivation
                </Link>
                <Link
                  href="/"
                  className="bg-gray-200 px-3 py-1 rounded-full text-sm text-gray-700 mr-2 mb-2"
                >
                  #inspiration
                </Link>
                <Link
                  href="/"
                  className="bg-gray-200 px-3 py-1 rounded-full text-sm text-gray-700 mr-2 mb-2"
                >
                  #life
                </Link>
              </div>
            </div>
          </aside>
        </main>

        <section className="mt-10">
          <div className="bg-white p-6">
            <div className="flex justify-between items-center mb-10">
              <button className="text-blue-500 hover:underline">
                ← Previous Post
              </button>
              <button className="text-blue-500 hover:underline">
                Next Post →
              </button>
            </div>
            <div className="space-y-4">
              {[1, 2].map((comment, idx) => (
                <div
                  key={idx}
                  className="bg-gray-100 p-4 rounded-lg flex items-center space-x-4"
                >
                  <Image
                    src={`/comment${comment}.png`}
                    alt={`Comment ${comment}`}
                    className="w-16 h-16 rounded-full object-cover"
                    width={1000}
                    height={1000}
                  />
                  <div>
                    <h2 className="text-xl font-bold">User {comment}</h2>
                    <p className="text-gray-500">Date</p>
                    <p className="text-gray-700">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <form className="space-y-4">
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <input
                    type="text"
                    placeholder="Your Name*"
                    className="flex-1 p-2 border border-gray-300 rounded"
                  />
                  <input
                    type="email"
                    placeholder="Your Email*"
                    className="flex-1 p-2 border border-gray-300 rounded"
                  />
                </div>
                <textarea
                  placeholder="Write your comment*"
                  className="w-full p-2 border border-gray-300 rounded h-32"
                ></textarea>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="saveInfo" className="h-4 w-4" />
                  <label htmlFor="saveInfo" className="text-gray-700">
                    Save my information for future comments.
                  </label>
                </div>
                <button
                  type="submit"
                  className="bg-[#FB2E86] text-white py-2 px-4 rounded"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
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
