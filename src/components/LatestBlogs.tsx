import Image from "next/image";
import React from "react";
import blogs from "./blogs";
import Link from "next/link";

function LatestBlogs() {
  return (
    <div className="mb-5">
      <h1 className="text-[#151875] text-[42px] text-center font-bold">
        Latest Blogs
      </h1>
      <div className="flex justify-center items-center">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {blogs.slice(5, 8).map((blog) => (
            <div
              key={blog.id}
              className="max-w-sm md:max-w-md lg:max-w-lg bg-white shadow-md rounded-lg p-4"
            >
              <Image
                src={blog.image}
                alt={blog.title}
                width={1000}
                height={1000}
                className="h-40 md:h-60 w-full object-cover rounded-md"
              />
              <div className="mt-4">
                <div className="flex items-center gap-6 text-sm text-[#72718F] mb-2">
                  <span className="flex items-center gap-2">
                    <Image
                      src="/pen.png"
                      alt="Author Icon"
                      height={1000}
                      width={1000}
                      className="h-4 w-4"
                    />
                    {blog.author}
                  </span>
                  <span className="flex items-center gap-2">
                    <Image
                      src="/date.png"
                      alt="Date Icon"
                      height={1000}
                      width={1000}
                      className="h-4 w-4"
                    />
                    21 August, 2020
                  </span>
                </div>
                <h2 className="text-[#151875] text-lg font-semibold mb-2">
                  {blog.title}
                </h2>
                <p className="text-[#72718F] text-sm mb-4">
                  {blog.description}
                </p>
                <Link
                  href={`/blogs/${blog.id}`}
                  className="underline text-[#151875] font-medium cursor-pointer hover:text-[#FB4997] transition"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LatestBlogs;
