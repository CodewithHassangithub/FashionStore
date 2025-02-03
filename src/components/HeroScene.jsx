import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const FloatingCard = ({ className, children, delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{
        scale: 1.05,
        rotateY: 10,
        z: 50,
        transition: { duration: 0.2 },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`relative transform perspective-1000 ${className}`}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {children}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg"
          style={{ transform: "translateZ(-10px)" }}
        />
      )}
    </motion.div>
  );
};

const HeroScene = () => {
  return (
    <div className="relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Animated Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </motion.div>

      {/* 3D Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 transform rotate-45 scale-150" />

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <motion.h1 className="text-6xl md:text-8xl font-bold relative z-10">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 inline-block transform hover:scale-105 transition-transform duration-300">
                  Fashion
                </span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 inline-block transform hover:scale-105 transition-transform duration-300">
                  That Speaks
                </span>
              </motion.h1>
              <div className="absolute -inset-4 bg-white/50 blur-xl rounded-full opacity-50 z-0" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 max-w-lg font-light"
            >
              Discover our curated collection of premium fashion items that
              define your unique style and personality.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-6 justify-center md:justify-start"
            >
              <Link
                to="/collection"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden"
              >
                <span className="relative z-10">Shop Now</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse" />
                </div>
              </Link>
              <Link
                to="/about"
                className="group relative px-8 py-4 bg-white text-blue-600 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden"
              >
                <span className="relative z-10">Learn More</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - 3D Cards */}
          <div className="relative hidden md:block h-[600px]">
            <FloatingCard
              className="absolute top-20 left-10 w-64 h-80 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl shadow-2xl"
              delay={0.2}
            >
              <div className="p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Premium Quality</h3>
                <p className="text-sm opacity-80">
                  Crafted with attention to detail
                </p>
              </div>
            </FloatingCard>

            <FloatingCard
              className="absolute top-40 right-10 w-72 h-96 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl shadow-2xl"
              delay={0.4}
            >
              <div className="p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Latest Trends</h3>
                <p className="text-sm opacity-80">Stay ahead in fashion</p>
              </div>
            </FloatingCard>

            <FloatingCard
              className="absolute bottom-20 left-20 w-80 h-72 bg-gradient-to-br from-pink-400 to-red-400 rounded-2xl shadow-2xl"
              delay={0.6}
            >
              <div className="p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Unique Style</h3>
                <p className="text-sm opacity-80">Express yourself</p>
              </div>
            </FloatingCard>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl" />

      {/* Bottom Wave with 3D Effect */}
      <div className="absolute bottom-0 left-0 right-0 transform-gpu">
        <svg
          viewBox="0 0 1440 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
          style={{ filter: "drop-shadow(0px -4px 16px rgba(0,0,0,0.1))" }}
        >
          <path
            d="M0 0L48 26.7C96 53.3 192 107 288 124C384 141 480 124 576 106.7C672 89.3 768 71 864 71C960 71 1056 89 1152 89C1248 89 1344 71 1392 62L1440 53V200H1392C1344 200 1248 200 1152 200C1056 200 960 200 864 200C768 200 672 200 576 200C480 200 384 200 288 200C192 200 96 200 48 200H0V0Z"
            fill="white"
            className="transform hover:scale-105 transition-transform duration-500"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeroScene;
