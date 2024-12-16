import React from 'react'
import { FaTrashCan } from 'react-icons/fa6';
import Payments from './Payments';

const Cartitems = () =>{
       const products = [
            {
                "id": 78,
                "title": "Apple MacBook Pro 14 Inch Space Grey",
                "description": "The MacBook Pro 14 Inch in Space Grey is a powerful and sleek laptop, featuring Apple's M1 Pro chip for exceptional performance and a stunning Retina display.",
                "category": "laptops",
                "price": 1999.99,
                "discountPercentage": 9.25,
                "rating": 3.13,
                "stock": 39,
                "brand": "Apple",
                "images": [
                    "https://cdn.dummyjson.com/products/images/laptops/Huawei%20Matebook%20X%20Pro/1.png",
                    "https://cdn.dummyjson.com/products/images/laptops/Huawei%20Matebook%20X%20Pro/2.png",
                    "https://cdn.dummyjson.com/products/images/laptops/Huawei%20Matebook%20X%20Pro/3.png"
                ],
                "thumbnail": "https://cdn.dummyjson.com/products/images/laptops/Huawei%20Matebook%20X%20Pro/thumbnail.png"
            },

            {
                "id": 86,
                "title": "Man Short Sleeve Shirt",
                "description": "The Man Short Sleeve Shirt is a breezy and stylish option for warm days. With a comfortable fit and short sleeves, it's perfect for a laid-back yet polished look.",
                "category": "mens-shirts",
                "price": 19.99,
                "discountPercentage": 8.65,
                "rating": 4.62,
                "stock": 20,
                "brand": "Casual Comfort",
                "images": [
                    "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Short%20Sleeve%20Shirt/4.png"
                ],
                "thumbnail": "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Short%20Sleeve%20Shirt/thumbnail.png"
            },
            {
                "id": 89,
                "title": "Nike Baseball Cleats",
                "description": "Nike Baseball Cleats are designed for maximum traction and performance on the baseball field. They provide stability and support for players during games and practices.",
                "category": "mens-shoes",
                "price": 79.99,
                "discountPercentage": 11.4,
                "rating": 4.01,
                "stock": 14,
                "brand": "Nike",
                "images": [
                    "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Baseball%20Cleats/4.png"
                ],
                "thumbnail": "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Baseball%20Cleats/thumbnail.png"
            }
        ];
        
  return (

    <div className="flex flex-col lg:flex-row p-4 lg:p-8 space-y-6 lg:space-y-0 lg:space-x-6">
        
        <div className="flex-1">
            {/* cart items section */}
            <h2 className="text-2xl font-semibold mb-4">
               {products.length > 0 ? "Your Cart items" : "Your cart is empty right now please go a head add some items"}
            </h2>
            {products.map((product) => (
                <div className="flex items-start space-x-4 mb-6">
                    <img className="w-24 h-24 object-cover rounded-lg" src={product.thumbnail} alt={product.title} />

                    {/*product info  */}
                    <div  className="flex flex-col justify-between flex-1">
                        <h3 className="text-lg font-semibold">{product.title}</h3>
                        <div className="text-sm text-gray-500">
                             {product.description}   
                        </div>
                        {/* price and quantity */}
                        <div className="flex items-center justify-between mt-2">
                            {/* price and quantity */}
                            <div className="flex items-center space-x-2">
                                {/* price */}
                                <span className="text-lg text-pink-600 font-semibold">${product.price.toFixed()}</span>
                                {/* quantity */}
                                <div className=" flex items-center space-x-2">
                                    <label htmlFor="" className="text-sm font-semibold">Quantity</label>
                                    <input type="number" className="w-16 border border-gray-200 rounded-md p-2 text-center" />
                                </div>
                            </div>

                            {/* Delete button */}
                            <button className="text-red-500 hover:text-red-700 transition-colors duration-200 ease-in-out">
                            <FaTrashCan className="w-5 h-5"/>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>

               {/* payment */}
              <Payments />
    </div>
  )
}

export default Cartitems