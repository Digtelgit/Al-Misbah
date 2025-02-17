"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import OurServicesImage from "@/public/images/OurServices.jpg";

export default function Features() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between child animations
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      className="relative bg-white bg-opacity-95"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Trigger animation once
      variants={containerVariants}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f0f0f0' fill-opacity='0.4'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      <div className="absolute inset-0 pointer-events-none">
        {/* Rhombus 1 */}
        <div className="absolute w-24 h-24 bg-[#0FAFB6] opacity-20 transform rotate-45 -top-12 left-1/4"></div>
        {/* Rhombus 2 */}
        <div className="absolute w-16 h-16 bg-[#BBB4B4] opacity-20 transform rotate-45 top-1/3 right-1/4"></div>
        {/* Rhombus 3 */}
        <div className="absolute w-20 h-20 bg-[#0FAFB6] opacity-20 transform rotate-45 bottom-1/4 left-1/2"></div>
        {/* Rhombus 4 */}
        <div className="absolute w-12 h-12 bg-[#BBB4B4] opacity-20 transform rotate-45 top-1/4 right-1/2"></div>
        {/* Rhombus 5 */}
        <div className="absolute w-28 h-28 bg-[#0FAFB6] opacity-20 transform rotate-45 bottom-12 left-12"></div>
        {/* Rhombus 6 */}
        <div className="absolute w-32 h-32 bg-[#BBB4B4] opacity-20 transform rotate-45 top-1/2 right-12"></div>
        {/* Rhombus 7 */}
        <div className="absolute w-18 h-18 bg-[#0FAFB6] opacity-20 transform rotate-45 bottom-1/3 left-1/3"></div>
      </div>

      {/* Blurred shapes */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShapeGray}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>

      {/* Main content */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1] md:py-20 font-sans">
          {/* Section header */}
          <motion.div
            className="mx-auto max-w-3xl pb-4 text-center md:pb-12"
            variants={childVariants}
          >
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-400/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-400/50">
              <span className="inline-flex bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent">
                Our Expertise
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.600),theme(colors.indigo.400),theme(colors.gray.500),theme(colors.indigo.500),theme(colors.gray.600))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Discover Our Specialties
            </h2>
            <p className="text-lg text-gray-600">
              We are a group of companies excelling in interior design, decor,
              and spatial transformation services.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            className="flex justify-center pb-4 md:pb-12"
            variants={childVariants}
          >
            <Image
              className="rounded-lg object-cover shadow-lg"
              src={OurServicesImage}
              width={900}
              height={500}
              alt="Our Services"
              priority
            />
          </motion.div>

          {/* Items grid */}
          <motion.div
            className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-10 md:gap-y-12 lg:grid-cols-3"
            variants={containerVariants}
          >
            {/* Commercial Spaces */}
            <motion.article
              className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-md"
              variants={childVariants}
            >
              <svg
                id="Layer_1"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path d="m48.8 79.68h154.4v342.89h-154.4z" fill="#cad0d7" />
                  <path d="m30.45 60.9h192.41v28.78h-192.41z" fill="#444c4c" />
                  <path d="m92.18 319.25h67.36v93.32h-67.36z" fill="#6cb2e8" />
                  <path d="m308.8 79.68h154.4v342.89h-154.4z" fill="#cad0d7" />
                  <path d="m290.45 60.9h192.41v28.78h-192.41z" fill="#444c4c" />
                  <path d="m352.18 319.25h67.36v93.32h-67.36z" fill="#6cb2e8" />
                  <path
                    d="m327 182.27v24.65c-47.33 0-94.67 0-142 0v-24.65l-64.66 58.86 64.66 58.85v-24.65h142v24.65l64.66-58.86z"
                    fill="#fa4959"
                  />
                  <g fill="#9dd6f0">
                    <path d="m81.24 122.16h26.77v34.97h-26.77z" />
                    <path d="m145.31 122.16h26.77v34.97h-26.77z" />
                    <path d="m81.24 186.98h26.77v34.97h-26.77z" />
                    <path d="m81.24 251.8h26.77v34.97h-26.77z" />
                    <path d="m405.31 122.16h26.77v34.97h-26.77z" />
                    <path d="m341.24 122.16h26.77v34.97h-26.77z" />
                    <path d="m405.31 186.98h26.77v34.97h-26.77z" />
                    <path d="m405.31 251.8h26.77v34.97h-26.77z" />
                  </g>
                  <path d="m16 412.57h220v38.53h-220z" fill="#363a42" />
                  <path d="m276 412.57h220v38.53h-220z" fill="#363a42" />
                </g>
              </svg>

              <div>
                <h3 className="mb-2 font-nacelle text-lg font-semibold text-gray-800">
                  Commercial Spaces
                </h3>
                <p className="text-gray-600">
                  Crafting inspiring workspaces and decor solutions that drive
                  creativity and productivity.
                </p>
              </div>
            </motion.article>

            {/* Turnkey Solutions */}
            <motion.article
              className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-md"
              variants={childVariants}
            >
              <svg
                id="Layer_1"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="XMLID_1673_">
                  <circle
                    id="XMLID_1547_"
                    cx="256"
                    cy="256"
                    fill="#55a47e"
                    r="256"
                  />
                  <g id="XMLID_1287_" fill="#fff">
                    <path
                      id="XMLID_1290_"
                      d="m253.3 128.1c2.5 0 4.5-2 4.5-4.5v-23.1c0-2.5-2-4.5-4.5-4.5s-4.5 2-4.5 4.5v23.1c0 2.5 2 4.5 4.5 4.5z"
                    />
                    <path
                      id="XMLID_1943_"
                      d="m180.9 144.9c.8 1.4 2.4 2.3 3.9 2.3.8 0 1.5-.2 2.3-.6 2.2-1.2 2.9-4 1.7-6.2l-11.5-20c-1.2-2.2-4-2.9-6.2-1.7s-2.9 4-1.7 6.2z"
                    />
                    <path
                      id="XMLID_1944_"
                      d="m137.3 189.5-20-11.5c-2.2-1.2-4.9-.5-6.2 1.7-1.2 2.2-.5 4.9 1.7 6.2l20 11.5c.7.4 1.5.6 2.3.6 1.6 0 3.1-.8 3.9-2.3 1.2-2.2.5-4.9-1.7-6.2z"
                    />
                    <path
                      id="XMLID_2037_"
                      d="m372.9 195.5c.8 0 1.5-.2 2.3-.6l20-11.5c2.2-1.2 2.9-4 1.7-6.2s-4-2.9-6.2-1.7l-20 11.5c-2.2 1.2-2.9 4-1.7 6.2.8 1.5 2.4 2.3 3.9 2.3z"
                    />
                    <path
                      id="XMLID_2041_"
                      d="m319.9 145.2c.7.4 1.5.6 2.3.6 1.6 0 3.1-.8 3.9-2.3l11.5-20c1.2-2.2.5-4.9-1.7-6.2-2.2-1.2-4.9-.5-6.2 1.7l-11.5 20c-1.2 2.2-.5 4.9 1.7 6.2z"
                    />
                    <path
                      id="XMLID_2118_"
                      d="m380.4 214.3c-10.3 0-18.8 7.4-20.6 17.2h-95.2c-1.4-2.7-4.2-4.5-7.4-4.5-4.6 0-8.4 3.7-8.4 8.4 0 3.6 2.3 6.7 5.5 7.8l-1.7 21h9.2l-1.7-21c2-.7 3.6-2.2 4.5-4h95.2c1.8 9.8 10.4 17.2 20.6 17.2 11.6 0 21-9.4 21-21 0-11.7-9.4-21.1-21-21.1zm0 30.9c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10c0 5.6-4.5 10-10 10z"
                    />
                    <path
                      id="XMLID_2119_"
                      d="m267.8 245.5c-.3.3-.7.7-1 1l2 24.1h-23.1l2-24.1c-3.2-2.7-5.2-6.7-5.2-11.2 0-8.1 6.6-14.8 14.8-14.8 4.2 0 8 1.7 10.6 4.5h75.7c-9.5-39.8-46.7-71.3-88.4-71.3h-.9c-45.9 0-86.4 38.3-90.4 83.7-.2 2.7-.4 5.5-.4 8.3 0 20.5 7 40.5 19.8 56.6 10.4 13.1 26.1 20 38.2 31.2 7.3 6.8 10 17.8 10.1 29h-2.9c-4.4 0-8 3.6-8 8s3.6 8 8 8h52.1c4.4 0 8-3.6 8-8s-3.6-8-8-8h-2.9c.1-11.3 2.8-22.3 10.1-29 12.1-11.2 27.8-18.1 38.2-31.2 12.7-16.1 19.8-36.1 19.8-56.6 0-.1 0-.1 0-.2z"
                    />
                    <path
                      id="XMLID_2120_"
                      d="m280.7 381.8h-52.1c-4.4 0-8 3.6-8 8s3.6 8 8 8h52.1c4.4 0 8-3.6 8-8 .1-4.4-3.5-8-8-8z"
                    />
                    <path
                      id="XMLID_2121_"
                      d="m254.7 416c10.5 0 19.7-5.5 24.9-13.8h-49.8c5.2 8.3 14.4 13.8 24.9 13.8z"
                    />
                  </g>
                </g>
              </svg>

              <div>
                <h3 className="mb-2 font-nacelle text-lg font-semibold text-gray-800">
                  Turnkey Solutions
                </h3>
                <p className="text-gray-600">
                  Providing end-to-end solutions from design to execution for
                  hassle-free project completion.
                </p>
              </div>
            </motion.article>

            {/* Custom Furniture */}
            <motion.article
              className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-md"
              variants={childVariants}
            >
              <svg viewBox="0 0 2667 2667" xmlns="http://www.w3.org/2000/svg">
                <g id="Layer_x0020_1">
                  <circle cx="1333" cy="1333" fill="#f44c71" r="1333" />
                  <path
                    d="m2078 1421h-1489c-60 0-109-49-109-109s49-109 109-109h1489c60 0 109 49 109 109s-49 109-109 109zm-1156-762v-34c0-60 48-108 108-108h607c59 0 108 48 108 108v34zm637 443c10 0 19-8 19-18v-42c0-13 10-23 23-23s23 10 23 23v42c0 28-17 51-42 61v31h-498v-31c-24-10-42-33-42-61v-42c0-13 11-23 24-23s23 10 23 23v42c0 10 8 18 19 18zm247-201h-945c-13 0-23-10-23-23v-84c0-60 48-108 107-108h776c60 0 108 48 108 108v84c0 13-10 23-23 23zm241 911v314c0 13-10 24-23 24h-691c-13 0-23-11-23-24v-314zm-764 338h-640c-13 0-23-11-23-24v-679h663zm-543-375v256c0 9 8 16 17 16h389c9 0 17-7 17-16v-256c0-9-8-16-17-16h-389c-9 0-17 7-17 16zm283 103c4 0 7-1 9-4l45-41c5-5 6-14 1-19-17-18-45 31-60 37h-2-131l-41-38c-13-12-31 8-18 20 9 8 43 45 54 45zm-309-103c0-24 19-43 43-43h389c24 0 43 19 43 43v256c0 24-19 43-43 43h-389c-24 0-43-19-43-43zm399-110c42 0 77-34 77-76s-35-76-77-76-76 34-76 76 34 76 76 76zm0-125c66 0 66 99 0 99-65 0-65-99 0-99zm-323 125c42 0 76-34 76-76s-35-76-76-76c-42 0-77 34-77 76s34 76 77 76zm0-125c65 0 65 99 0 99-66 0-66-99 0-99zm520-93h737v338h-737zm530 183c7 0 13-6 13-14 0-7-6-13-13-13h-322c-8 0-13 6-13 13 0 8 5 14 13 14zm0 364c7 0 13-6 13-13 0-8-6-14-13-14h-322c-8 0-13 6-13 14 0 7 5 13 13 13z"
                    fill="#fff"
                  />
                </g>
              </svg>

              <div>
                <h3 className="mb-2 font-nacelle text-lg font-semibold text-gray-800">
                  Custom Furniture
                </h3>
                <p className="text-gray-600">
                  Designing and crafting bespoke furniture pieces that perfectly
                  complement your space.
                </p>
              </div>
            </motion.article>

            {/* Renovation Projects */}
            <motion.article
              className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-md"
              variants={childVariants}
            >
              <svg viewBox="0 0 2833 2833" xmlns="http://www.w3.org/2000/svg">
                <g id="Layer_x0020_1">
                  <circle cx="1417" cy="1417" fill="#7f493f" r="1417" />
                  <g id="_423108664">
                    <g>
                      <g id="_423113392">
                        <path
                          d="m1016 1937c-12 0-20-9-20-20v-1002c0-105-86-191-192-191-105 0-191 86-191 191v936c0 11-9 20-20 20s-20-9-20-20v-936c0-128 104-231 231-231 128 0 232 103 232 231v1002c0 11-9 20-20 20z"
                          fill="#fff"
                        />
                      </g>
                      <g id="_423110104">
                        <path
                          d="m800 2150c-131 0-236-106-236-236s105-236 236-236c130 0 236 106 236 236 0 11-9 20-20 20s-20-9-20-20c0-108-88-196-196-196-109 0-196 88-196 196s87 196 196 196c11 0 20 9 20 20s-9 20-20 20z"
                          fill="#fff"
                        />
                      </g>
                      <g id="_423110488">
                        <path
                          d="m2250 2150h-1450c-11 0-20-9-20-20s9-20 20-20h1430v-1013h-1214c-12 0-20-9-20-20s8-20 20-20h1234c11 0 20 9 20 20v1053c0 11-9 20-20 20z"
                          fill="#fff"
                        />
                      </g>
                      <g>
                        <g id="_423107656">
                          <path
                            d="m1657 1958h-49c-9 0-17-6-19-15l-23-85c-1 0-2 0-3-1l-62 62c-6 7-16 8-24 3l-43-24c-7-5-11-14-9-23l23-84c-1-1-2-2-3-3l-84 23c-9 2-18-1-23-9l-24-43c-5-7-3-17 3-24l62-61c0-2-1-3-1-4l-85-23c-8-2-14-10-14-19v-49c0-9 6-17 14-19l85-23c0-1 1-2 1-3l-62-62c-6-7-8-16-3-24l24-43c5-7 14-11 23-9l84 23 3-3-23-84c-2-9 2-18 9-23l43-24c8-5 18-4 24 3l62 62c1-1 2-1 3-1l23-85c2-8 10-15 19-15h49c9 0 17 7 19 15l23 85c1 0 2 0 4 1l61-62c7-7 17-8 25-3l42 24c8 5 11 14 9 23l-23 84 3 3 85-23c8-2 18 2 22 9l24 43c5 7 4 17-3 24l-62 62c1 1 1 2 1 3l85 23c9 2 15 10 15 19v49c0 9-6 17-15 19l-85 23c0 1 0 2-1 4l62 61c7 7 8 17 3 24l-24 43c-4 8-14 11-22 9l-85-23c-1 1-2 2-3 3l23 84c2 9-1 18-9 23l-42 24c-8 5-18 4-25-3l-61-62c-2 1-3 1-4 1l-23 85c-2 9-10 15-19 15zm-33-40h18l21-82c2-7 8-12 16-14 7-2 15-4 23-6 7-3 15-1 20 5l60 59 16-9-22-81c-2-8 0-15 6-20 6-6 11-12 17-17 5-6 13-8 20-6l81 21 9-15-59-60c-6-5-8-13-5-20l6-24c2-7 7-13 14-15l82-21v-19l-82-21c-7-2-12-8-14-15-2-8-4-16-6-24-3-7-1-15 5-20l59-60-9-15-81 22c-7 1-15-1-20-6-6-6-11-12-17-18-6-5-8-12-6-20l22-81-16-9-60 60c-5 5-13 7-20 4-8-2-16-4-23-6-8-1-14-7-16-14l-21-82h-18l-22 82c-2 7-8 13-15 14-8 2-16 4-24 6-7 3-15 1-20-4l-60-60-15 9 22 81c2 8-1 15-6 20-6 6-12 12-18 18-5 5-12 7-20 6l-81-22-9 15 60 60c5 5 7 13 5 20-3 8-5 16-7 24-1 7-7 13-14 15l-81 21v19l81 21c7 2 13 8 14 15l6 24c3 7 1 15-4 20l-60 60 9 15 81-21c8-2 15 0 20 6 6 6 12 11 18 17 5 5 8 12 6 20l-22 81 15 9 60-59c5-6 13-8 20-5l24 6c7 2 13 7 15 14z"
                            fill="#fff"
                          />
                        </g>
                        <g id="_423108496">
                          <path
                            d="m1633 1786c-101 0-183-82-183-182 0-101 82-183 183-183 100 0 182 82 182 183 0 100-82 182-182 182zm0-325c-79 0-143 64-143 143 0 78 64 142 143 142 78 0 142-64 142-142 0-79-64-143-142-143z"
                            fill="#fff"
                          />
                        </g>
                      </g>
                      <g>
                        <g id="_423107896">
                          <path
                            d="m2047 991h-791c-11 0-20-9-20-20v-167c0-11 9-20 20-20h791c11 0 20 9 20 20v167c0 11-9 20-20 20zm-771-40h751v-127h-751z"
                            fill="#fff"
                          />
                        </g>
                        <g id="_423108472">
                          <path
                            d="m1256 991c-3 0-6-1-9-2l-166-84c-6-3-11-10-11-17 0-8 5-15 11-18l166-84c6-3 13-3 19 1 6 3 10 10 10 17v167c0 7-4 13-10 17-3 2-7 3-10 3zm-121-104 101 51v-102z"
                            fill="#fff"
                          />
                        </g>
                        <g id="_423108424">
                          <path
                            d="m2179 991h-132c-12 0-20-9-20-20v-167c0-11 8-20 20-20h132c37 0 66 29 66 66v75c0 36-29 66-66 66zm-112-167v127h112c15 0 26-12 26-26v-75c0-15-11-26-26-26z"
                            fill="#fff"
                          />
                        </g>
                        <g id="_423108328">
                          <path
                            d="m2047 907h-791c-11 0-20-9-20-20s9-20 20-20h791c11 0 20 9 20 20s-9 20-20 20z"
                            fill="#fff"
                          />
                        </g>
                        <g id="_423108640">
                          <path
                            d="m2047 824c-12 0-20-9-20-20v-66h-216c-11 0-20-9-20-20s9-20 20-20h236c11 0 20 9 20 20v86c0 11-9 20-20 20z"
                            fill="#fff"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>

              <div>
                <h3 className="mb-2 font-nacelle text-lg font-semibold text-gray-800">
                  Renovation Projects
                </h3>
                <p className="text-gray-600">
                  Revitalizing spaces with modern upgrades and design
                  transformations to meet contemporary needs.
                </p>
              </div>
            </motion.article>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
