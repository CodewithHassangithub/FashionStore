import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ShopContext } from "../context/ShopContext";
import ProductItems from "./ProductItems";
import Title from "./Title";

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0 && category && subCategory) {
      // First try to find products with same category and subCategory
      let productCopy = products.filter(
        (item) => item.category === category && item.subCategory === subCategory
      );

      // If no products found, try to find products with same category only
      if (productCopy.length === 0) {
        productCopy = products.filter((item) => item.category === category);
      }

      // Take up to 4 related products
      setRelated(productCopy.slice(0, 4));
    }
  }, [products, category, subCategory]);

  if (related.length === 0) {
    return null;
  }

  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Title text1={"RELATED"} text2={"PRODUCTS"} />
      </div>
      {/* Wrapper with horizontal scrolling for small screens */}
      <div className="overflow-x-auto">
        <div className="flex justify-between items-center gap-4 min-w-[600px] sm:min-w-0">
          {related.map((item, index) => (
            <ProductItems
              key={item._id}
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

RelatedProducts.propTypes = {
  category: PropTypes.string.isRequired,
  subCategory: PropTypes.string.isRequired,
};

export default RelatedProducts;
