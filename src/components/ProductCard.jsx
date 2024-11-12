import React, { useState } from 'react';

const ProductCard = ({ product, placeholder = false }) => {
  const [addedToCart, setAddedToCart] = useState(false);

  // Handle Add to Cart button click
  const handleAddToCart = () => {
    setAddedToCart(true);
    // Here, you can add the product to a global cart state or local storage
    // For now, we're just updating the state to show the "Added" message
    console.log(`${product.title} added to cart`);
  };

  return (
    <div className={`bg-yellow-50 shadow-md rounded-lg overflow-hidden border border-yellow-300`}>
      <div className="h-64 w-full bg-brown-200 flex items-center justify-center">
        {placeholder ? (
          <div className="text-yellow-700 text-lg font-semibold">Image Unavailable</div>
        ) : (
          <img src={product.image || '/placeholder-image.jpg'} alt={product?.title || 'Product Image'} className="object-cover h-full w-full" />
        )}
      </div>
      <div className="p-4">
        {placeholder ? (
          <>
            <div className="bg-yellow-100 h-6 mb-2 rounded w-3/4"></div> {/* Placeholder for title */}
            <div className="bg-yellow-100 h-4 mb-4 rounded w-full"></div> {/* Placeholder for description */}
            <div className="bg-yellow-100 h-6 rounded w-1/2"></div> {/* Placeholder for price */}
          </>
        ) : (
          <>
            <h2 className="text-xl font-semibold mb-2 text-yellow-700">{product.title}</h2>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <div className="text-lg font-bold text-yellow-600">${product.price}</div>
          </>
        )}

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className={`mt-4 px-6 py-2 bg-yellow-600 text-white font-semibold rounded ${addedToCart ? 'bg-green-600' : 'hover:bg-yellow-700'}`}
        >
          {addedToCart ? 'Added to Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
