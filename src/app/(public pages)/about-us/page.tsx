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
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold py-5">
          About Us
        </h2>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Components</BreadcrumbLink>
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
              Know About Our Ecommerce Business, History
            </h2>
            <p className="mt-2 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              efficitur velit sit amet aliquam malesuada. Nam malesuada ex nibh,
              ac tincidunt velit egestas eget. Sed eleifend, lorem at accumsan
              faucibus, velit libero bibendum quam.
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
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas purus gravida.",
              },
              {
                icon: "💯",
                title: "100% Cash Back",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas purus gravida.",
              },
              {
                icon: "🏆",
                title: "Quality Product",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas purus gravida.",
              },
              {
                icon: "⏰",
                title: "24/7 Support",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas purus gravida.",
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id
              felis ultricies quam vel dui sollicitudin aliquet ut arcu. Nam
              vitae ex enim, sed sapien egestas ac non arcu. Testique ultricies
              dolor aliquam lacus volutpat praesent.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default page;
