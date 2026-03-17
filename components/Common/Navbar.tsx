"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@/store/slices/themeSlice";
import { RootState } from "@/store";
import {
  HiOutlineSun,
  HiOutlineMoon,
  HiOutlineMenuAlt3,
  HiOutlineX,
  HiOutlineShoppingCart,
  HiOutlineHeart,
} from "react-icons/hi";

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.mode);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "All Products", path: "/all-products" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-md py-2"
          : "bg-white dark:bg-black py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo (10% Black/White context) */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tighter text-black dark:text-white flex items-center"
        >
          N<span className="sm:flex hidden">EXT</span>
          <span className="text-[#ff8c00] flex items-center">
            G<span className="sm:flex hidden">ADGETS</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="font-medium hover:text-[#ff8c00] transition-colors text-black dark:text-white"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Icons (Cart, Wishlist, Theme, Login) */}
        <div className="flex items-center space-x-5">
          {/* Wishlist */}
          <Link
            href="/wishlist"
            className="hidden sm:block text-xl hover:text-[#ff8c00] text-black dark:text-white"
          >
            <HiOutlineHeart />
          </Link>

          {/* Cart */}
          <Link
            href="/cart"
            className="text-xl hover:text-[#ff8c00] relative text-black dark:text-white"
          >
            <HiOutlineShoppingCart />
            <span className="absolute -top-2 -right-2 bg-[#ff8c00] text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
              0
            </span>
          </Link>

          {/* Theme Toggler (Orange highlight) */}
          <button
            onClick={() => dispatch(toggleTheme())}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-[#ff8c00] transition-all hover:scale-110"
          >
            {theme === "dark" ? (
              <HiOutlineSun size={20} />
            ) : (
              <HiOutlineMoon size={20} />
            )}
          </button>

          {/* Login Btn (30% Orange) */}
          <Link
            href="/login"
            className="hidden md:block bg-[#ff8c00] text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-600 transition-all"
          >
            Login
          </Link>

          {/* Mobile Menu Btn */}
          <button
            className="md:hidden text-2xl text-black dark:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 py-5 px-4 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="block text-lg font-medium text-black dark:text-white"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/login"
            className="block w-full text-center bg-[#ff8c00] text-white py-3 rounded-xl font-bold"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
