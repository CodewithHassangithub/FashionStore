import React, { createContext, useState, useEffect } from 'react';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  return cart;
};

// Clothing category
const clothingProducts = [
  {
    id: '1',
    name: 'Classic White Tee',
    price: 29.99,
    description: 'Essential cotton t-shirt perfect for everyday wear',
    image: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3'
    ],
    category: 'Clothing'
  },
  {
    id: '2',
    name: 'Slim Fit Jeans',
    price: 79.99,
    description: 'Modern slim fit jeans with perfect stretch',
    image: [
      'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1475178626620-a4d074967452?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-4.0.3'
    ],
    category: 'Clothing'
  },
  {
    id: '3',
    name: 'Leather Jacket',
    price: 199.99,
    description: 'Premium leather jacket with modern design',
    image: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1520975954732-35dd22299614?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1559551409-dadc959f76b8?ixlib=rb-4.0.3'
    ],
    category: 'Clothing'
  }
];

// Accessories category
const accessoryProducts = [
  {
    id: '4',
    name: 'Designer Sunglasses',
    price: 159.99,
    description: 'Premium UV protection sunglasses with modern design',
    image: [
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1508296695146-257a814070b4?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3'
    ],
    category: 'Accessories'
  },
  {
    id: '5',
    name: 'Leather Watch',
    price: 299.99,
    description: 'Classic leather strap watch with modern features',
    image: [
      'https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixlib=rb-4.0.3'
    ],
    category: 'Accessories'
  },
  {
    id: '6',
    name: 'Leather Wallet',
    price: 79.99,
    description: 'Premium leather wallet with multiple card slots',
    image: [
      'https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1606503825008-909a67e63c3d?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1606503825008-909a67e63c3d?ixlib=rb-4.0.3'
    ],
    category: 'Accessories'
  }
];

// Electronics category
const electronicProducts = [
  {
    id: '7',
    name: 'Wireless Headphones',
    price: 199.99,
    description: 'Premium noise-canceling wireless headphones',
    image: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3'
    ],
    category: 'Electronics'
  },
  {
    id: '8',
    name: 'Smart Watch',
    price: 299.99,
    description: 'Advanced smartwatch with health tracking',
    image: [
      'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?ixlib=rb-4.0.3'
    ],
    category: 'Electronics'
  },
  {
    id: '9',
    name: 'Wireless Earbuds',
    price: 159.99,
    description: 'Premium wireless earbuds with charging case',
    image: [
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1598331668826-20cecc596b86?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3'
    ],
    category: 'Electronics'
  }
];

// Sports category
const sportsProducts = [
  {
    id: '10',
    name: 'Running Shoes',
    price: 129.99,
    description: 'Professional running shoes with advanced cushioning',
    image: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3'
    ],
    category: 'Sports'
  },
  {
    id: '11',
    name: 'Yoga Mat',
    price: 49.99,
    description: 'Premium non-slip yoga mat with carrying strap',
    image: [
      'https://images.unsplash.com/photo-1592432678016-e910b452f9a2?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?ixlib=rb-4.0.3'
    ],
    category: 'Sports'
  },
  {
    id: '12',
    name: 'Gym Bag',
    price: 69.99,
    description: 'Spacious gym bag with multiple compartments',
    image: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1596171438284-a6ba26e47a75?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1596171438284-a6ba26e47a75?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1596171438284-a6ba26e47a75?ixlib=rb-4.0.3'
    ],
    category: 'Sports'
  }
];

