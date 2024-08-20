import React from 'react';

const ListofResult = ({ productName, productDescription, price, productImage }) => {
  return (
    <div className='border-2 border-gray-300 hover:shadow-lg bg-white text-gray-800 rounded-lg p-5 mb-4'>
      <div className='border-2 border-gray-200 p-3 rounded-lg flex flex-col items-center'>
        <img src={productImage} alt={productName} className='box-content w-24 h-24 object-cover rounded-md mb-4' />
        <h5 className='text-xl font-semibold mb-2'>{productName}</h5>
        <p className='text-sm text-gray-600 mb-2 text-center'>{productDescription}</p>
        <p className='text-lg font-bold text-indigo-600'>${price}</p>
      </div>
    </div>
  );
};

export default ListofResult;
