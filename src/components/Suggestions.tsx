"use client";

import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

interface Product {
  _id: string;
  name: string;
  price: number;
  image: {
    asset: {
      _ref: string;
    };
  };
}

const SuggestionsComponent = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // Fetch random products
  const fetchRandomProducts = async () => {
    setLoading(true);
    try {
      const data = await client.fetch(`*[_type == "product"]`);

      // Generate random indices for three products
      const randomIndices = Array.from({ length: 3 }, () =>
        Math.floor(Math.random() * data.length)
      );

      // Slice the data to get the products at the random indices
      const randomProducts = data
        .slice(randomIndices[0], randomIndices[0] + 1)
        .concat(data.slice(randomIndices[1], randomIndices[1] + 1))
        .concat(data.slice(randomIndices[2], randomIndices[2] + 1));

      setProducts(randomProducts);
    } catch (error) {
      console.error("Error fetching random products:", error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomProducts();
  }, []);

  return (
    <div className="flex flex-col space-y-5 my-10">
      <h2 className="text-4xl font-bold text-center text-[#151875] mb-5">More Suggestions Like This:</h2>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : products.length > 0 ? (
        <div className="flex justify-center">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 px-3">
            {products.map((product) => (
              <Link href={`/shop/${product._id}`}
                key={product._id}
                className={`h-[360px] w-[270px] shadow-lg shadow-gray-400 overflow-hidden mx-auto group hover:bg-[#151875] duration-700`}
              >
                <div className="relative h-[60%]">
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
        </div>
      ) : (
        <p className="text-center">No products found.</p>
      )}
    </div>
  );
};

export default SuggestionsComponent;
