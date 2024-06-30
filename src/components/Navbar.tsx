/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";

export default function Navbar() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <header className="bg-white max-w-screen-xl mx-auto py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="">
          {user ? (
            <div className="flex items-center gap-2">
              <img
                src={user.picture}
                alt={user.name}
                className="h-8 w-8 rounded-full"
              />
              <p>{user.name}</p>
            </div>
          ) : (
            <img src="/img/logo.png" alt="Logo" className="h-8 mr-2" />
          )}
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
              <Link
                href="/api/auth/login"
                className="hover:bg-slate-200 py-2 px-4 items-center text-white bg-[#81b03f] rounded-full "
              >
                Sign In
              </Link>
              <Link
                href="/api/auth/signup"
                className="hover:bg-slate-200 py-2 px-4 items-center text-white bg-[#81b03f] rounded-full "
              >
                Sign Up
              </Link>
            </>
          )}
          {user && !isLoading && (
            <Link
              href="/api/auth/logout"
              className="hover:bg-slate-200 py-2 px-4 items-center text-white bg-[#81b03f] rounded-full "
            >
              Logout
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
