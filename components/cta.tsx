import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function Cta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-white to-blue-50">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2 opacity-30"
        aria-hidden="true"
      >
        {/* <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        /> */}
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 font-sans">
        <div className="bg-gradient-to-r from-white/90 via-blue-50/80 to-white/90 rounded-xl shadow-sm py-12 md:py-20 border border-blue-100/50">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.800),theme(colors.indigo.600),theme(colors.gray.800),theme(colors.indigo.500),theme(colors.gray.800))] bg-[length:200%_auto] bg-clip-text pb-8 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
              data-aos="fade-up"
            >
              Transform Your Space with Stunning Interior Designs
            </h2>
            <p
              className="text-gray-600 pb-6"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              Elevate your building, home, and office aesthetics with our
              bespoke interior design solutions.
            </p>

            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
              <div data-aos="fade-up" data-aos-delay={400}>
                <a
                  className="btn group mb-4 w-full bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                  href="/contact"
                >
                  <span className="relative inline-flex items-center">
                    Get a Free Consultation
                    <span className="ml-1 tracking-normal text-white/80 transition-transform group-hover:translate-x-0.5">
                      -&gt;
                    </span>
                  </span>
                </a>
              </div>
              <div data-aos="fade-up" data-aos-delay={600}>
                <a
                  className="btn relative w-full bg-white text-indigo-600 border border-indigo-100 shadow-sm hover:bg-blue-50 transition duration-300 sm:ml-4 sm:w-auto"
                  href="/contact"
                >
                  View Our Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
