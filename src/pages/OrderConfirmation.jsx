import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiOutlineCheck, HiOutlineShoppingBag, HiOutlineHome } from 'react-icons/hi';

const OrderConfirmation = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gray-50 pt-20 pb-12"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-sm p-8 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <HiOutlineCheck className="w-10 h-10 text-green-600" />
          </motion.div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Order Confirmed!
          </h1>
          <p className="text-gray-600 mb-8">
            Thank you for your purchase. Your order has been received and is being processed.
          </p>

          <div className="max-w-sm mx-auto bg-gray-50 rounded-xl p-6 mb-8">
            <div className="text-left space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">Order Number:</span>
                <span className="font-medium text-gray-900">#ORDER-{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">Date:</span>
                <span className="font-medium text-gray-900">{new Date().toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">Email:</span>
                <span className="font-medium text-gray-900">your.email@example.com</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/collection">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 py-3 bg-violet-600 text-white rounded-xl hover:bg-violet-700 transition-colors flex items-center justify-center space-x-2"
              >
                <HiOutlineShoppingBag className="w-5 h-5" />
                <span>Continue Shopping</span>
              </motion.button>
            </Link>
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 py-3 bg-gray-100 text-gray-900 rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2"
              >
                <HiOutlineHome className="w-5 h-5" />
                <span>Back to Home</span>
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default OrderConfirmation;
