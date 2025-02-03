import React, { useEffect, useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { ShopContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';
import { HiOutlineShoppingBag, HiOutlineTrash, HiOutlineArrowLeft, HiOutlineShieldCheck } from 'react-icons/hi';

const Cart = () => {
  const { products = [], currency = '$', cartItems = {}, updateQuantity, getTotalCartAmount } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  const navigate = useNavigate();
  const totalAmount = getTotalCartAmount();

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 pb-12 font-poppins"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <HiOutlineArrowLeft className="w-5 h-5 mr-2" />
            Continue Shopping
          </button>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Shopping Cart</h1>
        </div>

        {cartData.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16 bg-white dark:bg-gray-800 rounded-2xl shadow-sm"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="w-24 h-24 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <HiOutlineShoppingBag className="w-12 h-12 text-violet-600" />
            </motion.div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Your cart is empty</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Looks like you haven't added anything to your cart yet
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/collection')}
              className="px-8 py-3 bg-violet-600 text-white rounded-full hover:bg-violet-700 transition-colors inline-flex items-center"
            >
              Explore Collection
            </motion.button>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartData.map((item, index) => {
                const productData = products.find((product) => product._id === item._id);
                if (!productData) return null;

                return (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="p-6 flex items-center gap-6">
                      <div className="relative group w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                        {productData.image && (
                          <img
                            src={productData.image[0]}
                            alt={productData.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        )}
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {productData.name}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Size: {item.size}</p>
                        <div className="flex items-center justify-between">
                          <p className="text-lg font-medium text-violet-600">
                            {currency}{(productData.price * item.quantity).toFixed(2)}
                          </p>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center border border-gray-200 rounded-full">
                              <button
                                onClick={() => updateQuantity(item._id, item.size, item.quantity - 1)}
                                className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-violet-600 transition-colors"
                              >
                                -
                              </button>
                              <span className="w-8 text-center text-gray-900 dark:text-white">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item._id, item.size, item.quantity + 1)}
                                className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-violet-600 transition-colors"
                              >
                                +
                              </button>
                            </div>
                            <button
                              onClick={() => updateQuantity(item._id, item.size, 0)}
                              className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                            >
                              <HiOutlineTrash className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 sticky top-24"
              >
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Order Summary</h2>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-600 dark:text-gray-400">
                    <span>Subtotal</span>
                    <span>{currency}{totalAmount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600 dark:text-gray-400">
                    <span>Shipping</span>
                    <span className="text-green-600">Free</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between text-lg font-semibold text-gray-900 dark:text-white">
                      <span>Total</span>
                      <span>{currency}{totalAmount.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleCheckout}
                  className="w-full py-4 bg-violet-600 text-white rounded-xl hover:bg-violet-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Proceed to Checkout</span>
                  <HiOutlineShieldCheck className="w-5 h-5" />
                </motion.button>
                <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
                  Secure checkout powered by Stripe
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Cart;
