import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
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

async function Category() {
  const data = await client.fetch(`*[_type == "product"]`);

  return (
    <div>
      <h1 className="text-[#151875] text-[42px] text-center my-5 font-bold">
        Top Categories
      </h1>
      <div className="flex justify-center items-center">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 p-5">
          {data.slice(5,8).map((product: Product) => (
            <Link href={`/shop/${product._id}`} key={product._id} className="flex flex-col items-center">
              <div className="bg-[#F6F7FB] p-5 rounded-full hover:bg-[#eef0f8] duration-1000">
                <Image
                  src={urlFor(product.image.asset._ref).url()}
                  alt={product.name}
                  width={1000}
                  height={1000}
                  className="h-28 w-28"
                />
              </div>
              <div className="flex flex-col gap-2 text-center mt-2">
                <p className="text-[#151875] font-medium">{product.name}</p>
                <p className="text-[#FB2E86] font-bold">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Category;
