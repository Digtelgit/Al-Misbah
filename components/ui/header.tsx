"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "./logo";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [companiesOpen, setCompaniesOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <header className="z-30 w-full bg-white font-sans shadow-sm">
      <div className="w-full">
        <div className="relative flex h-20 items-center justify-between bg-white px-6 md:px-10 lg:px-16">
          {/* Site branding */}
          <div className="flex items-center z-50">
            <Logo className="h-12 w-auto" />
          </div>

          {/* Desktop Navigation - Added here */}
          <nav className="hidden md:flex items-center justify-center">
            <ul className="flex space-x-16">
              <li>
                <Link 
                  href="#about" 
                  className="text-gray-800 hover:text-indigo-500 font-medium transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="#services" 
                  className="text-gray-800 hover:text-indigo-500 font-medium transition-colors duration-200"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-gray-800 hover:text-indigo-500 font-medium transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          {/* Navigation & Company Logos */}
          <div className="flex items-center space-x-6">
            {/* Hamburger Menu (Shifted slightly left) */}
            <button
              className="relative text-gray-500 hover:text-indigo-500 focus:outline-none z-50 w-8 h-8 transition-colors duration-200 sm:mr-6"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div
                  className={`w-5 h-0.5 bg-current transition-all duration-300 ease-in-out ${
                    menuOpen ? "rotate-45 translate-y-0.5" : "-translate-y-1"
                  }`}
                ></div>
                <div
                  className={`w-5 h-0.5 bg-current transition-all duration-300 ease-in-out my-0.5 ${
                    menuOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></div>
                <div
                  className={`w-5 h-0.5 bg-current transition-all duration-300 ease-in-out ${
                    menuOpen ? "-rotate-45 -translate-y-0.5" : "translate-y-1"
                  }`}
                ></div>
              </div>
            </button>

            {/* Company Logos (Hidden on small screens) */}
            <div className="hidden sm:flex items-center space-x-6">
              <div className="flex flex-col items-center">
                <Link href="#zaartech">
                  <Image src="/images/ZaarTechLogo.png" alt="Zaartech" width={60} height={85} />
                </Link>
                
              </div>
              <div className="flex flex-col items-center">
                <Link href="#alibhar">
                  <Image src="/images/AlIbharLogo.png" alt="Alibhar" width={55} height={55} />
                </Link>
                
              </div>
            </div>
          </div>

          {/* Mobile Navigation Links */}
          <ul
            className={`absolute top-0 left-0 z-40 w-full transform bg-white p-6 transition-all duration-300 ${
              menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
            }`}
            style={{ maxHeight: "100vh", paddingTop: "80px" }}
          >
            <li>
              <div
                className="block py-3 text-lg text-gray-900 hover:text-indigo-500 transition-colors cursor-pointer"
                onClick={() => setCompaniesOpen((prev) => !prev)}
              >
                Our Companies
              </div>
              {companiesOpen && (
                <ul className="pl-4">
                  <li>
                    <Link
                      href="#zaartech"
                      className="block py-2 text-base text-gray-700 hover:text-indigo-500 transition-colors"
                      onClick={() => setMenuOpen(false)}
                    >
                      Zaartech
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#alibhar"
                      className="block py-2 text-base text-gray-700 hover:text-indigo-500 transition-colors"
                      onClick={() => setMenuOpen(false)}
                    >
                      Alibhar
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                href="#about"
                className="block py-3 text-lg text-gray-900 hover:text-indigo-500 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="#workflows"
                className="block py-3 text-lg text-gray-900 hover:text-indigo-500 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Our Process
              </Link>
            </li>
            <li>
              <Link
                href="#services"
                className="block py-3 text-lg text-gray-900 hover:text-indigo-500 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/gallery"
                className="block py-3 text-lg text-gray-900 hover:text-indigo-500 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Project Gallery
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block py-3 text-lg text-gray-900 hover:text-indigo-500 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}