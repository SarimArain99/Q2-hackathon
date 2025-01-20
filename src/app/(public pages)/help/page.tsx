import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";

function FAQAndHelp() {
  const faqs = [
    {
      title: "How can I track my order?",
      description:
        "Once your order is shipped, you will receive a tracking number via email. You can use this number to track your package on the courier's website.",
    },
    {
      title: "What is your return policy?",
      description:
        "We offer a 30-day return policy on most products. Please ensure that the item is in its original condition with all tags and packaging.",
    },
    {
      title: "How do I change my shipping address?",
      description:
        "You can update your shipping address directly through your account settings. If your order has already been shipped, please contact our customer support team.",
    },
    {
      title: "Do you offer international shipping?",
      description:
        "Yes, we ship worldwide. Shipping fees and delivery times vary based on the destination country.",
    },
  ];

  return (
    <div>
      <div className="h-40 bg-[#F6F5FF] px-4 sm:px-8 md:px-16 lg:px-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold py-5 text-[#0D0E43]">
          FAQ and Help
        </h2>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Help</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-16">
        <div className="p-6 sm:p-8 w-full max-w-4xl bg-white shadow-md rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-[#1D3178]">
                Frequently Asked Questions
              </h1>
              {faqs.map((faq, idx) => (
                <div className="mb-4" key={idx}>
                  <h2 className="text-lg sm:text-xl font-semibold mb-2 text-[#1D3178]">
                    {faq.title}
                  </h2>
                  <p className="text-[#A1ABCC]">{faq.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-gray-100 p-6 sm:p-8 rounded-xl">
              <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-[#1D3178]">
                Need Help? Contact Us
              </h1>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#A1ABCC]">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#A1ABCC]">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#A1ABCC]">
                    Type Your Message
                  </label>
                  <textarea
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    rows={4}
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="py-2 px-4 bg-[#FB2E86] text-white font-semibold rounded-md shadow-sm hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center py-10 px-4 sm:px-8">
        <Image
          src="/brand.png"
          alt="Brand Logos"
          width={1000}
          height={1000}
          className="h-auto w-full max-w-[300px] sm:max-w-[600px] md:max-w-[800px] object-contain"
        />
      </div>
    </div>
  );
}

export default FAQAndHelp;
