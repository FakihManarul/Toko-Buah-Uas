"use client";

import Link from "next/link";
import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Navbar() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <header className="bg-white max-w-screen-xl mx-auto py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src="/img/logo.png" alt="Logo" className="h-8 mr-2" />
        </div>
        <nav className="md:block">
          <ul className="flex space-x-10">
            <li>
              <Link href="/" className="text-[#81B03F] hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-[#81B03F] hover:text-gray-300"
              >
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
              <Link
                href="/contact"
                className="text-[#81B03F] hover:text-gray-300"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex gap-4">
          {!user && !isLoading && (
            <>
              <li>
                <Link
                  href="/api/auth/login"
                  className="text-[#81B03F] hover:text-gray-300"
                >
                  login
                </Link>
              </li>
              <li>
                <Link
                  href="/api/auth/signup"
                  className="text-[#81B03F] hover:text-gray-300"
                >
                  login
                </Link>
              </li>
            </>
          )}
          {user && !isLoading && (
            <Link
              href="/api/auth/logout"
              className="text-[#81B03F] hover:text-gray-300"
            >
              logut
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
