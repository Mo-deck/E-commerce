import React from 'react'
import productsData from "../assets/products.Data.json"
export const ProductsList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            
            {
                productsData.map((product) => (
                    <div className="border border-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-200 ease-in">

                        <img className="w-full h-48 object-cover" src={product.image} alt={product.name} />
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                            <p className="text-gray-600 mb-4 truncate">{product.description}</p>
                        </div>
                    </div>
                ))}
        </div>
  )
}

