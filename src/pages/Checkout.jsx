import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { HiOutlineShieldCheck, HiOutlineCreditCard, HiOutlineTruck, HiOutlineCheck } from 'react-icons/hi';

const steps = [
  { id: 'shipping', name: 'Shipping', icon: HiOutlineTruck },
  { id: 'payment', name: 'Payment', icon: HiOutlineCreditCard },
  { id: 'confirmation', name: 'Confirmation', icon: HiOutlineCheck },
];

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState('shipping');
  const [formData, setFormData] = useState({
    shipping: {
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      city: '',
      country: '',
      postalCode: '',
      phone: '',
    },
    payment: {
      cardNumber: '',
      cardName: '',
      expiry: '',
      cvv: '',
    },
  });

  const { getTotalCartAmount, clearCart } = useContext(ShopContext);
  const navigate = useNavigate();
  const totalAmount = getTotalCartAmount();

  const handleInputChange = (step, field, value) => {
    setFormData(prev => ({
      ...prev,
      [step]: {
        ...prev[step],
        [field]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentStep === 'shipping') {
      setCurrentStep('payment');
    } else if (currentStep === 'payment') {
      setCurrentStep('confirmation');
      // Here you would typically process the payment
      clearCart();
      setTimeout(() => {
        navigate('/order-confirmation');
      }, 2000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 pb-12 font-poppins"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Checkout</h1>

        <div className="flex mb-6">
          {steps.map((step) => (
            <div key={step.id} className={`flex items-center mr-6 ${currentStep === step.id ? 'text-blue-600' : 'text-gray-500 dark:text-gray-400'}`}> 
              <step.icon className="w-6 h-6 mr-2" />
              <span>{step.name}</span>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          {currentStep === 'shipping' && (
            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Shipping Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white-700 mb-2">First Name</label>
                  <input
                    type="text"
                    required
                    value={formData.shipping.firstName}
                    onChange={(e) => handleInputChange('shipping', 'firstName', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-violet-600 focus:border-transparent transition-colors bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    required
                    value={formData.shipping.lastName}
                    onChange={(e) => handleInputChange('shipping', 'lastName', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-violet-600 focus:border-transparent transition-colors bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white-700 mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.shipping.email}
                  onChange={(e) => handleInputChange('shipping', 'email', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-violet-600 focus:border-transparent transition-colors bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white-700 mb-2">Address</label>
                <input
                  type="text"
                  required
                  value={formData.shipping.address}
                  onChange={(e) => handleInputChange('shipping', 'address', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-violet-600 focus:border-transparent transition-colors bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white-700 mb-2">City</label>
                  <input
                    type="text"
                    required
                    value={formData.shipping.city}
                    onChange={(e) => handleInputChange('shipping', 'city', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-violet-600 focus:border-transparent transition-colors bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white-700 mb-2">Country</label>
                  <input
                    type="text"
                    required
                    value={formData.shipping.country}
                    onChange={(e) => handleInputChange('shipping', 'country', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-violet-600 focus:border-transparent transition-colors bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white-700 mb-2">Postal Code</label>
                  <input
                    type="text"
                    required
                    value={formData.shipping.postalCode}
                    onChange={(e) => handleInputChange('shipping', 'postalCode', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-violet-600 focus:border-transparent transition-colors bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white-700 mb-2">Phone</label>
                <input
                  type="tel"
                  required
                  value={formData.shipping.phone}
                  onChange={(e) => handleInputChange('shipping', 'phone', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-violet-600 focus:border-transparent transition-colors bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-violet-600 text-white rounded-xl hover:bg-violet-700 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Continue to Payment</span>
                <HiOutlineCreditCard className="w-5 h-5" />
              </motion.button>
            </div>
          )}
          {currentStep === 'payment' && (
            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Payment Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  placeholder="Card Number"
                  value={formData.payment.cardNumber}
                  onChange={(e) => handleInputChange('payment', 'cardNumber', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-violet-600 focus:border-transparent transition-colors bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                />
                <input
                  type="text"
                  required
                  placeholder="Card Name"
                  value={formData.payment.cardName}
                  onChange={(e) => handleInputChange('payment', 'cardName', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-violet-600 focus:border-transparent transition-colors bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                />
                <input
                  type="text"
                  required
                  placeholder="Expiry"
                  value={formData.payment.expiry}
                  onChange={(e) => handleInputChange('payment', 'expiry', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-violet-600 focus:border-transparent transition-colors bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                />
                <input
                  type="text"
                  required
                  placeholder="CVV"
                  value={formData.payment.cvv}
                  onChange={(e) => handleInputChange('payment', 'cvv', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-violet-600 focus:border-transparent transition-colors bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-violet-600 text-white rounded-xl hover:bg-violet-700 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Continue to Confirmation</span>
                <HiOutlineShieldCheck className="w-5 h-5" />
              </motion.button>
            </div>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default Checkout;
