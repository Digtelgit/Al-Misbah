"use client";

import Image from "next/image";
import AboutUsImage from "@/public/images/aboutUs.jpg";

export default function Testimonial() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center">
            <h2 className="bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-3xl font-semibold text-transparent md:text-4xl">
              About Us
            </h2>
            <p className="text-lg text-gray-400 mt-4">
              We are a group of passionate professionals dedicated to creating
              extraordinary spaces and delivering innovative solutions. Our
              mission is to blend creativity, quality, and functionality in
              every project we undertake.
            </p>
          </div>

          {/* About Us Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div>
              <Image
                className="rounded-lg object-cover"
                src={AboutUsImage}
                alt="About Us"
                width={600}
                height={400}
              />
            </div>

            {/* Text Content */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-200">
                WHY MISBAH?
              </h3>
              <p className="text-gray-400 mt-4">
                At Al Misbah, we approach every project as a unique opportunity,
                dedicating the necessary time and effort to fully understand
                your objectives and budgetary constraints. Leveraging our
                extensive industry expertise, we guide you through every phase
                of your project's lifecycle. Our comprehensive solutions ensure
                a seamless transformation of your space, whether it’s a bare
                shell or a semi-fitted area, into a fully operational and
                functional premise.
              </p>
              <p className="text-gray-400 mt-4">
                In the business world, it's all too common for owners or their
                representatives to face delays and disruptions while managing
                various formalities, often at the expense of their primary
                operations.
              </p>
              <p className="text-gray-400 mt-4">
                Together, we build environments that leave a lasting impression.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
