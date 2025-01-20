"use client";

import React from "react";
import { useParams } from "next/navigation";
import blogs from "@/components/blogs";
import Image from "next/image";
import BlogShimmer from "@/components/BlogDetailShimmer";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const BlogDetails: React.FC = () => {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === Number(id));
  if (!blog) {
    return (
      <div className="text-center text-gray-500 py-10">
        <h1 className="text-2xl font-bold text-[#101750]">Blog Not Found</h1>
        <p>We couldn&apos;t find the blog you were looking for.</p>
      </div>
    );
  }

  return !blog ? (
    <BlogShimmer />
  ) : (
    <div className="text-[#101750]">
      <div className="h-40 bg-[#F6F5FF] px-4 sm:px-8 md:px-16 lg:px-20">
        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold py-5 text-[#101750]">
          {blog.title}
        </h2>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/blogs">Blogs</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{blog.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="py-10">
        <article className="flex flex-col lg:flex-row">
          <Image
            src={blog.image}
            alt={blog.title}
            className="px-2 h-auto mb-4 rounded-t-lg object-cover"
            width={1000}
            height={1000}
            priority={true}
          />
          <div className="px-2 md:p-6 lg:max-w-[50%]">
            <h1 className="text-xl sm:text-3xl md:text-4xl font-extrabold mb-4 text-[#101750]">
              {blog.title}
            </h1>
            <div className="flex items-center text-gray-600 mb-4">
              <span className="mr-2">By {blog.author}</span>
              <span className="text-gray-400">|</span>
            </div>
            <div className="prose prose-lg text-gray-700 leading-relaxed">
              {blog.blog}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogDetails;
