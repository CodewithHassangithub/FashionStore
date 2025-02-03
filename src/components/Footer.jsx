import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
  FiArrowRight,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-6 mt-10">
      {/* Main Footer Content */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Brand Section */}
          <div className="space-y-8">
            <img
              src={assets.logo}
              className="w-40 hover:-translate-y-1 transition-transform duration-300"
              alt="Company Logo"
            />
            <p className="text-white leading-relaxed">
              Discover the latest trends in fashion and explore our curated
              collection of premium clothing and accessories.
            </p>
            <div className="flex space-x-5">
              {[
                { icon: FiFacebook, href: "#" },
                { icon: FiTwitter, href: "#" },
                { icon: FiInstagram, href: "#" },
                { icon: FiLinkedin, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:-translate-y-1"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white relative">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-600"></span>
            </h3>
            <ul className="space-y-4">
              {["Home", "collection", "About", "Contact", "profile"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to={`/${item.toLowerCase().replace(" ", "-")}`}
                      className="text-white hover:text-blue-600 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-blue-600 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white relative">
              Customer Service
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-600"></span>
            </h3>
            <ul className="space-y-4">
              {[
                "Track Order",
                "Shipping Policy",
                "Returns & Exchanges",
                "FAQ",
                "Size Guide",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-white hover:text-blue-600 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-600 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white relative">
              Contact Us
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-600"></span>
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-white hover:text-blue-600 transition-colors duration-300 flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <FiMapPin className="text-gray-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span>123 Fashion Street, NY 10001</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="text-white hover:text-blue-600 transition-colors duration-300 flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <FiPhone className="text-gray-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span>+92 (308) 528,986-0</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@example.com"
                  className="text-white hover:text-blue-600 transition-colors duration-300 flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <FiMail className="text-gray-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span>dracomalfoy.seo@gmal.com</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-white">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <FiClock className="text-gray-600" />
                </div>
                <span>Mon - Fri: 9:00 AM - 10:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200">
          <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-white">
              <p> {currentYear} FOREVER.</p>
              <p className="hidden md:block">•</p>
              <p>All rights reserved.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link
                to="/privacy-policy"
                className="text-white hover:text-blue-600 transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-conditions"
                className="text-white hover:text-blue-600 transition-colors duration-300"
              >
                Terms & Conditions
              </Link>
              <Link
                to="/sitemap"
                className="text-white hover:text-blue-600 transition-colors duration-300"
              >
                FOREVER
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
