"use client";

import React, { useState, useEffect } from "react";
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

interface Blog {
  id: number;
  title: string;
  image: string;
  description: string;
  blog: string;
  author: string;
}

// Type definition for BlogDetails props
interface BlogDetailsProps {
  params: { id: string }; // Explicitly defining `params` as an object with an `id` key
}

// Functional component definition
const BlogDetails: React.FC<BlogDetailsProps> = ({ params }) => {
  const { id } = params; // Extract `id` from `params`
  const [blog, setBlog] = useState<Blog | null>(null); // State to store the fetched blog
  const [loading, setLoading] = useState(true); // State to handle loading state

  // Simulate fetching the blog on mount
  useEffect(() => {
    const fetchBlog = () => {
      const foundBlog = blogs.find((blog) => blog.id === Number(id)); // Find the blog by ID
      setBlog(foundBlog || null); // Set the blog or null if not found
      setLoading(false); // Stop loading
    };

    const timeoutId = setTimeout(fetchBlog, 1000); // Simulate a 1-second delay
    return () => clearTimeout(timeoutId); // Cleanup timeout on unmount
  }, [id]);

  // Render loading state
  if (loading) {
    return <BlogShimmer />;
  }

  // Render "Blog Not Found" state
  if (!blog) {
    return (
      <div className="text-center text-gray-500 py-10">
        <h1 className="text-2xl font-bold text-[#101750]">Blog Not Found</h1>
        <p>We couldn&apos;t find the blog you were looking for.</p>
      </div>
    );
  }

  // Render blog details
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
