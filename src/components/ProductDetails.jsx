import React from 'react'

const ProductDetails = () => {

   const product = {
      "id": 78,
      "title": "Apple MacBook Pro",
      "description": "The MacBook Pro 14.",
      "category": "laptops",
      "price": 1999.99,
      "discountPercentage": 9.25,
      "rating": 3.13,
      "stock": 39,
      "tags": [
         "laptops",
         "apple"
      ],
      "brand": "Apple",
      "sku": "QDKO6NRJ",
      "weight": 4,
      "dimensions": {
         "width": 12.38,
         "height": 21.55,
         "depth": 27.95
      },
      "warrantyInformation": "1 month warranty",
      "shippingInformation": "Ships in 1 week",
      "availabilityStatus": "In Stock",
      "reviews": [
         {
            "rating": 5,
            "comment": "Would buy again!",
            "date": "2024-05-23T08:56:21.622Z",
            "reviewerName": "Hunter Gordon",
            "reviewerEmail": "hunter.gordon@x.dummyjson.com"
         },
         {
            "rating": 5,
            "comment": "Would buy again!",
            "date": "2024-05-23T08:56:21.622Z",
            "reviewerName": "Emma Wilson",
            "reviewerEmail": "emma.wilson@x.dummyjson.com"
         },
         {
            "rating": 5,
            "comment": "Very pleased!",
            "date": "2024-05-23T08:56:21.622Z",
            "reviewerName": "David Martinez",
            "reviewerEmail": "david.martinez@x.dummyjson.com"
         }
      ],
      "returnPolicy": "30 days return policy",
      "minimumOrderQuantity": 1,
      "meta": {
         "createdAt": "2024-05-23T08:56:21.622Z",
         "updatedAt": "2024-05-23T08:56:21.622Z",
         "barcode": "3883623063065",
         "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
         "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/1.png",
         "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/2.png",
         "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/3.png",
         "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/2.png",
         "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/3.png",
         "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/1.png",
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/thumbnail.png"
   }
  return (
     <div className="p-4 md:p-8">
        <button className="mb-4 bg-pink-600 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-700 transition-colors duration-200">
            {" "}
           ⬅Go Back
        </button>

        <h1 className="text-3xl font-bold mb-6">{product.title}</h1>

        <div className="md:flex ">
            <div className="md:w-1/2 pr-4 mb-6 md:mb-0">
            <img className="w-full h-96 object-cover rounded-lg shadow-md"
            src={product.thumbnail} alt={product.title} />
            {/* image gallery */}
            <div className="flex mt-4 space-x-2 overflow-x-auto">
               {product.images.map((images, idx) =>(
                  <img className="w-24 object-cover h-24 rounded-lg shadow-md cursor-pointer" key={idx} src={images} alt={product.title} />
               ))}
            </div>
             </div>
           <div className="w-1/2 pl-4">
               <p className="text-gray-600 mb-4">{product.description}</p>
                   <div className="flex justify-between items-center   mb-4">
               <span className="text-pink-600 font-bold  text-2xl">${product.price.toFixed()}</span>
                 <span className="text-sm text-gray-500">
                     {product.stock > 0 ? `${product.stock} in stock` : "out of stock"}
                </span>
             </div>
             <div className="mt-4">
            <span className="text-yellow-500">
                {"⭐".repeat(Math.round(product.rating))}
            </span>
            <span className="text-gray-300">
                {"⭐".repeat(Math.round(5 -product.rating))}
            </span>
        </div>

        <button className="bg-pink-600 text-white mt-6 px-5 py-2 rounded-lg shadow hover:bg-pink-900 transition-colors duration-200">Add To Cart</button>
         </div>
        </div>
     </div>
)
}

export default ProductDetails