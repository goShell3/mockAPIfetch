import React from 'react';

import ListofResult from './ListofResult';

const ResultsComponent = ({ items }) => {
  return (
    <div className="item-list">
      <h1 className="text-2xl font-bold mb-4">Item List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <ListofResult
            key={item.id}
            productName={item.productName}
            productDescription={item.productDescription}
            price={item.price}
            productImage={item.productImage}
          />
        ))}
      </div>
    </div>
  );
};

export default ResultsComponent;
