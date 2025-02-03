import React, { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShopContext } from '../context/ShopContext';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, addToCart } = useContext(ShopContext);
  const [selectedColor, setSelectedColor] = useState('black');
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedImage, setSelectedImage] = useState(0);

  const product = products?.find(p => p.id === id);

  useEffect(() => {
    if (!product && products?.length > 0) {
      navigate('/');
    }
  }, [product, products, navigate]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-2xl text-gray-600 dark:text-gray-400">Loading...</div>
      </div>
    );
  }

  const colors = ['black', 'white', 'gray', 'navy', 'brown'];
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  const handleAddToCart = () => {
    addToCart({
      ...product,
      color: selectedColor,
      size: selectedSize,
      quantity: 1
    });

    const toast = document.createElement('div');
    toast.className = 'fixed bottom-4 right-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-xl shadow-lg z-50 dark:bg-gradient-to-r dark:from-purple-700 dark:to-indigo-700';
    toast.textContent = 'Added to cart!';
    document.body.appendChild(toast);
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Image Gallery */}
            <div className="space-y-4">
              <motion.div 
                className="aspect-square rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <img
                  src={product.image[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="grid grid-cols-4 gap-4">
                {product.image.map((img, index) => (
                  <motion.button
                    key={index}
                    className={`aspect-square rounded-lg overflow-hidden ${
                      selectedImage === index ? 'ring-2 ring-purple-600 dark:ring-purple-700' : ''
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img
                      src={img}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              <div>
                <motion.h1 
                  className="text-4xl font-bold text-gray-900 dark:text-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {product.name}
                </motion.h1>
                <motion.div 
                  className="mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:bg-gradient-to-r dark:from-purple-700 dark:to-indigo-700">
                    ${product.price.toFixed(2)}
                  </span>
                </motion.div>
              </div>

              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-gray-200">Description</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">{product.description}</p>
                </div>

                {/* Color Selection */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-gray-200">Color</h3>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {colors.map((color) => (
                      <motion.button
                        key={color}
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          selectedColor === color
                            ? 'ring-2 ring-purple-600 dark:ring-purple-700 ring-offset-2'
                            : ''
                        }`}
                        style={{ backgroundColor: color }}
                        onClick={() => setSelectedColor(color)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      />
                    ))}
                  </div>
                </div>

                {/* Size Selection */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-gray-200">Size</h3>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {sizes.map((size) => (
                      <motion.button
                        key={size}
                        className={`px-4 py-2 rounded-full text-sm font-medium ${
                          selectedSize === size
                            ? 'bg-purple-600 dark:bg-purple-700 text-white'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
                        }`}
                        onClick={() => setSelectedSize(size)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {size}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Add to Cart Button */}
                <motion.button
                  className="w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 dark:bg-gradient-to-r dark:from-purple-700 dark:to-indigo-700 text-white rounded-full font-semibold hover:shadow-lg transform transition-all hover:scale-105"
                  onClick={handleAddToCart}
                  whileTap={{ scale: 0.95 }}
                >
                  Add to Cart
                </motion.button>

                {/* Additional Info */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-6 space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 dark:text-gray-200">Features</h3>
                    <ul className="mt-2 list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-1">
                      <li>Premium quality materials</li>
                      <li>Ethically manufactured</li>
                      <li>Free shipping on orders over $100</li>
                      <li>30-day return policy</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">You may also like</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {products
              ?.filter(p => p.id !== id)
              .slice(0, 4)
              .map((relatedProduct) => (
                <motion.div
                  key={relatedProduct.id}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden cursor-pointer"
                  whileHover={{ y: -5 }}
                  onClick={() => navigate(`/product/${relatedProduct.id}`)}
                >
                  <div className="aspect-square">
                    <img
                      src={relatedProduct.image[0]}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-gray-900 dark:text-gray-200">{relatedProduct.name}</h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">${relatedProduct.price.toFixed(2)}</p>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
