import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-neutral-900 via-[#121212] to-neutral-900 text-gray-300 border-t border-neutral-800">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4">
        {/* Subtle Background Texture/Overlay */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(45deg, rgba(255,255,255,0.03) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.03) 50%, rgba(255,255,255,0.03) 75%, transparent 75%, transparent)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Footer Content */}
        <div className="relative z-10 flex flex-col md:flex-row justify-between py-12 space-y-8 md:space-y-0">
          {/* Logo Section */}
          <div className="w-full md:w-1/3 lg:w-1/4 mb-8 md:mb-0 flex flex-col items-center text-center">
            <div className="mb-4 transform transition-transform hover:scale-105">
              <Image
                src="/FooterLogoBgRemoved.png"
                width={65}
                height={65}
                alt="Al Misbah Design Logo"
                className="rounded-xl shadow-lg"
              />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Al Misbah excels in interior design, delivering creative and
              functional solutions.
            </p>
          </div>

          {/* Links Section */}
          <div className="w-full md:w-1/3 lg:w-1/4 space-y-4">
            <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { href: "#", label: "Home" },
                { href: "#about", label: "About Us" },
                { href: "/contact", label: "Contact Us" },
                { href: "#workflows", label: "Workflow" },
                { href: "/gallery", label: "Project Gallery" },
                { href: "#services", label: "Specialities" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition duration-300 ease-in-out relative group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

         
          {/* Social Links */}
          <div className="w-full md:w-1/3 lg:w-1/4 space-y-4">
            <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider">
              Follow Us
            </h3>
            <ul className="flex space-x-4 mt-4">
              {[
                {
                  href: "https://www.facebook.com/profile.php?id=61571961387947",
                  label: "Facebook",
                  icon: (
                    <path d="M16 6.4c-5.4 0-9.78 4.38-9.78 9.78 0 4.88 3.58 8.9 8.26 9.66V17.64h-2.48v-2.86h2.48v-2.18c0-2.46 1.46-3.82 3.7-3.82 1.08 0 2.2.2 2.2.2v2.42h-1.24c-1.22 0-1.6.76-1.6 1.54v1.84h2.72l-.44 2.86h-2.28v7.52c4.68-.76 8.26-4.78 8.26-9.66 0-5.4-4.38-9.78-9.78-9.78z" />
                  ),
                },
                {
                  href: "https://www.instagram.com/almisbah_group?igsh=cDlmaTV5Y2s4aWpw&utm_source=qr",
                  label: "Instagram",
                  icon: (
                    <svg
                      id="Layer_1"
                      viewBox="0 0 128 128"
                      xmlns="http://www.w3.org/2000/svg"
                      data-name="Layer 1"
                    >
                      <path d="m104 8a16 16 0 0 1 16 16v80a16 16 0 0 1 -16 16h-80a16 16 0 0 1 -16-16v-80a16 16 0 0 1 16-16zm0-8h-80a24.07 24.07 0 0 0 -24 24v80a24.07 24.07 0 0 0 24 24h80a24.07 24.07 0 0 0 24-24v-80a24.07 24.07 0 0 0 -24-24z" />
                      <circle cx="82" cy="46" r="5" />
                      <path d="m64 48a16 16 0 1 0 16 16 16 16 0 0 0 -16-16zm0 24a8 8 0 1 1 8-8 8 8 0 0 1 -8 8z" />
                      <rect
                        fill="none"
                        height="64"
                        rx="12"
                        stroke="#000"
                       
                        width="64"
                        x="32"
                        y="32"
                      />
                    </svg>
                  ),
                },
                {
                  href: "https://www.linkedin.com/in/misbah-decor-16b744358/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3Bif%2BZi2QbT8yKHCR2JVZlgg%3D%3D",
                  label: "LinkedIn",
                  icon: (
                    <path d="M27.26 3H4.74A1.74 1.74 0 0 0 3 4.74v22.52A1.74 1.74 0 0 0 4.74 29h22.52A1.74 1.74 0 0 0 29 27.26V4.74A1.74 1.74 0 0 0 27.26 3zM10.6 25.29H7.11V12.99H10.6v12.3zm-1.75-14a2.06 2.06 0 1 1 2.06-2.06 2.06 2.06 0 0 1-2.06 2.06zM25.29 25.29h-3.49v-5.97c0-1.37-.02-3.13-1.91-3.13-1.91 0-2.2 1.49-2.2 3.03v6.07h-3.49V12.99h3.35v1.61h.05a3.68 3.68 0 0 1 3.33-1.83c3.56 0 4.22 2.34 4.22 5.39v6.13z" />
                  ),
                },
              ].map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    className="text-gray-500 hover:text-white transition duration-300 transform hover:scale-110"
                    aria-label={social.label}
                  >
                    <svg
                      className="h-6 w-6"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                    >
                      {social.icon}
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright Line */}
        <div className="border-t border-neutral-800 py-6 mt-4">
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} Al Misbah Design. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
