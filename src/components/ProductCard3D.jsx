import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { ShopContext } from "../context/ShopContext";
import { Link, useNavigate } from "react-router-dom";

const ProductCard3D = ({ id, name, price, description, image, category }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart({
      id,
      name,
      price,
      image: Array.isArray(image) ? image[0] : image,
      quantity: 1,
    });

    const toast = document.createElement("div");
    toast.className =
      "fixed bottom-4 right-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-xl shadow-lg z-50";
    toast.textContent = "Added to cart!";
    document.body.appendChild(toast);
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 2000);
  };

  const handleClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <motion.div
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer w-full sm:w-auto ${
        isHovered ? "transform scale-105" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      onClick={handleClick}
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <motion.img
          src={Array.isArray(image) ? image[0] : image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-20 dark:opacity-30"></div>
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-center justify-center gap-3 opacity-0 transition-opacity duration-300 dark:bg-gradient-to-t from-black/80 via-black/40 to-transparent"
          animate={{ opacity: isHovered ? 1 : 0 }}
        >
          <motion.button
            onClick={handleAddToCart}
            className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors group dark:bg-gray-700 dark:hover:bg-gray-600"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              className="w-5 h-5 text-gray-900 group-hover:text-purple-600 transition-colors dark:text-gray-100 dark:group-hover:text-purple-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </motion.button>
          <motion.button
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/product/${id}`);
            }}
            className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors group dark:bg-gray-700 dark:hover:bg-gray-600"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              className="w-5 h-5 text-gray-900 group-hover:text-purple-600 transition-colors dark:text-gray-100 dark:group-hover:text-purple-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </motion.button>
        </motion.div>
        {category && (
          <span className="absolute top-2 left-2 px-3 py-1 bg-white/95 text-xs font-medium rounded-full shadow-lg dark:bg-gray-700 dark:text-gray-100">
            {category}
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
          {name}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-2">
          ${price.toFixed(2)}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default ProductCard3D;
