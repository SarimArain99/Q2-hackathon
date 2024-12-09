import Link from "next/link";
import React from "react";

function page() {
  return (
    <div>
      <h1 className="text-[#101750] text-center text-3xl font-semibold pb-20">
        Extra Pages
      </h1>
      <div className="flex flex-wrap gap-4 p-4 bg-gray-50 rounded-lg shadow-md justify-center">
        <Link
          href="/general-info"
          className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
        >
          General Info
        </Link>
        <Link
          href="hekto-demo"
          className="px-4 py-2 text-sm font-semibold text-white bg-pink-600 rounded-lg hover:bg-pink-700 transition"
        >
          Hekto Demo
        </Link>
        <Link
          href="order-completed"
          className="px-4 py-2 text-sm font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 transition"
        >
          Order Completed
        </Link>
        <Link
          href="page-not-found"
          className="px-4 py-2 text-sm font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 transition"
        >
          Page Not Found
        </Link>
        <Link
          href="product-details"
          className="px-4 py-2 text-sm font-semibold text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition"
        >
          Product Details
        </Link>
        <Link
          href="single-blog"
          className="px-4 py-2 text-sm font-semibold text-white bg-yellow-600 rounded-lg hover:bg-yellow-700 transition"
        >
          Single Blog
        </Link>
      </div>
    </div>
  );
}

export default page;
