import React from "react";

const DetailShimmer = () => {
  return (
    <div className="min-h-screen px-4 sm:px-8 md:px-16 lg:px-20 mb-5">
      <div className="flex flex-col lg:flex-row gap-8 mt-8 items-start lg:items-center">
        <div className="w-full lg:w-1/2 h-96 bg-gray-200 rounded-lg overflow-hidden shadow-md animate-pulse"></div>

        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <div className="h-8 w-3/4 bg-gray-200 rounded animate-pulse"></div>

          <div className="h-4 w-1/3 bg-gray-200 rounded animate-pulse"></div>

          <div className="h-4 w-1/4 bg-gray-200 rounded animate-pulse"></div>

          <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse"></div>

          <div className="h-6 w-1/4 bg-gray-200 rounded animate-pulse"></div>

          <div className="h-20 w-full bg-gray-200 rounded animate-pulse"></div>

          <div className="flex gap-4 mt-6 flex-col sm:flex-row items-center">
            <div className="w-44 sm:w-auto h-10 bg-gray-200 rounded animate-pulse"></div>
            <div className="w-44 sm:w-auto h-10 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailShimmer;
