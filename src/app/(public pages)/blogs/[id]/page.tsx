"use client";
import React, { useState, useEffect } from "react";
import blogs from "@/components/blogs";
import Image from "next/image";
import BlogShimmer from "../../../../components/BlogDetailShimmer"; // Import the shimmer component
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface Blog {
  id: number;
  title: string;
  image: string;
  description: string;
  blog: string;
  author: string;
}

function BlogDetails({ params } : { params: { id: string } }) {
  const { id } = params;
  const [blog, setBlog] = useState< Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = () => {
      const foundBlog = blogs.find((blog) => blog.id === Number(id));
      setBlog(foundBlog || null);
      setLoading(false);
    };

    const timeoutId = setTimeout(fetchBlog, 1000); // Simulate 1 second loading
    return () => clearTimeout(timeoutId);
  }, [id]);

  if (loading) {
    return <BlogShimmer />; // Use shimmer while loading
  }

  if (!blog) {
    return (
      <div className="text-center text-gray-500 py-10">
        <h1 className="text-2xl font-bold text-[#101750]">Blog Not Found</h1>
        <p>We couldn&apos;t find the blog you were looking for.</p>
      </div>
    );
  }

  return (
    <div className="text-[#101750]">
      {/* Header */}
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

      {/* Blog Content */}
      <div className="container mx-auto px-4 py-10">
        <article className="overflow-hidden flex flex-col lg:flex-row items-center">
          {/* Blog Image */}
          <Image
            src={blog.image}
            alt={blog.title}
            className="w-[50%] h-auto mb-4 rounded-t-lg object-cover"
            width={1000}
            height={1000}
            priority={true}
          />
          <div className="p-6 max-w-[50%]">
            <h1 className="text-xl sm:text3xl md:text-4xl font-extrabold mb-4 text-[#101750]">
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
}

export default BlogDetails;
