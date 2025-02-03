import React, { useState, useContext, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import ProductCard3D from '../components/ProductCard3D';

const Collection = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { products } = useContext(ShopContext);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: '',
    priceRange: 'all',
    size: 'all',
    color: 'all',
    sort: 'newest'
  });
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  // Extract available filters from products
  const categories = [...new Set(products.map(p => p.category))];
  const colors = [...new Set(products.map(p => p.color))];
  const sizes = [...new Set(products.map(p => p.size))];
  const tags = [...new Set(products.flatMap(p => p.tags || []))];

  const priceRanges = [
    { label: 'All Prices', value: 'all' },
    { label: 'Under $50', value: '0-50' },
    { label: 'Under $100', value: '0-100' },
    { label: '$100 - $200', value: '100-200' },
    { label: 'Over $200', value: '200-up' }
  ];

  useEffect(() => {
    // Parse URL params
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get('category');
    if (categoryParam) {
      setFilters(prev => ({ ...prev, category: categoryParam }));
    }
  }, [location.search]);

  useEffect(() => {
    let filtered = [...products];

    // Apply category filter
    if (filters.category) {
      filtered = filtered.filter(p => p.category.toLowerCase() === filters.category.toLowerCase());
    }

    // Apply price range filter
    if (filters.priceRange !== 'all') {
      const [min, max] = filters.priceRange.split('-').map(Number);
      filtered = filtered.filter(p => {
        const price = Number(p.price);
        if (max) {
          return price >= min && price <= max;
        }
        return price >= min;
      });
    }

    // Apply size filter
    if (filters.size !== 'all') {
      filtered = filtered.filter(p => p.size === filters.size);
    }

    // Apply color filter
    if (filters.color !== 'all') {
      filtered = filtered.filter(p => p.color === filters.color);
    }

    // Apply tag filters
    if (selectedTags.length > 0) {
      filtered = filtered.filter(p =>
        selectedTags.every(tag => p.tags && p.tags.includes(tag))
      );
    }

    // Apply sorting
    switch (filters.sort) {
      case 'price-low':
        filtered.sort((a, b) => Number(a.price) - Number(b.price));
        break;
      case 'price-high':
        filtered.sort((a, b) => Number(b.price) - Number(a.price));
        break;
      case 'name-asc':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'newest':
      default:
        filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    setFilteredProducts(filtered);

    // Update URL params
    const params = new URLSearchParams();
    if (filters.category) params.set('category', filters.category);
    if (filters.priceRange !== 'all') params.set('price', filters.priceRange);
    if (filters.size !== 'all') params.set('size', filters.size);
    if (filters.color !== 'all') params.set('color', filters.color);
    if (selectedTags.length > 0) params.set('tags', selectedTags.join(','));
    navigate({ search: params.toString() }, { replace: true });
  }, [filters, products, selectedTags, navigate]);

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({ ...prev, [filterType]: value }));
  };

  const toggleTag = (tag) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const FilterButton = ({ label, active, onClick }) => (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${active
          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
        }`}
      onClick={onClick}
    >
      {label}
    </motion.button>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white dark:bg-gray-800">
        <div className="container mx-auto px-4 py-8 md:py-16">
          <h1 className="text-2xl md:text-5xl font-bold mb-2 md:mb-4 text-white dark:text-gray-100">Our Collection</h1>
          <p className="text-sm md:text-lg text-white/80 dark:text-gray-400">
            Discover our curated selection of premium fashion items
          </p>
        </div>
      </div>

      {/* Mobile Filter Bar */}
      <div className="sticky top-0 z-20 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-3">
            {/* Filter Button */}
            <button
              className="md:hidden flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center gap-2 text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
              {Object.values(filters).filter(f => f !== 'all' && f !== '').length > 0 ? 'Filters (Active)' : 'Filters'}
            </button>

            {/* Sort Dropdown */}
            <div className="flex-1">
              <select
                value={filters.sort}
                onChange={(e) => handleFilterChange('sort', e.target.value)}
                className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium"
              >
                <option value="newest">Newest First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to A</option>
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-1">
              <button
                className={`p-2 rounded-full ${viewMode === 'grid' ? 'bg-gray-200 dark:bg-gray-700' : 'bg-gray-100 dark:bg-gray-800'}`}
                onClick={() => setViewMode('grid')}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                className={`p-2 rounded-full ${viewMode === 'list' ? 'bg-gray-200 dark:bg-gray-700' : 'bg-gray-100 dark:bg-gray-800'}`}
                onClick={() => setViewMode('list')}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Active Filters */}
      <div className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-wrap gap-2">
            {filters.category && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100">
                {filters.category}
                <button
                  onClick={() => handleFilterChange('category', '')}
                  className="ml-1 hover:text-blue-900 dark:hover:text-blue-100"
                >
                  ×
                </button>
              </span>
            )}
            {filters.priceRange !== 'all' && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100">
                {priceRanges.find(r => r.value === filters.priceRange)?.label}
                <button
                  onClick={() => handleFilterChange('priceRange', 'all')}
                  className="ml-1 hover:text-green-900 dark:hover:text-green-100"
                >
                  ×
                </button>
              </span>
            )}
            {filters.size !== 'all' && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100">
                Size: {filters.size}
                <button
                  onClick={() => handleFilterChange('size', 'all')}
                  className="ml-1 hover:text-purple-900 dark:hover:text-purple-100"
                >
                  ×
                </button>
              </span>
            )}
            {selectedTags.map(tag => (
              <span key={tag} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300">
                {tag}
                <button
                  onClick={() => toggleTag(tag)}
                  className="ml-1 hover:text-gray-900 dark:hover:text-gray-300"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4 md:py-8">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {/* Mobile Filter Menu */}
          <AnimatePresence>
            {isFilterMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="fixed inset-0 z-30 md:hidden"
              >
                <div className="absolute inset-0 bg-black/50 dark:bg-black/50" onClick={() => setIsFilterMenuOpen(false)} />
                <div className="absolute inset-x-0 bottom-0 bg-white dark:bg-gray-800 rounded-t-3xl p-6 max-h-[85vh] overflow-y-auto">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Filters</h3>
                    <button
                      onClick={() => setIsFilterMenuOpen(false)}
                      className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="space-y-6">
                    {/* Categories */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3">Categories</h4>
                      <div className="flex flex-wrap gap-2">
                        {categories.map((category, index) => (
                          <FilterButton
                            key={index}
                            label={category}
                            active={filters.category === category}
                            onClick={() => handleFilterChange('category', category)}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Price Range */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3">Price Range</h4>
                      <div className="flex flex-wrap gap-2">
                        {priceRanges.map((range, index) => (
                          <FilterButton
                            key={index}
                            label={range.label}
                            active={filters.priceRange === range.value}
                            onClick={() => handleFilterChange('priceRange', range.value)}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Sizes */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3">Sizes</h4>
                      <div className="flex flex-wrap gap-2">
                        {sizes.map((size, index) => (
                          <FilterButton
                            key={index}
                            label={size}
                            active={filters.size === size}
                            onClick={() => handleFilterChange('size', size)}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Colors */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3">Colors</h4>
                      <div className="flex flex-wrap gap-3">
                        {colors.map((color, index) => (
                          <button
                            key={index}
                            className={`w-8 h-8 rounded-full relative ${
                              filters.color === color ? 'ring-2 ring-offset-2 ring-blue-500 dark:ring-blue-500' : ''
                            }`}
                            style={{ backgroundColor: color }}
                            onClick={() => handleFilterChange('color', color)}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Tags */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3">Tags</h4>
                      <div className="flex flex-wrap gap-2">
                        {tags.map((tag, index) => (
                          <FilterButton
                            key={index}
                            label={tag}
                            active={selectedTags.includes(tag)}
                            onClick={() => toggleTag(tag)}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex gap-3">
                    <button
                      onClick={() => {
                        setFilters({
                          category: '',
                          priceRange: 'all',
                          size: 'all',
                          color: 'all',
                          sort: 'newest'
                        });
                        setSelectedTags([]);
                        setIsFilterMenuOpen(false);
                      }}
                      className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-full text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      Clear All
                    </button>
                    <button
                      onClick={() => setIsFilterMenuOpen(false)}
                      className="flex-1 px-4 py-2 bg-black dark:bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-900 dark:hover:bg-gray-800"
                    >
                      Apply Filters
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Desktop Filters Sidebar */}
          <div className="hidden md:block w-64 space-y-6">
            {/* Categories */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Categories</h3>
              <div className="space-y-2">
                {categories.map((category, index) => (
                  <FilterButton
                    key={index}
                    label={category}
                    active={filters.category === category}
                    onClick={() => handleFilterChange('category', category)}
                  />
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Price Range</h3>
              <div className="space-y-2">
                {priceRanges.map((range, index) => (
                  <FilterButton
                    key={index}
                    label={range.label}
                    active={filters.priceRange === range.value}
                    onClick={() => handleFilterChange('priceRange', range.value)}
                  />
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Sizes</h3>
              <div className="flex flex-wrap gap-2">
                {sizes.map((size, index) => (
                  <FilterButton
                    key={index}
                    label={size}
                    active={filters.size === size}
                    onClick={() => handleFilterChange('size', size)}
                  />
                ))}
              </div>
            </div>

            {/* Colors */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Colors</h3>
              <div className="flex flex-wrap gap-2">
                {colors.map((color, index) => (
                  <div
                    key={index}
                    className={`w-8 h-8 rounded-full cursor-pointer border-2 ${filters.color === color ? 'border-blue-500 dark:border-blue-500' : 'border-transparent'
                      }`}
                    style={{ backgroundColor: color }}
                    onClick={() => handleFilterChange('color', color)}
                  />
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <FilterButton
                    key={index}
                    label={tag}
                    active={selectedTags.includes(tag)}
                    onClick={() => toggleTag(tag)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <motion.div
              layout
              className={`grid gap-3 md:gap-6 ${
                viewMode === 'grid'
                  ? 'grid-cols-2 md:grid-cols-2 lg:grid-cols-3'
                  : 'grid-cols-1'
              }`}
            >
              <AnimatePresence>
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ProductCard3D {...product} viewMode={viewMode} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12 md:py-16"
              >
                <div className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-4 md:mb-6 text-gray-300 dark:text-gray-600">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  No products found
                </h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                  Try adjusting your filters or search terms
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
