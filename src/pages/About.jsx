import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineUsers, HiOutlineLightBulb, HiOutlineHeart, HiOutlineBadgeCheck } from 'react-icons/hi';

const About = () => {
  const features = [
    {
      icon: <HiOutlineUsers className="w-6 h-6" />,
      title: 'Customer First',
      description: "We prioritize our customers' needs and satisfaction above all else."
    },
    {
      icon: <HiOutlineLightBulb className="w-6 h-6" />,
      title: 'Innovation',
      description: 'Constantly evolving and bringing the latest trends to our customers.'
    },
    {
      icon: <HiOutlineHeart className="w-6 h-6" />,
      title: 'Quality',
      description: 'Only the finest materials and craftsmanship make it to our shelves.'
    },
    {
      icon: <HiOutlineBadgeCheck className="w-6 h-6" />,
      title: 'Trust',
      description: 'Building lasting relationships through transparency and reliability.'
    }
  ];

  const team = [
    {
      name: 'Ali Hassan',
      role: 'Founder & CEO',
      image: '/src/assets/frontend_assets/Admin img.jpeg'
    },
    {
      name: 'Michael Chen',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3'
    },
    {
      name: 'Emma Davis',
      role: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background with gradient and noise */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 dark:from-violet-800 dark:via-purple-800 dark:to-indigo-900">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        </div>

        {/* Animated shapes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-1/4 -left-12 w-48 md:w-64 h-48 md:h-64 bg-violet-500 rounded-full blur-3xl dark:bg-violet-800"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse", delay: 0.3 }}
          className="absolute bottom-1/4 -right-12 w-48 md:w-64 h-48 md:h-64 bg-indigo-500 rounded-full blur-3xl dark:bg-indigo-900"
        />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 text-center md:text-left"
            >
              <h1 className="text-3xl md:text-6xl font-bold text-white dark:text-gray-100 mb-4 md:mb-6">
                Our Story of
                <span className="block mt-1 md:mt-2 bg-gradient-to-r from-pink-200 to-indigo-200 bg-clip-text text-transparent dark:text-transparent">
                  Fashion Excellence
                </span>
              </h1>
              <p className="text-base md:text-xl text-gray-200 dark:text-gray-400 mb-6 md:mb-8 max-w-2xl">
                Since 2020, we've been redefining fashion with a perfect blend of style, comfort, and sustainability. 
                Join us in our journey to make fashion more accessible and sustainable.
              </p>
              <div className="flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-full border border-white/20 text-white dark: text-gray-100 hover:bg-opacity-20 transition-all"
                >
                  Meet Our Team
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-white rounded-full text-violet-600 dark:text-violet-400 text-sm md:text-base hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                >
                  Our Mission
                </motion.button>
              </div>
            </motion.div>

            {/* Image/Visual Content */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 relative max-w-sm md:max-w-lg mx-auto"
            >
              <div className="relative w-full aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-400 to-indigo-400 rounded-full blur-3xl opacity-30 dark:from-violet-600 dark:to-indigo-600"></div>
                <img
                  src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Fashion Excellence"
                  className="relative z-10 w-full h-full object-cover rounded-3xl border-2 md:border-4 border-white/20 dark:border-gray-600 shadow-2xl"
                />
                <motion.div
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                  className="absolute inset-0 border border-dashed border-white/20 dark:border-gray-600 rounded-3xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">Our Values</h2>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-gray-600 dark:text-gray-400">The principles that guide everything we do</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark:from-violet-800 dark:to-indigo-900"></div>
              <div className="relative p-6 md:p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg group-hover:bg-transparent transition-colors duration-300">
                <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 group-hover:bg-white/10 dark:group-hover:bg-gray-900/10 group-hover:text-white dark:group-hover:text-gray-100 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-white dark:group-hover:text-gray-100 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm md:text-base text-gray-600 dark:text-gray-400 group-hover:text-gray-200 dark:group-hover:text-gray-500 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 md:py-24 bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-900 relative overflow-hidden dark:bg-gradient-to-br from-violet-800 via-purple-800 to-indigo-800">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8 md:mb-16"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-white dark:text-gray-100">Meet Our Team</h2>
            <p className="mt-3 md:mt-4 text-base md:text-lg text-gray-300 dark:text-gray-500">The passionate people behind our success</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="relative group"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm p-4 md:p-8">
                  <div className="aspect-w-1 aspect-h-1 mb-4 md:mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-white dark:text-gray-100">{member.name}</h3>
                  <p className="mt-1 text-sm md:text-base text-gray-300 dark:text-gray-500">{member.role}</p>
                  <div className="mt-4 flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href="#" className="text-white dark:text-gray-400 hover:text-gray-300 dark:hover:text-gray-500">
                      <span className="sr-only">Twitter</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href="#" className="text-white dark:text-gray-400 hover:text-gray-300 dark:hover:text-gray-500">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
