import React from 'react';

const ProductInformation = ({ product, onBack }) => {
  return (
    <div className="border-2 border-gray-300 bg-white text-gray-800 rounded-lg p-5">
      <button onClick={onBack} className="text-blue-500 hover:underline mb-4">Back to products</button>
      <img src={product.productImage} alt={product.productName} className="w-full h-48 object-cover rounded-md mb-4" />
      <h1 className="text-3xl font-bold mb-2">{product.productName}</h1>
      <p className="text-sm text-gray-600 mb-2">{product.productDescription}</p>
      <p className="text-lg font-bold text-indigo-600">${product.price}</p>
    </div>
  );
};

export default ProductInformation;
