"use client";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import ProductShimmer from "@/components/ProductShimmer";

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

function Shop() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [cart, setCart] = useState<Product[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Start loading
      const data = await client.fetch(`*[_type == "product"]`);
      setProducts(data);
      setLoading(false); // Stop loading
    };
    fetchData();
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const addToWishlist = (product: Product) => {
    setWishlist((prevWishlist) => [...prevWishlist, product]);
  };

  return (
    <div className="mb-5">
      {/* Header Section */}
      <div className="h-40 bg-[#F6F5FF] px-4 sm:px-8 md:px-16 lg:px-20">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold py-5 text-[#0D0E43]">
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

      {/* Search and Filter Section */}
      <div className="bg-white p-6 flex flex-col md:flex-row justify-between items-center mt-5">
        <div className="mb-4 md:mb-0 flex items-center gap-2 w-full md:w-auto">
          <label htmlFor="search" className="block text-gray-700 font-bold mb-0">
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

      {/* Product List */}
      <div className="flex justify-center">
        {loading ? (
          <ProductShimmer />
        ) : (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 px-3">
            {filteredProducts.map((product: Product) => (
              <Link
                href={`/shop/${product._id}`}
                key={product._id}
                className="h-[360px] w-[270px] shadow-lg shadow-gray-400 overflow-hidden mx-auto group hover:bg-[#151875] duration-700"
              >
                <div className="relative h-[60%]">
                  <Image
                    src="/blueCart.png"
                    alt="Add to Cart"
                    width={1000}
                    height={1000}
                    className="h-6 w-6 hidden group-hover:block absolute top-1 left-2 duration-500"
                    onClick={() => addToCart(product)}
                  />
                  <Image
                    src="/lovee.png"
                    alt="Favorite"
                    width={1000}
                    height={1000}
                    className="h-5 w-5 hidden group-hover:block absolute top-2 left-8 duration-500"
                    onClick={() => addToWishlist(product)}
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
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Shop;
