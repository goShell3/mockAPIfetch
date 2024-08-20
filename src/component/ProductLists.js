import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

const ProductList = ({ onProductClick }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://66a359c944aa63704580ddbf.mockapi.io/laptops');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard
            key={product.id}
            productName={product.productName}
            productDescription={product.productDescription}
            price={product.price}
            productImage={product.productImage}
            onClick={() => onProductClick(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
