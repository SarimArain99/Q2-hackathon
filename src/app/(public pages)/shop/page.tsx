"use client";

import ProductShimmer from "@/components/ProductShimmer";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

interface Product {
  _id: string;
  name: string;
  code: string;
  price: number;
  image: {
    asset: {
      _ref: string;
    };
  };
  category: string;
}

const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [loading, setLoading] = useState<boolean>(true); // Add loading state

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    setLoading(true); // Set loading to true while fetching
    client
      .fetch(`*[_type == "product"]`) // Sanity query for all products
      .then((data) => {
        console.log("Fetched products:", data); // Log fetched data for debugging
        setProducts(data);
        setFilteredProducts(data);
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch((error) => {
        console.error("Error fetching products:", error); // Log any errors
        setLoading(false); // Ensure loading is false even on error
      });
  };

  // Handle filtering products based on search query and selected category
  useEffect(() => {
    let updatedProducts = products;

    if (searchQuery) {
      updatedProducts = updatedProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory !== "all") {
      updatedProducts = updatedProducts.filter(
        (product) => product.category === selectedCategory
      );
    }

    setFilteredProducts(updatedProducts);
  }, [searchQuery, selectedCategory, products]);

  return (
    <div className="min-h-screen mb-5">
      <div className="h-40 bg-[#F6F5FF] px-4 sm:px-8 md:px-16 lg:px-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold py-5 text-[#0D0E43]">
          Shop
        </h2>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Shop</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Search and Category Filter */}
      <div className="bg-white p-6 flex flex-col md:flex-row justify-between items-center mt-5">
        <div className="mb-4 md:mb-0 flex items-center gap-2 w-full md:w-auto">
          <label
            htmlFor="search"
            className="block text-gray-700 font-bold mb-0"
          >
            Search:
          </label>
          <input
            id="search"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Product"
            className="p-2 border border-gray-300 rounded w-full md:w-64 outline-[#FB2E86] duration-500"
          />
        </div>

        <div className="flex items-center w-full md:w-auto">
          <label
            htmlFor="filter"
            className="block text-gray-700 font-bold mb-0 min-w-20"
          >
            Sort By:
          </label>
          <select
            id="filter"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="p-2 border border-gray-300 rounded w-full md:w-64"
          >
            <option value="all">All</option>
            <option value="Chair">Chair</option>
            <option value="Sofa">Sofa</option>
            <option value="Table">Table</option>
          </select>
        </div>
      </div>

      {/* Loading State or Product Display */}
      {loading ? (
        <div>
          <ProductShimmer />
        </div>
      ) : (
        <div className="flex justify-center">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 px-3">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Link
                  href={`/shop/${product._id}`}
                  key={product._id}
                  className={`h-[360px] w-[270px] overflow-hidden mx-auto group hover:bg-[#151875] duration-700`}
                >
                  <div className="relative h-[60%]">
                    <Image
                      src="/blueCart.png"
                      alt="Add to Cart"
                      width={1000}
                      height={1000}
                      className="h-6 w-6 hidden group-hover:block absolute top-1 left-2 duration-500"
                    />
                    <Image
                      src="/lovee.png"
                      alt="Favorite"
                      width={1000}
                      height={1000}
                      className="h-5 w-5 hidden group-hover:block absolute top-2 left-8 duration-500"
                    />
                    <Image
                      src="/zoom.png"
                      alt="Zoom"
                      width={1000}
                      height={1000}
                      className="h-5 w-5 hidden group-hover:block absolute top-2 left-14 duration-500"
                    />
                    <Image
                      src={urlFor(product.image.asset._ref).url()}
                      alt={product.name}
                      width={1000}
                      height={1000}
                      className="h-full w-full bg-[#F6F7FB]"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-3 h-[40%] mt-5">
                    <h2
                      className={`text-[18px] px-2 text-center font-bold text-[#FB2E86] group-hover:text-white transition-colors duration-300 line-clamp-1`}
                    >
                      {product.name}
                    </h2>

                    <div className="flex gap-3">
                      <div className="bg-blue-300 h-[3px] w-[15px]"></div>
                      <div className="bg-red-600 h-[3px] w-[15px]"></div>
                      <div className="bg-blue-700 h-[3px] w-[15px]"></div>
                    </div>
                    <p
                      className={`text-[14px] text-[#151875] group-hover:text-white duration-700`}
                    >
                      ${product.price}
                    </p>
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-gray-500 text-center mt-5">
                No products found.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
