import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';

const Orders = () => {
  const { products, currency } = useContext(ShopContext);

  return (
    <div className="border-t pt-16 font-poppins bg-gray-50">
      {/* Page Title */}
      <div className="text-2xl mb-6 text-center">
        <Title text1="MY" text2="ORDERS" />
      </div>

      {/* Orders Container */}
      <div className="max-w-5xl mx-auto">
        {products.slice(1, 4).map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-sm rounded-lg p-6 mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
          >
            {/* Product Details */}
            <div className="flex items-start gap-6">
              <img
                src={item.image[0]}
                className="w-20 sm:w-24 rounded-md object-cover"
                alt={item.name}
              />
              <div>
                <p className="text-lg font-semibold text-gray-800">{item.name}</p>
                <div className="flex items-center gap-3 mt-2 text-gray-600">
                  <p className="text-lg font-medium">
                    {currency}
                    {item.price}
                  </p>
                  <p className="text-sm">Quantity: 1</p>
                  <p className="text-sm">Size: M</p>
                </div>
                <p className="mt-3 text-sm text-gray-500">
                  Date: <span className="text-gray-400">7/7/2024</span>
                </p>
              </div>
            </div>

            {/* Order Status & Actions */}
            <div className="flex flex-col md:flex-row md:items-center justify-between w-full md:w-auto gap-4">
              {/* Order Status */}
              <div className="flex items-center gap-2 text-green-500 mb-3 md:mb-0">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <p className="text-sm font-medium text-gray-700">Ready to Ship</p>
              </div>

              {/* Action Button */}
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md text-sm font-medium">
                TRACK ORDER
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
