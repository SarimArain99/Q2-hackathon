"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import blogs from "../../../components/blogs";
import BlogShimmer from "@/components/BlogShimmer";

interface Blog {
  id: number;
  title: string;
  image: string;
  description: string;
  blog: string;
  author: string;
}

function Page() {
  const [blogData, setBlogData] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setBlogData(blogs);
      setLoading(false);
    }, 1000);
  }, []);

  const mainBlogs = blogData.slice(0, 2);
  const asideBlogs = blogData.slice(2);

  return (
    <div className="text-[#101750]">
      {/* Header Section */}
      <div className="h-40 bg-[#F6F5FF] px-4 sm:px-8 md:px-16 lg:px-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold py-5 text-[#101750]">
          Blogs
        </h2>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Blogs</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row gap-10">
        {/* Main Blogs Section */}
        <main className="w-full md:w-2/3">
          {loading ? (
            <div>
              <BlogShimmer />
              <BlogShimmer />
            </div>
          ) : mainBlogs.length > 0 ? (
            mainBlogs.map((blog) => (
              <article key={blog.id} className="mb-10">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-auto mb-4 rounded-lg object-cover"
                  width={800}
                  height={400}
                  priority={true}
                />
                <h1 className="text-2xl font-bold mb-2 text-[#101750]">
                  {blog.title}
                </h1>
                <div className="text-[#8A8FB9] mb-4">
                  <span>By {blog.author}</span>
                </div>
                <p className="mb-4 text-[#8A8FB9]">{blog.description}</p>
                <Link href={`/blogs/${blog.id}`}>
                  <button className="text-[#FB2E86] hover:underline">
                    Read More
                  </button>
                </Link>
              </article>
            ))
          ) : (
            <p className="text-center text-gray-500">No blogs available.</p>
          )}
        </main>

        {/* Sidebar Blogs Section */}
        <aside className="w-full md:w-1/3">
          {loading ? (
            <div>
              <BlogShimmer />
              <BlogShimmer />
              <BlogShimmer />
            </div>
          ) : asideBlogs.length > 0 ? (
            <div>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-center font-bold mb-6 font-serif text-[#101750] underline decoration-2 underline-offset-8 transition-all duration-500">
                Discover More Inspiring Blogs
              </h3>

              {asideBlogs.map((blog) => (
                <article key={blog.id} className="mb-6">
                  <h4 className="text-lg font-semibold mb-2">{blog.title}</h4>
                  <p className="text-sm text-[#8A8FB9] mb-4">
                    {blog.description}
                  </p>
                  <Link href={`/blogs/${blog.id}`}>
                    <button className="text-[#FB2E86] hover:underline">
                      Read More
                    </button>
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">
              No more blogs available.
            </p>
          )}
        </aside>
      </div>

      {/* Brand Section */}
      <div className="flex justify-center items-center py-10 px-4">
        <Image
          src="/brand.png"
          alt="Brand Logos"
          width={800}
          height={200}
          className="h-auto object-contain"
        />
      </div>
    </div>
  );
}

export default Page;
