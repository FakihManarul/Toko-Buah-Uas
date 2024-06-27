import Link from "next/link";
import React from "react";

export default function navbar() {
  return (
    <header className="bg-white max-w-screen-xl mx-auto py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src="/img/logo.png" alt="Logo" className="h-8 mr-2" />
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-10">
            <li>
              <Link href="/" className="text-[#81B03F] hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/" className="text-[#81B03F] hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="text-[#81B03F] hover:text-gray-300"
              >
                Products
              </Link>
            </li>
            <li>
              <Link href="/" className="text-[#81B03F] hover:text-gray-300">
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="text-[#81B03F] hover:text-gray-300"
              >
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
