import React from "react";

function BlogShimmer() {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-300 h-48 w-full rounded-lg mb-4"></div>
      <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
      <div className="h-4 bg-gray-300 rounded w-full"></div>
      <div className="h-4 bg-gray-300 rounded w-full mt-2"></div>
    </div>
  );
}

export default BlogShimmer;
