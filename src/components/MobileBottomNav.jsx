import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { BiCategory } from "react-icons/bi";

const MobileBottomNav = () => {
  const location = useLocation();

  const getActiveClass = (path) => {
    return location.pathname === path
      ? "text-blue-600 scale-110 transition-transform"
      : "text-gray-500";
  };

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-lg md:hidden z-50">
      <div className="flex justify-around items-center h-16 px-2">
        <Link
          to="/"
          className={`flex flex-col items-center space-y-1 w-16 py-1 ${getActiveClass(
            "/"
          )}`}
        >
          <AiOutlineHome className="text-2xl" />
          <span className="text-[10px] font-medium">Home</span>
        </Link>

        <Link
          to="/collection"
          className={`flex flex-col items-center space-y-1 w-16 py-1 ${getActiveClass(
            "/collection"
          )}`}
        >
          <BiCategory className="text-2xl" />
          <span className="text-[10px] font-medium">Collections</span>
        </Link>

        <Link
          to="/cart"
          className={`flex flex-col items-center space-y-1 w-16 py-1 ${getActiveClass(
            "/cart"
          )}`}
        >
          <AiOutlineShoppingCart className="text-2xl" />
          <span className="text-[10px] font-medium">Cart</span>
        </Link>

        <Link
          to="/profile"
          className={`flex flex-col items-center space-y-1 w-16 py-1 ${getActiveClass(
            "/profile"
          )}`}
        >
          <AiOutlineUser className="text-2xl" />
          <span className="text-[10px] font-medium">Profile</span>
        </Link>
      </div>
    </nav>
  );
};

export default MobileBottomNav;
