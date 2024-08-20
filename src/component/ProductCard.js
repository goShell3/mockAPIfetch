import React from 'react';

const ProductCard = ({ productName, productDescription, price, productImage, onClick}) => {


  return (
    <div onClick={onClick}
    className="border-2 border-gray-300 hover:shadow-lg hover:border-orange-600 bg-white text-gray-800 rounded-lg p-5">
      <img src={productImage} alt={productName} className="w-full h-48 object-cover rounded-md mb-4" />
      <h5 className="text-xl font-semibold mb-2">{productName}</h5>
      <p className="text-sm text-gray-600 mb-2">{productDescription}</p>
      <p className="text-lg font-bold text-indigo-600 hover:text-regal-blue">${price}</p>
    </div>
  );
};

export default ProductCard;
