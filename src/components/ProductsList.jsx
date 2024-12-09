import React from 'react'
import productsData from "../assets/products.Data.json"
import Productitem from './Productitem'
export const ProductsList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            
            {
                productsData.map((product) => (
                    <Productitem product={product} />
                ))}
        </div>
  )
}

