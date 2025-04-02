"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Correct router import
import { assets } from "../assets/assets";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between bg-black px-6 md:px-16 lg:px-32 py-3">
      {/* Logo */}
      <Image
        className="cursor-pointer w-28 md:w-32"
        onClick={() => router.push("/")}
        src={assets.logo1}
        alt="logo"
      />

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center gap-6">
        <Link href="/" className="hover:text-gray-300 text-white transition">
          Home
        </Link>
        <Link href="/all-products" className="hover:text-gray-300 text-white transition">
          Shop
        </Link>
        <Link href="/about" className="hover:text-gray-300 text-white transition">
          About Us
        </Link>
        <Link href="/contact" className="hover:text-gray-300 text-white transition">
          Contact
        </Link>
      </div>

      {/* Sign-in Button (Desktop) */}
      <div className="hidden md:flex">
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded shadow-md transition">
          Sign in
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-white focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center py-4 space-y-4 md:hidden">
          <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-gray-300 transition">
            Home
          </Link>
          <Link href="/all-products" onClick={() => setMenuOpen(false)} className="hover:text-gray-300 transition">
            Shop
          </Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:text-gray-300 transition">
            About Us
          </Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="hover:text-gray-300 transition">
            Contact
          </Link>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded shadow-md transition"
            onClick={() => setMenuOpen(false)}
          >
            Sign in
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
