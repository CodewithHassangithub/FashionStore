import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { id } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  useEffect(() => {
    const product = products.find((item) => item._id === id);
    if (product) {
      setProductData(product);
      setImage(product.image[0]);
    }
  }, [id, products]);

  if (!productData) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 font-poppins mb-10">
      {/* product data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* product-img */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-hidden justify-between sm:justify-normal w-full sm:w-[18.7%]">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                key={index}
                alt={`${productData.name} view ${index + 1}`}
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} className="w-full h-auto" alt={productData.name} />
          </div>
        </div>
        {/* product-details */}
        <div className="flex-1 font-poppins">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="star" />
            <img src={assets.star_icon} alt="star" />
            <img src={assets.star_icon} alt="star" />
            <img src={assets.star_icon} alt="star" />
            <img src={assets.star_icon} alt="star" />
          </div>
          <div className="flex items-center gap-6 mt-6">
            <p className="text-2xl font-medium">
              {currency}
              {productData.price}.00
            </p>
          </div>
          <div className="mt-6">
            <h2 className="font-medium mb-2">Select Size</h2>
            <div className="flex gap-3">
              {["S", "M", "L", "XL"].map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`w-12 h-12 border ${
                    size === s ? "border-black" : "border-gray-300"
                  } flex items-center justify-center`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => addToCart(productData._id, size)}
            className="bg-black text-white py-4 px-8 mt-6"
          >
            Add to Cart
          </button>
          <p className="mt-6 text-gray-500">{productData.description}</p>
        </div>
      </div>
      {/* Related Products */}
      {productData.category && productData.subCategory && (
        <RelatedProducts 
          category={productData.category} 
          subCategory={productData.subCategory} 
        />
      )}
    </div>
  );
};

export default Product;
