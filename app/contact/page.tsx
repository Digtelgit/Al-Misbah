import Image from "next/image";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default function ContactUs() {
  return (
    <>
      <Header />
      <section className="relative overflow-hidden font-sans">
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src="/images/blurred-shape.svg"
            width={760}
            height={668}
            alt="Blurred shape"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-r from-transparent via-gray-800/50 py-12 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Side */}
              <div className="space-y-8">
                <h2
                  className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text text-3xl font-semibold text-transparent md:text-4xl"
                  data-aos="fade-up"
                >
                  Get in Touch with Us
                </h2>
                <p className="text-lg text-gray-300" data-aos="fade-up" data-aos-delay={200}>
                  We’re here to help. Reach out to us for inquiries, support, or collaboration opportunities.
                </p>
                <form className="space-y-6" data-aos="fade-up" data-aos-delay={400}>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full rounded-md bg-gray-800 px-4 py-3 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring focus:ring-indigo-500"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full rounded-md bg-gray-800 px-4 py-3 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring focus:ring-indigo-500"
                      required
                    />
                  </div>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full rounded-md bg-gray-800 px-4 py-3 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring focus:ring-indigo-500"
                    required
                  ></textarea>
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="btn group w-full max-w-xs bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%]"
                    >
                      <span className="relative inline-flex items-center">
                        Send Message
                        <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                          -&gt;
                        </span>
                      </span>
                    </button>
                  </div>
                </form>
                <div className="mt-12">
                  <p className="text-gray-300" data-aos="fade-up" data-aos-delay={600}>
                    Or contact us directly at:
                  </p>
                  <p className="text-indigo-200 mt-2" data-aos="fade-up" data-aos-delay={700}>
                    <a href="mailto:contact@almisbah.com" className="hover:text-indigo-400">
                      contact@almisbah.com
                    </a>
                  </p>
                  <p className="text-gray-300 mt-2" data-aos="fade-up" data-aos-delay={800}>
                    Phone: <span className="text-indigo-200">+1 (234) 567-890</span>
                  </p>
                  {/* Office Address */}
                  <p className="text-gray-300 mt-2" data-aos="fade-up" data-aos-delay={900}>
                    Address:{" "}
                    <span className="text-indigo-200">
                      Office 904, Saheel 2, Al Nahda 1, Dubai, United Arab Emirates
                    </span>
                  </p>
                </div>
              </div>

              {/* Right Side */}
              <div className="space-y-6" data-aos="fade-up" data-aos-delay={400}>
                {/* Image */}
                <div className="rounded-lg overflow-hidden">
                  <Image
                    src="/images/aboutUs.jpg"
                    alt="Contact Us"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
                {/* Map */}
                <div className="rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.545760431228!2d55.357977376235716!3d25.285861528102135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d40c1965935%3A0xafcb0cec58a5201b!2sSaheel%20Tower%202!5e0!3m2!1sen!2sin!4v1739345297195!5m2!1sen!2sin"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}