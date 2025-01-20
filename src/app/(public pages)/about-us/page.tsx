import Image from "next/image";
import Link from "next/link";
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
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold py-5 text-[#0d0e43]">
          About Us
        </h2>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>About Us</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="container mx-auto p-4">
        <section className="text-center mb-8 flex flex-wrap md:flex-nowrap justify-center items-center gap-6">
          <div className="relative w-full md:w-1/2 h-64">
            <Image
              src="/about.png"
              alt="Business meeting"
              objectFit="cover"
              className="rounded-lg h-60 w-96 lg:ml-20"
              width={1000}
              height={1000}
            />
          </div>
          <div className="flex flex-col items-start md:w-1/2 text-start">
            <h2 className="text-2xl md:text-3xl font-bold mt-4">
              Learn About Our Journey and Mission
            </h2>
            <p className="mt-2 text-gray-600">
              Founded in 2020, our ecommerce business has been dedicated to
              providing top-quality products to our customers worldwide. Our
              mission is to create a seamless and enjoyable shopping experience
              by offering a wide range of products, competitive pricing, and
              exceptional customer service. Over the years, we have grown and
              adapted to meet the changing needs of our customers, while staying
              true to our core values of integrity, innovation, and excellence.
            </p>
            <p className="mt-2 text-gray-600">
              Our team is composed of passionate professionals who are committed
              to delivering the best possible experience for our customers. From
              sourcing the finest products to ensuring timely delivery, we take
              pride in every aspect of our business. We believe in building
              long-lasting relationships with our customers and are constantly
              striving to exceed their expectations.
            </p>
            <Link
              href="/contact"
              className="mt-4 bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600 transition-colors"
            >
              Contact us
            </Link>
          </div>
        </section>

        <section className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                icon: "🚚",
                title: "Free Delivery",
                desc: "We offer free delivery on all orders to ensure you get your products without any additional cost.",
              },
              {
                icon: "💯",
                title: "100% Cash Back",
                desc: "Our 100% cash back guarantee ensures that you are completely satisfied with your purchase or your money back.",
              },
              {
                icon: "🏆",
                title: "Quality Product",
                desc: "We are committed to providing high-quality products that meet the highest standards of excellence.",
              },
              {
                icon: "⏰",
                title: "24/7 Support",
                desc: "Our customer support team is available 24/7 to assist you with any inquiries or issues.",
              },
            ].map((feature, index) => (
              <div key={index} className="p-4 border rounded-lg text-center">
                <div className="text-4xl mb-2">{feature.icon}</div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Our Clients Say!
          </h2>
          <div className="flex justify-center items-center flex-wrap gap-4 mb-6">
            {["/client1.png", "/client2.png", "/client3.png"].map(
              (src, index) => (
                <div key={index} className="relative w-16 h-16">
                  <Image
                    src={src}
                    alt={`Client ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
              )
            )}
          </div>
          <div className="flex flex-col justify-center items-center px-4">
            <p className="text-xl font-bold">Selina Gomez</p>
            <p className="mt-2 text-gray-600 max-w-xl">
            &quot;The best shopping experience I have ever had! The customer
              service is outstanding, and the quality of the products is
              top-notch. I highly recommend this ecommerce site to everyone.&quot;
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default page;