// Home & Living category
const homeProducts = [
  {
    id: '13',
    name: 'Scented Candle',
    price: 29.99,
    description: 'Luxurious scented candle with long burn time',
    image: [
      'https://images.unsplash.com/photo-1602874801007-bd36c376cd5d?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1603006905003-be475563bc59?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1603006905003-be475563bc59?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1603006905003-be475563bc59?ixlib=rb-4.0.3'
    ],
    category: 'Home'
  },
  {
    id: '14',
    name: 'Throw Blanket',
    price: 49.99,
    description: 'Soft and cozy throw blanket for your home',
    image: [
      'https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?ixlib=rb-4.0.3'
    ],
    category: 'Home'
  },
  {
    id: '15',
    name: 'Decorative Pillow',
    price: 39.99,
    description: 'Stylish decorative pillow for your living room',
    image: [
      'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?ixlib=rb-4.0.3'
    ],
    category: 'Home'
  }
];

// Additional Clothing Products
const additionalClothingProducts = [
  {
    id: '16',
    name: 'Bomber Jacket',
    price: 169.99,
    description: 'Stylish bomber jacket perfect for casual outings',
    image: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3'
    ],
    category: 'Clothing'
  },
  {
    id: '17',
    name: 'Summer Dress',
    price: 89.99,
    description: 'Light and flowy summer dress with floral pattern',
    image: [
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3'
    ],
    category: 'Clothing'
  },
  {
    id: '18',
    name: 'Hooded Sweatshirt',
    price: 59.99,
    description: 'Comfortable hoodie for casual wear',
    image: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3'
    ],
    category: 'Clothing'
  },
  {
    id: '19',
    name: 'Formal Blazer',
    price: 199.99,
    description: 'Professional blazer for business attire',
    image: [
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3'
    ],
    category: 'Clothing'
  },
  {
    id: '20',
    name: 'Pleated Skirt',
    price: 79.99,
    description: 'Elegant pleated skirt for any occasion',
    image: [
      'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?ixlib=rb-4.0.3'
    ],
    category: 'Clothing'
  }
];

// Additional Accessories Products
const additionalAccessoryProducts = [
  {
    id: '21',
    name: 'Designer Handbag',
    price: 299.99,
    description: 'Luxury leather handbag with gold hardware',
    image: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3'
    ],
    category: 'Accessories'
  },
  {
    id: '22',
    name: 'Statement Necklace',
    price: 89.99,
    description: 'Bold statement necklace with crystal details',
    image: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3'
    ],
    category: 'Accessories'
  },
  {
    id: '23',
    name: 'Leather Belt Set',
    price: 79.99,
    description: 'Premium leather belt set with interchangeable buckles',
    image: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a45?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a45?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a45?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a45?ixlib=rb-4.0.3'
    ],
    category: 'Accessories'
  }
];

// Additional Electronics Products
const additionalElectronicProducts = [
  {
    id: '24',
    name: 'Wireless Speaker',
    price: 149.99,
    description: 'Premium wireless speaker with deep bass',
    image: [
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3'
    ],
    category: 'Electronics'
  },
  {
    id: '25',
    name: 'Gaming Console',
    price: 499.99,
    description: 'Next-gen gaming console with 4K graphics',
    image: [
      'https://images.unsplash.com/photo-1605901309584-818e25960a8f?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1605901309584-818e25960a8f?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1605901309584-818e25960a8f?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1605901309584-818e25960a8f?ixlib=rb-4.0.3'
    ],
    category: 'Electronics'
  },
  {
    id: '26',
    name: 'Smart Home Hub',
    price: 129.99,
    description: 'Voice-controlled smart home assistant',
    image: [
      'https://images.unsplash.com/photo-1558089687-f282ffcbc126?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1558089687-f282ffcbc126?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1558089687-f282ffcbc126?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1558089687-f282ffcbc126?ixlib=rb-4.0.3'
    ],
    category: 'Electronics'
  }
];

