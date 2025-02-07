"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

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
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-sm">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo className="h-8 w-auto" />
          </div>

          {/* Hamburger Menu for Mobile */}
          <button
            className="block md:hidden text-gray-300 hover:text-indigo-500 focus:outline-none z-40"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            style={{position:"relative",zIndex:1}}
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
                className="h-6 w-6"
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

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex md:flex-1 md:items-center md:justify-end md:gap-6">
            <li>
              <Link
                href="#workflows"
                className="text-sm text-gray-300 hover:text-indigo-500 transition-colors"
              >
                Our Companies
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="text-sm text-gray-300 hover:text-indigo-500 transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="#services"
                className="text-sm text-gray-300 hover:text-indigo-500 transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="#gallery"
                className="text-sm text-gray-300 hover:text-indigo-500 transition-colors"
              >
                Project Gallery
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-sm text-gray-300 hover:text-indigo-500 transition-colors"
              >
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Mobile Navigation Links */}
          <ul
            className={`absolute top-0 left-0 z-50 w-full transform bg-gray-900 p-4 transition-all duration-300 md:hidden ${
              menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
            }`}
            style={{maxHeight:"100vh",paddingTop:"40px"}}
          >
            <li>
              <Link
                href="#workflows"
                className="block py-2 text-sm text-gray-300 hover:text-indigo-500 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Our Companies
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="block py-2 text-sm text-gray-300 hover:text-indigo-500 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="#services"
                className="block py-2 text-sm text-gray-300 hover:text-indigo-500 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="#gallery"
                className="block py-2 text-sm text-gray-300 hover:text-indigo-500 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Project Gallery
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block py-2 text-sm text-gray-300 hover:text-indigo-500 transition-colors"
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
