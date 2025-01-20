"use client";
import React from "react";

const BlogDetailShimmer = () => {
  return (
    <div className="text-[#101750]">
      <div className="h-40 bg-[#F6F5FF] px-4 sm:px-8 md:px-16 lg:px-20 animate-pulse">
        <div className="w-3/4 h-8 sm:h-12 bg-gray-300 rounded-md mb-4"></div>
        <div className="w-1/2 h-6 sm:h-8 bg-gray-300 rounded-md"></div>
      </div>

      {/* Shimmer Content */}
      <div className="container mx-auto px-4 py-10">
        <article className="flex flex-col lg:flex-row items-center animate-pulse">
          {/* Shimmer Image */}
          <div className="w-[50%] h-64 bg-gray-300 rounded-lg mb-4"></div>

          {/* Shimmer Text */}
          <div className="p-6 max-w-[50%]">
            <div className="w-3/4 h-6 sm:h-8 bg-gray-300 rounded-md mb-4"></div>
            <div className="w-1/2 h-4 bg-gray-300 rounded-md mb-4"></div>
            <div className="space-y-3">
              <div className="w-full h-4 bg-gray-300 rounded-md"></div>
              <div className="w-full h-4 bg-gray-300 rounded-md"></div>
              <div className="w-3/4 h-4 bg-gray-300 rounded-md"></div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogDetailShimmer;
