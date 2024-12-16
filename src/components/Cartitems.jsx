import React from 'react'

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
                "id": 79,
                "title": "Asus Zenbook Pro Dual Screen Laptop",
                "description": "The Asus Zenbook Pro Dual Screen Laptop is a high-performance device with dual screens, providing productivity and versatility for creative professionals.",
                "category": "laptops",
                "price": 1799.99,
                "discountPercentage": 9.21,
                "rating": 3.14,
                "stock": 38,
                "brand": "Asus",
                "images": [
                    "https://cdn.dummyjson.com/products/images/laptops/Asus%20Zenbook%20Pro%20Dual%20Screen%20Laptop/1.png",
                    "https://cdn.dummyjson.com/products/images/laptops/Asus%20Zenbook%20Pro%20Dual%20Screen%20Laptop/2.png",
                    "https://cdn.dummyjson.com/products/images/laptops/Asus%20Zenbook%20Pro%20Dual%20Screen%20Laptop/3.png"
                ],
                "thumbnail": "https://cdn.dummyjson.com/products/images/laptops/Asus%20Zenbook%20Pro%20Dual%20Screen%20Laptop/thumbnail.png"
            },
            {
                "id": 80,
                "title": "Huawei Matebook X Pro",
                "description": "The Huawei Matebook X Pro is a slim and stylish laptop with a high-resolution touchscreen display, offering a premium experience for users on the go.",
                "category": "laptops",
                "price": 1399.99,
                "discountPercentage": 15.25,
                "rating": 4.62,
                "stock": 34,

                "brand": "Huawei",
                "images": [
                    "https://cdn.dummyjson.com/products/images/laptops/Huawei%20Matebook%20X%20Pro/3.png"
                ],
                "thumbnail": "https://cdn.dummyjson.com/products/images/laptops/Huawei%20Matebook%20X%20Pro/thumbnail.png"
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
                </div>
            ))}
        </div>
    </div>
  )
}

export default Cartitems