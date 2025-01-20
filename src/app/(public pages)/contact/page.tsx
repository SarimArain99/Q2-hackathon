import Image from "next/image";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

function page() {
  return (
    <div>
      <div className="h-40 bg-[#F6F5FF] px-4 sm:px-8 md:px-16 lg:px-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold py-5 text-[#101750]">
          Contact Us
        </h2>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Contact</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="min-h-screen bg-white p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex lg:flex-row flex-col justify-around gap-10 mb-16 items-center">
            <div className="text-center flex-1 min-w-[300px]">
              <h2 className="sm:text-3xl text-2xl font-bold mb-4 text-[#101750]">
                Information About Us
              </h2>
              <p className="max-w-xl text-[#8A8FB9] mx-auto">
                At our ecommerce platform, we are committed to providing our
                customers with a seamless shopping experience. Our team is
                dedicated to offering high-quality products, exceptional
                customer service, and fast, reliable shipping. We believe in
                building lasting relationships with our customers by
                consistently delivering value and satisfaction. Thank you for
                choosing us as your trusted shopping destination.
              </p>
              <div className="flex justify-center mt-4 space-x-2">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                <div className="w-4 h-4 bg-pink-500 rounded-full"></div>
              </div>
            </div>

            <div className="text-center min-w-[300px]">
              <h2 className="text-3xl font-bold mb-4 text-[#101750]">
                Contact Way
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <p className="text-[#8A8FB9] flex items-center gap-2">
                  <div className="w-10 h-10 bg-blue-500 rounded-full shrink-0"></div>
                  <span className="font-bold">Tel:</span> 877-67-88-99
                </p>
                <p className="text-[#8A8FB9] flex items-center gap-2">
                  <div className="w-10 h-10 bg-pink-500 rounded-full shrink-0"></div>
                  <span className="font-bold">E-Mail:</span> shop@store.com
                </p>
                <p className="text-[#8A8FB9] flex items-center gap-2">
                  <div className="w-10 h-10 bg-yellow-500 rounded-full shrink-0"></div>
                  20 Margaret st. London Great Britain, 3NM98-LK
                </p>
                <p className="text-[#8A8FB9] flex items-center gap-2">
                  <div className="w-10 h-10 bg-green-500 rounded-full shrink-0"></div>
                  <span className="font-bold">Support Forum For over 24hr</span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex lg:flex-row flex-col justify-center gap-10 items-center">
            <div className="text-center flex-1 min-w-[300px]">
              <h2 className="text-3xl font-bold mb-4 text-[#101750]">
                Get In Touch
              </h2>
              <p className="mb-4 max-w-xl text-[#8A8FB9] mx-auto">
                We would love to hear from you! Whether you have a question
                about our products, feedback on your shopping experience, or
                need assistance with an order, our team is here to help. Please
                fill out the form below, and we will get back to you as soon as
                possible.
              </p>
              <form className="space-y-4 items-start flex flex-col w-full">
                <div className="flex flex-wrap gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="flex-1 min-w-[120px] p-2 border border-gray-300 rounded"
                  />
                  <input
                    type="email"
                    placeholder="Your E-mail"
                    className="flex-1 min-w-[120px] p-2 border border-gray-300 rounded"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <textarea
                  placeholder="Type Your Message"
                  className="w-full p-2 border border-gray-300 rounded h-32"
                ></textarea>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#FB2E86] text-white rounded hover:bg-[#e22276] transition"
                >
                  Send Mail
                </button>
              </form>
            </div>
            <div className="flex justify-center flex-1 min-w-[300px]">
              <Image
                src="/contact.png"
                alt="Illustration"
                width={350}
                height={500}
                className="rounded-lg object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