// Additional Sports Products
const additionalSportsProducts = [
  {
    id: '27',
    name: 'Fitness Tracker',
    price: 129.99,
    description: 'Advanced fitness tracker with heart rate monitoring',
    image: [
      'https://images.unsplash.com/photo-1557825835-70d97c4aa567?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1557825835-70d97c4aa567?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1557825835-70d97c4aa567?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1557825835-70d97c4aa567?ixlib=rb-4.0.3'
    ],
    category: 'Sports'
  },
  {
    id: '28',
    name: 'Basketball',
    price: 39.99,
    description: 'Professional indoor/outdoor basketball',
    image: [
      'https://images.unsplash.com/photo-1519861155730-0b5fbf0dd889?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1519861155730-0b5fbf0dd889?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1519861155730-0b5fbf0dd889?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1519861155730-0b5fbf0dd889?ixlib=rb-4.0.3'
    ],
    category: 'Sports'
  },
  {
    id: '29',
    name: 'Resistance Bands Set',
    price: 29.99,
    description: 'Complete set of resistance bands for home workouts',
    image: [
      'https://images.unsplash.com/photo-1517637382994-f02da38c6728?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1517637382994-f02da38c6728?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1517637382994-f02da38c6728?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1517637382994-f02da38c6728?ixlib=rb-4.0.3'
    ],
    category: 'Sports'
  }
];

// Additional Home Products
const additionalHomeProducts = [
  {
    id: '30',
    name: 'Table Lamp',
    price: 79.99,
    description: 'Modern table lamp with adjustable brightness',
    image: [
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3'
    ],
    category: 'Home'
  },
  {
    id: '31',
    name: 'Wall Art Set',
    price: 149.99,
    description: 'Contemporary wall art set of 3 pieces',
    image: [
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-4.0.3'
    ],
    category: 'Home'
  },
  {
    id: '32',
    name: 'Plant Stand',
    price: 49.99,
    description: 'Modern plant stand for indoor plants',
    image: [
      'https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3'
    ],
    category: 'Home'
  }
];

export const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Combine all product arrays
    const allProducts = [
      ...clothingProducts,
      ...accessoryProducts,
      ...electronicProducts,
      ...sportsProducts,
      ...homeProducts,
      ...additionalClothingProducts,
      ...additionalAccessoryProducts,
      ...additionalElectronicProducts,
      ...additionalSportsProducts,
      ...additionalHomeProducts
    ];
    setProducts(allProducts);
  }, []);

  const getTotalCartAmount = () => {
    let total = 0;
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        const quantity = cartItems[itemId][size];
        const product = products.find(p => p.id === itemId);
        if (product) {
          total += product.price * quantity;
        }
      }
    }
    return total;
  };

  const getTotalCartItems = () => {
    let total = 0;
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        total += cartItems[itemId][size];
      }
    }
    return total;
  };

  const addToCart = (itemId, size = 'default') => {
    setCartItems(prev => {
      const newCart = { ...prev };
      if (!newCart[itemId]) {
        newCart[itemId] = {};
      }
      if (!newCart[itemId][size]) {
        newCart[itemId][size] = 0;
      }
      newCart[itemId][size] += 1;
      return newCart;
    });
  };

  const removeFromCart = (itemId, size = 'default') => {
    setCartItems(prev => {
      const newCart = { ...prev };
      if (newCart[itemId]?.[size] > 0) {
        newCart[itemId][size] -= 1;
        if (newCart[itemId][size] === 0) {
          delete newCart[itemId][size];
          if (Object.keys(newCart[itemId]).length === 0) {
            delete newCart[itemId];
          }
        }
      }
      return newCart;
    });
  };

  const updateQuantity = (itemId, size = 'default', newQuantity) => {
    setCartItems(prev => {
      const newCart = { ...prev };
      if (newQuantity <= 0) {
        if (newCart[itemId]) {
          delete newCart[itemId][size];
          if (Object.keys(newCart[itemId]).length === 0) {
            delete newCart[itemId];
          }
        }
      } else {
        if (!newCart[itemId]) {
          newCart[itemId] = {};
        }
        newCart[itemId][size] = newQuantity;
      }
      return newCart;
    });
  };

  const clearCart = () => {
    setCartItems(getDefaultCart());
  };

  const contextValue = {
    products,
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotalCartAmount,
    getTotalCartItems,
    clearCart,
    currency: '$'
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};
