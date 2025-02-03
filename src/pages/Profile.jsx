import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  HiOutlineShoppingBag, 
  HiOutlineCog, 
  HiOutlineHeart,
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLogout,
  HiCamera
} from 'react-icons/hi';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('orders');

  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 234 567 890',
    address: '123 Fashion Street, Style City, SC 12345',
    avatar: '/src/assets/frontend_assets/Admin img.jpeg'
  };

  const orders = [
    {
      id: 1,
      date: '2025-01-20',
      status: 'Delivered',
      total: 299.99,
      items: 3
    },
    {
      id: 2,
      date: '2025-01-15',
      status: 'In Transit',
      total: 199.99,
      items: 2
    }
  ];

  const wishlist = [
    {
      id: 1,
      name: 'Premium Leather Jacket',
      price: 299.99,
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 2,
      name: 'Designer Sunglasses',
      price: 149.99,
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
    }
  ];

  const tabs = [
    {
      id: 'orders',
      name: 'Orders',
      icon: HiOutlineShoppingBag
    },
    {
      id: 'wishlist',
      name: 'Wishlist',
      icon: HiOutlineHeart
    },
    {
      id: 'settings',
      name: 'Settings',
      icon: HiOutlineCog
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Profile Header */}
      <div className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="relative">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-24 md:w-32 h-24 md:h-32 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <button className="absolute bottom-0 right-0 bg-violet-600 text-white p-1.5 md:p-2 rounded-full hover:bg-violet-700 transition-colors">
                <HiCamera className="w-4 md:w-5 h-4 md:h-5" />
              </button>
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{user.name}</h1>
              <p className="text-sm md:text-base text-gray-500 dark:text-gray-400">{user.email}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl shadow-lg">
          {/* Tabs */}
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="flex overflow-x-auto" aria-label="Tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-none px-4 md:px-6 py-3 md:py-4 text-sm md:text-base font-medium border-b-2 whitespace-nowrap ${
                    tab.id === activeTab
                      ? 'border-violet-500 text-violet-600'
                      : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <tab.icon className="w-5 md:w-6 h-5 md:h-6 mr-2" />
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Panels */}
          <div className="p-4 md:p-6 lg:p-8">
            {/* Profile Settings */}
            {activeTab === 'settings' && (
              <div className="max-w-2xl mx-auto space-y-6 md:space-y-8">
                <div>
                  <h3 className="text-lg md:text-xl font-medium text-gray-900 dark:text-white mb-4 md:mb-6">Profile Settings</h3>
                  <div className="space-y-4 md:space-y-6">
                    <div>
                      <label className="block text-sm md:text-base font-medium text-gray-700 dark:text-gray-300 mb-1 md:mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm md:text-base font-medium text-gray-700 dark:text-gray-300 mb-1 md:mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm md:text-base font-medium text-gray-700 dark:text-gray-300 mb-1 md:mb-2">
                        Bio
                      </label>
                      <textarea
                        rows="4"
                        className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent resize-none"
                        placeholder="Tell us about yourself..."
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-medium text-gray-900 dark:text-white mb-4 md:mb-6">Password</h3>
                  <div className="space-y-4 md:space-y-6">
                    <div>
                      <label className="block text-sm md:text-base font-medium text-gray-700 dark:text-gray-300 mb-1 md:mb-2">
                        Current Password
                      </label>
                      <input
                        type="password"
                        className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm md:text-base font-medium text-gray-700 dark:text-gray-300 mb-1 md:mb-2">
                        New Password
                      </label>
                      <input
                        type="password"
                        className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm md:text-base font-medium text-gray-700 dark:text-gray-300 mb-1 md:mb-2">
                        Confirm New Password
                      </label>
                      <input
                        type="password"
                        className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end space-x-4">
                  <button className="px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-medium text-gray-700 hover:text-gray-800">
                    Cancel
                  </button>
                  <button className="px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-medium text-white bg-violet-600 rounded-lg hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2">
                    Save Changes
                  </button>
                </div>
              </div>
            )}

            {/* Orders */}
            {activeTab === 'orders' && (
              <div className="space-y-6 md:space-y-8">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead>
                      <tr>
                        <th className="px-4 md:px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">
                          Order ID
                        </th>
                        <th className="px-4 md:px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">
                          Date
                        </th>
                        <th className="px-4 md:px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">
                          Status
                        </th>
                        <th className="px-4 md:px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">
                          Total
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                      {orders.map((order) => (
                        <tr key={order.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                          <td className="px-4 md:px-6 py-3 md:py-4 whitespace-nowrap text-sm md:text-base text-gray-900 dark:text-white">
                            #{order.id}
                          </td>
                          <td className="px-4 md:px-6 py-3 md:py-4 whitespace-nowrap text-sm md:text-base text-gray-500 dark:text-gray-400">
                            {order.date}
                          </td>
                          <td className="px-4 md:px-6 py-3 md:py-4 whitespace-nowrap">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs md:text-sm font-medium ${
                              order.status === 'Delivered'
                                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                                : order.status === 'Processing'
                                ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                                : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                            }`}>
                              {order.status}
                            </span>
                          </td>
                          <td className="px-4 md:px-6 py-3 md:py-4 whitespace-nowrap text-sm md:text-base text-gray-900 dark:text-white">
                            ${order.total}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
