import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { HiOutlineUser, HiMoon, HiSun } from "react-icons/hi";
import { useTheme } from "../context/ThemeContext";

const MobileMenu = ({ links, onClose, cartItemCount }) => {
  const { darkMode, toggleDarkMode } = useTheme();

  const menuVariants = {
    hidden: {
      x: "100%",
      transition: {
        type: "tween",
        duration: 0.3,
        when: "afterChildren",
        staggerChildren: 0.1,
      },
    },
    visible: {
      x: 0,
      transition: {
        type: "tween",
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      x: 50,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="absolute right-0 top-0 bottom-0 w-64 bg-white dark:bg-gray-900 shadow-xl"
        variants={menuVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 space-y-4">
          {/* Theme Toggle */}
          <motion.button
            variants={itemVariants}
            onClick={toggleDarkMode}
            className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
          >
            <span className="text-sm font-medium">Dark Mode</span>
            {darkMode ? (
              <HiSun className="w-5 h-5 text-yellow-500" />
            ) : (
              <HiMoon className="w-5 h-5" />
            )}
          </motion.button>

          {/* Navigation Links */}
          {links.map((link) => (
            <motion.div key={link.path} variants={itemVariants}>
              <Link
                to={link.path}
                className="block p-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={onClose}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

MobileMenu.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  onClose: PropTypes.func.isRequired,
  cartItemCount: PropTypes.number,
};

export default MobileMenu;
