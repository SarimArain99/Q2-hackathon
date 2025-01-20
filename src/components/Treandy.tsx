import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

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
}

async function Treandy() {
  const data = await client.fetch(`*[_type == "product"]`);

  return (
    <div>
      <h1 className="text-[#1A0B5B] text-[42px] font-bold text-center py-5">
        Treanding Products
      </h1>
      <div className="flex justify-center">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 px-3">
          {data.slice(10, 13).map((product: Product) => (
            <Link href={`/shop/${product._id}`}
              key={product._id}
              className={`h-[360px] w-[270px] shadow-lg shadow-gray-400 overflow-hidden mx-auto group hover:bg-[#151875] transition-colors duration-300`}
            >
              <div className="relative h-[60%]">
                <Image
                  src="/blueCart.png"
                  alt="Add to Cart"
                  width={1000}
                  height={1000}
                  className="h-6 w-6 hidden group-hover:block  absolute top-1 left-2 transition-all duration-500"
                />
                <Image
                  src="/lovee.png"
                  alt="Favorite"
                  width={1000}
                  height={1000}
                  className="h-5 w-5 hidden group-hover:block absolute top-2 left-8 transition-all duration-500"
                />
                <Image
                  src="/zoom.png"
                  alt="Zoom"
                  width={1000}
                  height={1000}
                  className="h-5 w-5 hidden group-hover:block absolute top-2 left-14 transition-all duration-500"
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
                  className={`text-[14px] text-[#151875] group-hover:text-white transition-colors duration-300`}
                >
                  ${product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Treandy;
