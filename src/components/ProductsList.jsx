import React, { useEffect, useState } from 'react'
import productsData from "../assets/products.Data.json"
import Productitem from './Productitem'
import axios from 'axios';

export const ProductsList = () => {
 

  const [products, setProducts] = useState([])

useEffect(() =>{
  //Fetch products from API
  const fetchProducts = async ()=>{
    const { data } = await axios.get("https://dummyjson.com/products?limit=100"); 
    console.log(data);
    
    setProducts(data.products);
  }

  fetchProducts()
},  []);


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            
            {
         products.length > 0 && products.map((product) => (
                    <Productitem key={product.id}product={product} />
                ))}
        </div>
  )
}

