import React from "react";
import Link from "next/link";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-(--bg-primary) text-(--text-main) border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Identity */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold tracking-tighter">
              NEXT<span className="text-brand">GADGETS</span>
            </Link>
            <p className="text-sm opacity-70 leading-relaxed">
              Your one-stop destination for the latest and most innovative
              gadgets. We deliver quality and trust right to your doorstep.
            </p>
            <div className="flex space-x-4">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="h-8 w-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-brand hover:text-white transition-all text-brand"
                  >
                    <Icon size={14} />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-l-4 border-brand pl-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/all-products"
                  className="hover:text-brand transition-colors"
                >
                  Shop All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-brand transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/career"
                  className="hover:text-brand transition-colors"
                >
                  Join Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-brand transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-l-4 border-brand pl-3">
              Customer Care
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/contact"
                  className="hover:text-brand transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/track-order"
                  className="hover:text-brand transition-colors"
                >
                  Track Order
                </Link>
              </li>
              <li>
                <Link
                  href="/wishlist"
                  className="hover:text-brand transition-colors"
                >
                  Wishlist
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-brand transition-colors"
                >
                  FAQ & Help
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-l-4 border-brand pl-3">
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center space-x-3">
                <HiOutlineLocationMarker className="text-brand text-xl" />
                <span>Sector 7, Uttara, Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center space-x-3">
                <HiOutlinePhone className="text-brand text-xl" />
                <span>+880 1234 567890</span>
              </li>
              <li className="flex items-center space-x-3">
                <HiOutlineMail className="text-brand text-xl" />
                <span>support@nextgadgets.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs opacity-60 space-y-4 md:space-y-0">
          <p>© {currentYear} Next Gadgets. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy-policy" className="hover:text-brand">
              Privacy Policy
            </Link>
            <Link href="/cookie-policy" className="hover:text-brand">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
