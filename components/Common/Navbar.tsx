"use client";

import { useState, useEffect } from "react";
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
    { name: "Track Order", path: "/track-order" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[--bg-primary]/80 backdrop-blur-md shadow-md py-2"
          : "bg-[--bg-primary] py-4"
      } text-[--text-main]`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo Section */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tighter flex items-center text-(--text-main)"
        >
          <span>N</span>
          <span className="sm:inline hidden">EXT</span>
          <span className="text-brand flex items-center">
            <span>G</span>
            <span className="sm:inline hidden">ADGETS</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="font-medium transition-colors hover:text-brand"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Icons & Actions */}
        <div className="flex items-center space-x-5">
          {/* Wishlist */}
          <Link
            href="/wishlist"
            className="hidden sm:block text-xl transition-colors hover:text-brand"
          >
            <HiOutlineHeart />
          </Link>

          {/* Cart */}
          <Link
            href="/cart"
            className="text-xl relative transition-colors hover:text-brand"
          >
            <HiOutlineShoppingCart />
            <span className="absolute -top-2 -right-2 bg-brand text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
              0
            </span>
          </Link>

          {/* Theme Toggler */}
          <button
            onClick={() => dispatch(toggleTheme())}
            className="p-2 cursor-pointer rounded-full transition-all hover:scale-110 bg-gray-100 dark:bg-gray-800 text-brand"
          >
            {theme === "dark" ? (
              <HiOutlineSun size={20} />
            ) : (
              <HiOutlineMoon size={20} />
            )}
          </button>

          {/* Login Button */}
          <Link
            href="/login"
            className="hidden md:block px-6 py-2 rounded-full font-semibold transition-all bg-brand text-white hover:opacity-90"
          >
            Login
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full shadow-xl py-5 px-4 space-y-4 bg-(--bg-primary) border-t border-gray-200 dark:border-gray-800">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="block text-lg font-medium hover:text-brand"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/login"
            className="block w-full text-center py-3 rounded-xl font-bold bg-brand text-white"
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
