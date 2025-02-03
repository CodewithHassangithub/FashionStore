import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { HiOutlineShoppingBag, HiOutlineArrowRight, HiOutlineStar } from 'react-icons/hi';
import ProductCard3D from '../components/ProductCard3D';

const Home = () => {
  const { products } = useContext(ShopContext);
  const featuredProducts = products?.slice(0, 6) || [];

  const stats = [
    { id: 'stat-1', label: "Happy Customers", value: "5000+" },
    { id: 'stat-2', label: "Products Available", value: "1000+" },
    { id: 'stat-3', label: "Countries Served", value: "50+" }
  ];

  const categories = [
    {
      id: 'cat-1',
      name: 'New Arrivals',
      image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b',
      color: 'from-pink-500/80 to-purple-700/80'
    },
    {
      id: 'cat-2',
      name: 'Best Sellers',
      image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04',
      color: 'from-blue-500/80 to-indigo-700/80'
    },
    {
      id: 'cat-3',
      name: 'Trending Now',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050',
      color: 'from-emerald-500/80 to-teal-700/80'
    }
  ];

  return (
    <div className="space-y-16 md:space-y-24 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] md:min-h-screen overflow-hidden bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-900 via-purple-900 to-indigo-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 animate-grain"></div>
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.4 }}
            transition={{ duration: 1.5 }}
            className="absolute top-20 right-20 w-64 md:w-96 h-64 md:h-96 bg-purple-500 rounded-full filter blur-3xl dark:bg-gray-500"
          ></motion.div>
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="absolute -bottom-20 -left-20 w-64 md:w-96 h-64 md:h-96 bg-indigo-500 rounded-full filter blur-3xl dark:bg-gray-600"
          ></motion.div>
        </div>

        {/* Mobile Hero Content */}
        <div className="relative z-10 md:hidden">
          <div className="min-h-[85vh] flex flex-col justify-center px-4 py-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 w-fit dark:bg-gray-800/20 dark:border-gray-700/20"
            >
              <HiOutlineStar className="w-4 h-4 text-yellow-400" />
              <span className="ml-2 text-white text-xs dark:text-gray-300">Premium Quality</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-4 text-3xl font-bold"
            >
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200 dark:from-gray-300 dark:to-gray-500">
                Discover Your
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-white mt-1 dark:from-gray-500 dark:to-gray-300">
                Perfect Style
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-3 text-base text-gray-300 dark:text-gray-500"
            >
              Explore our curated collection of trendy fashion items
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-6 flex flex-col gap-3"
            >
              <Link
                to="/collection"
                className="inline-flex items-center justify-center px-5 py-2.5 bg-white text-gray-900 rounded-full font-medium text-sm hover:bg-gray-100 transition-all group dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                Shop Now
                <HiOutlineShoppingBag className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/collection"
                className="inline-flex items-center justify-center px-5 py-2.5 border border-white/30 text-white rounded-full font-medium text-sm hover:bg-white/10 transition-all group dark:border-gray-700/20 dark:text-gray-300 dark:hover:bg-gray-800/20"
              >
                Explore Collection
                <HiOutlineArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Mobile Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-8 grid grid-cols-3 gap-2 border-t border-white/10 pt-6 dark:border-gray-700/20"
            >
              {stats.map((stat) => (
                <div key={stat.id} className="text-center">
                  <div className="text-lg font-bold text-white dark:text-gray-300">{stat.value}</div>
                  <div className="text-xs text-gray-400 dark:text-gray-500">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Desktop Hero Content */}
        <div className="hidden md:block">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 animate-grain"></div>
            <motion.div
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.4 }}
              transition={{ duration: 1.5 }}
              className="absolute top-20 right-20 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl dark:bg-gray-500"
            ></motion.div>
            <motion.div
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.3 }}
              transition={{ duration: 1.5, delay: 0.2 }}
              className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl dark:bg-gray-600"
            ></motion.div>
          </div>

          {/* Content Container */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 dark:bg-gray-800/20 dark:border-gray-700/20"
                  >
                    <HiOutlineStar className="w-5 h-5 text-yellow-400" />
                    <span className="ml-2 text-white text-sm dark:text-gray-300">Premium Quality Products</span>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-5xl md:text-7xl font-bold"
                  >
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200 dark:from-gray-300 dark:to-gray-500">
                      Discover Your
                    </span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-white mt-2 dark:from-gray-500 dark:to-gray-300">
                      Perfect Style
                    </span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-lg md:text-xl text-gray-300 dark:text-gray-500"
                  >
                    Explore our curated collection of premium fashion, electronics, and lifestyle products designed to elevate your everyday experience.
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Link
                    to="/collection"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-all hover:shadow-xl hover:scale-105 transform group dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                  >
                    Shop Now
                    <HiOutlineShoppingBag className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/collection"
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all group dark:border-gray-700/20 dark:text-gray-300 dark:hover:bg-gray-800/20"
                  >
                    Explore Collection
                    <HiOutlineArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10 dark:border-gray-700/20"
                >
                  {[
                    { label: 'Products', value: '500+' },
                    { label: 'Brands', value: '150+' },
                    { label: 'Customers', value: '50k+' },
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-white dark:text-gray-300">{stat.value}</div>
                      <div className="text-sm text-gray-400 dark:text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Right Column - Featured Products Grid */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hidden lg:grid grid-cols-2 gap-6"
              >
                {[
                  'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3',
                  'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?ixlib=rb-4.0.3',
                  'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3',
                  'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3'
                ].map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className={`relative group overflow-hidden rounded-2xl ${index === 0 ? 'row-span-2' : ''
                      }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <img
                      src={image}
                      alt={`Featured product ${index + 1}`}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Bottom Gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent dark:from-gray-900 dark:to-transparent"></div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-8 md:py-24">
        <div className="px-4 md:px-8 max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Featured Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
            {featuredProducts.map((product) => (
              <ProductCard3D key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-8 md:py-24 bg-gray-50 dark:bg-gray-800/50">
        <div className="px-4 md:px-8 max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/collection?category=${category.name}`}
                className="relative overflow-hidden rounded-lg aspect-square group"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 flex items-end p-4">
                  <span className="text-white font-medium text-sm md:text-base">{category.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden dark:bg-gray-900">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                className="backdrop-blur-xl bg-white/10 p-8 rounded-2xl border border-white/10 dark:bg-gray-800/20 dark:border-gray-700/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
              >
                <div className="text-4xl font-bold text-white mb-2 dark:text-gray-300">
                  {stat.value}
                </div>
                <div className="text-gray-300 dark:text-gray-500">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-900 relative overflow-hidden dark:bg-gray-900">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold text-white dark:text-gray-300">Stay Updated</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto dark:text-gray-500">
              Subscribe to our newsletter for exclusive offers, new arrivals, and fashion inspiration
            </p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 focus:outline-none focus:border-white/40 placeholder-white/60 flex-1 dark:bg-gray-800/20 dark:border-gray-700/20 dark:placeholder-gray-500/60"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-all hover:shadow-xl dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
