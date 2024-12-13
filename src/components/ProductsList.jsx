import React, { useEffect, useState } from 'react';
import Productitem from './Productitem';
import axios from 'axios';
import ProductLoadingSkeleton from './ProductLoadingSkeleton';

export const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch products from API
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const { data } = await axios.get("https://dummyjson.com/products?limit=100"); 
        console.log(data);

        // Filter products from index 78 to 100
        const filteredProducts = data.products.slice(77, 100); // Index starts at 0
      
          setProducts(filteredProducts);
          setLoading(false)
      } catch (error) {
        setLoading(false)
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

if(Loading) return <ProductLoadingSkeleton />

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
