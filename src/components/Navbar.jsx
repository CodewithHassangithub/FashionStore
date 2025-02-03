import React, { useState, useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ShopContext } from "../context/ShopContext";
import { useTheme } from "../context/ThemeContext";
import {
  HiOutlineShoppingBag,
  HiOutlineMenu,
  HiOutlineX,
  HiOutlineUser,
} from "react-icons/hi";
import { HiMoon, HiSun } from "react-icons/hi";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/collection", label: "Collection" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);
  const { darkMode, toggleDarkMode } = useTheme();
  const location = useLocation();

  const cartItemCount = getTotalCartItems();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/10 dark:bg-gray-900/80 backdrop-blur-sm shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-2xl font-bold"
              >
                <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                  FashionStore
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    location.pathname === link.path
                      ? "text-violet-600 dark:text-violet-400"
                      : "text-black-900 hover:text-violet-600 dark:text-gray-300 dark:hover:text-violet-400"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-4">
              {/* Dark Mode Toggle */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <HiSun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <HiMoon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                )}
              </motion.button>

              {/* Profile Icon */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/profile"
                  className={`p-2 rounded-full transition-colors ${
                    location.pathname === "/profile"
                      ? "bg-violet-0 text-violet-600"
                      : isScrolled
                      ? "text-gray-900 hover:bg-gray-100"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  <HiOutlineUser className="w-6 h-6" />
                </Link>
              </motion.div>

              {/* Cart Icon */}
              <Link to="/cart" className="relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                >
                  <HiOutlineShoppingBag className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  {cartItemCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-violet-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                      {cartItemCount}
                    </span>
                  )}
                </motion.div>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-full transition-colors"
              >
                {isMobileMenuOpen ? (
                  <HiOutlineX
                    className={`w-6 h-6 ${
                      isScrolled ? "text-gray-900" : "text-white"
                    }`}
                  />
                ) : (
                  <HiOutlineMenu
                    className={`w-6 h-6 ${
                      isScrolled ? "text-gray-900" : "text-white"
                    }`}
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-16 md:hidden bg-white shadow-lg z-40"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-2 text-base font-medium ${
                    location.pathname === link.path
                      ? "text-violet-600"
                      : "text-gray-900 hover:text-violet-600"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
