import Link from "next/link";
import Logo from "./logo";
import Image from "next/image";
// import FooterIllustration from "@/public/images/footer-illustration.svg";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Footer Illustration */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 w-full max-w-7xl"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src="/images/footer-illustration.svg"
            width={1076}
            height={378}
            alt="Footer illustration"
          />
        </div>

        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between py-12 space-y-8 md:space-y-0">
          {/* Logo Section */}
          <div className="w-full md:w-1/3 lg:w-1/4 mb-8 md:mb-0">
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-sm text-gray-400">
              Al Misbah excels in interior and exhibition design, delivering
              creative and functional solutions. Our close-knit team transforms
              client ideas into aesthetically and commercially viable projects.
            </p>
          </div>

          {/* Links Section */}
          <div className="w-full md:w-1/3 lg:w-1/4 space-y-4">
            <h3 className="text-sm font-semibold text-gray-300 uppercase">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a className="hover:text-indigo-400 transition" href="#about">
                  About Us
                </a>
              </li>
              <li>
                <a className="hover:text-indigo-400 transition" href="/contact">
                  Contact Us
                </a>
              </li>
              
              
              <li>
                <a className="hover:text-indigo-400 transition" href="#workflows">
                 Workflow
                </a>
              </li>
              <li>
                <Link className="hover:text-indigo-400 transition" href="/gallery">
                  Project Gallery
                </Link>
              </li>
              <li>
                <Link className="hover:text-indigo-400 transition" href="#services">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="w-full md:w-1/3 lg:w-1/4 space-y-4">
            <h3 className="text-sm font-semibold text-gray-300 uppercase">
              Follow Us
            </h3>
            <ul className="flex space-x-4">
              <li>
                <a
                  className="text-indigo-500 hover:text-indigo-400 transition"
                  href="#0"
                  aria-label="Twitter"
                >
                  <svg
                    className="h-6 w-6"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-500 hover:text-indigo-400 transition"
                  href="#0"
                  aria-label="Medium"
                >
                  <svg
                    className="h-6 w-6"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23 8H9a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1Zm-1.708 3.791-.858.823a.251.251 0 0 0-.1.241V18.9a.251.251 0 0 0 .1.241l.838.823v.181h-4.215v-.181l.868-.843c.085-.085.085-.11.085-.241v-4.887l-2.41 6.131h-.329l-2.81-6.13V18.1a.567.567 0 0 0 .156.472l1.129 1.37v.181h-3.2v-.181l1.129-1.37a.547.547 0 0 0 .146-.472v-4.749a.416.416 0 0 0-.138-.351l-1-1.209v-.181H13.8l2.4 5.283 2.122-5.283h2.971l-.001.181Z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-500 hover:text-indigo-400 transition"
                  href="#0"
                  aria-label="Github"
                >
                  <svg
                    className="h-6 w-6"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}