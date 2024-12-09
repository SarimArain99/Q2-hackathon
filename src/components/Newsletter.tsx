import Image from "next/image";
import React from "react";

function Newsletter() {
  return (
    <>
      <div className="bg-[url('/bannar.png')] bg-center bg-cover flex flex-col items-center justify-center px-4 py-16 md:py-24">
        <h2 className="text-[#151875] text-[24px] sm:text-[28px] md:text-[35px] font-bold max-w-lg text-center leading-snug">
          Get the Latest Updates by Subscribing to Our Newsletter
        </h2>
        <button className="text-white bg-[#FB4997] w-[140px] sm:w-[170px] md:w-[200px] h-[40px] sm:h-[50px] md:h-[57px] mt-5 rounded-md hover:bg-[#ff5a9c] transition">
          Subscribe
        </button>
      </div>
      <div className="flex justify-center items-center py-10 px-4">
        <Image
          src="/brand.png"
          alt="Brand Logos"
          width={1000}
          height={1000}
          className="h-auto max-w-full sm:max-w-[600px] md:max-w-[800px] object-contain"
        />
      </div>
    </>
  );
}

export default Newsletter;
