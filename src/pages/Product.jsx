import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);

  // State for the product data itself
  const [productData, setProductData] = useState(null);
  // State for the currently displayed image URL
  const [activeImage, setActiveImage] = useState('');

  // Effect to find the product and set the state
  useEffect(() => {
    // Wait until the main products list has loaded
    if (products.length > 0) {
      const foundProduct = products.find((item) => item._id === productId);
      
      console.log("Searching for product with ID:", productId);

      if (foundProduct) {
        console.log("Product Found:", foundProduct);
        setProductData(foundProduct);
        // Set the initial active image to the thumbnail
        setActiveImage(foundProduct.thumbnail);
        console.log("Setting active image to:", foundProduct.thumbnail);
      } else {
        console.error("Product not found for ID:", productId);
      }
    }
  }, [productId, products]); // Rerun when products are loaded or productId changes

  // Display a loading message until the product data is available
  if (!productData) {
    return <div className='flex justify-center items-center h-96'>Loading Product...</div>;
  }

  // Once productData is loaded, we can safely use its properties
  return (
    <div className='border-t-2 pt-10'>
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/* Product Images Section */}
        <div className='flex-1 flex gap-4'>
          {/* Clickable Thumbnails */}
          <div className='flex flex-col gap-3'>
            <img 
              onClick={() => setActiveImage(productData.thumbnail)} 
              className={`w-24 h-24 object-cover cursor-pointer border-2 ${activeImage === productData.thumbnail ? 'border-primary-pink' : 'border-gray-200'}`} 
              src={productData.thumbnail} 
              alt={`${productData.name} thumbnail`} 
            />
            <img 
              onClick={() => setActiveImage(productData.detail_image)} 
              className={`w-24 h-24 object-cover cursor-pointer border-2 ${activeImage === productData.detail_image ? 'border-primary-pink' : 'border-gray-200'}`} 
              src={productData.detail_image} 
              alt={`${productData.name} details`} 
            />
          </div>
          {/* Main Display Image */}
          <div className='flex-1'>
            <img className='w-full h-auto object-contain rounded-lg' src={activeImage} alt="Selected product view" />
          </div>
        </div>

        {/* Product Info Section */}
        <div className='flex-1'>
          <h1 className='font-medium text-3xl mt-2'>{productData.name}</h1>
          <p className='mt-5 text-4xl font-semibold text-primary-pink'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-600 md:w-4/5'>{productData.description}</p>
          
          <button onClick={() => addToCart(productData._id)} className='bg-primary-pink text-white font-bold px-10 py-4 my-8 text-sm hover:scale-105 transition-transform rounded-md'>ADD TO CART</button>
          
          <div className='mt-6'>
            <h4 className='text-lg font-semibold text-text-dark-charcoal'>Key Ingredients</h4>
            <p className='text-gray-600 mt-2'>{productData.key_ingredients}</p>
          </div>
          <div className='mt-6'>
            <h4 className='text-lg font-semibold text-text-dark-charcoal'>How to Use</h4>
            <p className='text-gray-600 mt-2'>{productData.how_to_use}</p>
          </div>
        </div>
      </div>

      <RelatedProducts category={productData.category} currentProductId={productId} />
    </div>
  );
};

export default Product;