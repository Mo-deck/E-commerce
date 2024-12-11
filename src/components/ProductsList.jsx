import React, { useEffect, useState } from 'react';
import Productitem from './Productitem';
import axios from 'axios';

export const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from API
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("https://dummyjson.com/products?limit=100"); 
        console.log(data);

        // Filter products from index 78 to 100
        const filteredProducts = data.products.slice(77, 100); // Index starts at 0
        setProducts(filteredProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.length > 0 ? (
        products.map((product) => (
          <Productitem key={product.id} product={product} />
        ))
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
};
