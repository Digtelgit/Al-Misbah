"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
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
    <header className="z-30 w-full bg-gradient-to-r from-white to-indigo-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-20 items-center justify-between rounded-2xl bg-white/90 backdrop-blur-sm px-6 shadow-sm">
          {/* Site branding */}
          <div className="flex items-center z-50">
            <Logo className="h-10 w-auto" />
          </div>

          {/* Hamburger Menu for Mobile and Desktop */}
          <button
            className="text-gray-900 hover:text-indigo-500 focus:outline-none z-50"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>

          {/* Mobile Navigation Links */}
          <ul
            className={`absolute top-0 left-0 z-40 w-full transform bg-white/95 backdrop-blur-sm p-6 transition-all duration-300 ${
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